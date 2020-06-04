import ModeToggle from "./ModeToggle";
import { Box } from "theme-ui";

const Header: React.FC = () => {
  return (
    <Box sx={{ position: "sticky", top: 0, height: 0 }}>
      <ModeToggle />
    </Box>
  );
};

export default Header;
