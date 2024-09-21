import { Code } from "lucide-react";

export default function LinkButton({ href, icon: Icon, text }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between w-full p-3 mb-3 text-green-400 bg-gray-900 rounded hover:bg-gray-800 transition-colors duration-300 border border-green-700 group font-mono text-sm"
    >
      <div className="flex items-center">
        <Icon className="mr-3" size={18} />
        <span>{text}</span>
      </div>
      <Code
        size={16}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </a>
  );
}
