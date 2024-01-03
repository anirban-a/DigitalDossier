import Star from "./Star";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

interface SkillsProps {
  skill: string;
  level: number;
  maxRange: number;
  imgUrl: string;
}

export default function Skill({ skill, level, maxRange, imgUrl }: SkillsProps) {
  // add Skill Name, followed by Stars
  const calculateStars = () => {
    const base: number = Math.floor(level);
    return (
      <>
        {Array(base)
          .fill(0)

          .map((_, idx) => (
            <Star type="full" key={idx} />
          ))}
        {Array(Math.ceil(level - base))
          .fill(0)
          .map((_, idx) => (
            <Star type="half" key={idx} />
          ))}
        {Array(maxRange - Math.ceil(level))
          .fill(0)
          .map((_, idx) => (
            <Star type="none" key={idx} />
          ))}
      </>
    );
  };

  return (
    <Box>
      <Avatar
        src={imgUrl}
        sx={{
          width: 40,
          height: 40,
          top: -2,
          //   left: 70,
          position: "relative",
          // right: 20,
        }}
        variant="rounded"
      />
      <Typography
        sx={{
          flexGrow: 1,
          display: {
            xs: "none",
            sm: "contents",
            position: "absolute",
          },
        }}
        // fontWeight={10}
        // fontSize={13}
        // fontFamily={"monospace"}
      >
        {skill}
      </Typography>
      {calculateStars()}
    </Box>
  );
}
