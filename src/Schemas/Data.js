export const Data = {
  profile: {
    name: "Damon Wang",
    occupation: "FullStack Software Developer",
    location: "Melbourne, Australia",
    email: "damonwang42@gmail.com",
    // telephone: "+61 xxxxxxxx",
    image: "/react-resume/images/me.jpg",
  },
  aboutMe: {
    label: "Profile",
    description:
      "FullStack Software Developer, with a passion for building scalable and efficient web applications. I am a quick learner and I am always seeking for new challenges and opportunities to grow.",
  },
  skills: {
    technicalLabel: "Technologies",
    softLabel: "Skills",
    technicalSkills: [
      "React",
      "Mobx",
      "Material UI",
      "Go",
      "GraphQL",
      "RESTful",
      "Git",
      "Docker",
      "AWS",
      "CI/CD",
      "Agile",
      "Jira",
      "Confluence",
    ],
    softSkills: [
      "Problem Solving",
      "Teamwork",
      "Communication",
      "Proactivity",
      "Creativity",
      "Autodidactism",
      "Mentoring",
    ],
  },
  socialMedia: {
    label: "SOCIAL",
    social: [
      {
        label: "Visit my LinkedIn profile",
        name: "linkedin",
        url: "https://www.linkedin.com/in/damonwang",
        className: "bxl-linkedin-square",
      },
      {
        label: "Visit my GitHub profile",
        name: "github",
        url: "https://github.com/damonwang",
        className: "bxl-github",
      },
    ],
  },
  experience: {
    works: [
      {
        title: "Software Engineer (FullStack+Tester)",
        period: "Feb. 2021 - Current",
        company: "ECAL Marketing Pty Ltd.",
        description: [
          "Development and continuous improvement of REST and GraphQL microservices in Go.",
          "Development and continuous improvement of ECAL systems in the technologies React, Mobx and Material UI.",
          "CI/CD pipeline with Bitbucket, Gauge and Taiko End to End testing tools and AWS as infrastructure.",
        ],
      },
      {
        title: "IT Support",
        period: "May. 2021 - Jun. 2021",
        company: "Monash University",
        description: [
          "Delivered technical support to students and invigilators, ensuring a smooth and seamless online examination experience."
        ],
      },
    ],
    academic: [
      {
        career: "Master of Business Information Systems",
        date: "2019 - 2020 Melbourne, Australia",
        institution: "Monash University",
        award: "Awarded ‘Information Technology International Merit Scholarship’.",
      }
    ],
    projects: [
      {
        name: "ECAL Sync Display V2",
        // company: "ECAL",
        // period: "Nov. 2021 - Ene. 2022",
        description: [
          "Development of REST Web Services in Go accompanied by different database engines like Mysql, MongoDB and Google/Outlook Calendar API.",
          "Development of Frontend and Mobile with technologies like React, Mobx and Material UI.",
        ],
      },
      {
        name: "Manage My ECAL",
        // company: "ECAL",
        // period: "Ene. 2022 - Feb. 2022",
        description: [
          "Developmoent of Google and Microsoft signgle sign on authentication.",
          "Frontend development in React, Mobx and Material UI for consuming REST and GraphQL Web Services.",
        ],
      },
      {
        name: "ECAL Event Display",
        // company: "ECAL",
        // period: "Ene. 2022 - Feb. 2022",
        description: [
          "Development of Event Display application in React, Mobx and Material UI for displaying calendar event information.",
          "Developed Event Display in multiple views and display types for desktop and mobile end like Page, Calendar, Column and Carousel.",
        ],
      },
      {
        name: "ECAL Admin",
        // company: "ECAL",
        // period: "Ene. 2022 - Feb. 2022",
        description: [
          "Development of ECAL Admin application in React, Mobx and Material UI for managing ECAL widgets.",
          "Integration of Super Admin feature in ECAL Admin for managing ECAL admin accounts.",
          "Integration of Billing and Payement feature in ECAL Admin for ECAL admin account subscriptions.",
        ],
      },
    ],
  },
};
