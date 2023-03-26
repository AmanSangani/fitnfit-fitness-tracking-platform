import './App.css';
import Exersices from './components/Exercises/Exersices';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Start from './components/Start/Start';
import Price from './components/Price/Price';
import Testimonals from './components/Testimonals';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Exersices />
      <Start />
      <Price />
      <Testimonals />
      <Footer/>
    </div>
  );
}

export default App;
