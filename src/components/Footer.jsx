import Icon from "@mdi/react";
import { mdiFacebook, mdiTwitter, mdiGithub } from "@mdi/js";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 z-50">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 Dictle.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://facebook.com"
            className="text-blue-500 hover:text-blue-400"
          >
            <Icon path={mdiFacebook} size={1} />
          </a>
          <a
            href="https://twitter.com/igwefran6"
            className="text-blue-400 hover:text-blue-300"
          >
            <Icon path={mdiTwitter} size={1} />
          </a>

          <a
            href="https://github.com/Igwefran6/igwefran6"
            className="text-gray-400 hover:text-gray-400 transition duration-300 ease-in-out"
          >
            <Icon path={mdiGithub} size={1} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
