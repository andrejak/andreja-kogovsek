import { SkillsType } from "../types";
import RichText from "./RichText";

export default ({ skills }: { skills: SkillsType }) => (
  <div>
    <h3>{skills.title}</h3>
    <RichText text={skills.description} />
  </div>
);
