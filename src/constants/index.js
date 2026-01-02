import { number } from "zod";

// Personal Information
export const PERSONAL_INFO = {
  name: 'Gowtham Vallarasu',
  title: 'Full Stack Developer',
  subtitle: 'MERN STACK DEVELOPER',
  email: 'gowthamvallarasu1234@gmail.com',
  location: 'Coimbatore, India',
  college: 'Sri Eshwar College Of Engineering',
  educator: 'Program Professor',
  number: '9345865017'
};

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/GowthamVallarasuK',
  linkedin: 'https://www.linkedin.com/in/gowtham-vallarasu-99b882279/',
  email: 'https://mail.google.com/mail/u/0/#inbox',
  leetcode: 'https://leetcode.com/u/gowthamk___/',
  resume:
    'https://drive.google.com/file/d/1FVM80zTlDYQmbfjxaxSLr7b3T6zB2uDi/view?usp=drive_link',
};

// Technologies with Icons
export const TECHNOLOGIES = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind css', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
];

// Projects / My Works
export const MY_WORKS = [
  
  {
    title: 'Gemini AI Clone',
    description:
      'A Gemini AI–inspired conversational AI platform built with a modern full-stack architecture, featuring real-time chat, prompt-based AI responses, conversation history, authentication, and a clean, responsive UI powered by advanced LLM integrations.',
    technologies: ['React', 'API key Gateway', 'JWT', 'MongoDB','Tailwind'],
    github: 'https://github.com/GowthamVallarasuK/Gemini-AI-Clone-.git',
  },
  {
    title: 'PipelineX',
    description:
      'PipelineX is a no-code / low-code machine learning pipeline builder that enables users to design, configure, and execute end-to-end ML workflows through an intuitive visual interface, supporting data ingestion, preprocessing, model training, evaluation, and deployment without writing code. ',
    technologies: ['React', 'Node', 'Express', 'MongoDB', 'Python','Tailwind'],
    github: 'https://github.com/GowthamVallarasuK/PipelineX.git',
  },
  {
    title: 'Browser Based Security Management System',
    description:
      'A browser-based security management system that enables centralized monitoring and control of security operations through a web interface, featuring role-based access control, real-time alerts, audit logging, and secure data management.',
    technologies: ['React', 'Scikit-Learn', 'MongoDB','Node','Express'],
    
  }
];
