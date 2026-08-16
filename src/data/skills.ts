import {
  Smartphone,
  Code2,
  Database,
  Cloud,
  Layout,
  Settings2,
  Globe,
  ShieldCheck,
  GitBranch,
  Terminal,
  Cpu,
  Layers
} from "lucide-react";

export interface Skill {
  name: string;
  description: string;
  category: string;
  icon: any;
}

export const skills: Skill[] = [
  // Mobile Development
  {
    name: "Flutter",
    description: "Cross-platform application development with scalable architecture and responsive UI.",
    category: "Mobile Development",
    icon: Smartphone,
  },
  {
    name: "Dart",
    description: "Expertise in Dart for building high-performance, reactive mobile applications.",
    category: "Mobile Development",
    icon: Code2,
  },
  {
    name: "Android (Java/Kotlin)",
    description: "Strong background in native Android development, bridging the gap between native and Flutter.",
    category: "Mobile Development",
    icon: Smartphone,
  },
  {
    name: "iOS Integration",
    description: "Experience in platform-specific configurations and production builds for iOS devices.",
    category: "Mobile Development",
    icon: Smartphone,
  },

  // State Management
  {
    name: "GetX",
    description: "High-performance state management, dependency injection, and route management.",
    category: "State Management",
    icon: Settings2,
  },
  {
    name: "BLoC",
    description: "Predictable state management using the Business Logic Component pattern.",
    category: "State Management",
    icon: Layers,
  },
  {
    name: "Provider",
    description: "A wrapper around InheritedWidget to make state management easier and more scalable.",
    category: "State Management",
    icon: Cpu,
  },

  // Backend & Cloud
  {
    name: "Firebase",
    description: "Auth, Firestore, Cloud Messaging, Analytics, Crashlytics, and Remote Config.",
    category: "Backend & Cloud",
    icon: Cloud,
  },
  {
    name: "REST APIs",
    description: "Consuming complex APIs, handling authentication, and optimized networking with Dio/Http.",
    category: "Backend & Cloud",
    icon: Globe,
  },
  {
    name: "WebSockets & Sockets",
    description: "Real-time, bi-directional communication for chat applications and live data updates.",
    category: "Backend & Cloud",
    icon: GitBranch,
  },
  {
    name: "TensorFlow Lite",
    description: "Integrating machine learning models for on-device image processing and smart features.",
    category: "Machine Learning",
    icon: Cpu,
  },
  {
    name: "Node.js & Laravel",
    description: "Experience with backend technologies for full-stack perspective and API development.",
    category: "Backend & Cloud",
    icon: Terminal,
  },

  // Storage & Tools
  {
    name: "SQLite / Sqflite",
    description: "Persistent local data storage and offline-first application strategies.",
    category: "Storage",
    icon: Database,
  },
  {
    name: "Git & GitHub",
    description: "Version control, collaborative development, and CI/CD workflow management.",
    category: "Development Tools",
    icon: GitBranch,
  },
  {
    name: "Deployment",
    description: "Publishing to Google Play Console and App Store Connect with full release management.",
    category: "Deployment",
    icon: ShieldCheck,
  }
];
