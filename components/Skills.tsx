import { SkillsType } from "../types";
import RichText from "./RichText";

export default ({ skills }: { skills: SkillsType }) => (
  <div>
    <b>{skills.title}</b>:
    <RichText text={skills.description} />
  </div>
);
