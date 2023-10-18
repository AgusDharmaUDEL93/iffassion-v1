import { Flex, Stack, Heading, Button, Box, Text } from "@chakra-ui/react";
import React from "react";
import Lottie from "react-lottie-player";
import DESC_LOTTIE from "../../../../public/assets/lottie/thinking.json";

const HomeDesc = () => {
  return (
    <>
      <Flex
        px={{ base: "10", md: "10%" }}
        py={"10%"}
        justify={"space-between"}
        align={"center"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box>
          <Lottie
            loop
            animationData={DESC_LOTTIE}
            play
            style={{ maxWidth: "450px" }}
          />
        </Box>
        <Stack maxW={{ md: "45%" }} spacing={"20px"}>
          <Heading fontSize={"5xl"} fontWeight={"black"} color={"gray.900"}>
            Apa itu IFASSION?
          </Heading>
          <Text fontSize={"lg"} fontWeight={"normal"} color={"gray.500"}>
            Sebuah platform yang didedikasikan untuk para penggemar dunia
            informatika seperti kalian! IFASSION adalah tempat di mana kalian
            bisa menemukan berbagai tes minat dan informasi minat seputar dunia
            informatika, semuanya tanpa biaya sepeser pun.
          </Text>
        </Stack>
      </Flex>
    </>
  );
};

export default HomeDesc;
