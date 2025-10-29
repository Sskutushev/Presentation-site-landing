import { CursorGlow } from './components/common/CursorGlow'
import { Header } from './components/sections/0_Header'
import { HeroSection } from './components/sections/1_HeroSection'
import { ProblemSection } from './components/sections/2_ProblemSection'
import { SolutionSection } from './components/sections/3_SolutionSection'
import { UpaSection } from './components/sections/4_UpaSection'
import { FeaturesTable } from './components/sections/5_FeaturesTable'
import { StatusSection } from './components/sections/6_StatusSection'
import { RoadmapSection } from './components/sections/7_RoadmapSection'
import { ContactSection } from './components/sections/8_ContactSection'

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <CursorGlow />
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <UpaSection />
      <FeaturesTable />
      <StatusSection />
      <RoadmapSection />
      <ContactSection />
    </main>
  )
}

export default App