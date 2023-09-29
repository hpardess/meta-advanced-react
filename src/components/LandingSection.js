import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pardess!";
const bio1 = "Software Developer";
const bio2 = "Life is simple, take it easy";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#027a93"
  >
    <VStack spacing={10}>

      <VStack>
        <Avatar name="Pardess" src="https://avatars.githubusercontent.com/u/6196491?v=4" size="xl" />
        <Heading size="xs" >{greeting}</Heading>
      </VStack>

      <VStack>
        <Heading size="3xl">{bio1}</Heading>
        <Heading size="xs">{bio2}</Heading>
      </VStack>

    </VStack>

  </FullScreenSection>
);

export default LandingSection;
