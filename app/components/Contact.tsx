// components/ContactLinks.tsx
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/henok-birhanu",
    icon: <FaLinkedin className="w-5 h-5" />
  },
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: <FaGithub className="w-5 h-5" />
  },
  // {
  //   name: "Twitter",
  //   url: "https://twitter.com/yourhandle",
  //   icon: <FaTwitter className="w-5 h-5" />
  // },
  {
    name: "Email",
    url: "mailto:henok9450@gmail.com",
    icon: <FaEnvelope className="w-5 h-5" />
  }
];

export default function ContactLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}