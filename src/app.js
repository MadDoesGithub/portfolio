import React  from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';


const App = props => {
  return (
    <div data-theme="dracula" className='min-h-screen py-10 px-3 sm:px-5 bg-base-100'>
        <Navbar />
        <Card />
        <div class="divider"></div>
        <Footer />
      </div>
  );
}
export default App;