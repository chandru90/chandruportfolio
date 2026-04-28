import SectionTitle from "./SectionTitle";

// Correct the import path based on the folder structure
import settylLogo from "./settyl_corporation_logo.jpg";
import grethenalogo from "./grethena.jpg";

const Internships = () => {
  const internship = [
    {
      logo: settylLogo,
      company: "Settyl Tech India Private Limited",
      position: "Full Stack Engineer I - Intern",
      period: "April 2024 - May 2024 (offline Internship)",
      description: `As a Full Stack Engineer, I engaged in the process of debugging errors
      within our application framework. This involved analyzing the code flow to identify
      and resolve issues effectively. By understanding both front-end and back-end technologies,
      I navigated through code structures to pinpoint root causes of errors, ensuring seamless
      functionality and optimal performance of the application.`
    },
    {
      logo: grethenalogo,
      company: "Grethena Limited",
      position: "Junior Full Stack Developer",
      period: "Jan 2025 - May 2026",
      description: `As a Full Stack developer, specialized in front-end development using React.js,
      Next.js and Tailwind CSS, building responsive and user-friendly interfaces. Implemented state
      management solutions using Context API and other modern libraries to ensure scalable architecture.
      Possess strong understanding of Technical SEO, improving web application visibility and performance.
      Have good knowledge in integrating secure payment gateways within web applications.
      Worked with backend technologies including Node.js and MongoDB to develop and support full-stack features.
      Contributed to the development of event booking systems, focusing on seamless user experience and reliability.`
    }
  ];

  return (
    <section className="py-20 align-element" id="internships">
      <SectionTitle text="Work Experience" />

      {internship.map((item, index) => (
        <div
          key={index}
          className="py-16 flex flex-col md:flex-row items-center md:items-start"
        >
          <div className="flex flex-col items-center md:items-start md:w-1/3 mb-8 md:mb-0">
            <img
              src={item.logo}
              alt={`${item.company} logo`}
              className="h-16 w-16 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.company}</h3>
            <h2 className="text-xl font-semibold mb-2">{item.position}</h2>
            <p className="text-gray-600">{item.period}</p>
          </div>

          <div className="md:w-2/3">
            <p className="text-gray-600 leading-relaxed mt-10">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Internships;
