//css
import './App.css';
//components
import Controls from './components/Controls';
import CountriesContainer from './components/CountriesContainer';
import Header from './components/Header';
//context
import { useContext, useEffect, useState } from 'react';
import { Context } from './context/Context';

function App() {

  const context = useContext(Context)

  const { dispatch, data, isDarkTheme, isLoading } = context

  const [isSearching, setIsSearching] = useState(false)

  //////////////////test start

  //get data on page load 
  useEffect(() => {
    getCountriesData()
  }, [])

  //gets, formats and sets data to context
  const getCountriesData = async () => {
    try {
      //get data
      const res = await fetch(`${ process.env.REACT_APP_ENDPOINT }`)
      const data = await res.json()
      //format data
      const newData = formatData(data)
      //send data to context
      dispatch({ type: 'SET_DATA', payload: newData })
      dispatch({ type: 'SET_IS_LOADING', payload: false })
    } catch (error) {
      dispatch({ type: 'SET_IS_LOADING', payload: false })
      console.log(error);
    }
  }

  //this formats the data from the api
  const formatData = (arr) => {
    //replace Å with A (aland islands)
    let formattedData = [
      ...arr,
      arr[1].name = 'Aland Islands'
    ]
    formattedData.pop()
    //if no capital, add capital= 'N/A'
    formattedData.map(item => {
      if (!item.capital) {
        item.capital = 'N/A'
      }
      if (!item.area) {
        item.area = 0
      }
    })
    //sort the original data (original data is not sorted properly)
    let sortedNewArr = formattedData.sort((a, b) => b.name < a.name ? 1 : -1)
    return sortedNewArr
  }

  //////////////////////////test end


  return (
    <div className="App">
      <div className="container">
        <Header />
        <Controls setIsSearching={setIsSearching} isSearching={isSearching} getCountriesData={getCountriesData} formatData={formatData} />
        <CountriesContainer isSearching={isSearching} />
      </div>
    </div>
  );
}

export default App;
