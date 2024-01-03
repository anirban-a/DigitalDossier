import Star from "./Star";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface SkillsProps {
  skill: string;
  level: number;
  maxRange: number;
}

export default function Skill({ skill, level, maxRange }: SkillsProps) {
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
      <Typography
        sx={{ flexGrow: 1, display: { xs: "none", sm: "contents" } }}
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
