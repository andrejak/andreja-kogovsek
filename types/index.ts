export type RichTextNode = {
  nodeType: string;
  content: RichTextNode[];
  data?: any;
  value?: string;
};

export type Info = {
  name: string;
  email: string;
  phone: string;
  description: RichTextNode;
};

export type SocialType = "Twitter" | "GitHub" | "LinkedIn";

export type Social = {
  type: SocialType;
  link: string;
  work?: boolean;
};

export type ProjectType = {
  title: string;
  description: RichTextNode;
  link: string;
  source?: string;
  job?: any;
  solo: boolean;
  technologies: string[];
};

export type JobType = {
  title: string;
  description: RichTextNode;
  company: string;
  location: Location;
  start: string;
  end: string;
  internship: boolean;
};

export type SkillsType = {
  title: string;
  description: RichTextNode;
};

export type EducationType = {
  institution: string;
  course: string;
  grade: string;
  start: string;
  end: string;
};

export type LoadingValue<T> =
  | {
      loading: true;
      data: null;
      error: null;
    }
  | {
      loading: false;
      data: null;
      error: string;
    }
  | {
      loading: false;
      data: T;
      error: null;
    };
