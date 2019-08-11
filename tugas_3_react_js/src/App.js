import React, {Component} from 'react';
import MenuKontak from './page/MenuKontak';
import MenuTentangKami from './page/MenuTentangKami';
import MenuMakanan from './page/MenuMakanan';
import Header from './page/Header';
import Footer from './page/Footer';

class App extends Component {
  render(){
    return (
      <div>
        <Header /> 
        <MenuMakanan />
        <MenuTentangKami />
        <MenuKontak />
        <Footer />
      </div>
    );
  }
}

export default App;
