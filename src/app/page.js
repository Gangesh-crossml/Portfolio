import Header from '@/components/Header'
import About from '@/components/About'
import LatestProjects from '@/components/LatestProjects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Educations'
import Languages from '@/components/Languages'
import GitHubActivity from '@/components/GitHubActivity'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <About />
            <LatestProjects />
            <Experience />
            <GitHubActivity />
          </div>
          <div>
            <Skills />
            <Education />
            <Languages />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}