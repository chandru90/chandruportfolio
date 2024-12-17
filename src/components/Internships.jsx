import SectionTitle from "./SectionTitle";

const Internships = () => {
  const internship = {
    logo: "src/assets/settyl_corporation_logo.jpg",
    company: "Settyl Tech India Private Limited",
    position: "Full Stack Engineer I - Intern",
    period: "April 2024 - May 2024 (offline Internship)",
    description: `As a Full Stack Engineer, I engaged in the process of debugging errors
                  within our application framework. This involved analyzing the code
                  flow to identify and resolve issues effectively. By understanding both front-end 
                  and back-end technologies, I navigated through code structures to pinpoint root 
                  causes of errors, ensuring seamless functionality and optimal performance of the application.`,
  };

  return (
    <section className="py-20 align-element" id="internships">
      <SectionTitle text="Internship" />
      <div className="py-16 flex flex-col md:flex-row items-center md:items-start">
        <div className="flex flex-col items-center md:items-start md:w-1/3 mb-8 md:mb-0">
          <img
            src={internship.logo}
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
