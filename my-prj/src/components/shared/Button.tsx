import React from 'react';
type button = {
  children?: string;
  style?: string;
};
const Button = (props: button) => {
  return <button className={props.style}> {props.children}</button>;
};

export default Button;
