import { Box, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";

import { useState } from "react";

const InputCard = (props) => {
  return (
    <Box
      borderStyle="solid"
      borderColor="lightgrey"
      borderWidth="thin"
      padding="8"
      borderRadius="2xl"
      margin="3"
      marginBottom="0"
    >
      <FormControl id="first-name" isRequired>
        <FormLabel>{props.label}</FormLabel>
      </FormControl>
    </Box>
  );
};
export default InputCard;
