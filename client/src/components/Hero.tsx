import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import content from '../assets/content/hero.json';

const ICON_MAP = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  email: MdEmail,
};

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: keyof typeof ICON_MAP;
  label: string;
}) => {
  if (!ICON_MAP[icon]) {
    throw new Error(`Invalid icon: ${icon}`);
  }
  const Icon = ICON_MAP[icon];
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
      <Icon className="h-6 w-6" />
    </a>
  );
};

export default function Hero() {
  return (
    <section className="md:px-14 lg:px-20 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen place-items-center md:gap-x-10 lg:gap-x-20">
        <div className="flex flex-col justify-center items-center md:items-start max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
          <h1 className="tracking-tight text-gray-900 sm:text-4xl lg:text-5xl xl:text-6xl text-3xl">
            {content.title}
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            {content.description}
          </p>
          <div className="mt-6 flex items-center gap-x-6">
            {content.socials.map((social) => (
              <SocialLink
                key={social.label}
                href={social.url}
                icon={social.icon as keyof typeof ICON_MAP}
                label={social.label}
              />
            ))}
          </div>
          <div className="mt-8 flex items-center gap-x-6">
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              {content.primary_cta.text}
            </a>
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="relative w-full">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/tJ9E90KgIdg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
