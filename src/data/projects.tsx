import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "ttp-computer",
    category: "E-commerce",
    title: "TTP COMPUTER",
    src: "/assets/projects-screenshots/TTP/1.jpg",
    screenshots: ["1.jpg"],
    live: "#",
    github: "https://github.com/ebecuaaii/TTPComputer",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.chakra,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            TTP COMPUTER is an e-commerce website developed with ASP.NET Core MVC. The frontend was rendered using Razor View, built with HTML + CSS and enhanced with Bootstrap to improve user experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/TTP/1.jpg`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Frontend: Razor View, HTML, CSS, Bootstrap</li>
            <li className="font-mono">Backend: ASP.NET Core MVC, C#</li>
            <li className="font-mono">Database: SQL Server</li>
            <li className="font-mono">Tools: Visual Studio, Git/GitHub, SQL Server Management Studio</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              <strong>Responsive UI:</strong> Developed and optimized user interfaces with responsive design using HTML, CSS, and Bootstrap
            </li>
            <li className="font-mono">
              <strong>Dynamic Data Display:</strong> Implemented interactive layouts and components using Bootstrap for enhanced user experience
            </li>
            <li className="font-mono">
              <strong>Backend Integration:</strong> Collaborated with backend team to integrate dynamic data from the database
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Role</TypographyH3>
          <p className="font-mono">
            Frontend Developer - Developed and optimized user interfaces while implementing responsive layouts and components
          </p>
        </div>
      );
    },
  },
  {
    id: "tiemtaphoa",
    category: "Store Management",
    title: "TiemTapHoa",
    src: "/assets/projects-screenshots/TTH/1.jpg",
    screenshots: ["1.jpg"],
    live: "#",
    github: "https://github.com/ebecuaaii/Tiemtaphoa-final",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.chakra,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            TiemTapHoa is a web application for retail store management developed with ASP.NET Core MVC. The frontend was rendered using Razor View, built with HTML + CSS, and Bootstrap to deliver a modern and responsive user experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/TTH/1.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Frontend: Razor View, HTML, CSS, Bootstrap, jQuery</li>
            <li className="font-mono">Backend: ASP.NET Core MVC, C#</li>
            <li className="font-mono">Database: SQL Server</li>
            <li className="font-mono">Tools: Visual Studio, Git/GitHub, SQL Server Management Studio</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              <strong>Responsive Layouts:</strong> Designed responsive layouts and components using Bootstrap for seamless experience across devices
            </li>
            <li className="font-mono">
              <strong>Interactive Components:</strong> Implemented client-side interactivity using jQuery for enhanced user engagement
            </li>
            <li className="font-mono">
              <strong>Dynamic Data Integration:</strong> Collaborated with backend team to integrate dynamic data and ensure real-time updates
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Role</TypographyH3>
          <p className="font-mono">
            Frontend Developer - Developed and optimized user interfaces with responsive design using Bootstrap and jQuery for interactive components
          </p>
        </div>
      );
    },
  },
];
export default projects;
