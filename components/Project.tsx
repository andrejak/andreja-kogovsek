import { ProjectType } from "../types";
import RichText from "./RichText";
import SocialIconLink from "./SocialIconLink";

export default ({ project }: { project: ProjectType }) => (
  <div>
    <div>
      <b>{project.title}</b>
      <SocialIconLink link={project.link} />
      {project.source && (
        <SocialIconLink socialType="GitHub" link={project.source} />
      )}
    </div>
    {project.job && (
      <i>Built with the rest of the team at {project.job.fields.company}</i>
    )}
    <RichText text={project.description} />
    Technologies used: {project.technologies.join(", ")}
  </div>
);
