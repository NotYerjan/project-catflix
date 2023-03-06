import React from "react";

import { FiUser } from "react-icons/fi";
import Button from "./Button/Button";

const Avatar = ({ src, alt }) => {
  return (
    <div className="avatar">
      {src ? <img src={src} /> : <Button icon={FiUser} variant="icon" small />}
    </div>
  );
};

export default Avatar;
