import { Box, Button, Center, Heading, Spinner, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import HAPPY_LOTTIE from "../../../../public/assets/lottie/happy.json";
import { FinishResponse } from "@/data/dto/FinishResponse";
import axios from "axios";
import { PDFResponse } from "@/data/dto/PdfResponse";
import { linkRedirection } from "@/utils/linkRedirection";
import { useRouter } from "next/router";

type props = {
  questionId: string;
};

const FinishResult = ({ questionId }: props) => {
  const initialFinish: FinishResponse = {
    status: false,
    code: 0,
    message: "",
    data: undefined,
  };
  const initialPdf: PDFResponse = {
    status: false,
    code: 0,
    message: "",
    data: undefined,
  };
  const router = useRouter();

  const [finishReponse, setFinishResponse] =
    useState<FinishResponse>(initialFinish);
  const [pdfResponse, setPdfResponse] = useState<PDFResponse>(initialPdf);

  const [isLoading, setIsLoading] = useState(true);

  const urlFinish = `https://ifassion.user.cloudjkt01.com/export/web/${questionId}`;
  const urlPdf = `https://ifassion.user.cloudjkt01.com/export/pdf/${questionId}`;

  async function getData() {
    const responseFinish = await axios.get(urlFinish, {
      headers: {
        Authorization:
          "Bearer 56edb3084ff7cf30b5a79d58275f7c78d899e2472eb971da5a2a0641384404a8",
      },
    });
    const responsePdf = await axios.get(urlPdf, {
      headers: {
        Authorization:
          "Bearer 56edb3084ff7cf30b5a79d58275f7c78d899e2472eb971da5a2a0641384404a8",
      },
    });

    const jsonFinish: FinishResponse = responseFinish.data;
    setFinishResponse(jsonFinish);

    const jsonPdf: PDFResponse = responsePdf.data;
    setPdfResponse(jsonPdf);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  });

  return (
    <Box height={"100vh"} px={{ base: "10", md: "10%" }}>
      {isLoading ? (
        <Center height={"100vh"}>
          <Spinner />
        </Center>
      ) : (
        <Stack align={"center"}>
          <Lottie
            loop
            play
            animationData={HAPPY_LOTTIE}
            style={{
              maxWidth: "600px",
            }}
          />
          <Stack spacing={"40px"} align={"center"} textAlign={"center"}>
            <Heading fontWeight={"black"}>
              Anda berbakat{" "}
              <Heading as={"span"} fontWeight={"black"} color={"teal.500"}>
                {finishReponse.data?.passion ?? ""}
              </Heading>
            </Heading>
            <Box>
              <Button
                variant={"outline"}
                colorScheme={"teal"}
                onClick={() => {
                  linkRedirection(pdfResponse.data?.pdf ?? "");
                }}
              >
                Cetak Hasil
              </Button>
            </Box>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default FinishResult;
