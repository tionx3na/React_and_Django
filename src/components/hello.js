import React from 'react';

function Hello(props) {
  function Clickme() {
    alert("Button is clicked");
  }
    return (
     <div>
        <h1>My name is {props.name} {props.lastname}</h1>
        <button onClick = {Clickme}>Click Me</button>
     </div>
    );
}

export default Hello;