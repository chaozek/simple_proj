import { Box, Flex } from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";


export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="wrapper">
      <Box>
        <DarkModeSwitch />
      </Box>

      <Flex w="100%">
        <Flex w="100%">
          <Box w={["100%", "100%", "100%"]} h={"100vh"}>
            <Box
              p={["0px 0px", "0px 10px", "0px 33px", "0px 33px"]}
              maxW={"1140px"}
              m="0 auto"
            >
              {children}
            </Box>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};
