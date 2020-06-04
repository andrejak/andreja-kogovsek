import { useColorMode, IconButton } from "theme-ui";
import { Sun, Moon } from "react-feather";

const ModeToggle: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <IconButton
      onClick={() => {
        setColorMode(colorMode === "default" ? "dark" : "default");
      }}
      m={1}
    >
      {colorMode === "default" ? <Moon /> : <Sun />}
    </IconButton>
  );
};

export default ModeToggle;
