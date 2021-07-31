import Head from "./Head";
import Body from "./Body";
import { Box, Center } from "@chakra-ui/react";
const Form = () => {
  return (
    <Center>
      <Box alignItems="center" alignContent="center" alignSelf="center">
        <Head />
        <Body />
      </Box>
    </Center>
  );
};

export default Form;
