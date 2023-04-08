import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { FC } from "react";


export const DarkModeSwitch: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      position="fixed"
      top={4}
      right={["unset", "unset", "unset", 4]}
      left={[5, 4, 4, "unset"]}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Theme"
      onClick={toggleColorMode}
      zIndex={2}
    />
  );
};
