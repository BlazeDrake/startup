import React from 'react';
import {useState} from 'react';
import './profile.css';

export function ProfileBox({num,pfpLink,username,services, onDelete}){
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
            <div className="col service-name">
              <input placeholder="Service 1" />
            </div>
            <div className="col service-name">
              <input placeholder="Service 2" />
            </div>
          </div>
          <p className="manage-service">
            <button type="button" className="btn btn-success">
              +
            </button>
            <button type="button" className="btn btn-danger">
              -
            </button>
          </p>
        </form>
    </section>

  </div>  
  );
}

export function Profile() {

  const baseProfile={num: 0, services:[], pfpLink: "https://freepngimg.com/thumb/shape/29783-1-circle-hd.png"};
  const [profiles, setProfile] = useState([baseProfile]);

  function onDelete(i){
    console.log("Deleted "+i);
  }

  function addProfile(){
    const newProfiles = profiles.slice();
    newProfiles.Push(baseProfile);
    setProfile(newProfiles);
  }

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
        <ProfileBox num="1" username="Profile 1" pfpLink="https://freepngimg.com/thumb/shape/29783-1-circle-hd.png" onDelete={()=>{onDelete(0);}}/>     
      </section>


    <div id="profileInfo">
      <section className="profile-header">
        <div><h2>Profiles</h2></div>   
      </section>

      <section>
        
          <button type="button" className="btn btn-success profile-footer">
            Add New Profile
          </button>
        
      </section>
    </div>

  </main>
  );
}