import Form from "./components/Form";

import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  ColorModeScript,
} from "@chakra-ui/react";
import theme from "./theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ColorModeProvider
          options={{
            useSystsemColorMode: false,
          }}
        >
          <CSSReset />
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Form />
        </ColorModeProvider>
      </ThemeProvider>
      {/* </ChakraProvider> */}
    </div>
  );
}

export default App;
