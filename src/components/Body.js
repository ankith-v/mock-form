import { Flex, Button } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { Box, Input } from "@chakra-ui/react";

//Enter url of choice that accepts JSON post below
const url = "https://xyz.com";

const Body = () => {
  const handleSubmit = (values) => {
    console.log(values);
    axios.post(url, values).then((response) => console.log(response));
  };

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
                onSubmit={handleSubmit(values)}
              >
                Submit
              </Button>
              <pre> On submit, below JSON will be submitted to xyz.com</pre>
              <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>
                Find the source code at : https://github.com/ankith-v/mock-form
              </pre>
            </Form>
          )}
        </Formik>
      </Flex>
    </>
  );
};
export default Body;
