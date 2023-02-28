import { FiHome } from "react-icons/fi";
import Button from "./Button";

export default function ButtonGuide() {
  return (
    <div>
      <h1>Buttons</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
          <div>
            <Button alt="Primary button" />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<Button alt="Primary button" />`}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
          <div>
            <Button alt="Outlined button" variant="outlined" />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<Button alt="Outlined button" variant="outlined" />`}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
          <div>
            <Button alt="Contained button" variant="contained" />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<Button alt="Contained button" variant="contained" />`}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
          <div>
            <Button alt="Primary small" small />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<Button alt="Primary small" small/>`}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
          <div>
            <Button alt="Outlined small" variant="outlined" small />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<Button alt="Outlined small" variant="outlined" small/>`}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
          <div>
            <Button alt="Contained small" variant="contained" small />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<Button alt="Contained small" variant="contained" small/>`}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
          <div>
            <Button alt="Disabled button" disabled />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<Button alt="Disabled button" disabled/>`}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
          <div>
            <Button icon={FiHome} variant="icon" />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<Button icon={FiHome} variant="icon" />`}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
          <div>
            <Button icon={FiHome} variant="icon" small />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<Button icon={FiHome} variant="icon" small/>`}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
          <div>
            <Button alt="Primary button" icon={FiHome} />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<Button alt="Primary button" icon={FiHome}/>`}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
          <div>
            <Button alt="Outlined button" variant="outlined" icon={FiHome} />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<Button alt="Outlined button" variant="outlined" icon={FiHome}/>`}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
          <div>
            <Button alt="Contained button" variant="contained" icon={FiHome} />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<Button alt="Contained button" variant="contained" icon={FiHome}/>`}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
          <div>
            <Button alt="Success button" color="success" />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<Button alt="Success button" color="success"/>`}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
          <div>
            <Button alt="Error button" color="error" variant="outlined" />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<Button alt="Error button" color="error" variant="outlined"/>`}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}>
          <div>
            <Button alt="Info button" color="info" variant="contained" />
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
          >{`<Button alt="Info button" color="info" variant="contained"/>`}</div>
        </div>
      </div>
    </div>
  );
}
