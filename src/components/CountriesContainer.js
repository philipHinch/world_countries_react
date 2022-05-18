//components
import CountryBox from "./CountryBox";
//context
import { Context } from "../context/Context";
//hooks
import { useContext, useEffect } from "react";

const CountriesContainer = () => {

    const context = useContext(Context)

    const { dispatch, data, isLoading } = context

    useEffect(() => {
        getCountriesData()
        console.log(data);
    }, [])

    const getCountriesData = async () => {
        try {
            const res = await fetch(`${ process.env.REACT_APP_ENDPOINT }`)
            const data = await res.json()
            dispatch({ type: 'GET_DATA', payload: data })
            dispatch({ type: 'SET_IS_LOADING', payload: false })
        } catch (error) {
            dispatch({ type: 'SET_IS_LOADING', payload: false })
            console.log(error);
        }
    }

    return (
        <main className="countriesContainer">
            {!isLoading && data.map(country => (
                <CountryBox key={country.name} name={country.name} capital={country.capital} area={country.area} population={country.population} region={country.region} flag={country.flags.svg} />
            ))}
            {isLoading && <h2 className='loadingText'>Loading...</h2>}
        </main>
    );
}

export default CountriesContainer;