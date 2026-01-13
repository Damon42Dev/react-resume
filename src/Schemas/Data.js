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
      "Full Stack Software Developer with experience building scalable, React-based web applications and integrating backend services on AWS. Strong focus on delivering maintainable, user-centric solutions through collaborative development.",
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
      "System Design",
      "Ownership",
      "Team Collaboration",
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
          "Developed React-based SaaS applications, collaborating with Go services on AWS to deliver scalable B2C and B2B products.",
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
          "Developed and maintained the ECAL Admin platform, empowering ECAL publishers to manage and control their calendar data.",
          "Implemented email OTP–based 2FA using AWS Amplify Gen 2, Amazon Cognito, and Lambda triggers.",
          "Integrated billing and subscription management with Chargify.js, covering plans, payments, coupons, and renewals.",
          "Improved admin usability and support workflows through Intercom integration and dependency maintenance.",
        ],
      },
      {
        name: "ECAL Sync Display V2",
        // company: "ECAL",
        // period: "Nov. 2021 - Ene. 2022",
        description: [    
          "Contributed to the rebuild of ECAL’s core consumer-facing Sync Display, replacing a legacy system.",
          "Developed a scalable frontend with React, MobX, and Material UI for B2C subscribers.",
          "Enabled seamless syncing of event fixtures to Google Calendar, Apple Calendar, and Outlook.",
        ],
      },
      {
        name: "ECAL Event Display",
        // company: "ECAL",
        // period: "Ene. 2022 - Feb. 2022",
        description: [
          "Built a flexible Event Display system for presenting calendar event data.",
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
          "Developed a consumer-facing application enabling subscribers to manage their event subscriptions.",
          "Implemented Google and Microsoft SSO for secure and frictionless authentication.",
          "Integrated frontend features with RESTful and GraphQL APIs, contributing across frontend and backend layers.",
        ],
      },
    ],
  },
};
