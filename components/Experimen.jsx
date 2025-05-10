import React from "react";

const Experimen = () => {
  const experiments = [
    {
      startDate: "Aug 2021",
      endDate: "Nov 2021",
      title: "Graphic Designer Intern",
      company: "PT. Sarana Mitra Anugrah",
      location: "Bogor, Indonesia",
    },
  ];

  return (
    <section id="experimen" className="py-8 bg-primary text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiments.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-white/90"
            >
              <p className="text-sm text-accent mb-2">
                {exp.startDate} - {exp.endDate}
              </p>
              <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
              <p className="text-sm text-white/70 flex items-start gap-1">
                <span className="text-white/50">•</span>
                {exp.company}, {exp.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experimen;
