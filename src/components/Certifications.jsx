import SectionTitle from "./SectionTitle";

// Correct the import path based on the folder structure
import settylLogo from "./settyl_corporation_logo.jpg";
import grethenalogo from "./grethena.jpg";
import logo from "./linkedin.png";

const Certifications = () => {
  const internship = [
    {
      logo: logo,
      company :"Linkedin",
      description: `SQL Essential Learning`
    },
    {
      logo: logo,
       company :"Linkedin",
      description: `Carrer essentials in Data Analysis by Microsoft and linkedin`
    }
  ];

  return (
    <section className="py-20 align-element" id="internships">
      <SectionTitle text="Certification" />

      {internship.map((item, index) => (
        <div
  key={index}
  className="relative py-4 mt-8 overflow-hidden rounded-xl"
>
  {/* Overlay background */}
  <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

  {/* Content */}
  <div className="relative flex flex-col md:flex-row items-center md:items-start p-6 gap-4">
    <div className="flex flex-col items-center md:items-start md:w-1/6">
      <img
        src={item.logo}
        alt={`${item.company} logo`}
        className="h-10 w-16 object-contain mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{item.company}</h3>

    </div>

    <div className="md:w-2/3">
      <p className="text-3xl font-semibold mb-2 ml-60 mt-4">
        {item.description}
      </p>
    </div>
  </div>
</div>
      ))}
    </section>
  );
};

export default Certifications;