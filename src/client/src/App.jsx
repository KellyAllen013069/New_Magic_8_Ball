
import React, { useState} from "react";
import settings from "./config/settings.json";


function App() {
    
  const [emailAddress, setEmailAddress] = useState("");

  function onSubmit(event) {
      event.preventDefault();

      setEmailAddress("someone@somewhere.com");

      let reqBody = {
          emailAddress,
      };

      fetch(`${settings.serverUrl}/api/addUser`, {
          method: "P0ST", 
          headers: {
              "Content-Type" : "application/json"
          },
          body: JSON.stringify(reqBody),
      })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.error(err));
  }


  return (
      <div className="App">
          <header>
              <h1>Add a User</h1>
              <hr/>
              <div>
              <button onClick={onSubmit}>Add User</button>
              {/* <form onSubmit={onSubmit}>
                  <div className="user-form">
                      <label htmlFor="emailAddress">Email Address:&nbsp;</label>
                      <input 
                        type="text" 
                        value={emailAddress} 
                        onChange={(event) => setEmailAddress(event.target.value)}>
                      </input>
                  </div>
                  <div className="user-form">
                      <input type="submit">Add</input>
                  </div>
              </form> */}
              </div>
          </header>
      </div>
  );
}

export default App;

