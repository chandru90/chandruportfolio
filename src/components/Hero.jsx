import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-5">
      <div className="align-element grid md:grid-cols-1 items-center gap-8">
        <article>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            FULL STACK DEVELOPER
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide"></p>
          <div className="flex gap-x-4 mt-4"></div>
        </article>
      </div>
    </div>
  );
};
export default Hero;
