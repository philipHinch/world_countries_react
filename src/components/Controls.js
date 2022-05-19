//icons
import { Icon } from '@iconify/react';
//hooks
import { useState, useContext } from 'react';
//context
import { Context } from '../context/Context';


const Controls = ({ isSearching, setIsSearching }) => {

    const context = useContext(Context)
    const { dispatch, data, searchValue } = context

    const [isSortedAZ, setIsSortedAZ] = useState(true)
    const [isSortedCapital, setIsSortedCapital] = useState(false)
    const [isSortedPopulation, setIsSortedPopulation] = useState(false)
    const [isSortedArea, setIsSortedArea] = useState(false)
    const [isGrid, setIsGrid] = useState(false)
    const [activeButton, setActiveButton] = useState(0)

    //sort countries name either from az or za
    const sortByName = () => {
        //set loading
        dispatch({ type: 'SET_IS_LOADING', payload: true })
        //set active button
        setActiveButton(0)
        let sortedArr
        let arr = isSearching ? searchValue : data
        if (isSortedAZ) {
            sortedArr = arr.sort((a, b) => {
                setIsSortedAZ(false)
                return a.name < b.name ? 1 : -1
            })
        } else {
            sortedArr = arr.sort((a, b) => {
                setIsSortedAZ(true)
                return b.name < a.name ? 1 : -1
            })
        }
        if (isSearching) {
            dispatch({ type: 'SET_SEARCH_VALUE', payload: sortedArr })
        } else {
            dispatch({ type: 'SET_DATA', payload: sortedArr })
        }
        dispatch({ type: 'SET_IS_LOADING', payload: false })
    }

    //sort countires by capital from az or za
    const sortByCapital = () => {
        //set loading
        dispatch({ type: 'SET_IS_LOADING', payload: true })
        //set active button
        setActiveButton(1)
        let sortedArr
        let arr = isSearching ? searchValue : data
        if (isSortedCapital) {
            setIsSortedCapital(false)
            sortedArr = arr.sort((a, b) => {
                return a.capital < b.capital ? 1 : -1
            })
        } else {
            setIsSortedCapital(true)
            sortedArr = arr.sort((a, b) => {
                return b.capital < a.capital ? 1 : -1
            })
        }
        if (isSearching) {
            dispatch({ type: 'SET_SEARCH_VALUE', payload: sortedArr })
        } else {
            dispatch({ type: 'SET_DATA', payload: sortedArr })
        }
        dispatch({ type: 'SET_IS_LOADING', payload: false })
    }

    //sort countries by population
    const sortByPopulation = () => {
        //set loading
        dispatch({ type: 'SET_IS_LOADING', payload: true })
        //set active button
        setActiveButton(2)
        let sortedArr
        let arr = isSearching ? searchValue : data
        if (isSortedPopulation) {
            setIsSortedPopulation(false)
            sortedArr = arr.sort((a, b) => {
                return b.population < a.population ? 1 : -1
            })
        } else {
            setIsSortedPopulation(true)
            sortedArr = arr.sort((a, b) => {
                return a.population < b.population ? 1 : -1
            })
        }
        if (isSearching) {
            dispatch({ type: 'SET_SEARCH_VALUE', payload: sortedArr })
        } else {
            dispatch({ type: 'SET_DATA', payload: sortedArr })
        }
        dispatch({ type: 'SET_IS_LOADING', payload: false })
    }

    //sort countries by area
    const sortByArea = () => {
        //set loading
        dispatch({ type: 'SET_IS_LOADING', payload: true })
        //set active button
        setActiveButton(3)
        let sortedArr
        let arr = isSearching ? searchValue : data
        if (isSortedArea) {
            setIsSortedArea(false)
            sortedArr = arr.sort((a, b) => {
                return b.area < a.area ? 1 : -1
            })
        } else {
            setIsSortedArea(true)
            sortedArr = arr.sort((a, b) => {
                return a.area < b.area ? 1 : -1
            })
        }
        if (isSearching) {
            dispatch({ type: 'SET_SEARCH_VALUE', payload: sortedArr })
        } else {
            dispatch({ type: 'SET_DATA', payload: sortedArr })
        }
        dispatch({ type: 'SET_IS_LOADING', payload: false })
    }

    //search countries
    const handleSearch = async (e) => {
        dispatch({ type: 'SET_IS_LOADING', payload: true })
        let word = e.target.value
        //set if searching or not
        if (word.length === 0) {
            setIsSearching(false)
        } else {
            setIsSearching(true)
        }
        let filteredArr = data.filter(country => {
            if (country.name.toLowerCase().includes(word)) {
                return true
            }
        })
        console.log(filteredArr);
        dispatch({ type: 'SET_SEARCH_VALUE', payload: filteredArr })
        //dispatch({ type: 'SET_DATA', payload: filteredArr })
        dispatch({ type: 'SET_IS_LOADING', payload: false })
    }

    return (
        <form className="controlsForm" onSubmit={(e) => e.preventDefault()}>
            <div className="innerControlsForm">
                <input type="text" name="searchInput" id="searchInput" placeholder='Search...' onChange={handleSearch} />
                <div className="controlsButtonsContainer">
                    <button className={`btn nameBtn ${ activeButton === 0 && 'activeBtn' }`} onClick={sortByName}>name <Icon className={`arrowIcon nameArrowIcon ${ !isSortedAZ ? 'rotate180' : '' }`} icon="bx:arrow-from-top" />
                    </button>
                    <button className={`btn capitalBtn ${ activeButton === 1 && 'activeBtn' }`} onClick={sortByCapital}>capital <Icon className={`arrowIcon capitalArrowIcon ${ !isSortedCapital ? 'rotate180' : '' }`} icon="bx:arrow-from-top" />
                    </button>
                    <button className={`btn populationBtn ${ activeButton === 2 && 'activeBtn' }`} onClick={sortByPopulation}>population <Icon className={`arrowIcon populationArrowIcon ${ !isSortedPopulation ? 'rotate180' : '' }`} icon="bx:arrow-from-top" />
                    </button>
                    <button className={`btn areaBtn ${ activeButton === 3 && 'activeBtn' }`} onClick={sortByArea}>area <Icon className={`arrowIcon populationArrowIcon ${ !isSortedArea ? 'rotate180' : '' }`} icon="bx:arrow-from-top" />
                    </button>
                </div>
            </div>
            {isGrid
                ? <Icon className='layoutIcon' icon="akar-icons:grid" onClick={() => setIsGrid(!isGrid)} />
                : <Icon className='layoutIcon' icon="mi:three-rows" onClick={() => setIsGrid(!isGrid)} />
            }
        </form>
    );
}

export default Controls;