import { GitHub, Linkedin } from "react-feather";
import Tag from "./Tag";
import Image from "next/image";
import { useRouter } from "next/router";
import $ from "classname";

const Top = () => {
  const router = useRouter();
  const home = router.route === "/";

  return (
    <div className="md:mb-20">
      <header
        className={$(
          "flex md:border-gray-3 bg-bg opacity-95 w-full md:top-0 md:left-0 md:px-8 md:pt-6 md:pb-5 text-sm justify-between flex-wrap md:fixed",
          !home && "hidden md:flex"
        )}
      >
        <div className="flex items-center">
          <div className="mr-4 md:w-[40px] md:h-[40px] flex-grow">
            <Image
              width={120}
              height={120}
              src="/foto.png"
              priority
              className="rounded-full"
            />
          </div>
          <div className="flex flex-wrap leading-5">
            <div className="w-full md:w-auto">Ivo Sequeros del Rey</div>
            <div className="md:ml-16 text-gray-1 w-full md:w-auto">
              Engineering, Design &#x26; Innovation
            </div>
            <div className="flex text-gray-2 gap-4 text-sm items-center mt-1.5 ml-0.5 md:hidden">
              <a
                href="http://linkedin.com/in/ivo-s-393598131"
                target="_blank"
                className="hover:text-fg"
              >
                <Linkedin size="1em" />
              </a>
              <a
                href="https://github.com/isdelrey"
                target="_blank"
                className="hover:text-fg"
              >
                <GitHub size="1em" className="mt-0.5" />
              </a>
              <a
                href="mailto:ivosequeros@me.com"
                className="hover:text-fg text-xs"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="hidden text-gray-1 gap-5 items-center pl-[68px] md:flex">
          <a
            href="http://linkedin.com/in/ivo-s-393598131"
            target="_blank"
            className="hover:text-fg"
          >
            <Linkedin size="1em" />
          </a>
          <a
            href="https://github.com/isdelrey"
            target="_blank"
            className="hover:text-fg"
          >
            <GitHub size="1em" className="mt-0.5" />
          </a>
          <a href="mailto:ivosequeros@me.com" className="hover:text-fg">
            Contact
          </a>
        </div>
      </header>
    </div>
  );
};

export default Top;
