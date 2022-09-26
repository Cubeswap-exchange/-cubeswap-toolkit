import { InputHTMLAttributes } from "react";

export type CubeswapToggleTheme = {
  handleBackground: string;
  handleShadow: string;
};

export const scales = {
  SM: "sm",
  MD: "md",
  LG: "lg",
} as const;

export type Scales = typeof scales[keyof typeof scales];

export interface CubeswapToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  scale?: Scales;
  checked?: boolean;
}

export interface HandleProps {
  scale: Scales;
}

export interface InputProps {
  scale: Scales;
}

export const scaleKeys = {
  cubeswapSize: "cubeswapSize",
  travelDistance: "travelDistance",
  toggleHeight: "toggleHeight",
  toggleWidth: "toggleWidth",
  cubeswapThickness: "cubeswapThickness",
  cubeswapTwoOffset: "cubeswapTwoOffset",
  cubeswapThreeOffset: "cubeswapThreeOffset",
  butterTop: "butterTop",
  butterLeft: "butterLeft",
  butterWidth: "butterWidth",
  butterHeight: "butterHeight",
  butterThickness: "butterThickness",
  butterRadius: "butterRadius",
  butterSmearOneTop: "butterSmearOneTop",
  butterSmearOneLeft: "butterSmearOneLeft",
  butterSmearTwoTop: "butterSmearTwoTop",
  butterSmearTwoRight: "butterSmearTwoRight",
} as const;

export type ScaleKeys = typeof scaleKeys[keyof typeof scaleKeys];
