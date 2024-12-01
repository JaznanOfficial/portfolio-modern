"use client";
import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

import LantaburImage from "../../public/assets/journey/experience/lantabur.webp";
import innovarelImage from "../../public/assets/journey/experience/innovarel.webp";
import skynetexImage from "../../public/assets/journey/experience/skynetex.webp";
import lskitImage from "../../public/assets/journey/experience/lskit.webp";
import mindCryptImage from "../../public/assets/journey/experience/imerntech.webp";

import { FaJs, FaPython, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiMui,
  SiPrisma,
  SiPostgresql,
  SiSanity,
  SiStripe,
  SiFigma,
  SiPayloadcms,
  SiStrapi,
  SiPaddle,
  SiSquare,
  SiMongoose,
  SiShadcnui,
  SiLemonsqueezy,
} from "react-icons/si";

const journey = [
  // experience
  {
    type: "experience",
    company: "Lantabur Softech",
    logoUrl: LantaburImage,
    position: "Owner & Founder",
    duration: "Aug 2023 - Present",
    description:
      "Specialized in building SaaS platforms and custom software solutions. We target global markets, including the Middle East, Western countries, and beyond, delivering innovative and reliable software tailored to diverse business needs.We don't just build software, we empower and care your business.",
  },
  {
    type: "experience",
    company: "Innovarel",
    logoUrl: innovarelImage,
    position: "Lead Developer",
    duration: "Nov 2023 - Present",
    description:
      "Managed and mentored junior developers, fostering a collaborative environment and ensuring high-quality code standards.",
  },
  {
    type: "experience",
    company: "Skynetex",
    logoUrl: skynetexImage,
    position: "Business Development Specialist",
    duration: "Oct 2023 - Present",
    description:
      "Analyzed market trends and competitor activities to shape business strategies, ensuring a competitive edge in the market.",
  },
  {
    type: "experience",
    company: "LSKIT",
    logoUrl: lskitImage,
    position: "Full Stack Developer",
    duration: "Jun 2023 - July 2023",
    description:
      "Developed full-stack solutions using React,Next and Node.js. Integrated frontend and backend technologies.",
  },
  {
    type: "experience",
    company: "MindCrypt",
    logoUrl: mindCryptImage,
    position: "Full Stack Developer",
    duration: "Sep 2022 - Dec 2022",
    description:
      "Developed full-stack solutions using React,Next and Node.js. Integrated frontend and backend technologies.",
  },
  // education
  // {
  //   type: "education",
  //   institution: "Udemy",
  //   logoUrl: "/assets/journey/education/logo-1.svg",
  //   qualification: "Web Development Bootcamp",
  //   duration: "Jan 2020 - Apr 2020",
  //   description:
  //     "Learned full-stack development concepts, focusing on React, Node.js, and APIs. Completed hands-on projects to solidify skills.",
  // },
  // {
  //   type: "education",
  //   institution: "CodeAcademy Bootcamp",
  //   logoUrl: "/assets/journey/education/logo-2.svg",
  //   qualification: "Full Stack Dev Cert",
  //   duration: "Jan 2020 - May 2020",
  //   description:
  //     "Gained experience in frontend and backend technologies, including React, Node.js, and databases.",
  // },
  // {
  //   type: "education",
  //   institution: "Design Intitute",
  //   logoUrl: "/assets/journey/education/institution.svg",
  //   qualification: "UI/UX Diploma",
  //   duration: "Aug 2018 - Dec 2018",
  //   description:
  //     "Studied advanced principles of user interface and user experience design. Developed skills in prototyping, wireframing, and usability testing.",
  // },
  // {
  //   type: "education",
  //   institution: "Business School",
  //   logoUrl: "/assets/journey/education/institution.svg",
  //   qualification: "Project Management Cert",
  //   duration: "Mar 2021 - Jun 2021",
  //   description:
  //     "Completed certification in project management, focusing on Agile methodologies and effective team collaboration.",
  // },
  // skills
  {
    type: "skill",
    name: "JavaScript",
    icon: <FaJs />,
    duration: "Learned in 2022",
    description:
      "Implemented interactive and dynamic features for websites using JavaScript, enhancing user experience.",
  },
  {
    type: "skill",
    name: "TypeScript",
    icon: <SiTypescript />,
    duration: "Learned in 2022",
    description:
      "Leveraged TypeScript for type-safe JavaScript applications, improving code maintainability and robustness.",
  },
  {
    type: "skill",
    name: "Python",
    icon: <FaPython />,
    duration: "Learned in 2024",
    description:
      "Used Python for backend services, scripting, and automation tasks.",
  },
  {
    type: "skill",
    name: "Next.js",
    icon: <SiNextdotjs />,
    duration: "Learned in 2022",
    description:
      "Developed server-rendered and static web applications using Next.js, ensuring performance optimization.",
  },
  {
    type: "skill",
    name: "React.js",
    icon: <FaReact />,
    duration: "Learned in 2022",
    description:
      "Built component-driven UIs with React.js for seamless and scalable frontend applications.",
  },
  {
    type: "skill",
    name: "Node.js",
    icon: <FaNodeJs />,
    duration: "Learned in 2022",
    description:
      "Developed server-side applications using Node.js for scalable backend systems.",
  },
  {
    type: "skill",
    name: "Express.js",
    icon: <SiExpress />,
    duration: "Learned in 2022",
    description:
      "Built RESTful APIs and web applications with Express.js, ensuring fast and lightweight backend solutions.",
  },
  {
    type: "skill",
    name: "Mongoose",
    icon: <SiMongoose />,
    duration: "Learned in 2022",
    description:
      "Designed and managed MongoDB schemas using Mongoose for efficient database operations.",
  },
  {
    type: "skill",
    name: "MongoDB",
    icon: <SiMongodb />,
    duration: "Learned in 2022",
    description:
      "Implemented NoSQL databases with MongoDB for flexible and scalable data storage.",
  },
  {
    type: "skill",
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    duration: "Learned in 2022",
    description:
      "Styled responsive and modern web interfaces using Tailwind CSS for rapid development.",
  },
  {
    type: "skill",
    name: "Material UI",
    icon: <SiMui />,
    duration: "Learned in 2022",
    description:
      "Utilized Material UI for building consistent and visually appealing user interfaces.",
  },
  {
    type: "skill",
    name: "Shadcn",
    icon: <SiShadcnui />,
    duration: "Learned in 2023",
    description:
      "Utilized ShadCN to create reusable and accessible UI components with a focus on simplicity and design consistency, enhancing the user interface development experience in modern web applications.",
  },
  {
    type: "skill",
    name: "Prisma ORM",
    icon: <SiPrisma />,
    duration: "Learned in 2022",
    description:
      "Simplified database management and queries with Prisma ORM for SQL databases.",
  },
  {
    type: "skill",
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    duration: "Learned in 2022",
    description:
      "Managed relational databases effectively using PostgreSQL for data consistency and integrity.",
  },
  {
    type: "skill",
    name: "Sanity CMS",
    icon: <SiSanity />,
    duration: "Learned in 2022",
    description:
      "Integrated Sanity CMS for creating structured and customizable content management systems.",
  },
  {
    type: "skill",
    name: "Payload CMS",
    icon: <SiPayloadcms />,
    duration: "Learned in 2022",
    description:
      "Implemented Payload CMS for flexible and scalable content management solutions.",
  },
  {
    type: "skill",
    name: "Strapi CMS",
    icon: <SiStrapi />,
    duration: "Learned in 2022",
    description:
      "Built robust and flexible APIs using Strapi for content-rich applications.",
  },
  {
    type: "skill",
    name: "Stripe Payment",
    icon: <SiStripe />,
    duration: "Learned in 2022",
    description:
      "Integrated Stripe for secure and seamless payment processing in web applications.",
  },
  {
    type: "skill",
    name: "LemonSqueezy Payment",
    icon: <SiLemonsqueezy />,
    duration: "Learned in 2022",
    description:
      "Used LemonSqueezy for managing subscriptions and payment processes.",
  },
  {
    type: "skill",
    name: "Paddle Payment",
    icon: <SiPaddle />,
    duration: "Learned in 2022",
    description:
      "Integrated Paddle for SaaS subscription billing and payment solutions.",
  },
  {
    type: "skill",
    name: "SquareUp Payment",
    icon: <SiSquare />,
    duration: "Learned in 2024",
    description:
      "Utilized SquareUp for seamless payment processing and management in applications.",
  },
];

const Cards = () => {
  return (
    <>
      <Tabs
        defaultValue="experience"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          {/* <TabsTrigger value="education">Education</TabsTrigger> */}
          <TabsTrigger value="skills">My Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "experience")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "education")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="skills" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "skill")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Cards;
