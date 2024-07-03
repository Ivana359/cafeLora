import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header/header';
import { Banner } from '../components/banner/banner';
import { Gallery } from '../components/gallery/gallery';
import { Contact } from '../components/contact/contact';
import { Footer } from '../components/footer/footer';
import { Menu } from '../components/menu/menu';

const response = await fetch ("http://localhost:4000/api/drinks")
const json = await response.json()
const drinks = json.data

document.querySelector('#root').innerHTML = render(
  <div className="page">
   <Header />
    <main>
      <Banner />
      <Menu drinks = {drinks} />
      <Gallery />
      <Contact />
    </main>
   <Footer />
  </div>
);


const rolloutNav = document.querySelector(".rollout-nav")

document.querySelector(".nav-btn").addEventListener("click", () => {
  rolloutNav.classList.toggle("nav-closed")
})

rolloutNav.addEventListener("click", () => {
  rolloutNav.classList.add("nav-closed")
})