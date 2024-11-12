import Image from 'next/image'

export default function LatestProjects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of Project 1',
      image: '/placeholder.svg?height=200&width=300',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2',
      image: '/placeholder.svg?height=200&width=300',
      link: '#',
    },
    // Add more projects as needed
  ]

  return (
    <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Latest Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
              >
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}