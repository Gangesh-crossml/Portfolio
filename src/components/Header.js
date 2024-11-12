import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/images/img.png"
              alt=""
              width={100}
              height={100}
              className="rounded-full mr-4"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Gangesh Kumar</h1>
              <h2 className="text-xl text-gray-600 dark:text-gray-300">Software Engineer</h2>
            </div>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#about"
                  className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200 transition duration-300 transform hover:scale-105"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-200 transition duration-300 transform hover:scale-105"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-200 transition duration-300 transform hover:scale-105"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-200 transition duration-300 transform hover:scale-105"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-pink-600 hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-200 transition duration-300 transform hover:scale-105"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
