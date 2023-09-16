interface Project {
  image: Image;
  title: string;
  description: string;
  links: {
    type: "Demo" | "Live" | "Code";
    href: string;
  }[];
}
