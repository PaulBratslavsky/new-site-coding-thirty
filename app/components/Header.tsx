import { Link } from "@remix-run/react";

interface HeaderProps {
  data: {
    id: string;
    caption: string;
    heading: string;
    subHeading: string;
    heroLink: {
      id: string;
      url: string;
      text: string;
      newTab: boolean;
    };
    image: {
      data: {
        id: string;
        attributes: {
          name: string;
          alternativeText: string;
          formats: {
            medium: {
              url: string;
            }
          };
        }
      }
    };
  }
}

export default function Header({ data: {  caption, heading, subHeading, heroLink, image } }: HeaderProps) {
  const { alternativeText, formats } = image.data.attributes;
  const imageSrc = formats.medium.url;

  return (
    <section className="pt-6 bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-8 p-8 bg-gray-900 rounded-3xl">
          <div className="flex flex-wrap lg:items-center -m-8">
            <div className="w-full md:w-1/2 p-8">
              <div className="md:max-w-lg mx-auto">
                <span className="inline-block mb-3 text-sm text-pink-500 font-bold uppercase tracking-widest">
                  {caption}
                </span>
                <h1 className="font-heading mb-4 text-5xl text-white font-black tracking-tight">
                  <span>{heading}</span>
                </h1>
                <p className="mb-6 text-xl text-gray-500 font-bold">
                  {subHeading}
                </p>
                <div className="flex flex-wrap -m-2">
                  <div className="w-full md:w-auto p-2">
                    <Link
                      className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                      to={heroLink.url}
                    >
                      {heroLink.text}
                    </Link>
                  </div>
                  <div className="w-full md:w-auto p-2"></div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="max-w-max mx-auto md:mr-0 bg-white overflow-hidden rounded-3xl">
                <img
                  className="mx-auto"
                  src={imageSrc}
                  alt={alternativeText || "Alt text is missing"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
