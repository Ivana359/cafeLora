import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header/header';
import { Banner } from '../components/banner/banner';
import { Gallery } from '../components/gallery/gallery';
import { Contact } from '../components/contact/contact';
import { Footer } from '../components/footer/footer';
import { Menu } from '../components/menu/menu';

document.querySelector('#root').innerHTML = render(
  <div className="page">
   <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
   <Footer />
  </div>
);
