export default function Education() {
  const education = [
    {
      degree: "B.Tech",
      institution: "GNA UNIVERSITY",
      year: "2022",
    },
    {
      degree: "Intermediate",
      institution: "Cantt board sr. sec. school",
      year: "2018",
    },
    {
      degree: "High School",
      institution: "Cantt board sr. sec. school",
      year: "2016",
    }
  ]

  return (
    <section id="education" className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Education Background</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
          <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
          <p className="text-gray-600 dark:text-gray-300">{edu.year}</p>
        </div>
      ))}
    </section>
  )
}