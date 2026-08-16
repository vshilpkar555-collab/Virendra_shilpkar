export interface Experience {
  company: string;
  role: string;
  duration: string;
  technologies: string[];
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    company: "Thinkdebug IT Solution, INDORE",
    role: "Native / Hybrid Application Developer (Technical Lead)",
    duration: "2021 - PRESENT",
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "BLoC", "Provider", "Dio", "Git"],
    responsibilities: [
      "Acted as the technical lead for mobile app development.",
      "Developing core features and animations using complex graphics frameworks.",
      "Implementing system configuration and reachability APIs for internet availability.",
      "Working with 3rd party APIs (social media) and involved in unit testing for robustness.",
      "Collaborating with clients and business teams to incorporate innovative solutions to optimize processes."
    ]
  },
  {
    company: "Service Hawk, BHOPAL",
    role: "Android Developer",
    duration: "2019 - 2021",
    technologies: ["Android", "Java", "Kotlin", "XML", "SQLite", "Firebase", "RESTful APIs"],
    responsibilities: [
      "Design and develop mobile applications from scratch.",
      "Monitor the entire application development lifecycle (design, test, support, and release).",
      "Add and optimize features as per specific requirements.",
      "Make and prepare releases of dynamic application components.",
      "Work on software analysis, troubleshooting, and debugging to improve UX."
    ]
  },
  {
    company: "Glorify, Bangaluru",
    role: "Android Developer",
    duration: "2019 - 2019",
    technologies: ["Android", "Java", "Kotlin", "RESTful API", "SQLite"],
    responsibilities: [
      "Learned and implemented Kotlin language for modern Android development.",
      "Learned to create responsive UI for different screen sizes and densities.",
      "Gained experience with offline storage, restful APIs and threading.",
      "Designed and developed mobile applications based on initial briefs."
    ]
  }
];
