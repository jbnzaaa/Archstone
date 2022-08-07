import './App.css';
import Body from './components/Body';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Nav from './components/Nav';
import Offers from './components/Offers';

function App() {
  return (
    <>
      <Nav/>
      <Body/>
      <Intro/>
      <Offers/>
      <Contact/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;
