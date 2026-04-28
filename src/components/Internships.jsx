import SectionTitle from "./SectionTitle";

// Correct the import path based on the folder structure
import settylLogo from "./settyl_corporation_logo.jpg";
import grethenalogo from "./grethena.jpg"
const Internships = () => {
  const internship = [{
    logo: settylLogo, // Correctly imported image
    company: "Settyl Tech India Private Limited",
    position: "Full Stack Engineer I - Intern",
    period: "April 2024 - May 2024 (offline Internship)",
    description: `As a Full Stack Engineer, I engaged in the process of debugging errors
                  within our application framework. This involved analyzing the code
                  flow to identify and resolve issues effectively. By understanding both front-end 
                  and back-end technologies, I navigated through code structures to pinpoint root 
                  causes of errors, ensuring seamless functionality and optimal performance of the application.`},
 { logo: grethenalogo, // Correctly imported image
    company: "Grethena Limited",
    position: "Junior Full Stack Developer",
    period: "Jan 2025 - May 2026 ",
    description: `As a  full stack developer specialised in front end technologies React.js , Next.js and Tailwind CSS, building responsive and user-friendly interfaces.Implemented state management solutions using Context API and other modern libraries to ensure scalable application architecture.Possess strong understanding of Technical SEO, improving web application visibility and performance.Have good knowledge in integrating secure payment gateways within web applications.Worked with backend technologies including Node.js and MongoDB to develop and support full-stack featureOptimized application performance, significantly improving load times and overall efficiencyFollow best practices in clean coding, maintainable architecture, and version control.Ensure compliance with web accessibility guidelines (WCAG) to create inclusive user experiences. give as summary`,
  }]              };

  return (
    <section className="py-20 align-element" id="internships">
      <SectionTitle text="Internship" />
      <div className="py-16 flex flex-col md:flex-row items-center md:items-start">
        <div className="flex flex-col items-center md:items-start md:w-1/3 mb-8 md:mb-0">
          <img
            src={internship.logo} // Correct usage of imported image
            alt={`${internship.company} logo`}
            className="h-16 w-16 object-contain mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{internship.company}</h3>
          <h2 className="text-xl font-semibold mb-2">{internship.position}</h2>
          <p className="text-gray-600">{internship.period}</p>
        </div>

        <div className="md:w-2/3">
          <p className="text-gray-600 leading-relaxed mt-10">
            {internship.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Internships;
