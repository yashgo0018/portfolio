interface Project {
  image: ImageType;
  title: string;
  description: string;
  links: {
    type: "Demo" | "Live" | "Code";
    href: string;
  }[];
}
