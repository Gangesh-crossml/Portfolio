export default function Skills() {
  const skills = [
    { category: "Programming Languages", items: ["Python", "C++"] },
    { category: "Python Frameworks", items: ["Django"] },
    { category: "UI Technologies", items: ["HTML", "CSS"] },
    { category: "IDE and Other Tools", items: ["VS Code", "Anaconda (Jupyter Notebook)"] },
    { category: "Operating Systems", items: ["Windows", "Linux"] },
    { category: "Source Controls", items: ["Git"] },
    { category: "Other Skills", items: ["MySQL", "Docker", "Jira"] },
  ]

  return (
    <section id="skills" className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Skills</h2>
      {skills.map((skillGroup, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{skillGroup.category}</h3>
          <ul className="list-disc list-inside">
            {skillGroup.items.map((skill, skillIndex) => (
              <li key={skillIndex} className="text-gray-600 dark:text-gray-400">{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}