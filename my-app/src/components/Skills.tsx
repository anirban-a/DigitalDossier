import "./styles/About.css";
import TextWrap from "./TextWrap";

interface SkillsProps {
  open: boolean;
}
export default function Skills({ open }: SkillsProps) {
  return (
    <div className={`drawer ${open ? "open" : ""}`}>
      <TextWrap>Skills goes here.</TextWrap>
    </div>
  );
}
