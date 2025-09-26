import React from "react";


function TeamDetails({teams}) {




  return (
    <>
      {
        teams.map((data) => (
           <button>{data}</button> 
        ))
      }
    </>
  );
}

export default TeamDetails;
