import "./styles/About.css";
import TextWrap from "./TextWrap";

interface AboutProps {
  children: string;
  open: boolean;
}
export default function About({ children, open }: AboutProps) {
  // onClick();
  return (
    <div className={`drawer ${open ? "open" : ""}`}>
      <TextWrap>{children}</TextWrap>
    </div>
  );
}
