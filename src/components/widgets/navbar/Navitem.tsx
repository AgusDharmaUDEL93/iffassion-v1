import navigate from "@/utils/navigate";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

type props = {
  title: String;
  path: string;
};

export default function Navitem({ title, path }: props) {
  const router = useRouter();

  const isHere = router.pathname == path;

  return (
    <Button
      variant={"nav"}
      fontWeight={"semibold"}
      transition={"color 0.5s"}
      onClick={() => navigate(router, path)}
      color={isHere ? "teal.500" : "gray.900"}
      _hover={{
        color: "teal.500",
        _after: {
          transform: "scaleX(1)",
          transformOrigin: "bottom left",
        },
      }}
      _after={{
        content: '""',
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: "2px",
        bottom: 0,
        left: 0,
        bgColor: "teal.500",
        transformOrigin: "bottom right",
        transition: "transform 0.25s ease-out",
      }}
    >
      {title}
    </Button>
  );
}
