import Hero from '../components/hero/Hero'
import OurStory from '../components/ourStory/OurStory'
import MenuHighlight from '../components/menuHighlight/MenuHighlight'
import NewsLetter from '../components/newsletter/NewsLetter'
import FadeUp from "../components/fadeUp/FadeUp";

const Home = () => {
  return (
    <div>
      <Hero />

      <FadeUp direction="right">
        <OurStory />
      </FadeUp>
      
      <FadeUp direction="left">
        <MenuHighlight />
      </FadeUp>
      
      <FadeUp direction="right">
        <NewsLetter />
      </FadeUp>
    </div>
  )
}

export default Home
