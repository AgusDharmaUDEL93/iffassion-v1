import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Lottie from "react-lottie-player";
import HERO_LOTTIE from "../../../../public/assets/lottie/hero.json";
import navigate from "@/utils/navigate";
import { useRouter } from "next/router";

const HomeHero = () => {
  const router = useRouter();

  return (
    <>
      <Flex
        px={{ base: "10", md: "10%" }}
        py={"10%"}
        justify={"space-between"}
        align={"center"}
        flexDirection={{ base: "column-reverse", md: "row" }}
      >
        <Stack maxWidth={{ md: "45%" }} spacing={"20px"}>
          <Heading fontSize={{ base: "4xl", md: "6xl" }} fontWeight={"black"}>
            Ayo Pahami Minatmu
          </Heading>
          <Text fontSize={"lg"} fontWeight={"normal"} color={"gray.500"}>
            Ketahui lebih banyak tentang diri Anda untuk menemukan pekerjaan
            yang cocok di bidang Teknologi Informasi untuk karir masa depan
            Anda.
          </Text>
          <Box>
            <Button
              colorScheme={"teal"}
              onClick={() => {
                navigate(router, "/test");
              }}
            >
              Get Started
            </Button>
          </Box>
        </Stack>
        <Box>
          <Lottie
            loop
            animationData={HERO_LOTTIE}
            play
            style={{ maxWidth: "500px" }}
          />
        </Box>
      </Flex>
    </>
  );
};

export default HomeHero;
