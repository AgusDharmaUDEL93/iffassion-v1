import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Image,
  Heading,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box py={10} marginTop={"30px"}>
      <Flex
        align={"center"}
        _before={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: "gray.300",
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: "gray.300",
          flexGrow: 1,
          ml: 8,
        }}
      >
        <Heading fontWeight={"black"} color={"gray.500"}>
          IFASSION
        </Heading>
      </Flex>
      <Text pt={6} fontSize={"sm"} textAlign={"center"} color={"gray.500"}>
        © 2023 Ifassion. All rights reserved
      </Text>
    </Box>
  );
}
