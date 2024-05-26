export const vals = {
    location: "Salt Lake City, UT",
    phone: "508 233 0563",
    age: Math.floor((new Date().getTime() - new Date("11/01/2000").getTime()) / 3.15576e+10),
    email: "josephrodman5@gmail.com",
    college: "University of Utah",
    degree: "B.S. In Computer Science",
    graduationDate: "May 2023",
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
    heroItems: "Software Engineer", 
    resumeSummary: `Full stack Software Engineer with with three years of Industry Experience developing applications in javascript.`,
    myTitle: "Full Stack Software Engineer",
    aboutMe: `
    Since taking my first programming class in 2019, I've been captivated by the realm of software engineering. I consider myself fortunate to have a career that not only keeps me engaged but also presents daily opportunities for growth and problem-solving. Joining Marq in 2023 as a Software Engineer has been a rewarding journey. Working alongside a great engineering team, I've had the pleasure of contributing to their cloud-based design tool while learning a lot from those around me. Working within a small team amidst a large legacy codebase, I've embraced the chance to take ownership of projects with significant user impact
    `,
    websiteUrl: "https://josephrodman.com",
    hireMe: [
      `I expect to graduate in Spring 2023, and I’m looking for an opportunity where I can have an immediate and substantial impact, and where I’m challenged to grow my technical skills. While most of my experience is in web development, I'm interested in all positions which heavily involve programming.`,
      `My passions are in baseball analytics, personal finance, and the outdoors. I would love to apply my tech skills to a project in one of these areas - developing software to teach personal finance, effectively plan backpacking trips, or accurately project MLB player statistics using statcast data and historical trends would be really cool.`,
      `That being said, I really just love coding and being challenged to grow my technical skills. None of my previous jobs or school projects have involved any of my passions, but I’ve enjoyed them all because I just enjoy coding.`,
    ],
    projectsDescription: `
    I've linked the github pages for each of my personal projects.
    `,
    projects: [
      {
        link: "https://github.com/jorodman/HuddleUpCopy",
        name: "Huddle Up (Capstone Project)",
        description: "A fantasy football webapp in which users manage a team together to recreate the comradery of traditional team sports"
      },
      {
        link: "https://github.com/jorodman/MLBStats",
        name: "MLB Stats",
        description: "Webapp that presents sortable MLB statistical league leaders and a player search page. Developed using Angular and PrimeNG, deployed using AWS S3 and Cloudfront. (API has been deprecated so the webapp no longer works :/"
      },
      {
        link: "https://github.com/jorodman/SpotifyExtension",
        name: "Spotify Playlists",
        description: "Webapp that uses the Spotify API to create and update playlists for users based off of their top songs. The UI is a bootstrap html template, the front end uses javascript, and the backend uses express and a MySQL database",
      },
      // {
      //   link: "https://github.com/jorodman/me",
      //   name: "Personal Website",
      //   description: "A bootstrap template that I converted to use React compontents. Deployed via GitHub pages and configured CD with GitHub actions"
      // },
    ],
    skillsParagraph: `
    I've been developing web applications for three years. I've had industry experience with Angular (Marq), Scala (Marq), React (iLumens), Django (Fidelity, iLumens), and SQL (Marq, Fidelity, nView), while my experience with Java, C#, and C++ comes from school projects.
     While I'm comfortable using all of the aforementioned technologies, at this point I’m confident that I can pretty easily pick up any language or technology.
    `,
    jobs: [
      {
        company: "Marq (formerly Lucidpress)",
        title: "Software Engineer II",
        duration: "February 2023 - Present",
        location: "Draper, UT",
        accomplishments: [
          "Collaborated with my team in an agile environment to develop new features for a document editor",
          "Built a brand-controlled Dynamic QR Code feature with integrated analytics, completing the project in 3 months",
          "Created Datadog metrics and alerts to monitor the Dynamic QR Codes feature",
          "Heavily contributed to a multi-brand template library team project",
          "Identified and resolved a Bazel OOM issue that caused Jenkins builds to fail",
          "Prioritized tackling tech debt and improving the codebase by removing feature flags, removing deprecated code, and adding documentation",
          "Utilized Datadog and Splunk to debug production issues as part of the on-call rotation",
          "Full stack development using Angular and Scala",
        ]
      },
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