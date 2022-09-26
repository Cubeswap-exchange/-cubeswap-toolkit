import { darkColors, lightColors } from "../../theme/colors";
import { CubeswapToggleTheme } from "./types";

export const light: CubeswapToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: CubeswapToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
