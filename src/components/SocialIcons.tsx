import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/asherkilner',
    icon: <FaGithub className="w-6 h-6" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/asher-kilner/',
    icon: <FaLinkedin className="w-6 h-6" />,
  },
];

export default function SocialIcons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-indigo-600 transition-colors"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
