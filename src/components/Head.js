import { Flex, Text, Box, Image } from "@chakra-ui/react";

const Head = () => {
  return (
    <div>
      <Box padding="3" alignContent="center">
        <Flex
          flexDirection="column"
          height="100%"
          display="table"
          margin="0 auto"
          maxW="600"
        >
          <Image
            src={process.env.PUBLIC_URL + "/FundingXLogo.png"}
            objectFit="contain"
            alt="logo"
            maxInlineSize="100%"
            paddingBottom="1"
            marginBottom="2"
          />
          <Text
            maxWidth="600"
            textAlign="left"
            fontSize="14"
            borderStyle="solid"
            borderColor="lightgrey"
            borderWidth="1px"
            borderRadius="15"
            borderTopColor="#f89191"
            borderTopWidth="10px"
          >
            <Box padding="4" paddingTop="2">
              <Text fontSize="28">Web Development Task</Text>
              <Text paddingBottom="3" paddingTop="2">
                Welcome to FundingX!
              </Text>
              <Text paddingBottom="3">
                To become a part of our Web Development Team, please complete
                the task before the deadline mentioned.
              </Text>

              <Text paddingBottom="3">
                No task submissions will be entertained after the deadline
              </Text>

              <Text paddingBottom="3">
                TASK - Replicate this Google form which you are looking at.
              </Text>
              <Text paddingBottom="3">
                You may use HTML,CSS or ReactJs. Preference will be given to one
                using ReactJs and able to send JSON file to a URL.
              </Text>
              <Text paddingBottom="3">
                If you like, you may enhance the looks of the page according to
                you.
              </Text>
              <Text paddingBottom="3">
                Host this page on GitHub pages or any hosting service you like
                and paste link in the form.
              </Text>
              <Text paddingBottom="3">
                The tasks given are for understanding how well you are equipped
                with the skills.
              </Text>
              <Text paddingBottom="3">
                Deadline for submission- July 31, 4:00 p.m.
              </Text>
              <Text color="red.400" padding="2">
                * Required
              </Text>
            </Box>
          </Text>
        </Flex>
      </Box>
    </div>
  );
};

export default Head;
