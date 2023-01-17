import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorLayout() {
  const navigate = useNavigate();
  return (
    <h1>
      OOOOOPS! Something went wrong. Go
      <a onClick={() => navigate("/movies")}> home</a>
    </h1>
  );
}
