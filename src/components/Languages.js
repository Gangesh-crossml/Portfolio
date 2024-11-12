export default function Languages() {
    const languages = [
      { name: 'English', level: 'Native' },
      { name: 'Spanish', level: 'Fluent' },
      { name: 'French', level: 'Intermediate' },
    ]
  
    return (
      <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Languages</h2>
        <ul className="list-disc list-inside">
          {languages.map((lang, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-300">
              {lang.name} - {lang.level}
            </li>
          ))}
        </ul>
      </section>
    )
  }