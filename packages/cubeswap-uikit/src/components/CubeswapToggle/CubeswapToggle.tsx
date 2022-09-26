import React from "react";
import { CubeswapStack, CubeswapInput, CubeswapLabel } from "./StyledCubeswapToggle";
import { CubeswapToggleProps, scales } from "./types";

const CubeswapToggle: React.FC<CubeswapToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <CubeswapStack scale={scale}>
    <CubeswapInput id={props.id || "cubeswap-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <CubeswapLabel scale={scale} checked={checked} htmlFor={props.id || "cubeswap-toggle"}>
      <div className="cubeswaps">
        <div className="cubeswap" />
        <div className="cubeswap" />
        <div className="cubeswap" />
        <div className="butter" />
      </div>
    </CubeswapLabel>
  </CubeswapStack>
);

export default CubeswapToggle;
