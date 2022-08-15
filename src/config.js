export const vals = {
    location: "Salt Lake City, UT",
    phone: "508 233 0563",
    age: Math.floor((new Date().getTime() - new Date("11/01/2000").getTime()) / 3.15576e+10),
    email: "josephrodman5@gmail.com",
    college: "University of Utah",
    degree: "B.S. In Computer Science",
    graduationDate: "Expected May 2023",
    classes: [
      "Introduction to OOP",
      "Algorithms",
      "Software Practice 1 & 2",
      "Artificial Intelligence",
      "Database Systems",
      "Computer Architecture",
      "Calculus 1-3",
      "Discrete Structures",
    ],
    heroItems: "Student, Developer",
    resumeSummary: `Rising senior studying Computer Science at the University of Utah with two years of Industry Experience developing applications in javascript.`,
    myTitle: "Software Developer and Student",
    aboutMe: `
    I'm a 4th year Computer Science student at the University of Utah, I love to code, and I'm passionate about developing software that simplifies and improves people's lives. I spent my 2022 summer as a full stack intern at Fidelity Investments, working alongside another intern to develop an AutoSys job management web app for internal use by the Fixed Income chapter of Asset Management. I'm currently applying for full time software development positions whose start date is in Summer 2023, as I expect to graduate this upcoming spring. While most of my industry experience has been in full stack web development, I’m open to all positions which heavily involve programming.
    `,
    websiteUrl: "https://josephrodman.com",
    hireMe: [
      `I expect to graduate in Spring 2023, and I’m looking for an opportunity where I can have an immediate and substantial impact, and where I’m challenged to grow my technical skills. While most of my experience is in web development, I'm interested in all positions which heavily involve programming.`,
      `My passions are in baseball analytics, personal finance, and the outdoors. I would love to apply my tech skills to a project in one of these areas - developing software to teach personal finance, effectively plan backpacking trips, or accurately project MLB player statistics using statcast data and historical trends would be really cool.`,
      `That being said, I really just love coding and being challenged to grow my technical skills. None of my previous jobs or school projects have involved any of my passions, but I’ve enjoyed them all because I just enjoy coding.`,
    ],
    projectsDescription: `
    I've linked the github pages for each of my personal projects, but I can't share the code for any projects done for school.
    `,
    projects: [
      {
        link: "https://github.com/jorodman/MLBStats",
        name: "MLB Stats",
        description: "Webapp that presents sortable MLB statistical league leaders and a player search page. Developed using Angular and PrimeNG, deployed using AWS S3 and Cloudfront"
      },
      {
        link: "https://github.com/jorodman/SpotifyExtension",
        name: "Spotify Playlists",
        description: "Webapp that uses the Spotify API to create and update playlists for users based off of their top songs. The UI is a bootstrap html template, the front end uses javascript, and the backend uses express and a MySQL database",
      },
      {
        link: "https://github.com/jorodman/me",
        name: "Personal Website",
        description: "A bootstrap template that I converted to use React compontents. Deployed via GitHub pages and configured CD with GitHub actions"
      },
      {
        name: "Secure Text Message Transfer",
        description: "Securely sends text messages between two computers, developed using java’s cryptography and socket libraries",
      },
      {
        name: "Peer to Peer File Sharing",
        description: "Mimics peer-to-peer file sharing to send files between computers using java’s TCP socket library"
      },
      {
        name: "Tank Wars Multiplayer Game",
        description: "Developed client and server programs for a multiplayer tank wars game, written in C#, done with a partner as part of Software Practice 1"
      }
    ],
    skillsParagraph: `
    I've been developing frontend and backend applications for two years between my time working at Fidelity, nView, and iLumens inc. I've had industry experience with Angular (Fidelity), React/Redux (iLumens), Django (Fidelity, iLumens), and SQL (Fidelity, nView), while my experience with Java, C#, and C++ comes from school projects. While I'm comfortable using all of the aforementioned technologies, at this point I’m confident that I can pretty easily pick up any language or technology.
    `,
    jobs: [
      {
        company: "Fidelity Investments",
        title: "Full Stack Development Intern",
        duration: "Just 2022 - August 2022",
        location: "Boston, MA",
        accomplishments: [
          "Developed a web app to manage AutoSys Workload Automation jobs using Angular, Django, S3 & EC2",
          "Responsible for configuring the secure deployment of the backend on an EC2 using nginx and gunicorn",
          "Developed a multi parameter search to filter through 90,000 AutoSys jobs",
          "Extensively documented the dev setup, architecture, and deployment for a seamless transition to other developers after my internship ended",
        ]
      },
      {
        company: "iLumens",
        title: "Full Stack Developer",
        duration: "August 2021 - May 2022",
        location: "Salt Lake City, UT",
        accomplishments: [
          "Developed a frontend and backend for dashboard widgets that controlled lights, monitored sensor states, and configured custom lighting schedules",
          "Developed a customizable notification system for users to monitor sensors at their facilities",
          "Wrote a backend test suite and initiated the start of extensive documentation before interviewing and hiring my successor",
        ]
      },
      {
        company: "nView Medical",
        title: "Software Developer",
        duration: "March 2020 - May 2021",
        location: "Salt Lake City, UT",
        accomplishments: [
          "Worked in an agile environment to develop software used to view 3D X-rays and manage surgical procedure data",
          "Improved software reliability through the application of OOP principles while re-architecting existing code",
          "Implemented a relational database used to save procedure data. This enabled previous procedures & images to be reloaded, simplifying image quality reviews, and enabled comparisons of images within a live procedure while tracking important compliance metadata like radiation levels",
        ]
      },
    ],

}