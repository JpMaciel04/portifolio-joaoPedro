import Background from './components/Background/Background'
import Nav from './components/Nav/Nav'
import Hero from './sections/Hero/Hero'
import Projetos from './sections/Projetos/Projetos'
import SobreMim from './sections/SobreMim/SobreMim'
import Experiencias from './sections/Experiencias/Experiencias'
import Contatos from './sections/Contatos/Contatos'
import './App.css'

function App() {
  return (
    <div className="page">
      <Background />
      <Nav />
      <Hero />
      <Projetos />
      <SobreMim />
      <Experiencias />
      <Contatos />
    </div>
  )
}

export default App
