export default function Experience() {
    const experiences = [
      {
        title: 'Associate Software Engineer',
        company: 'Crossml pvt. ltd.',
        period: '2023 - Present',
        description: 'Associate developer for various web applications using Python and Django.',
      },
      {
        title: 'Web Developer',
        company: 'Digital Innovations LLC',
        period: '2022 - 2023',
        description: 'Developed and maintained client websites using WordPress and custom PHP solutions.',
      },
      // Add more experiences as needed
    ]
  
    return (
      <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Work Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{exp.company} | {exp.period}</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.description}</p>
          </div>
        ))}
      </section>
    )
  }