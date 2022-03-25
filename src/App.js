import Cards from "./components/cards/Cards";
import categories from './data.js';
import Header from './components/header/Header.js'
import Logo from "./components/logo/Logo";
import './App.css'



function App() {
  return (
    <div>
      <Logo />
      <div className="appContainer">
      <Header />
      {categories.map((item) =>{
        const {name, img, options} = item
        return(
          <div className='myContainer'>
            <Cards cardName = {name} cardImg = {img} cardOptions = {options}/>
          </div>
        )

      })}
      </div>
    </div>
  );
}

export default App;
