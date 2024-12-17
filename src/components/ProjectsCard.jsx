import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 overflow-hidden">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium text-gray-800">
          {title}
        </h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
        <div className="mt-6 flex flex-col gap-y-4">
          {/* Website Link */}
          <a
            href={url}
            className="flex items-center gap-x-2 text-slate-500 hover:text-blue-500 transition-colors duration-300 block"
          >
            <TbWorldWww className="h-8 w-8" />
            <span className="hidden md:inline">{url}</span>
          </a>
          {/* GitHub Link */}
          <a
            href={github}
            className="flex items-center gap-x-2 text-slate-500 hover:text-gray-700 transition-colors duration-300 block"
          >
            <FaGithubSquare className="h-8 w-8" />
            <span className="hidden md:inline">{github}</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
