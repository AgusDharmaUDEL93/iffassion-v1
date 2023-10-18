import navigate from "@/utils/navigate";
import { Box, Button, Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";

type props = {
  title: string;
  path: string;
};

export default function NavbaritemMobile({ title, path }: props) {
  const router = useRouter();
  return (
    <Box display={"grid"} placeItems={"center"} width={"100vw"}>
      <Button
        my={"5px"}
        variant={"unstyled"}
        color={"gray.900"}
        onClick={() => {
          navigate(router, path);
        }}
      >
        {title}
      </Button>
      <Divider />
    </Box>
  );
}
