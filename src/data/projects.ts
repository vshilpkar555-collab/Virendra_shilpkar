export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  platforms: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Sportimo",
    category: "Sports / Fantasy / Social",
    description: "A mobile sports experience featuring predictions, leaderboards, polls, and real-time engagement via push notifications and chat.",
    technologies: ["Flutter", "Dart", "BLoC", "Firebase", "WebSockets", "Cloud Functions"],
    image: "/projects/sportimo.webp",
    platforms: ["Android", "iOS"],
    featured: true,
  },
  {
    title: "Whanger",
    category: "Fashion / Lifestyle",
    description: "A fashion-focused mobile application (formerly Wardrobe Wizard) helping users manage their wardrobe and style choices.",
    technologies: ["Flutter", "REST APIs", "Image Processing"],
    image: "/projects/wardrobe.webp",
    link: "https://apps.apple.com/in/app/whanger/id6446269939?l=te",
    platforms: ["Android", "iOS"],
    featured: true,
  },
  {
    title: "Sabjifal",
    category: "E-commerce / Grocery",
    description: "An easy-to-use online shopping app for fresh vegetables and fruits with fast, reliable home delivery and secure checkout.",
    technologies: ["Flutter", "Firebase", "REST APIs"],
    image: "/projects/sabjifal.webp",
    link: "https://play.google.com/store/apps/details?id=com.sabji.fal&hl=en_IN",
    platforms: ["Android"],
    featured: true,
  },
  {
    title: "ChromePay",
    category: "Banking / Financial",
    description: "A comprehensive bank management application aimed at enhancing banking operations, improving customer experience, and ensuring high security standards.",
    technologies: ["Flutter", "Dart", "BLoC", "Firebase", "Secure Storage", "SQflite"],
    image: "/projects/chromepay.webp",
    platforms: ["Android"],
    featured: true,
  },
  {
    title: "DLC – The Learning Club",
    category: "Education",
    description: "An educational mobile application designed to provide learning resources and interactive content for students.",
    technologies: ["Android", "Java", "Firebase"],
    image: "/projects/dlc.webp",
    link: "https://play.google.com/store/apps/details?id=com.theLearningcLub&hl=en_IN",
    platforms: ["Android"],
    featured: false,
  },
  {
    title: "Video & Audio Player",
    category: "Multimedia / Utility",
    description: "A robust multimedia playback application featuring seamless file management, seeking, and background playback support.",
    technologies: ["Java", "XML", "Firebase", "Local Storage", "SQLite"],
    image: "/projects/multimedia.webp",
    platforms: ["Android"],
    featured: false,
  }
];
