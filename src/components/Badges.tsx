import Avatar from "@mui/material/Avatar";
interface BadgeProps {
  src: string;
  height: number;
  width: number;
  right?: number;
  left?: number;
  top?: number;
}
export default function Badges({ src, height, width }: BadgeProps) {
  return (
    <Avatar
      src={src}
      sx={{
        width: { width },
        height: { height },
      }}
      //   variant="circular"
    />
  );
}
