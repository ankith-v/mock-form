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

  function validateInput(value) {
    let error;
    if (!value) {
      error = "Field is required";
    }
    return error;
  }

  return (
    <>
      <Flex flexDirection="column" height="100%" margin="0 auto" maxW="600">
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
          {({ values, errors, touched, isValidating }) => (
            <Form>
              <Box
                borderStyle="solid"
                borderColor="lightgrey"
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
                {errors.name && touched.name && (
                  <div style={{ color: "red" }}>{errors.name}</div>
                )}
              </Box>
              <Box
                borderStyle="solid"
                borderColor="lightgrey"
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
                  validate={validateInput}
                />
                {errors.email && touched.email && (
                  <div style={{ color: "red" }}>{errors.email}</div>
                )}
              </Box>
              <Box
                borderStyle="solid"
                borderColor="lightgrey"
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
                  validate={validateInput}
                />
                {errors.phone && touched.phone && (
                  <div style={{ color: "red" }}>{errors.phone}</div>
                )}
              </Box>
              <Box
                borderStyle="solid"
                borderColor="lightgrey"
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
                  validate={validateInput}
                />
                {errors.pageURL && touched.pageURL && (
                  <div style={{ color: "red" }}>{errors.pageURL}</div>
                )}
              </Box>
              <Box
                borderStyle="solid"
                borderColor="lightgrey"
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
                  validate={validateInput}
                />
                {errors.about && touched.about && (
                  <div style={{ color: "red" }}>{errors.about}</div>
                )}
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
              <p>
                {" "}
                On submit, below JSON will be submitted to xyz.com via POST
                method
              </p>
              <pre>{JSON.stringify(values, null, 2)}</pre>
              <p>
                Find the source code at :{" "}
                <a
                  href="https://github.com/ankith-v/mock-form"
                  style={{ color: "blue" }}
                >
                  https://github.com/ankith-v/mock-form
                </a>
              </p>
            </Form>
          )}
        </Formik>
      </Flex>
    </>
  );
};
export default Body;
