import React from "react";
import {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn(!isOn);
  const color = isOn ? "red" : "white";
  return <button onClick={toggle} style={{background:color}}>{isOn?"ON":"OFF"}</button>;
}

export default Toggle;
