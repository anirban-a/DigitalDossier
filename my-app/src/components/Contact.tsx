import "./styles/About.css";
import TextWrap from "./TextWrap";

interface ContactProps {
  open: boolean;
}
export default function Contact({ open }: ContactProps) {
  return (
    <div className={`drawer ${open ? "open" : ""}`}>
      <TextWrap>linkedin.com/in/anirban-acharya/</TextWrap>
    </div>
  );
}
