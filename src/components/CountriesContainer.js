//components
import CountryBox from "./CountryBox";
import Spinner from "./Spinner";
//context
import { Context } from "../context/Context";
//hooks
import { useContext, useEffect } from "react";

const CountriesContainer = ({ isSearching }) => {

    const context = useContext(Context)
    const { dispatch, data, searchValue, isLoading } = context

    // //get data on page load 
    // useEffect(() => {
    //     getCountriesData()
    // }, [])

    // //gets, formats and sets data to context
    // const getCountriesData = async () => {
    //     try {
    //         //get data
    //         const res = await fetch(`${ process.env.REACT_APP_ENDPOINT }`)
    //         const data = await res.json()
    //         //format data
    //         const newData = formatData(data)
    //         //send data to context
    //         dispatch({ type: 'SET_DATA', payload: newData })
    //         dispatch({ type: 'SET_IS_LOADING', payload: false })
    //     } catch (error) {
    //         dispatch({ type: 'SET_IS_LOADING', payload: false })
    //         console.log(error);
    //     }
    // }

    // //this formats the data from the api
    // const formatData = (arr) => {
    //     //replace Å with A (aland islands)
    //     let formattedData = [
    //         ...arr,
    //         arr[1].name = 'Aland Islands'
    //     ]
    //     formattedData.pop()
    //     //if no capital, add capital= 'N/A'
    //     formattedData.map(item => {
    //         if (!item.capital) {
    //             item.capital = 'N/A'
    //         }
    //         if (!item.area) {
    //             item.area = 0
    //         }
    //     })
    //     //sort the original data (original data is not sorted properly)
    //     let sortedNewArr = formattedData.sort((a, b) => b.name < a.name ? 1 : -1)
    //     return sortedNewArr
    // }


    return (
        <main className="countriesContainer">
            {searchValue.length < 1 && <p className="noResults">No Results</p>}
            {!isLoading && !isSearching && data.map(country => (
                <CountryBox key={country.name} name={country.name} capital={country.capital} area={country.area} population={country.population} region={country.region} flag={country.flags.svg} />
            ))}
            {!isLoading && isSearching && searchValue.map(country => (
                <CountryBox key={country.name} name={country.name} capital={country.capital} area={country.area} population={country.population} region={country.region} flag={country.flags.svg} />
            ))}
            {isLoading && <Spinner />}
        </main>
    );
}

export default CountriesContainer;