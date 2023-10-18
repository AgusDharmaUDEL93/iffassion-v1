import {
  Box,
  Image,
  Button,
  Flex,
  HStack,
  Collapse,
  Stack,
  Divider,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import navigate from "@/utils/navigate";
import NAV_MENU from "../../../routes/nav_menu.json";

const Navitem = dynamic(() => import("./Navitem"));
const NavbaritemMobile = dynamic(() => import("./NavbaritemMobile"));

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  const [scrollPosition, setScrollPosition] = useState(0);
  let sticky = scrollPosition == 0;

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box as={"nav"}>
      <Box
        px={{ base: 4, md: "10%" }}
        py={"1rem"}
        position={"fixed"}
        width={"100%"}
        zIndex={"2"}
        bgColor={"white"}
        borderBottom={"1px solid"}
        borderColor={"gray.200"}
        transition={"all 0.25s"}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Button
            p={0}
            variant={"nav"}
            _hover={{ filter: "brightness(90%)" }}
            onClick={() => navigate(router, "/")}
          >
            <Heading fontWeight={"black"}>IFASSION</Heading>
          </Button>
          <HStack display={{ base: "none", lg: "block" }}>
            {NAV_MENU.map((items) => {
              return (
                <Navitem key={items.id} title={items.label} path={items.href} />
              );
            })}
          </HStack>

          <Button
            display={{ lg: "none" }}
            variant={"unstyled"}
            onClick={onToggle}
          >
            <HamburgerIcon boxSize={"25px"} color={"gray.900"} />
          </Button>
        </Flex>
      </Box>
      <Box
        display={{ lg: "none" }}
        position={"fixed"}
        bgColor={"white"}
        bgSize={"cover"}
        zIndex={"1"}
      >
        <Collapse in={isOpen} animateOpacity>
          <Stack mt={"88px"}>
            <Divider />
            {NAV_MENU.map((items) => {
              return (
                <NavbaritemMobile
                  key={items.id}
                  title={items.label}
                  path={items.href}
                />
              );
            })}
          </Stack>
        </Collapse>
      </Box>
    </Box>
  );
}
