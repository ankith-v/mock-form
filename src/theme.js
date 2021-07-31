import { extendTheme } from "@chakra-ui/react";
// 2. Add your color mode config
const config = {
  initialColorMode: "dark",

  mode: {
    light: {
      logo: "#102a43",
      background: "#fff",
      cardBG: "#EFF2FB",
      text: "#334E68",
      heading: "#102a43",
      icon: "#9FB3C8",
      link: "#9F00FF",
    },
    dark: {
      logo: "#ffffff",
      background: "#102a43",
      cardBG: "#243B53",
      text: "#EFF2FB",
      heading: "#fff",
      icon: "#486581",
      link: "#F8CCFF",
    },
  },
};
// 3. extend the theme
const theme = extendTheme({ config });
export default theme;
