import { ChainingResponse } from "@/data/dto/ChainingResponse";
import { Box, Button, Flex, HStack, Heading, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { use, useEffect, useState } from "react";

const QuestionPart = () => {
  const initial: ChainingResponse = {
    status: false,
    code: 0,
    message: "",
    data: undefined,
  };
  const [chainingResponse, setChainingResponse] =
    useState<ChainingResponse>(initial);

  const [questionId, setQuestionId] = useState("");
  const [chainingId, setChainingId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const initialUrl = `https://ifassion.user.cloudjkt01.com/chaining`;
  const chainingUrl = `https://ifassion.user.cloudjkt01.com/chaining/${chainingId}`;

  const router = useRouter();

  async function getData(answer?: boolean) {
    setIsLoading(true);
    if (chainingResponse.code == 0) {
      const response = await axios.post(initialUrl, null, {
        headers: {
          Authorization:
            "Bearer 56edb3084ff7cf30b5a79d58275f7c78d899e2472eb971da5a2a0641384404a8",
        },
      });
      const json: ChainingResponse = response.data;
      setChainingResponse(json);

      setQuestionId(json.data?.question?.id ?? "");
      setChainingId(json.data?.chaining?.id ?? "");
      setIsLoading(false);
      return;
    }
    console.log(answer);
    const response = await axios.post(
      chainingUrl,
      {
        question_id: questionId,
        question_status: answer,
      },
      {
        headers: {
          Authorization:
            "Bearer 56edb3084ff7cf30b5a79d58275f7c78d899e2472eb971da5a2a0641384404a8",
        },
      }
    );
    const json: ChainingResponse = response.data;
    setChainingResponse(json);
    console.log(json.data?.question?.id);
    setQuestionId(json.data?.question?.id ?? "");
    console.log(questionId);
    setChainingId(json.data?.chaining?.id ?? "");

    setIsLoading(false);
  }

  useEffect(() => {
    if (chainingResponse.code == 0) {
      getData();
    }

    if (chainingResponse.data?.chaining.finish) {
      router.push(`/test/finish?id=${chainingResponse.data.chaining.id}`);
    }
  });

  return (
    <Box height={"100vh"}>
      <Box
        px={{ base: "10", md: "10%" }}
        pt={{ base: "10rem", md: "15rem" }}
        pb={{ base: "6rem", md: "10rem" }}
        bgColor={"teal.500"}
      >
        <Heading textAlign={"center"} color={"gray.50"}>
          {isLoading ? <Spinner /> : chainingResponse.data?.question?.question}
        </Heading>
      </Box>
      <Flex justify={"center"} py={"5rem"}>
        <HStack spacing={"30px"}>
          <Button
            w={"120px"}
            variant={"outline"}
            colorScheme={"teal"}
            onClick={() => {
              getData(true);
            }}
          >
            Ya
          </Button>
          <Button
            w={"120px"}
            colorScheme={"teal"}
            onClick={() => {
              getData(false);
            }}
          >
            Tidak
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default QuestionPart;
