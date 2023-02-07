import Header from './Components/Header';
import './style/Main.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Home';
import Error from './Pages/Error';
import Footer from './Components/Footer';
import Bollywood from './Pages/Bollywood';
import Technolgy from './Pages/Technology';
import Hollywood from './Pages/Hollywood';
import Fitness from './Pages/Fitness';
import Food from './Pages/Food';
import Wood from './Components/wood';
import { createContext } from 'react';
import { Data } from './data';


let Context=createContext()

function Main() {
  let BollywoodData=[]
  let HollywoodData=[]
  let FitnessData=[]
  let FoodData=[]
  let TechnologyData=[]
  Data.forEach((data)=>{
    switch (data.Category) {
      case 'Bollywood':
        BollywoodData.push(data)
        break;
      case 'Hollywood':
        HollywoodData.push(data)
        break;
      case 'Fitness':
        FitnessData.push(data)
        break;
      case 'Food':
        FoodData.push(data)
        break;
      case 'Technology':
        TechnologyData.push(data)
        break;
      default:
        console.log('Main.js')
        break;
    }
  })
  return (
    <>
        <div className="container">
            <BrowserRouter>
                <Header/>
                <Context.Provider value={{BollywoodData,HollywoodData,FitnessData,FoodData,TechnologyData}}>
                    <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='bollywood' element={<Bollywood/>} />
                      <Route path='technology' element={<Technolgy/>} />
                      <Route path='hollywood' element={<Hollywood/>} />
                      <Route path='fitness' element={<Fitness/>} />
                      <Route path='food' element={<Food/>} />
                      <Route path='/:Category/:path' element={<Wood/>} />
                      <Route path={'*'} element={<Error />} />
                    </Routes>
                </Context.Provider>
                <Footer/>
            </BrowserRouter>
        </div>
    </>
  );
}

export default Main;
export {Context}
