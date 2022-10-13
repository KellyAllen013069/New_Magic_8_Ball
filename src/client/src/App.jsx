
import React, { useState} from "react";
import settings from "./config/settings.json";


function App() {

    const [emailAddress, setEmailAddress] = useState("");

  function onSubmit(event) {
      event.preventDefault();

      //setEmailAddress("someone@somewhere.com");

      let reqBody = {
          emailAddress,
      };

      console.log(reqBody);

      fetch(`${settings.serverUrl}/api/addUser`, {
          method: "P0ST", 
          headers: {
              "Access-Control-Allow-Origin" : "*",
              "Content-Type" : "application/json",
          },
          body: JSON.stringify(reqBody),
      })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.error(err));
  };
    
    return (
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="emailAddress">Email Address:&nbsp;</label>
            <input id="emailAddress" 
                        type="text" 
                        value={emailAddress} 
                        onChange={(event) => setEmailAddress(event.target.value)}
            />
          </div>
          
          <button type="submit">Submit</button>
        </form>
      );
  
}

export default App;

