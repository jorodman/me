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
    aboutMe: `I'm a rising senior studying Computer Science student at the University of Utah, 
    passionate about utilizing technology to solve problems. 
    I'll be working as a Software Development Intern at Fidelity Investments in Boston during summer 2022. 
    Previously, during my junior year, I worked in a software development role for InnoSys Inc in Salt Lake City, 
    developing a web app for their IoT management platform. 
    During my sophomore year I worked on developing the user interface and database system for an X-ray Imaging 
    System while I worked for nView Medical. My biggest interests outside of programming are investing and 
    teaching, the latter of which I sought after my sophomore year as a TA for Introduction to Object Oriented 
    Programming. In my free time I enjoy playing guitar, rock climbing, hiking, and snowboarding.`,
    websiteUrl: "https://josephrodman.com",
    hireMeP1: `
    I plan to graduate in Spring 2023 and am looking for an opportunity that will challenge me to become a better developer and one where I would have the opportunity to work on a project that I'm passionate about. 
    While most of my experience is in web development, I'm interested in all kinds of opportunities within technology where I can use programming to solve real world problems.
    `,
    hireMeP2: `
    I'm really interested in personal finance, teaching, music, the outdoors, and sports.
    I would love to apply my tech skills to a project in one of these areas -
    that could mean working in finance to develop software that teaches college students personal finance,
    it could be building a digital parking payment system for REI,
    it could mean developing a social network extension for Spotify that connects people using on music taste,
    or it could mean working with ESPN on developing a Tik-Tok like app to better deliver sports highlights to fans.
    `,
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
        I've worked on developing both frontend and backend javascript applications for two years between my time working at Fideliy, nView, and iLumens inc.
        Specifically, I've worked with with Angular2 (Fidelity), React/Redux (iLumens), and vanilla JS (nView).
        Each of those positions also leveraged other technologies, as we worked with Django at both Fidelity and iLumens, while at nView and at Fidelity I was exposed to SQL.
        My experience with Java, C#, and C++ comes from school projects. 
        While I'm comfortable using all of the aforementioned technologoes, at this point I know that I can pretty easily pick up any language or technology as I have done so plenty of times before.
    `,
    jobs: [
      {
        company: "nView Medical",
        title: "Software Developer",
        duration: "March 2020 - May 2021",
        location: "Salt Lake City, UT",
        accomplishments: [
            "Assisted in development of the UI, database system, and web server for an X-ray imaging system",
            "Greatly improved system reliability by re-architecting lots of existing code to be more Object Oriented. This included designing and implementing a relational database",
            "Implemented both a mouse and touch interface using Javascript, HTML and CSS",
            "Acquired vanilla Javascript, Node.js, SQL, git and linux command line skills to complete the work",
            "I’ll leave it at that but feel free to ask me more about these projects, I would love to explain more in depth!",
        ]
      },
      {
        company: "iLumens",
        title: "Software Developer",
        duration: "August 2021 - May 2022",
        location: "Salt Lake City, UT",
        accomplishments: [
          "Developed features for an IoT management webapp focussed on facility management using React/Redux and Python (django)",
          "Features included light scheduling, a notification system, and tools to monitor and controls sensors",
        ]
      }
    ],

}