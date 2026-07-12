import htmlLogo from './assets/htmlLogo.png';
import pythonLogo from './assets/pythonlogo.png';
import cssLogo from './assets/cssLogo.png';
import javascriptLogo from './assets/javascriptLogo.png';
import bootstrapLogo from './assets/bootsrapLogo.png';
import reactjsLogo from './assets/reactjsLogo.png';
import tailwindcssLogo from './assets/tailwindcssLogo.png';
import djangologo from './assets/djangologo.png';
import flaskLogo from './assets/flasklogo.png';
import mysqlLogo from './assets/mysqllogo.png';
import postgressLogo from './assets/postgresslogo.png';
import reduxLogo from './assets/reduxLogo.png';
import gitLogo from './assets/gitLogo.jpg';
import uniqLogo from './assets/uniqlogo.png';
import scm from './assets/scm.png'; 
import timechatlogo from './assets/timechatlogo.png';
import bullionlogo from './assets/bullionlogo.png';
import ihplogo from './assets/ihplogo.png';
import colleageLogo from './assets/colleageLogo.png';
import schoolLogo2 from './assets/schoolLogo2.png';
import schoolLogo from './assets/schoolLogo.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Django', logo: djangologo },
      { name: 'Flask', logo: flaskLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Postgres', logo: postgressLogo },
    ],
  },
  {
    title: 'Language',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: uniqLogo,
    role: "Python Trainer & Web developer",
    company: "Uniq Technology",
    date: "June 2023 – Nov 2024",
    desc: `I worked as a Python Trainer, teaching Python to students and professionals. 
            I focused on helping learners understand core concepts, problem-solving, and practical application of Python in real-world projects. 
            I also guided them in Django, Flask, and data manipulation ,ensuring hands-on practice with coding exercises and projects.`,
    skills: [
      "HTML",
      "CSS",
      "Python",
      "Django",
      "Flask",
      "Problem Solving",
      "Training & Mentoring"
    ]
  },
  {
    id: 1,
    img: scm,
    role: "Fullstack Developer",
    company: "AV7 SCM",
    date: "Dec 2024 – Present",
    desc: `Frontend:
      I am a dedicated Frontend Developer specializing in React.js, Redux Toolkit, and Tailwind CSS, with a passion for creating modern, responsive, and user-friendly web applications. I focus on building reusable components, managing complex application states efficiently, and designing sleek interfaces with Tailwind CSS. My expertise lies in combining clean code with pixel-perfect UI to deliver scalable solutions that balance performance and aesthetics. I enjoy turning ideas into interactive products while following best practices in frontend development.

      Backend:
      I am a backend developer experienced in building robust and scalable RESTful APIs using Django REST Framework (DRF). I specialize in designing clean database structures, implementing secure authentication systems, and integrating APIs with frontend applications for seamless communication. With expertise in PostgreSQL, ORM queries, and environment-based configurations, I ensure performance-optimized and secure backend solutions. I also have experience in JWT authentication, role-based access control, and third-party API integrations, enabling me to develop efficient systems that are production-ready and easy to maintain.`,
          skills: [
            "HTML",
            "CSS",
            "Tailwind CSS",
            "JavaScript",
            "React JS",
            "Redux Toolkit",
            "Python",
            "Django",
            "Django ORM",
            "Postgres SQL",
            "GitHub",
          ]
        },
      ];

export const projects = [
  {
    id: 0,
    title: "Timechat Application",
    description:"Appointment (Visitor Pass Management System) helps organizations efficiently manage and track their visitors. Users can schedule appointments, invite guests, and generate secure visitor passes with ease. The system ensures smooth check-ins, better visitor experience, and enhanced organizational security.| Automatically send appointment confirmations and reminders to visitors and hosts via email. | Keep visitors informed in real-time with WhatsApp messages for confirmations, reminders, and updates. | Notify employees and hosts directly in Teams about scheduled visits, cancellations, or updates.",
    image: timechatlogo,
    tags: ["HTML", "Tailwind CSS", "React JS", "Redux-toolkit", "Django","Django Orm","Postgress SQL"],
    webapp: "https://timechat.theprocess.in/",
  },

  {
    id: 1,
    title: "Gold Bullion Application",
    description:"The Gold Bullion Application is a comprehensive trading and management platform designed for bullion businesses to efficiently handle daily operations. It provides real-time gold and silver price updates, interactive historical charts, and automated rate refresh features to support accurate trading decisions. The system includes modules for customer booking, purchase and sales management, stock tracking, and digital invoice generation. With a secure backend powered by Django and PostgreSQL and a responsive frontend built using React, Tailwind CSS, and Redux Toolkit, the application delivers a seamless, fast, and reliable experience tailored specifically for bullion traders and wholesalers.",
    image: bullionlogo,
     tags: ["HTML", "Tailwind CSS", "React JS", "Redux-toolkit", "Django","Django Orm","Postgress SQL"],
    webapp: "http://www.shivamtraders.online/"
  },

   {
    id: 2,
    title: "IHP - iHuman Power",
    description:"iHP is a two-sided job portal connecting job providers and job seekers across India.|Job providers can post openings, search and filter through thousands of resumes, and directly invite candidates to apply.|Job seekers can browse and search jobs by category and location, upload their resume, and apply directly to companies.|Built with a secure Django REST Framework backend and PostgreSQL database, and a responsive React, Redux Toolkit, and Tailwind CSS frontend, developed using AI-assisted (vibe coding) workflows with the Claude AI tool.",
    image: ihplogo,
     tags: ["HTML", "Tailwind CSS", "React JS", "Redux-toolkit", "Django","Django Orm","Postgress SQL", "AI-assisted development with Claude"],
    webapp: "https://www.ihp.co/"
  },
  
];

export const education = [
  {
    id: 0,
    img: colleageLogo,
    school: "Jai Shriram Engineering College",
    date: "July 2015 – July 2019",
    grade: "70.0 CGPA",
    desc: "I completed my Bachelor's degree in Electronics and Communication Engineering (ECE) from Jai Shriram Engineering College, Tirupur. This program strengthened my understanding of electronic circuits, communication systems, signal processing, and embedded systems, providing a solid foundation for both hardware and software applications.",
    degree: "BE-Electronics and Communication Engineering (ECE)"
  },

  {
    id: 1,
    img: schoolLogo2,
    school: "St. Mary's Girls Higher Secondary School, Kotagiri",
    date: "June 2013 – March 2015",
    grade: "70%",
    desc: "I completed my Higher Secondary Education (12th Standard) at St. Mary's Girls Higher Secondary School, Kotagiri. My academic focus strengthened my foundation in core subjects and prepared me for my undergraduate studies.",
    degree: "Higher Secondary Education (HSC) – 12th Standard"
  },
  {
    id: 2,
    img: schoolLogo,
    school: "St. Francis Xavier's Girls High School, Pandalur, Nilgiris",
    date: "June 2009 – March 2013",
    grade: "85%",
    desc: "I completed my SSLC (10th Standard) at St. Francis Xavier's Girls High School, Pandalur. This phase of my education provided a strong academic base and helped develop disciplined study habits.",
    degree: "Secondary School Leaving Certificate (SSLC) – 10th Standard"
  }


];


