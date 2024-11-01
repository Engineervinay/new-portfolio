import {
  AboutSectionType,
  BlogsSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  
  instagram: 'https://www.instagram.com/v.inay.patil',
  twitter: 'https://twitter.com/meengineervinay',
  github: 'https://github.com/engineervinay',
  linkedin: 'https://www.linkedin.com/in/engineervinay/',
  youtube:'https://www.youtube.com/@engineervinay/'
};

export const author = {
  name: 'Vinay Patil',
  email: 'vinaypatil11101@gmail.com',
};

export const seoData = {
  title: 'Vinay Patil ',
  description:
    'Vinay Patil is a full-stack developer who specializes in building (and occasionally designing) exceptional visual interfaces. A Programmer',
  author: author.name,
  image:
    'https://user-images.githubusercontent.com/68834718/217467445-0b0d2d63-f8ad-4702-8474-814eb2cbb3be.png',
  url: 'https://vatsalsinghkv.vercel.app/',
  keywords: [
    'Vinay',
    'Vinay Patil',
    '@engineervinay',
    'engineervinay',
    'Portfolio',
    'Vinay Portfolio ',
    'Vinay Patil Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Vinay Patil.',
  tagline: 'I Code👨‍💻.',
  description:
    "I'm a passionate Programmer having an experience of developing Web Applications. I like developing software. ",
  // description:
  //   "I'm a passionate Full Stack web developer having an experience of web  applications with React.js, Next.js and Blockchain development on Ethereum, Solidity and Web3.js.",
  specialText: 'Currently available for remote or offline jobs & freelancing work',
  // either button or simple text (information)
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'C++',
      'TailwindCSS',
      'C',
      'Next.js',
      'ReactJS',
      'SQL',
    ],
  },
  img: '/Vinay.jpg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive static websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Building Projects in Python',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        //{ name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        //{  name: 'typeScript', icon: 'vscode-icons:file-type-typescript-official',},
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        //{ name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        // { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        //{ name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        //{ name: 'jest', icon: 'vscode-icons:file-type-jest' },
      ],
    },
    /* we can add coding profiles here or score in competitions
    {
      id: getId(),
      title: 'UI/UX designing',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Experience in designing user-friendly interfaces with figma',
        'Experience in developing design systems and style guides',
        'Providing user-friendly design solutions',
      ],
      softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
      ],
    },
     {
      id: getId(),
      title: 'blockchain development',
      lottie: {
        light: '/lotties/ethereum.json',
        dark: '/lotties/ethereum-dark.json',
      },
      points: [
        'Experience in developing Smart Contract using Solidity & Ethereum',
        'Developing NFT Smart Contracts using ERC-721 Token Standard',
        'Building Dapps with React.js & Solidity using Web3.js',
      ],
      softwareSkills: [
        { name: 'ethereum', icon: 'logos:ethereum' },
        { name: 'solidity', icon: 'logos:solidity' },
        { name: 'web3js', icon: 'logos:web3js' },
        { name: 'metamask', icon: 'logos:metamask-icon' },
      ],
    }, */
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Tata Consultancy Services (TCS)',
      companyUrl: 'https://www.tcs.com',
      role: 'Software Engineer',
      started: 'Oct 2023',
      upto: 'Present',
      tasks: [
        'Software Developer at National Stock Exchange proficient in C, C++ and Unix',
        'Working on Equity and Commodity segments,implementing ecient trade matching algorithms and optimizing the contract trading architecture.',
        'deployed new features, improving system reliability, and throughput in a real-time high frequency trading environment',
      ],
    },
    {
      company: 'UnityLabs',
      companyUrl: 'https://unitylabs.ai/',
      role: 'frontend Intern',
      started: 'Feb 2022',
      upto: 'May 2022',
      tasks: [
        'Responsible for developing web components and web Pages using Next.js, React, and gatsby.',
        'Developed Next.js slug template for thousands of web pages.',
        'Reviewed and approved multiple Pull requests.',
        'Worked with backend APIs for information gathering. optimized SEO components for company products',
      ],
    },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Emoji Recognizer using React',
      url: 'https://03e2y.csb.app//',
      repo: 'https://github.com/Engineervinay/Emoji-Recognizer',
      img: 'https://raw.githubusercontent.com/Engineervinay/new-portfolio/master/public/project-images/emojiScreenshot.png',
      year: 2023,
      tags: ['Html', 'React', 'CSS'],
    },
    {
      id: getId(),
      name: 'LeetSpeek Translator using javascript',
      url: 'https://leettranslator.netlify.app/',
      repo: 'https://github.com/Engineervinay/translator-JS',
      img: 'https://raw.githubusercontent.com/Engineervinay/new-portfolio/master/public/project-images/translatorScreenshot.png',
      year: 2022,
      tags: ['HTML', 'Javascript','CSS'],
    },
    {
      id: getId(),
      name: 'Instagram Bot',
      url: 'https://youtu.be/Gtufx3DYO68',
      repo: 'https://github.com/Engineervinay/InstgramBot',
      img: 'https://raw.githubusercontent.com/Engineervinay/new-portfolio/master/public/project-images/instabotScreenshot.png',
      year: 2022,
      tags: ['Python', 'Beautisoup'],
    },
    {
      id: getId(),
      name: 'Automated Student Result Exctractor and Analyzer',
      url: 'https://github.com/Engineervinay/diploma-final-year-project-',
      repo: 'https://github.com/Engineervinay/diploma-final-year-project-',
      img: 'https://raw.githubusercontent.com/Engineervinay/new-portfolio/master/public/project-images/projectScreenshot.jpg',
      year: 2022,
      tags: ['HTML', 'CSS','PHP'],
    },
    
    // {
    //   name: 'nexter',
    //   url: 'https://vatsalsinghkv.github.io/nexter/',
    //   repo: 'https://github.com/vatsalsinghkv/nexter',
    //   img: 'https://user-images.githubusercontent.com/68834718/210224671-5501c5d9-a8d2-4044-a14c-38fb7e46a113.png',
    //   year: 2021,
    //   tags: ['html', 'sass'],
    // },
    
  ],
};


// * blogs section

export const blogsSection: BlogsSectionType = {
  title: 'my Blogs',
  blogs: [
    {
      id: getId(),
      name: 'Git for Kids? ',
      url1: 'https://vinaypatil.hashnode.dev/git-for-kids',
      url2: 'https://dev.to/engineervinay/git-for-kids-fok',
      img: 'https://raw.githubusercontent.com/Engineervinay/new-portfolio/master/public/blog-images/gitforkids.webp',
      year: 2022,
      description:'What is git? If you are in the technology field then you may have heard about git, GitHub, opensource, are they all same and why do you have to know about them...Read More ',
      tags: ['Git', 'Github'],
    },    {
      id: getId(),
      name: 'AGI & ANI',
      url1: 'https://vinaypatil.hashnode.dev/what-is-agi-and-ani',
      url2: 'https://dev.to/engineervinay/what-is-agi-ani-1l37',
      img: 'https://raw.githubusercontent.com/Engineervinay/new-portfolio/master/public/blog-images/agiAni.webp',
      year: 2021,
      description:'Artificial intelligence is one of the most trending topics in the technology field right now, lets see first what is... ',
  
      tags: ['Ai', 'AGI'],
    },    {
      id: getId(),
      name: 'HTTP Requests',
      url1: 'https://vinaypatil.hashnode.dev/what-is-http-requests',
      url2: 'https://dev.to/engineervinay/http-requests-and-methods-2bk',
      img: 'https://raw.githubusercontent.com/Engineervinay/new-portfolio/master/public/blog-images/httpEverywhere.jpg',
      year: 2022,
      description:'In this article, we are going to talk about Requests in HTTP, but first what is this HTTP?... ',
  
      tags: ['Http', 'REST'],
    },
    {
      id: getId(),
      name: 'My PostgreSQL Notes',
      url1: 'https://vinaypatil.hashnode.dev/postgresql-notes',
      url2: 'https://dev.to/engineervinay/my-postgresql-notes-1a21',
      img: 'https://raw.githubusercontent.com/Engineervinay/new-portfolio/master/public/blog-images/postgresqlNotes.webp',
      year: 2023,
      description:' Discover the power of PostgreSQL for efficient data management. This beginner-friendly blog takes you step-by-step through PostgreSQL. ',
  
      tags: ['PostgreSQL', 'Database'],
    },
  ],
};


// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m currently looking for a remote job or any new opportunities.',
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    {
      icon: 'lucide:youtube',
      url: socialLinks.youtube,
    },
    
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: '@Vinay Patil',
  link: '#',
};
