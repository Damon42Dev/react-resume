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
      "Postman",
      "Git",
      "Docker",
      "AWS",
      "CI/CD",
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
        title: "Software Engineer (Full Stack)",
        period: "Feb. 2022 - Current",
        company: "ECAL Marketing Pty Ltd.",
        description: [
          "Full-stack engineer developing React-based SaaS applications with Go microservices on AWS, delivering scalable B2C/B2B products through collaborative, end-to-end development.",
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
        date: "2019 - 2021 Melbourne, Australia",
        institution: "Monash University",
        award: "Awarded ‘Information Technology International Merit Scholarship’.",
      }
    ],
    projects: [
      {
        name: "ECAL Admin",
        // company: "ECAL",
        // period: "Ene. 2022 - Feb. 2022",
        description: [
          "Developed and maintained the ECAL Admin platform using React, MobX, and Material UI, supporting internal operations and customer management.",
          "Implemented email OTP–based Two-Factor Authentication (2FA) with AWS Amplify Gen 2, Amazon Cognito, and Lambda triggers.",
          "Integrated billing and subscription workflows using Chargify.js, including plans, payments, coupons, and subscription management.",
          "Improved admin usability and support workflows through Intercom integration and ongoing dependency upgrades.",
        ],
      },
      {
        name: "ECAL Sync Display V2",
        // company: "ECAL",
        // period: "Nov. 2021 - Ene. 2022",
        description: [    
          "Contributed to the redevelopment of ECAL’s core consumer-facing product, fully replacing the legacy Sync Display with a modernized V2 solution.",
          "Built and maintained the frontend using React, MobX, and Material UI, delivering a responsive and scalable user experience for C-end subscribers.",
          "Enabled users to seamlessly sync sports and event fixtures to major calendar platforms, including Google Calendar, Apple Calendar, and Outlook.",
          "Participated in the full development lifecycle, including feature implementation, functional testing, bug fixing, and release validation.",
          "Authored and maintained technical documentation, improving onboarding efficiency and long-term maintainability of the product.",
        ],
      },
      {
        name: "ECAL Event Display",
        // company: "ECAL",
        // period: "Ene. 2022 - Feb. 2022",
        description: [
          "Developed the Event Display application to present calendar event data across multiple formats.",
          "Implemented responsive UI components supporting Page, Calendar, Column, and Carousel views.",
          "Ensured consistent user experience across desktop and mobile devices.",
        ],
      }
      ,
      {
        name: "Manage My ECAL",
        // company: "ECAL",
        // period: "Ene. 2022 - Feb. 2022",
        description: [
          "Developed a consumer-facing application enabling subscribers to manage their subscribed event schedules.",
          "Implemented Google and Microsoft Single Sign-On (SSO) for secure and streamlined authentication.",
          "Built frontend features using React, MobX, and Material UI, integrating RESTful and GraphQL APIs.",
          "Contributed across frontend and backend layers, including authentication and data flow implementation.",
        ],
      },
    ],
  },
};
