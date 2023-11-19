import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <HStack>
        <Image src={logo} boxSize="60px" m={3} />
        <Text color={"white"} fontSize={"xl"} as={"b"}>
          Senpai's game hub
        </Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
