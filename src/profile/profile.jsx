import React from 'react';
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
          <svg aria-hidden="true" viewBox="0 0 100 100" height="100" width="100">
            <rect x="0" y="0" width="100" height="100" stroke="black" fill="white" stroke-width="3"/>
            <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
          </svg>
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

  function onDelete(i){
    console.log("Deleted "+i);
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
        <ProfileBox num="1" username="Profile 1" onDelete={()=>{onDelete(0);}}/>     
        <ProfileBox num="2" username="Profile 2" onDelete={()=>{onDelete(1);}}/>
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