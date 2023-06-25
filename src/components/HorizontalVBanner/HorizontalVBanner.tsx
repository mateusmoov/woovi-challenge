import { Box } from "@mui/material";
import { TextProps } from "./HorizontalVBanner.types";

export const HorizontalVBanner = ({ children }: TextProps) => {
  const clipShape = {
    clipPath: "polygon(0% 0%, 100% 0%, 95.03% 50%, 100% 100%, 0% 100%)",
  };

  return (
    <Box
      style={clipShape}
      color="white"
      display="inline-flex"
      bgcolor="primary.main"
      borderRadius="5px"
      pl="10px"
      pr="80px"
      py="6px"
      minWidth="387px"
    >
      {children}
    </Box>
  );
};
