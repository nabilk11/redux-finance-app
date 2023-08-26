// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

// expanded-theme is extending the types from the @types of material ui - under createPalette

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }
  interface Palette {
    tertiary: PaletteColor;
  }
}
