import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ABOUT_ITEMS from "../../../constants/texts/bidang.json";

const AboutList = () => {
  const [onClick, setOnClick] = useState(1);

  return (
    <Center height={"100vh"} px={{ base: "10", md: "10%" }}>
      <Flex
        width={"100%"}
        justify={"center"}
        gap={{ base: "2rem", sm: "5rem" }}
        maxH={"300px"}
        flexDirection={{ base: "column", sm: "row" }}
        align={"center"}
      >
        <Flex flexDirection={{ base: "row", sm: "column" }} flexWrap={"wrap"}>
          {ABOUT_ITEMS.map((items) => {
            return (
              <Button
                key={items.id}
                variant={"ghost"}
                colorScheme={items.id == onClick ? "teal" : "gray"}
                onClick={() => {
                  setOnClick(items.id);
                }}
              >
                {items.title}
              </Button>
            );
          })}
        </Flex>
        <Box>
          <Divider
            height={{ base: 0, sm: "100%" }}
            width={"2px"}
            bgColor={"gray.300"}
            variant={"dashed"}
          />
        </Box>
        {ABOUT_ITEMS.map((items) => {
          return (
            <Text
              key={items.id}
              display={onClick != items.id ? "none" : ""}
              maxW={"800px"}
            >
              {items.desc}
            </Text>
          );
        })}
      </Flex>
    </Center>
  );
};

export default AboutList;
