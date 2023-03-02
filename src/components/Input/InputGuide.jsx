import React from "react";
import { FiEye } from "react-icons/fi";
import InputField from "./InputField";

export default function Form() {
  return (
    <div style={{ marginTop: "25px" }}>
      <h1>Input Fields</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: "10px",
          }}
        >
          <div>
            <InputField label="Text" />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<InputField label="Text" />`}</div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: "10px",
          }}
        >
          <div>
            <InputField label="Password" type="password" actionIcon={FiEye} />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<InputField label="Password" type="password" actionIcon={FiEye} />`}</div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: "10px",
          }}
        >
          <div>
            <InputField label="TextArea" multiline />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<InputField label="TextArea" multiline />`}</div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: "10px",
          }}
        >
          <div>
            <InputField startIcon={<p>$</p>} label="Number" type="number" />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<InputField startIcon={<p>$</p>} label="Number" type="number" />`}</div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: "10px",
          }}
        >
          <div>
            <InputField label="Success" color="success" />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<InputField label="Success" color="success" />`}</div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: "10px",
          }}
        >
          <div>
            <InputField label="Error" color="error" />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<InputField label="Error" color="error" />`}</div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: "10px",
          }}
        >
          <div>
            <InputField label="Info" color="info" />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<InputField label="Info" color="info" />`}</div>
        </div>
      </div>
    </div>
  );
}
