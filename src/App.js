import './App.css';
import Header from './components/Header/Header.js';
import BannerWithDesctiption from './components/BannerWithDescription/BannerWithDescription.js';
import Card from './components/Card/Card.js';
import CTASection from './components/CTASection/CTASection.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <>
      <Header />
      <BannerWithDesctiption />
      <Card />
      <BannerWithDesctiption />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
