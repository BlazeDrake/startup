import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginInfo from "./loginInfo.jsx";
import { UpdateEvent, UpdateNotifier } from './updateNotifier';


export function ProfileBox({profile, onDelete, onServicesUpdated, usedStyle}){

  const {num}=profile;
  let i=-1;//Negative one so it starts at 0
  let serviceNames=generateInputFields();

  function refresh(){
    serviceNames=generateInputFields();
    onServicesUpdated();
  }

  function generateInputFields(){
    return profile.services.map((service, storedIndex)=>{
      return (
        <Col>
        <div className="col service-name">
          <input value={service} placeholder="Blank Service" onChange={(e) => onChangeService(storedIndex,e.target.value)} key={storedIndex}/>
        </div>
        </Col>
      )
    });
  }

  function onChangeService(i,newVal){
    profile.services[i]=newVal;
    refresh();
  }

  function onDeleteService(){
    profile.services.pop();
    refresh();
  }

  function onAddService(){
    profile.services.push("Service "+(profile.services.length+1));
    refresh();
  }
  
  function onChangeUsername(newVal){
    profile.username=newVal;
    
    refresh();
  }

  function generatePfp(src){
    profile.pfpLink=src;
    refresh();
  }
  function downloadPfp(){
    console.log("Downloaded pfp for profile "+num);
  }
  function uploadPfp(){
    generatePfp("https://www.17thshard.com/forum/uploads/monthly_2017_12/PatternWoR.png.b0bad21c928a7fd60d7a52f163914930.png");
    console.log("Upload to db");
  }

  return(
    <div className="profile-box" style={usedStyle}>
    <section className="profile-head">
                Profile {num}                                    
                <button className="btn btn-danger float-right" onClick={onDelete} >
                  Delete
                </button>
    </section>
    <section className="profile-section">
      <span className="pfp-info">
        <p>
          <img src={profile.pfpLink} width="75em" />
        </p>
          <button className="btn btn-secondary" onClick={()=>{
            generatePfp("https://freepngimg.com/thumb/shape/29783-1-circle-hd.png")
          }}>
            Generate from art
          </button>
          <button className="btn btn-secondary" onClick={()=>{
            generatePfp("https://as2.ftcdn.net/v2/jpg/04/47/62/27/1000_F_447622730_4aM9MuFrdYlAuqPuvQXckZH0M43JWy0g.jpg")
          }}>
            Generate 8-bit image
          </button>
          <button className="btn btn-success" onClick={uploadPfp}>
            Upload
          </button>
          <button className="btn btn-primary" onClick={downloadPfp}>
            Download current image
          </button>
      </span>
        <form method="get"className="username-info">
          <div>
            <input value={profile.username} placeholder="Blank Profile"onChange={(e) => onChangeUsername(e.target.value)}/>
          </div>
          <div className="row service-parent">
            <Container>
              <Row>
              {serviceNames}
              </Row>
            </Container>

          </div>
          <p className="manage-service">
            <button type="button" className="btn btn-success" onClick={onAddService}>
              +
            </button>
            <button type="button" className="btn btn-danger" onClick={onDeleteService}>
              -
            </button>
          </p>
        </form>
    </section>

  </div>  
  );
}

export function Profile({userName,onLogOut}) {

  const profileListKey="profiles"
  const baseProfile={
    num: 1,
    username:"Profile 1",
    services:["Service 1","Service 2"], 
    pfpLink: "https://freepngimg.com/thumb/shape/29783-1-circle-hd.png"
  };
  

  const [profiles, setProfile] = useState([{...baseProfile, services:["Service 1","Service 2"]}]);
  const [nextProfileNum,setProfileNum] = useState(loadProfileNum());//Start at 2

  React.useEffect(() => {
    fetch(`api/profiles/load/${userName}`)
    .then((response) => response.json())
    .then((profilesToLoad)=>{
      if(profilesToLoad.data?.length>0){
        console.log(profilesToLoad.data);
        let profileList=profilesToLoad.data;
        console.log(profileList);
        setProfile(profileList);
      }
    });
  }, []);

  const navigate = useNavigate();

  function loadProfileNum(){
    let returnVal=2;
    fetch(`api/profiles/load/${userName}`)
      .then((response) => response.json())
      .then((profilesToLoad)=>{
        console.log(profilesToLoad.data);
        if(profilesToLoad.data){
          console.log(profilesToLoad.data.length)
          let returnNum=profilesToLoad.data.length+1;
          returnVal= returnNum<2?2:returnNum;
        }
      });
    return returnVal;
  }

  async function updateProfile(newProfiles){
    setProfile(newProfiles);
    let sentData={profiles:newProfiles};
    await fetch(`api/profiles/set/${userName}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(sentData),
    });

  }
  function onDelete(num){
    const newProfiles = profiles.slice();
    let isPast=false;
    let spliceIndex=0;
    for(let i=0;i<newProfiles.length;i++){
      if(newProfiles[i].num==num){
        spliceIndex=i;
        isPast=true;
      }
      //Make sure there aren't any gaps in the profile numbering system
      else if(isPast){
        newProfiles[i].num--;
      }
    }
    if(isPast){
      newProfiles.splice(spliceIndex,1);
    }
    setProfileNum(nextProfileNum-1);
    updateProfile(newProfiles);
    UpdateNotifier.broadcastEvent(userName, UpdateEvent.Remove, { name: userName});
  }

  function refreshProfiles(){
    const newProfiles = profiles.slice();

    updateProfile(newProfiles);

    /*//Debug info
    for(let i=0;i<profiles.length;i++){
      console.log(profiles[i].username+": "+profiles[i].num+", "+profiles[i].services);
    }*/
  }

  function addProfile(){
    const newProfiles = profiles.slice();
    let newProfile={...baseProfile};
    newProfile.num=nextProfileNum;
    newProfile.username="Profile "+newProfile.num;
    setProfileNum(nextProfileNum+1);
    newProfiles.push(newProfile);
    updateProfile(newProfiles);
    UpdateNotifier.broadcastEvent(userName, UpdateEvent.Add, { name: userName});
  }

  function generateBox(profile){
    return <ProfileBox profile={profile} usedStyle={{  transform:"translateX("+Math.max(0,35-(12*(profiles.length-1)))+"vw)"}} pfpLink={profile.pfpLink} onServicesUpdated={refreshProfiles} onDelete={()=>{onDelete(profile.num);}} key={profile.num} />
  }

  const profileBoxes=profiles.map((profile)=>{return generateBox(profile)});

  return (
    <main className="bg-secondary text-dark">
    <LoginInfo userName={userName} logOut={()=>{
      onLogOut();
      navigate("/");
    }}/>

    <div id="profileInfo">
      <section className="profile-header">
        <h2>Profiles</h2>   
      </section>

      <section className="profile-parent text-light" >
             {profileBoxes}
      </section>

      <section>
        
          <button type="button" className="btn btn-success profile-footer" onClick={addProfile}>
            Add New Profile
          </button>
        
      </section>
    </div>

  </main>
  );
}