import { ProjectType } from "../types";
import RichText from "./RichText";

export default ({ project }: { project: ProjectType }) => (
  <div>
    {project.title}
    <RichText text={project.description} />
  </div>
);
