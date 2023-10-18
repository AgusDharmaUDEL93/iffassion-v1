import {
  Box,
  Divider,
  Flex,
  Heading,
  Show,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import REASON_ITEMS from "../../../constants/texts/why.json";
import CardReason from "@/components/widgets/cardReason/CardReason";

const HomeReason = () => {
  return (
    <>
      <Box px={{ base: "10", md: "10%" }}>
        <Box
          width={"100%"}
          bgColor={"teal.500"}
          p={"38px"}
          borderRadius={"10px"}
        >
          <Stack align={"center"} spacing={"30px"}>
            <Heading color={"gray.50"} fontSize={"5xl"} fontWeight={"black"}>
              Kenapa IFASSION?
            </Heading>
            <SimpleGrid
              columns={{ base: 1, lg: 3 }}
              width={"100%"}
              justifyContent={"center"}
              display={"flex"}
              flexWrap={"wrap"}
              spacing={"5rem"}
            >
              {REASON_ITEMS.map((items, index) => {
                return (
                  <CardReason
                    key={items.id}
                    number={items.number}
                    text={items.reason}
                    isHide={false}
                  />
                );
              })}
            </SimpleGrid>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default HomeReason;
