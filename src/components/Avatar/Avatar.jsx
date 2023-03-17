import React from "react";

import "./Avatar.css";

const Avatar = ({ src, alt, height, width }) => {
  return (
    <div className="avatar">
      <img
        style={{ width: `${width}`, height: `${height}` }}
        src={src || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
        alt={alt}
      />
    </div>
  );
};

export default Avatar;
