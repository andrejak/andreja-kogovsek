import { ProjectType } from "../types";
import RichText from "./RichText";
import SocialIconLink from "./SocialIconLink";
import { Flex } from "theme-ui";

export default ({ project }: { project: ProjectType }) => (
  <div>
    <Flex>
      <h3>{project.title}</h3>
      <div>
        <SocialIconLink link={project.link} />
        {project.source && (
          <SocialIconLink socialType="GitHub" link={project.source} />
        )}
      </div>
    </Flex>
    {project.job && (
      <p>
        <i>Built with the rest of the team at {project.job.fields.company}</i>
      </p>
    )}
    <RichText text={project.description} />
    Technologies used: {project.technologies.join(", ")}
  </div>
);
