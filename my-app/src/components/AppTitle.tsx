import Typography from "@mui/material/Typography";

interface PageTitleProps {
  children: string;
}

export default function AppTitle({ children }: PageTitleProps) {
  return (
    <Typography variant="h2" className="navbar bg-body-tertiary">
      {children}
    </Typography>
  );
}
