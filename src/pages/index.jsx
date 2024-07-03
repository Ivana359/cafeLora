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

const formElm = document.querySelectorAll('form');
formElm.forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(form.dataset.id);

    console.log(drinks);

    const foundDrink = drinks.find((drink) => drink.id === Number(form.dataset.id));
    const ordered = foundDrink.ordered;
    console.log(foundDrink);

    await fetch(`http://localhost:4000/api/drinks/${form.dataset.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        { op: 'replace', path: '/ordered', value: !ordered },
      ]),
    });

    window.location.reload();
  });
});