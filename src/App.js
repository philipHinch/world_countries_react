//css
import './App.css';
//components
import Controls from './components/Controls';
import CountriesContainer from './components/CountriesContainer';
import Header from './components/Header';
//hooks
import { useContext, useEffect, useState } from 'react';
//context
import { Context } from './context/Context';
import CountryModal from './components/CountryModal';
//icons
import { Icon } from '@iconify/react';


function App() {

  const context = useContext(Context)

  const { dispatch, data, isDarkTheme, isLoading } = context

  const [isSearching, setIsSearching] = useState(false)
  const [isGrid, setIsGrid] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [goToTop, setGoToTop] = useState(false)

  //get data on page load 
  useEffect(() => {
    getCountriesData()
  }, [])

  //gets, formats and sets data to context
  const getCountriesData = async () => {
    try {
      //get data
      //const res = await fetch(`${ process.env.REACT_APP_ENDPOINT }`)
      const res = await fetch(`https://restcountries.com/v2/all`)
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

  //hides scroll bar when slide menu is open
  useEffect(() => {
    showModal ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll"
  }, [showModal])

  const handleScroll = () => {
    setGoToTop(true)
  }

  window.addEventListener("scroll", handleScroll);



  return (
    <div className="App" >
      <div className="container" >
        <Header />
        <Controls setIsSearching={setIsSearching} isSearching={isSearching} getCountriesData={getCountriesData} formatData={formatData} isGrid={isGrid} setIsGrid={setIsGrid} />
        <CountriesContainer isSearching={isSearching} isGrid={isGrid} setIsGrid={setIsGrid} setShowModal={setShowModal} />
        {showModal && <CountryModal setShowModal={setShowModal} />}
        {goToTop && !showModal && <a href='#'><Icon className='goToTop' title='Go To Top' icon="bi:arrow-up-square-fill" /></a>}
      </div>
    </div>
  );
}

export default App;
