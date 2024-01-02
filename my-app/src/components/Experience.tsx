import "./styles/About.css";
import TextWrap from "./TextWrap";

interface ExperienceProps {
  open: boolean;
}
export default function Experience({ open }: ExperienceProps) {
  return (
    <div className={`drawer ${open ? "open" : ""}`}>
      <TextWrap>Experience goes here.</TextWrap>
    </div>
  );
}
