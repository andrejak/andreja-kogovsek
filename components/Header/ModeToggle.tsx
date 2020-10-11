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
      aria-label="Mode toggle"
    >
      {colorMode === "default" ? (
        <Moon aria-label="Dark mode" />
      ) : (
        <Sun aria-label="Light mode" />
      )}
    </IconButton>
  );
};

export default ModeToggle;
