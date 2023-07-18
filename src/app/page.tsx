import Feature from "./components/feature2"
import Hero from "./components/hero"
import LogoCloud from "./components/logoCloud"
import Navbar from "./components/navbar"
import Testimonial from "./components/testimonial"

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <LogoCloud/>
      <Feature/>
      <Testimonial/>
    </>
  )
}