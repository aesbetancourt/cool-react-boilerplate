import React from "react";
import {
  Center,
  Image,
  VStack,
  HStack,
  Heading,
  Button,
  Text,
  Code,
  useColorMode,
} from "@chakra-ui/react";
import reactLogo from "./assets/react.svg";
import chakraLogo from "./assets/chakra.svg";

function App() {
  const [count, setCount] = React.useState(0);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center h="100vh">
      <VStack gap="5">
        <HStack gap="18">
          <Image src="/vite.svg" w="10" alt="Vite Logo" />
          <Image src={reactLogo} w="10" alt="React Logo" />
          <Image src={chakraLogo} w="10" alt="Chakra Logo" />
        </HStack>
        <Heading>Vite + React + Chakra UI</Heading>
        <VStack>
          <Button onClick={() => setCount(count + 1)}>count is {count}</Button>
          <Text>
            Edit <Code>src/App.tsx</Code> and save to test HMR
          </Text>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </VStack>
      </VStack>
    </Center>
  );
}

export default App;
