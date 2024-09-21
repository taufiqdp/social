import React from "react";
import {
  Github,
  Linkedin,
  Globe,
  Terminal,
  Code,
  Cpu,
  Brain,
} from "lucide-react";

import {
  SiHuggingface,
  SiLetterboxd,
  SiLastdotfm,
  SiSpotify,
  SiSteam,
} from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import meImg from "@/assets/me.jpg";
import LinkButton from "./link-button";

export function MainSocials() {
  const links = [
    { href: "https://github.com/taufiqdp", icon: Github, text: "GitHub" },
    {
      href: "https://huggingface.co/taufiqdp",
      icon: SiHuggingface,
      text: "HuggingFace",
    },
    {
      href: "https://linkedin.com/in/taufiq-dwi-purnomo",
      icon: Linkedin,
      text: "LinkedIn",
    },
    { href: "https://taufiqdp.com", icon: Globe, text: "Portfolio" },
    {
      href: "https://open.spotify.com/user/2qnyyb7sw3va7ohd7yqg3zqs6",
      icon: SiSpotify,
      text: "Spotify",
    },
    {
      href: "https://letterboxd.com/taufiqdp",
      icon: SiLetterboxd,
      text: "Letterboxd",
    },
    {
      href: "https://last.fm/user/taufiqdp",
      icon: SiLastdotfm,
      text: "Last.fm",
    },
    {
      href: "https://twitter.com/taufiqdp",
      icon: FaXTwitter,
      text: "Twitter",
    },
    {
      href: "https://steamcommunity.com/id/taufiqdp",
      icon: SiSteam,
      text: "Steam",
    },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 font-mono">
      <div className="w-full max-w-2xl bg-gray-900 rounded-lg shadow-2xl p-8 border-2 border-green-500">
        <div className="flex items-center mb-6 bg-gray-800 p-2 rounded">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-green-400">dev@taufiqdp:~$</span>
        </div>
        <div className="text-center mb-8">
          <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-lg">
            <img src={meImg.src} alt="Profile" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br y"></div>
          </div>
          <h1 className="text-2xl font-bold text-green-400 mb-2">
            Taufiq Dwi Purnomo
          </h1>
          <p className="text-gray-400 mb-4">
            Full-stack Developer | AI Enthusiast
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <Cpu className="text-blue-400" size={24} />
            <Terminal className="text-purple-400" size={24} />
            <Code className="text-green-400" size={24} />
            <Brain className="text-cyan-400" size={24} />
          </div>
        </div>
        <div className="space-y-3">
          {links.map((link, index) => (
            <LinkButton key={index} {...link} />
          ))}
        </div>
        <div className="mt-8 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Taufiq Dwi Purnomo</p>
        </div>
      </div>
    </div>
  );
}
