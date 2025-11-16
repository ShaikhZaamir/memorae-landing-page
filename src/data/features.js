import { Bell, Calendar, List, Camera, Mic, Brain } from "lucide-react";

export const features = [
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Smart Reminders",
    description:
      "Set one-time or recurring reminders with natural language. Daily, weekly, or custom intervals.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Calendar Sync",
    description:
      "Full Google Calendar integration. Add, edit, and delete events seamlessly via chat.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <List className="w-6 h-6" />,
    title: "Intelligent Lists",
    description:
      "Create shopping lists, to-dos, and notes. Organized, accessible, always at hand.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Image Recognition",
    description:
      "Send photos of recipes, posters, or notes. AI creates tasks automatically from images.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Voice Notes",
    description:
      "Speak naturally in any language. Automatic transcription in 100+ languages.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "ChatGPT Integration",
    description:
      "Ask questions, analyze data, get summaries. Your AI assistant inside WhatsApp.",
    color: "from-pink-500 to-rose-500",
  },
];
