import {
  Flex,
  Stack,
  Heading,
  Show,
  Divider,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";

type props = {
  number: string;
  text: string;
  isHide: boolean;
};

const CardReason = ({ number, text, isHide = false }: props) => {
  return (
    <Flex gap={"30px"}>
      <Stack maxW={"260px"}>
        <Heading color={"gray.50"} fontWeight={"black"}>
          {number}
        </Heading>
        <Text color={"gray.50"}>{text}</Text>
      </Stack>
      <Box display={isHide ? "none" : ""}>
        <Divider orientation={"vertical"} variant={"dashed"} />
      </Box>
    </Flex>
  );
};

export default CardReason;
