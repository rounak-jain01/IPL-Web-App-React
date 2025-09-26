import React, { useState } from "react";

function TeamDetails({ teams, children }) {
  const [index, setindex] = useState(0)  

  
  return (
    <>
      {teams.map((data,i) => (
        <button onClick={() => (setindex(i))}>{data}</button>
      ))}
      {
        children[index]
      }
    </>

  );
}

export default TeamDetails;
