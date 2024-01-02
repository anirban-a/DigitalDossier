import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

interface TextWrapProps {
  children: string;
}
export default function TextWrap({ children }: TextWrapProps) {
  return (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Typography>{children}</Typography>
    </Box>
  );
}
