import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginInfo from "./loginInfo.jsx"


export function ProfileBox({num,pfpLink,username,services, onDelete, onServicesUpdated, usedStyle}){

  let i=-1;//Negative one so it starts at 0
  let serviceNames=generateInputFields();

  function refresh(){
    serviceNames=generateInputFields();
    onServicesUpdated();
  }

  function generateInputFields(){
    return services.map((service, storedIndex)=>{
      return (
        <Col>
        <div className="col service-name">
          <input placeholder={service} onChange={(e) => onChangeService(storedIndex,e.target.value)} key={storedIndex}/>
        </div>
        </Col>
      )
    });
  }

  function onChangeService(i,newVal){
    services[i]=newVal;
    refresh();
  }

  function onDeleteService(){
    services.pop();
    refresh();
  }

  function onAddService(){
    services.push("Service "+(services.length+1));
    refresh();
  }
  
  function onChangeUsername(newVal){
    username=newVal;
    refresh();
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
          <img src={pfpLink} width="75em" />
        </p>
          <button className="btn btn-secondary ">
            Generate from art
          </button>
          <button className="btn btn-secondary">
            Generate 8-bit image
          </button>
          <button className="btn btn-success">
            Upload
          </button>
          <button className="btn btn-primary">
            Download current image
          </button>
      </span>
        <form method="get"className="username-info">
          <div>
            <input placeholder={username} onChange={(e) => onChangeUsername(e.target.value)}/>
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

  const baseProfile={
    num: 1,
    userName:"Profile 1",
    services:["Service 1","Service 2"], 
    pfpLink: "https://freepngimg.com/thumb/shape/29783-1-circle-hd.png"
  };
  const [profiles, setProfile] = useState([{...baseProfile, services:["Service 1","Service 2"]}]);
  const [nextProfileNum,setProfileNum] = useState(2);//Start at 2

  const navigate = useNavigate();

  function onDelete(num){
    const newProfiles = profiles.slice();
    for(let i=0;i<newProfiles.length;i++){
      if(newProfiles[i].num==num){
        newProfiles.splice(i,1);
        break;
      }
    }
    setProfile(newProfiles);
  }

  function refreshProfiles(){
    const newProfiles = profiles.slice();
    setProfile(newProfiles);
    for(let i=0;i<profiles.length;i++){
      console.log(profiles[i].u)
    }
  }

  function addProfile(){
    const newProfiles = profiles.slice();
    let newProfile={...baseProfile};
    newProfile.num=nextProfileNum;
    setProfileNum(nextProfileNum+1);
    newProfiles.push(newProfile);
    setProfile(newProfiles);
  }

  function generateBox(profile){
    return <ProfileBox num={profile.num} usedStyle={{  transform:"translateX("+Math.max(0,35-(12*(profiles.length-1)))+"vw)"}} services={profile.services} username={"Profile "+profile.num} pfpLink={profile.pfpLink} onServicesUpdated={refreshProfiles} onDelete={()=>{onDelete(profile.num);}} key={profile.num} />
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