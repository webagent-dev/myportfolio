import {
  // Contact
  FaGlobe,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,

  // Interests
  FaChessKnight,
  FaReact,
  FaRegCalendarCheck,
  FaBook,
  FaRunning,
} from 'react-icons/fa';

const data = {
  /**
   * Full name
   */
  fullName: 'wahab kehinde yusuf',

  /**
   * Summary - short "about me" paragraph
   */
  summary: {
    title: 'Summary',
    text: `
     Am a MERN-Stack Web developer with 2 year of practice and experience in developing web 
      applications and building websites.I am an enthusiatic developer with an addiction for discovering new coding perspectives.!
      `,
  },

  /**
   * Contact details
   */
  contact: {
    title: 'Contact',
    list: [
      {
        text: 'webagent-dev.',
        url: '',
        icon: <FaGlobe />,
      },
      {
        text: 'github.com/webagent-dev',
        url: 'https://github.com/webagent-dev',
        icon: <FaGithub />,
      },
      {
        text: 'webagent24@gmail.com',
        icon: <FaEnvelope />,
      },
      {
        text: '+2349035765646',
        icon: <FaPhoneAlt />,
      },
      {
        text: 'Lagos, Nigeria',
        icon: <FaMapMarkerAlt />,
      },
    ],
  },

  /**
   * Key skills
   */
  keySkills: {
    title: 'Key skills',
    list: [
      { text: 'React, Nextjs,Redux'},
      { text: 'JavaScript HTML5, CSS3' },
      { text: 'Responsive Web Design' },
    ],
  },

  /**
   * Additional skills
   */
  additionalSkills: {
    title: 'Additional skills',
    list: [
      { text: 'Node.js, expressjs' },
      { text: 'OAuth, Firebase' },
      { text: 'GitHub, Git' },
      { text: 'REST, GraphQL' },
      { text: 'Sass, CSS-in-JS' },
    ],
  },

  /**
   * Languages I speak
   */
  languages: {
    title: 'Languages',
    list: [
      { text: 'English - Fluent' },
    ],
  },

  /**
   * Hobbies and interests
   */
  interests: {
    title: 'Interests',
    list: [
      { text: 'Playing Gane', icon: <FaChessKnight /> },
      { text: 'Learning new things', icon: <FaReact /> },
      { text: 'Building habits', icon: <FaRegCalendarCheck /> },
      { text: 'Reading', icon: <FaBook /> },
      { text: 'Being active', icon: <FaRunning /> },
    ],
  },

  projects: {
    title: 'Projects',
    list: [
      {
        name: 'which is why at a glance',
        techList: [
          'React',
          'React Query',
          'React Router',
          'Firebase',
          'Material-UI',
        ],
        description: `
        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered`,
        url: 'which is why at a glance',
      },
      {
        name: 'requency with which',
        techList: ['React', 'D3.js', 'TopoJSON', 'Material-UI'],
        description: `
        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered`,
        url: 'hrequency with which',
      },
    ],
  },

  /**
   * Work experience
   *
   * Acceptable date format: `YYYY-MM`
   */
  workExperience: {
    title: 'Work experience',
    list: [
      {
        company: ' prevailing view assumed ',
        location: 'Location',
        date: {
          start: '2018-05',
          end: '2019-10',
        },
        jobTitle: 'Bartender/Waiter',
        description: `
        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,”`,
      },
      {
        company: 'view assumed lorem',
        location: 'Location',
        date: {
          start: '2017-03',
          end: '2018-05',
        },
        jobTitle: 'view assumed lorem',
        description: `
        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,”.`,
      },
      {
        company: 'company',
        location: 'Location',
        date: {
          start: '2033-15',
          end: '2056-01',
        },
        jobTitle: 'prevailing view',
        description: `
        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,”`,
      },
    ],
  },

  /**
   * Certificates and courses
   */
  certificates: {
    title: 'Certificates',
    list: [
      {
        name: 'CS50x: Introduction to Computer Science',
        provider: 'Harvard University',
      },
      {
        name: 'Responsive Web Design Certification',
        provider: ' freeCodeCamp',
      },
      {
        name: 'Algorithms and Data Structures Certification',
        provider: ' freeCodeCamp',
      },
      {
        name: 'Data Visualization Certification',
        provider: ' freeCodeCamp',
      },
      {
        name: 'Front End Libraries Certification',
        provider: ' freeCodeCamp',
      },
    ],
  },

  /**
   * Education, school, etc
   */
  education: {
    title: 'Education',
    list: [
      {
        institution: 'Warsaw University of Technology',
        description: 'the prevailing view assumed ',
        date: {
          start: '2014-09',
          end: '2015-09',
        },
      },
    ],
  },
};

export default data;
