import ModeToggle from "./ModeToggle";
import { Box } from "theme-ui";

const Header: React.FC = () => {
  return (
    <Box sx={{ position: "sticky", top: 0 }} p={1}>
      <ModeToggle />
    </Box>
  );
};

export default Header;
