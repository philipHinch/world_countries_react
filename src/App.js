//css
import './App.css';
//components
import Controls from './components/Controls';
import CountriesContainer from './components/CountriesContainer';
import Header from './components/Header';
//context
import { useContext, useEffect } from 'react';
import { Context } from './context/Context';

function App() {

  const context = useContext(Context)

  const { dispatch, data, isDarkTheme, isLoading } = context




  return (
    <div className="App">
      <div className="container">
        <Header />
        <Controls />
        <CountriesContainer />
      </div>
    </div>
  );
}

export default App;
