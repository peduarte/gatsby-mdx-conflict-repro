import React from "react";

function BlueButton(props) {
  return <button style={{ background: "blue", color: "white" }} {...props} />;
}

export const Button = () => <BlueButton>Hello</BlueButton>;
