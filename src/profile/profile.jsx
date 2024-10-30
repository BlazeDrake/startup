import React from 'react';
import {useState} from 'react';
import './profile.css';

export function ProfileBox({num,pfpLink,username,services, onDelete, onServicesUpdated}){

  let i=-1;//Negative one so it starts at 0
  let serviceNames=generateInputFields();

  function refresh(){
    serviceNames=generateInputFields();
    onServicesUpdated();
  }

  function generateInputFields(){
    return services.map((service, storedIndex)=>{
      return (
        <div className="col service-name">
          <input placeholder={service} onChange={(e) => onChangeService(storedIndex,e.target.value)} key={storedIndex}/>
        </div>
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
  
  return(
    <div className="profile-box">
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
            <input placeholder={username} />
          </div>
          <div className="row">
            {serviceNames}
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

export function Profile() {

  const baseProfile={
    num: 1,
    services:["Service 1","Service 2"], 
    pfpLink: "https://freepngimg.com/thumb/shape/29783-1-circle-hd.png"
  };
  const [profiles, setProfile] = useState([baseProfile]);
  const [nextProfileNum,setProfileNum] = useState(2);//Start at 2

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
  }

  function addProfile(){
    const newProfiles = profiles.slice();
    let newProfile={...baseProfile};
    newProfile.num=nextProfileNum;
    setProfileNum(nextProfileNum+1);
    newProfiles.push(newProfile);
    setProfile(newProfiles);
  }

  const profileBoxes=profiles.map((profile)=>{
    return <ProfileBox num={profile.num} services={profile.services} username={"Profile "+profile.num} pfpLink={profile.pfpLink} onServicesUpdated={refreshProfiles} onDelete={()=>{onDelete(profile.num);}} key={profile.num}/>
  });

  return (
    <main className="bg-secondary text-dark">
    <div id="loginInfo">
      <div className="login container-fluid">
        <span id="logged-in">&lt;my@email.com&gt; logged in</span>
        <form method="get" action="/">
          
            <button type="submit" className="btn btn-primary">Logout</button>
          
        </form>        
      </div>
      <div className="user-update">
        ExampleUser updated their profile!
      </div>
    </div>

    <section className="profile-parent text-light">
             {profileBoxes}
      </section>


    <div id="profileInfo">
      <section className="profile-header">
        <div><h2>Profiles</h2></div>   
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