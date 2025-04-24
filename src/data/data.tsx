import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
/** 
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
*/
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Resume Yao Yuheng',
  description: "My past, present, and future",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Yao Yuheng.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I'm a master student of data science in NTU.
      I'm interested in designing pipelines to solve data related problems, currently working on <strong className="text-stone-100">LLM-based Query rewriting</strong> 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
       Recently I profiled and cleaned a food inspection file by fuzzy matching and approximate function dependency. 
       I also mined the association rules based on Apriori algorthm and managen the data into a database.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
       Another project I've done recently is to analyze the collaboration network of NTU CCDS faculty with open data in DBLP.
       Before I learn data science, I was a collage student marjor in Statists in BUAA, so I'm also interested and mastered in Statists and ML.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hi, Yao Yuheng from China. Currently I'm a master student of data science in NTU.
       I'm interested in design pipeline to solve data related problems,
       e.g. recently I profiled and cleaned a food inspection file by fuzzy matching and approximate function dependency. 
       I also mined the association rules based on Apriori algorthm and managen the data into a database.
       Another project I've done recently is to analyze the collaboration network of NTU CCDS faculty with open data in DBLP.
       Before I learn data science, I was a collage student marjor in Statists in BUAA, so I'm also interested and mastered in Statists and ML.`,
  aboutItems: [
    {label: 'Location', text: 'Singapore', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Video games, Swiming, Traveling', Icon: SparklesIcon},
    {label: 'Study', text: 'Nanyang Technological University', Icon: AcademicCapIcon},
    {label: 'Major', text: 'Data Science', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Chinese',
        level: 10,
      },
      {
        name: 'English',
        level: 7,
      },
    ],
  },
  {
    name: 'Data Science',
    skills: [
      {
        name: 'Machine Learning',
        level: 9,
      },
      {
        name: 'Data System',
        level: 6,
      },
      {
        name: 'Deep Learning',
        level: 5,
      },
    ],
  },
  {
    name: 'Statistics',
    skills: [
      {
        name: 'Statistics Models',
        level: 8,
      },
      {
        name: 'Time Series Analysis',
        level: 6,
      },
      {
        name: 'Experimental Design',
        level: 5,
      },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      {
        name: 'Problem Solving',
        level: 9,
      },
      {
        name: 'Team Collaboration',
        level: 8,
      },
      {
        name: 'Presentation Skills',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'January 2025 - now: LLM-based Query rewrite(on going)',
    description: 'Optimized baseline for LLM-based query rewrite baseline. \nAutomated pipeline for data preparation, management, generative model and analysis of query rewrite. \nInduce noval technics and the state of art model.',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'April 2025: A Network Science\'s View on Academic Collaboration at NTU CCDS',
    description: ' Led data preprocessing using Python to clean and structure co-authorship data from DBLP, resolving issues like missing values, duplication, and outdated links.\nConstructed and visualized a dynamic, undirected, and weighted collaboration network, with nodes representing faculty and edges indicating co-authorships over time.\nAnalyzed network properties (e.g., degree distribution, average degree growth, preferential attachment) to uncover structural patterns such as the emergence of hubs and densification trends.',
    url: 'https://github.com/piglet12138/collaboration-network-of-NTU-CCDS-faculty',
    image: porfolioImage2,
  },
  {
    title: 'April 2025: Chicago Food Inspection Data Quality Profiling and Preparation',
    description: 'Cleaned and analyzed a large-scale public dataset (~287K rows, 17 columns) on food inspections from the City of Chicago Open Data Portal.\n Applied association rule mining (Apriori) to uncover patterns in violations across facility types, inspection results, and risk levels. \nDiscovered and verified (approximate) functional dependencies using TANE to enhance schema understanding and imputation logic.',
    url: 'https://github.com/piglet12138/-DATA-PREPARATION-FOR-FOOD-INSPECTION',
    image: porfolioImage3,
  },
  {
    title: 'November 2025: Virality and Sentiment Analysis of Online Fitness Videos on Bilibili',
    description: 'Collected and processed over 320,000+ user comments and metadata from Pamela Reif\'s fitness videos on Bilibili, using Open API integration and web scraping tools. Conducted exploratory data analysis (EDA) to identify trends in video popularity, user demographics (gender, user level, region), and content tags. Developed a feature selection and regression model to identify key predictors of high-performing videos (e.g., tags, video length, time of release).',
    url: 'https://github.com/piglet12138/Virality-and-Sentiment-Analysis-of-Online-Fitness-Videos-on-Bilibili',
    image: porfolioImage4,
  },

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: ' August 2024 - February 2026',
    location: 'Nanyang Technological University, Singapore',
    title: 'Master of Data Science',
    content: <p>Learn how to think as a data scientist, and the flow of data preparation, data management, modeling and analysis, and visualization and dissemination.</p>,
  },
  {
    date: 'September 2020 - June 2024',
    location: 'Beihang University , Beijing, China',
    title: 'Bachelor of Statists',
    content: <p>Learn mathenmatical analysis, Advanced Algebra, and some other maths, and then probability thery, stochastic process, regression analysis, and some deep learning.</p>,
  },
];

export const experience: TimelineItem[] = [

  {
    date: 'Jane 2023 - Auguest 2023',
    location: 'Chinese Institute of Electronics',
    title: 'Data Management assistant',
    content: (
      <p>
       Manage the competitor data of the 18th "GigaDevice Cup" China Graduate Electronics Design Contest, assist the leader to hold the contest.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */

export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: '',
      text: '',
      image: '',
    },
    {
      name: '',
      text: '',
      image: '',
    },
    {
      name: '',
      text: '',
      image: '',
    },
  ],
};


/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I\'m happy to hear from you',
  items: [
    {
      type: ContactType.Email,
      text: 'yuheng004@e.ntu.edu.sg',
      href: 'yuheng004@e.ntu.edu.sg',
    },
    {
      type: ContactType.Location,
      text: 'Singapore NTU',
      href: 'https://maps.app.goo.gl/hr1n2QfeZ17TGjhH6',
    },
    {
      type: ContactType.Instagram,
      text: '@yuhengyaoyao',
      href: 'https://www.instagram.com/yuhengyaoyao/',
    },
    {
      type: ContactType.Github,
      text: 'piglet12138',
      href: 'https://github.com/piglet12138',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/piglet12138'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/%E9%92%B0%E7%8F%A9-%E5%A7%9A-2ab123320/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/yuhengyaoyao/'},

];
