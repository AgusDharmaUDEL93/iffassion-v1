import navigate from "@/utils/navigate";
import { Box, Button, Center, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const TestStart = () => {
  const router = useRouter();

  return (
    <Box px={{ base: "10", md: "10%" }}>
      <Center height={"100vh"}>
        <Stack align={"center"} spacing={"32px"}>
          <Stack spacing={"12px"} align={"center"} textAlign={"center"}>
            <Heading color={"gray.900"} fontWeight={"black"}>
              Siap menentukan masa depan?
            </Heading>
            <Text color={"gray.500"}>
              Ambil tindakan berani untuk selangkah lebih dekat dengan masa
              depan yang cerah.
            </Text>
          </Stack>
          <Box>
            <Button
              colorScheme={"teal"}
              onClick={() => {
                navigate(router, "/test/question");
              }}
            >
              Tes Sekarang
            </Button>
          </Box>
        </Stack>
      </Center>
    </Box>
  );
};

export default TestStart;
