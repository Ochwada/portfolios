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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  dev, facebook, twitter, linkedin, medium, 
  clv, drumkit, newsletter, simon, linda, cartoonize,
  gfz, afroai, dealcode, supper, python, esri,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "events",
    title: "Events",
  },
  {
    id: "blogs",
    title: "Blogs",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Geoinformatician",
    icon: mobile,
  },
  {
    title: "Tech Evangelist",
    icon: backend,
  },
  {
    title: "Public Speaker",
    icon: creator,
  },
];

const technologies = [
  {
    name: "ESRI",
    icon: esri,
  },
  {
    name: "Python",
    icon: python,
  },
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
    name: "React JS",
    icon: reactjs,
  },
  /* {
    name: "Redux Toolkit",
    icon: redux,
  }, */
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
  /* {
    name: "Three JS",
    icon: threejs,
  }, */
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  /*  {
     name: "docker",
     icon: docker,
   }, */
];

const experiences = [
  {
    title: "Product Evangelist",
    company_name: "Dealcode GmbH (Hamburg -Germany)",
    icon: dealcode,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "User Experience Liaison: Guiding software development based on user insights and feedback.",
      "Marketing and Communication Specialist: Preparing and promoting new releases through various media.",
      "Knowledge Bridging: Bridging information gap between users and developers.",
      "Network Development and Relationship: Expanding Dealcode's reach and influence.",
    ],
  },
  {
    title: "Managing Director / Consultant",
    company_name: "AfroAI UG  (Berlin -Germany)",
    icon: afroai,
    iconBg: "#E6DEDD",
    date: "July 2019 —Aug 2021",
    points: [
      "Project Manager: Directing geodata, web, and app projects globally from start to finish.",
      "Financial Director: Overseeing financial performance, investments, and drives revenue.",
      "Operations Leader: Managing team responsibilities, hiring, retention, and performance.",
      "PR & Marketing Executive: Representing the company publicly and leads marketing efforts.",
    ],
  },
  {
    title: "GeoData Analyst Consultant",
    company_name: "Supper & Supper GmbH (Berlin -Germany)",
    icon: supper,
    iconBg: "#E6DEDD",
    date: "Jan 2019 —June 2019",
    points: [
      "Geodata Pre-Processor: Managing geodata for machine learning and geospatial analysis.",
      "Data Analyst: Handling 3D, satellite, and sensor data analysis.",
      "GIS Consultant: Supporting GIS application development, mapping, and stakeholder consultations.",
      "Web & PR: Managing website updates and presents at conferences.",
    ],
  },
  {
    title: "Geoinformatics Working Student",
    company_name: "GFZ - German Research Centre For Geosciences  (Potsdam - Germany)",
    icon: gfz,
    iconBg: "#E6DEDD",
    date: "April 2015 —Sept 2015",
    points: [
      "Data Retrieval: Acquiring data from the city's Greenhouse Gases (GHG) database.",
      "Data Manipulation: Improving the readability and organization of GHG data.",
      "3D Visualization: Using NetCDF in R for 3D visualization of GHG data.",
      "Project Execution: Support the Implementation of the project titled 'Geo - enabling city Greenhouse Gases(GHG) data in 3D'.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TURNING PHOTOS INTO CARTOONS",
    description:
      "Transforming photos into cartoons using Python's OpenCV library. Essential image processing techniques and creating fun, cartoon-style images.",
    tags: [
     /*  {
        name: "PredictiveAnalytics",
        color: "blue-text-gradient",
      }, */
      {
        name: "python",
        color: "blue-text-gradient",
      },
      /* {
        name: "",
        color: "pink-text-gradient",
      }, */
    ],
    image: cartoonize,
    source_code_link: "https://github.com/Ochwada/Data-Science-2023/tree/main/Photos%20into%20Cartoons",
    website_link: " ",
  },
  {
    name: "Portfolio (March 2023)",
    description:
      "A simple portfolio using React and Sanity. This portfolio demonstrates proficiency in modern web development technologies, featuring a clean, user-friendly interface and efficient content management. ",
    tags: [
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      }, 
    ],
    image: linda,
    source_code_link: "https://github.com/Ochwada/profile_ochwada/tree/main",
    website_link: "https://ochwada.netlify.app/ ",
  },
  {
    name: "CLV-PREDICTION",
    description:
      "CLV as North Star Metric is the single metric that best captures the core value that your product delivers to customers.",
    tags: [
      {
        name: "PredictiveAnalytics",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
      /* {
        name: "",
        color: "pink-text-gradient",
      }, */
    ],
    image: clv,
    source_code_link: "https://github.com/Ochwada/Software_Code_Pytho",
    website_link: " ",
  },
  {
    name: "DRUM KIT",
    description:
      " creating a virtual drum kit app using scripting language. By exploring DOM, key events, and CSS animations, you'll learn to add event listeners to buttons and keystrokes. The result will be an engaging website that showcases your coding skills.",
    tags: [
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
      {
        name: "frontEnd",
        color: "pink-text-gradient",
      },
      /* {
        name: "scss",
        color: "pink-text-gradient",
      }, */
    ],
    image: drumkit,
    source_code_link: "https://github.com/Ochwada/Web_Projects_Hosted_Online/tree/main/Drum%20Kit%20Starting%20Files",
    website_link: "https://drum-kit-ochwada.netlify.app/",

  },
  {
    name: "Simon Game Challenge",
    description:
      "Embark on the Simon Game Challenge - a fun, memory-boosting programming task. Improve skills in DOM manipulation, event handling, timers, and state management by creating this classic game.",
    tags: [
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
      {
        name: "frontEnd",
        color: "pink-text-gradient",
      },
      /* {
        name: "css",
        color: "pink-text-gradient",
      }, */
    ],
    image: simon,
    source_code_link: "https://github.com/Ochwada/Web_Projects_Hosted_Online/tree/main/Simon%20Game%20Challenge%20Starting%20Files",
    website_link: "https://simon-game-ochwada.netlify.app/",
  },
  {
    name: "Newsletter",
    description:
      "Build an engaging newsletter subscription service with Node.js and JavaScript. Leverage the power of Mailchimp for managing your subscriber list, sending automated emails, and tracking campaign performance.",
    tags: [
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "fullStack",
        color: "lightgreen-text-gradient",
      },
    ],
    image: newsletter,
    source_code_link: "https://github.com/Ochwada/Web_Projects_Hosted_Online/tree/main/Newsletter-SignUp",
    website_link: "https://newsletter-signup-ochwada.vercel.app/",
  },
];
const blogs = [
  {
    name: "DATA SCIENCE PROBLEM SOLVING: A DEEP DIVE INTO ESSENTIALS STEPS",
    description: "Delve into real-world examples of data science problem-solving steps in this blog post. Discover how to formulate a clear problem statement, collect relevant data, and perform effective data cleaning using Python.",
    date: "Mar 15, 2023",
    blog_link: "https://medium.com/@ochwada/data-science-problem-solving-a-deep-dive-into-essential-steps-3d034913aec8",
  },
  {
    name: "THE ESSENTIAL STEPS TO APPROACHING A DATA SCIENCE PROBLEM",
    description: "This article provides a comprehensive overview of the key steps in tackling a data science problem. Learn how to formulate a problem, collect and clean data, explore data, train algorithms, and evaluate and validate the results.",
    date: "Mar 15, 2023",
    blog_link: "https://medium.com/@ochwada/approaching-a-data-science-problem-e7086c678989",
  },
  {
    name: "LINKING GITHUB TO ANDROID STUDIO",
    description: "This guide offers a comprehensive step-by-step tutorial for beginners on how to link GitHub with Android Studio. Learn how to install GitHub, enable Version Control Integration, share your projects on GitHub, and commit your changes.",
    date: "Oct 15, 2022",
    blog_link: "https://medium.com/@ochwada/linking-github-to-android-studio-6c6db76f70d3",
  },
  {
    name: "Deal Scoring- Part 1: Data Pre-processing in MySQL",
    description: "This blog post delves into the initial steps of sales data analytics using AI for deal scoring. Manipulate sales data from CSV files using MySQL to build a logistic regression model that helps prioritize sales efforts based on potential deal success. Explore the database schema and learn how to load data into Python for processing.",
    date: "Jun 23, 2022",
    blog_link: "https://medium.com/@ochwada/deal-scoring-part-1-data-pre-processing-in-mysql-c4b64b6f5a70",
  },
  {
    name: "AI FOR SALES",
    description: "This project focused on developing a unique model to detect stationary aircraft in European airports using satellite images. With an impressive 83% accuracy, this revolutionary integration of technology signifies a leap forward in enhancing surveillance and situational awareness",
    date: "May 27, 2022",
    blog_link: "https://medium.com/@ochwada/ai-for-sales-af3097be3344",
  },
  {
    name: "GET STARTED WITH FACE DETECTION WITH PYTHON",
    description: "A step-by-step guide on face detection using Python and OpenCV, including code snippets and explanations. Ideal for beginners looking to implement face detection in their programming projects",
    date: "May 2, 2022",
    blog_link: "https://dev.to/ochwada/get-started-with-face-detection-8o3",
  },
  {
    name: "SQL BASIC CHEAT SHEET",
    description: "A cheat sheet for SQL beginners, featuring basic commands, simple querying, filtering, table joining, subqueries, and set operations. Ideal for those who want to learn SQL or need a quick reference guide.",
    date: "April 30, 2022",
    blog_link: "https://dev.to/ochwada/sql-basic-cheat-sheet-2fmm",
  },
  {
    name: "DETECTION OF STATIONARY AIRCRAFT USING DEEP LEARNING",
    description: "This project focused on developing a unique model to detect stationary aircraft in European airports using satellite images. With an impressive 83% accuracy, this revolutionary integration of technology signifies a leap forward in enhancing surveillance and situational awareness",
    date: "Aug 23, 2020",
    blog_link: "https://medium.com/@ochwada/detection-of-stationary-aircraft-using-deep-learning-b5a0200d3c3",
  },
  {
    name: "LOCATION ANALYSIS OF POTENTIAL HIGH ALTITUDE WIND POWER",
    description: "This study utilises a decade's worth of wind data to identify optimal locations and altitudes for AWES deployment, employing complex data analysis and government-imposed constraints to ensure feasibility. Discover how the future of wind energy may literally be taken to new heights.",
    date: "Aug 23, 2020",
    blog_link: "https://medium.com/@ochwada/location-analysis-of-potential-high-altitude-wind-power-afcb37c275aa",
  },
  {
    name: "DETECTING, MAPPING & MONITORING OF SEASONAL CHANGES OF SHALLOW WATER PONDS USING SAR WITH DEEP LEARNING",
    description: "This groundbreaking study employs SAR data and deep learning to monitor the fluctuating water resources in Sub-Sahara Africa, specifically focusing on shallow water ponds crucial to rural communities.",
    date: "Aug 23, 2020",
    blog_link: "https://medium.com/@ochwada/detecting-mapping-and-monitoring-of-seasonal-changes-of-shallow-water-ponds-using-sar-with-deep-127668e57d1a",
  },
  {
    name: "HURRICANE FREQUENCY PREDICTION USING DEEP LEARNING",
    description: " Discover how Artificial Intelligence is dramatically transforming sales and marketing, driving efficiency, reducing costs, and supercharging overall performance. From lead scoring and price optimisation to forecasting and performance management, AI is changing the face of sales.",
    date: "May 27, 2022",
    blog_link: "https://medium.com/@ochwada/ai-for-sales-af3097be3344",
  },
];

// EVENTS
const events = {
  panelDiscussions: [
    {
      title: "AGYLE LIVE WEEK 23 diskutierten",
      date: "11.09.2023",
      topic: "Digital Transformation",
      link: "https://www.linkedin.com/posts/land-der-ideen_agyle40under40-agyle40under40-agyle23-activity-7107368774147653632-e1fs",
    },
    {
      title: "STATE-OF-THE-MAP OPENSTREETMAPS",
      date: "23.11.2019",
      topic: "Detecting, Mapping & Monitoring of Shallow Water Ponds from SAR Imagery using DL",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_africa-geoai-ivorycoast-activity-6603984304055824384-CVPF",
    },
    {
      title: "DEUTSCHER BUNDESTAG",
      date: "06.11.2019",
      topic: "Digitisation and AI Opportunities in Africa",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_artficialintelligence-africa-geospatialdata-activity-6597723455615979520-HMg-/",
    },
    {
      title: "BLACK IN TECH",
      date: "24.09.2019",
      topic: "GreenTech and Diversity",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_throw-back-a-discussion-on-green-tech-activity-6921862225406136320-NxSW",
    },
    {
      title: "NEXIGA GmbH INNOVATIONSTAG",
      date: "14.05.2019",
      topic: " Integration of GIS and DL in Detection and Mapping of Renewable Energy Infrastructure",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_nexiga-innovationstag-innovation2019-activity-6531880173585866753--0d_",
    },
    {
      title: "WOMEN IN MACHINE LEARNING & DATA SCIENCE BERLIN",
      date: "23.04.2019",
      topic: "Geospatial AI",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_dramatic-wimlds-geospatial-activity-6526542173012262912-UFp_",
    },
    {
      title: "GEOSPATIAL WORLD FORUM",
      date: "04. 04.2019",
      topic: "Integration of GIS and DL in Detection and Mapping of Renewable Energy Infrastructure",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_gwf2019-geospatiall-deeplearning-activity-6519515571149684736-jiJj",
    },
    {
      title: "BLACK BUSINESS MATTER",
      date: "11.2018",
      topic: "Tech & Agriculture - A Geospatial Approach",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_blackbussinessmatter-bigdata-datascience-activity-6478725188115529728-B4aU",
    },
    {
      title: "WOMEN IN TECH (AFRICA)",
      date: "22.09.2018",
      topic: "Geospatial Science in precision agriculture",
      link: "https://twitter.com/nakhulolinda/status/1043564629157445639",
    },
    // ... more panel discussions
  ],
  virtualEvents: [
    {
      title:"GISfest",
      date: "11-12.10.2022 ",
      topic: "Technical Career Panel Session",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6985195159076368384/",
    },
    {
      title: "Centre for Multidisciplinary Research and Innovation",
      date: "27.08.2022",
      topic: "AI in Africa: Challenges and Opportunities",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_ai-ai-machinelearning-activity-6968111418793455616-WLCB?",
    },
    {
      title: "ESRI Inc",
      date: "31.03.2021",
      topic: "Champions of GIS",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_geospatial-gis-data-activity-6779780991998418944-t53e/",
    },
    {
      title: "WOMEN + IN GEOSPATIAL",
      date: "8.03.2021",
      topic: "Women’s Leadership in the Geospatial Field",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_choosetochallenge-wig-iwd2021-activity-6774740632104787968-OGux?",
    },
    {
      title: "TEMSAFRICA ICT EVENTS 2020",
      date: "25. 11. 2020",
      topic: "ICT & Digitisation: Powering Africa’s Growth and Trasformation",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_datascience-machinelearning-innovation-activity-6735210907259035648-xkti",
    },
    {
      title: "BLACK IN TECH",
      date: "15.10.2020",
      topic: "From Employment to Entrepreneurship",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_blackintech-africanentrepreneurs-technology-activity-6717082366080372736-_237",
    },
    {
      title: "ESRI USER CONFERENCE EVENT",
      date: "16.07.2020",
      topic: "'Modern day disaster response- the good, the challenges and successful equitable response' - Special Interest Group Meeting ",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_northstar-geospatial-link-activity-6687269638088351744-UXN5",
    },

    // ... more virtual events
  ],
  roundTableDiscussions: [
    {
      title: "AFRIKA-VEREIN DER DEUTSCHEN WIRTSCHAFT",
      date: "3.03.2020",
      topic: "Fostering economic development between Germany and Africa",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_zimbabwe-economicdevelopment-finance-activity-6640592675680591872-8r0N",
    },
    {
      title: "AFRIKA-VEREIN DER DEUTSCHEN WIRTSCHAFT",
      date: "11.12.2019",
      topic: "Fostering economic development between Germany and the Great Lake regions",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_geospatialdata-geodata-artficialintelligence-activity-6610587399313473536-Nzdc",
    },
    {
      title: "AFRIKA-VEREIN DER DEUTSCHEN WIRTSCHAFT",
      date: "21.10.2019",
      topic: "Fostering German-Kenyan business cooperations",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_germanafricaaward-angelamerkel-activity-6592773490816888832-97Jb",
    },
    // ... more round table discussions
  ],
  podcast: [
    {
      title: "Technical University BERLIN ",
      date: "22.09.2020",
      topic: "The alumni podcast 'Zukunftsmacher*innen'",
      link: "https://www.linkedin.com/posts/tuberlin_haemrtipp-tuberlin-activity-6775702020528721920-q5Ih",
    },
    // ... more press events
  ],
  hostedWorkshops: [
    {
      title: "AFRIKA-VEREIN DER DEUTSCHEN WIRTSCHAFT",
      date: "24.09.2019",
      topic: "1st German-African ICT” - CO-HOSTED",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_geospatialdata-geodata-artficialintelligence-activity-6605353158908628992-Mqi2",
    },
    {
      title: "DJANGO GIRLS NAIROBI",
      date: "2 / 3. 10. 2014",
      topic: "Free Programming Workshop for Women",
      link: "https://djangogirls.org/de/nairobi1/",
    },
    // ... more press events
  ],
  pressInterview: [
    {
      title: "Club 100 Sales - Sales Expert Talk",
      date: " .01.2023 ",
      topic: "What does a Product Evangelist do? What is Dealcode ?",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6993251466454925312?",
    },
    {
      title: "DEUTSCHE WELLE",
      date: "19.09.2019 ",
      topic: "Impact of AfroAI in Africa’s tech industry",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_abit-of-a-chat-with-deutsche-welle-activity-6580404640871927808-GU_c",
    },
    {
      title: "THE DIASPORA RADIO",
      date: "04.05.2019",
      topic: "Africa Youth of the Year Award",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_dataiku-activity-6531414010896609280-uMQS",
    },
    // ... more press events
  ],
  pressNewspapers: [
    {
      title: "THE PEOPLE NEWSPAPER (KENYA)",
      date: "02.03.2022",
      topic: "How Kenya can Leverage AI to Solve Problem",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_how-kenya-can-leverage-ai-to-solve-problems-activity-6911944504459583488-Jd1y",
    },
    {
      title: "ESRI - CHAMPIONS OF GIS",
      date: "2021",
      topic: "Women and GIS, Volume 3: Champions of a Sustainable World",
      link: "https://storymaps.arcgis.com/stories/cc9cfbc3421b48f9a8e1e8e838aba4f6",
    },
    {
      title: "THE PEOPLE NEWSPAPER (KENYA)",
      date: "02.03.2021",
      topic: "Tell Your Story - Geoinformatics Opened a new World for Me",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_technology-techforafrica-geospatialdata-activity-6772414036870070272-etZD",
    },
    {
      title: "GREENPEACE GERMANY",
      date: "04. 2017",
      topic: "Adaptation of Climate Change - Community Based organisation Activity",
      link: "https://twitter.com/nakhulolinda/status/858000228066217985",
    },
    {
      title: "THE STAR (KENYA)",
      date: "26.09.2014",
      topic: "Young Woman Teaching Girls how to Code",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_python-event-software-activity-6973904729475010560-mGCX?",
    },
    // ... more press events
  ],
  pressMentions: [
    {
      title: "RADIANT EARTH FOUNDATION",
      date: "08.05.2021",
      topic: "15 Leading women in ML4EO 'Machine Learning for Earth Observation'",
      link: "https://twitter.com/OurRadiantEarth/status/1368917937139113985",
    },
    {
      title: "DAILY NATION (KENYA)",
      date: "08.05.2021",
      topic: "The Kenyan Trailblazers- Looking beyond the Global Health Crisis",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_kenya-iot-geospatialintelligence-activity-6774565042496126976-3c4s",
    },
    // ... more press events
  ],
  productPresentation: [
    {
      title: "AG-CAREER HUB",
      date: "02.10.2020",
      topic: "Getting to know FIKO",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_about-activity-6717380497669976064-MPw3",
    },
    {
      title: "FIKO",
      date: "2020",
      topic: "A Proximity Alert System made for the African Market",
      link: "https://twitter.com/AfroaiDe/status/1307929233172422656",
    },
    {
      title: "BIG DATA SUMMIT - BERLIN",
      date: "2019",
      topic: "Data Science product presentation (Booth)",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_datascience-machinelearning-deeplearning-activity-6521717855442993152-QIKw",
    },
    {
      title: "GEEK GIRLS CARROT",
      date: "07.10. 2018",
      topic: "HLAG - FinTech & Blockchain Hackathon - Product Presentation",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_technology-womenintech-fintech-activity-6454767037775380480-auUt",
    },
    // ... more press events
  ],
};


const socialMedia = [
  {
    icon: github, // path to icon
    link: 'https://github.com/Ochwada', // link to social media page
    name: 'Github'
  },
  {
    icon: medium, // path to icon
    link: 'https://medium.com/@ochwada', // link to social media page
    name: 'Medium'
  },
  {
    icon: dev, // path to icon
    link: 'https://dev.to/ochwada', // link to social media page
    name: 'Dev.to'
  },
  {
    icon: linkedin, // path to icon
    link: 'https://www.linkedin.com/in/ochwada-l-66630a36/', // link to social media page
    name: 'Linkedin'
  },
  {
    icon: facebook, // path to icon
    link: 'https://www.facebook.com/ochwada.linda', // link to social media page
    name: 'Facebook'
  },
  {
    icon: twitter, // path to icon
    link: 'https://twitter.com/nakhulolinda', // link to social media page
    name: 'Twitter'
  },
  // ... more social media items
];


export { services, technologies, experiences, testimonials, projects, blogs, events, socialMedia };