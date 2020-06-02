export type RichTextNode = {
  nodeType: string;
  content: RichTextNode[];
  data: any;
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
  work: boolean;
};

export type Project = {
  title: string;
  description: RichTextNode;
  link: string;
  source: string;
  job: any;
  solo: boolean;
  technologies: string[];
};

export type Job = {
  title: string;
  description: RichTextNode;
  company: string;
  location: Location;
  start: Date;
  end: Date;
  internship: boolean;
};

export type Skills = {
  title: string;
  description: RichTextNode;
};

export type Education = {
  institution: string;
  course: string;
  grade: string;
  start: Date;
  end: Date;
};
