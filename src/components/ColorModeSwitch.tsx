import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    return <HStack m={3}>
        <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        <Text as={"em"}>Dark mode</Text>
  </HStack>;
};

export default ColorModeSwitch;
