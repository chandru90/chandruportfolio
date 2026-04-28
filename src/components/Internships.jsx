import SectionTitle from "./SectionTitle";

// Correct the import path based on the folder structure
import settylLogo from "./settyl_corporation_logo.jpg";
import grethenalogo from "./grethena.jpg"
const Internships = () => {
  const internships = [
    {
      logo: settylLogo,
      company: "Settyl Tech India Private Limited",
      position: "Full Stack Engineer I - Intern",
      period: "April 2024 - May 2024 (Offline Internship)",
      description: `Worked as a Full Stack Engineer intern, focusing on debugging and resolving application issues. 
      Analyzed code flow across both front-end and back-end to identify root causes and ensure smooth functionality 
      and performance.`,
    },
    {
      logo: grethenaLogo,
      company: "Grethena Limited",
      position: "Junior Full Stack Developer",
      period: "Jan 2025 - May 2026",
      description: `Developed responsive user interfaces using React.js, Next.js, and Tailwind CSS. 
      Implemented scalable state management solutions and improved application performance. 
      Worked with Node.js and MongoDB for backend development, integrated secure payment gateways, 
      and ensured SEO optimization and accessibility compliance.`,
    },
  ];

  return (
    <section className="py-20 align-element" id="internships">
      <SectionTitle text="Internship" />

      {internships.map((internship, index) => (
        <div
          key={index}
          className="py-16 flex flex-col md:flex-row items-center md:items-start"
        >
          <div className="flex flex-col items-center md:items-start md:w-1/3 mb-8 md:mb-0">
            <img
              src={internship.logo}
              alt={`${internship.company} logo`}
              className="h-16 w-16 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              {internship.company}
            </h3>
            <h2 className="text-lg font-medium mb-2">
              {internship.position}
            </h2>
            <p className="text-gray-600">{internship.period}</p>
          </div>

          <div className="md:w-2/3">
            <p className="text-gray-600 leading-relaxed mt-10">
              {internship.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Internships;
