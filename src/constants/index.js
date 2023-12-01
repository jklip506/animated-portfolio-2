import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    angular,
    navy,
    ni,
    carrent,
    threejs,
    nextjs,
    aws,
    java,
    python,
    bitstore,
    imdb,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "SDLC Methodologies",
      icon: mobile,
    },
    {
      title: "Backend Development",
      icon: backend,
    },
    {
      title: "Problem Solving",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Return Software Engineering Intern",
      company_name: "National Instruments (NI)",
      icon: ni,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - August 2023",
      points: [
        "Developed a scalable, user-friendly feature, which enhanced engineers  work order customization by adding custom properties to new and existing work orders – resulting in increased workflow and reduced errors.",
        "Designed and integrated contributions into NI's core product suite, positioning the feature for future release.",
        "Demonstrated versatility and adaptability by playing a pivotal role in a global collaborative project that required acquiring new skill sets such as Angular and Git.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "National Instruments (NI)",
      icon: ni,
      iconBg: "#E6DEDD",
      date: "June 2022 - July 2022",
      points: [
        "Developed a proof of concept using React and NI’s cloud technology that streamlined lab management by bridging a critical information gap between multiple data repositories, giving the user a holistic presentation of their connected systems.",
        "Prioritized features through customer pain-point analysis, which led to an application that exceeded customer and management expectations.",
        "Ensured seamless integration and consistent user experience in cross-functional team collaborations.",
      ],
    },
    {
      title: "Intelligence Analyst",
      company_name: "United States Navy",
      icon: navy,
      iconBg: "#383E56",
      date: "July 2014 - December 2019",
      points: [
        "Produced critical national security intelligence for US Government decision-makers.",
        "Applied advanced tools to address complex challenges, emphasizing big data analytics.",
        "Drafted well-written documents detailing foreign intelligence and offered insights into the significance of the correspondence.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Jason exhibited strong technical skills, quickly grasping complex software concepts, and effectively applying them to our projects.",
      name: "Oscar Fonseca",
      designation: "Senior Program Manager",
      company: "National Instruments (NI)",
    },
    {
      testimonial:
        "Jason's ability to blend his existing skills with new technologies showcased not only his versatility but also his commitment to delivering high-quality solutions.",
      name: "Mike Duffy",
      designation: "Section Manager",
      company: "National Instruments (NI)",
    },
  ];
  
  const projects = [
    {
      name: "Bitstore",
      description:
        "An e-commerce app enabling users to explore, compare, and buy electronic devices from diverse suppliers, simplifying the digital shopping experience.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: bitstore,
      source_code_link: "https://github.com/jklip506/ecommerce-NextJs-Sanity",
      demo_link: "https://ecommerce-next-js-sanity.vercel.app/",
    },
    {
      name: "Simple IMDb Clone",
      description:
        "A simple IMDb clone that allows users to browse movies, and get facts and details about them.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: imdb,
      source_code_link: "https://github.com/jklip506/nextjs13-imdb-clone",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };