import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box bgColor="white" maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <VStack>
      <Image borderRadius="lg" src={imageSrc} alt="Project Image"/>
      <Heading alignSelf="baseline" textColor="black">{title}</Heading>
      <Text alignSelf="baseline" textColor="gray">{description}</Text>
      <HStack alignSelf="flex-start" spacing={3} textColor="black">
        <Text>See More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
    </Box>
  );
};

export default Card;
