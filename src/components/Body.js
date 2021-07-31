import InputCard from "./InputCard";
import { Flex, Button } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { FormErrorMessage } from "@chakra-ui/form-control";
import { Box, Input, FormControl, FormLabel } from "@chakra-ui/react";

const Body = () => {
  function validateInput(value) {
    let error;
    if (!value) {
      error = "This is a required question";
    }
    return error;
  }

  return (
    <>
      <Flex flexDirection="column" height="100%" alignContent="center">
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            pageURL: "",
            about: "",
          }}
          onSubmit={(data) => {
            console.log(data);
          }}
        >
          {({ values }) => (
            <Form>
              <Box
                borderStyle="solid"
                borderColor="lightgrey"
                maxW="600"
                borderWidth="thin"
                padding="8"
                borderRadius="2xl"
                margin="3"
                marginBottom="0"
              >
                <label>
                  Name
                  <inline style={{ color: "red" }}>*</inline>
                </label>
                <Field
                  name="name"
                  type="input"
                  placeholder="Your Answer"
                  as={Input}
                  validate={validateInput}
                />
              </Box>
              <Box
                borderStyle="solid"
                borderColor="lightgrey"
                maxW="600"
                borderWidth="thin"
                padding="8"
                borderRadius="2xl"
                margin="3"
                marginBottom="0"
              >
                <label>
                  Email Id
                  <inline style={{ color: "red" }}>*</inline>
                </label>
                <Field
                  name="email"
                  type="input"
                  placeholder="Your Answer"
                  as={Input}
                />
              </Box>
              <Box
                borderStyle="solid"
                borderColor="lightgrey"
                maxW="600"
                borderWidth="thin"
                padding="8"
                borderRadius="2xl"
                margin="3"
                marginBottom="0"
              >
                <label>
                  Phone No.
                  <inline style={{ color: "red" }}>*</inline>
                </label>
                <Field
                  name="phone"
                  type="input"
                  placeholder="Your Answer"
                  as={Input}
                />
              </Box>
              <Box
                borderStyle="solid"
                borderColor="lightgrey"
                maxW="600"
                borderWidth="thin"
                padding="8"
                borderRadius="2xl"
                margin="3"
                marginBottom="0"
              >
                <label>
                  Page URL
                  <inline style={{ color: "red" }}>*</inline>
                </label>
                <Field
                  name="pageURL"
                  type="input"
                  placeholder="Your Answer"
                  as={Input}
                />
              </Box>
              <Box
                borderStyle="solid"
                borderColor="lightgrey"
                maxW="600"
                borderWidth="thin"
                padding="8"
                borderRadius="2xl"
                margin="3"
                marginBottom="0"
              >
                <label>
                  What is FundingX about?
                  <inline style={{ color: "red" }}>*</inline>
                  <p style={{ fontSize: 13 }}>
                    Just a one liner as to what you think we do.
                  </p>
                </label>
                <Field
                  name="about"
                  type="input"
                  placeholder="Your Answer"
                  as={Input}
                />
              </Box>
              <Button
                colorScheme="red"
                size="md"
                maxWidth="90"
                maxHeight="8"
                margin="3"
                type="submit"
              >
                Submit
              </Button>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          )}
        </Formik>
      </Flex>
    </>
  );
};
export default Body;
