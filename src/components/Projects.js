export default function Projects() {
  const projects = [
    {
      name: "Emotion Based Music Recommendation System",
      role: "Backend Developer",
      tech: "Python",
      environment: "VS Code and Jupyter notebook",
      description: "The Emotion Mapping based Music Recommendation System is to provide users with suggestions that match their emotions & to assist them accordingly. Image is first captured and then converted to an emoji, and future analysis is done through the emoji's face."
    }
  ]

  return (
    <section id="projects" className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Academic Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.name}</h3>
          <p className="text-gray-600 dark:text-gray-300">Role: {project.role}</p>
          <p className="text-gray-600 dark:text-gray-300">Technology Used: {project.tech}</p>
          <p className="text-gray-600 dark:text-gray-300">Environment: {project.environment}</p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
        </div>
      ))}
    </section>
  )
}