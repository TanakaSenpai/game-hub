import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./Search/SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({onSearch} : Props) => {
  return (
    <HStack justifyContent={"space-between"}>
      <HStack whiteSpace={"nowrap"} pr={10}>
        <Image src={logo} boxSize="60px" m={3} />
        <Text color={"white"} fontSize={"xl"} as={"b"}>
          Senpai's game hub
        </Text>
      </HStack>
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
