import Avatar from "@mui/material/Avatar";
interface BadgeProps {
  src: string;
  height: number;
  width: number;
  right?: number;
  left?: number;
  position?: string;
}
export default function Badges({ src, height, width, right }: BadgeProps) {
  return (
    <Avatar
      src={src}
      sx={{
        width: { width },
        height: { height },
        position: "absolute",
        right: { right },
      }}
      //   variant="circular"
    />
  );
}
