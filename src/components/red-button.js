import React from "react";

function RedButton(props) {
  return <button style={{ background: "red", color: "white" }} {...props} />;
}

export const Button = () => <RedButton>Hello</RedButton>;
