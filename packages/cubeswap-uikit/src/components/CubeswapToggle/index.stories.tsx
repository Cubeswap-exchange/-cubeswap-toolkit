import React, { useState } from "react";
import CubeswapToggle from "./CubeswapToggle";

export default {
  title: "Components/CubeswapToggle",
  component: CubeswapToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <CubeswapToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <CubeswapToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <CubeswapToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
