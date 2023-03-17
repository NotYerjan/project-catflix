import React from "react";

import Avatar from "./Avatar";

const AvatarGuide = () => {
  return (
    <div className="avatar-guide">
      <h1>Avatar</h1>
      <div className="avatar-guide__options">
        <div className="avatar-guide__small">
          <div>
            <Avatar
              height={"3.5rem"}
              width={"3.5rem"}
              src={""}
              alt={"Docs Avatar"}
            />
          </div>
          <div className="avatar-guide__clarification">{` <Avatar
            height={"3.5rem"}
            width={"3.5rem"}
            src={''}
            alt={'Docs Small Avatar'}
                  />`}</div>
        </div>

        <div className="avatar-guide__big">
          <div>
            <Avatar
              height={"21rem"}
              width={"21rem"}
              src={""}
              alt={"Docs Big Avatar"}
            />
          </div>
          <div className="avatar-guide__clarification">{` <Avatar
            height={"21rem"}
            width={"21rem"}
            src={''}
            alt={'Docs Big Avatar'}
                  />`}</div>
        </div>
      </div>
    </div>
  );
};

export default AvatarGuide;
