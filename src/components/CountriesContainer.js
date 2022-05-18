//components
import CountryBox from "./CountryBox";
//context
import { Context } from "../context/Context";
//hooks
import { useContext, useEffect } from "react";

const CountriesContainer = () => {

    const context = useContext(Context)

    const { dispatch, data } = context

    useEffect(() => {
        getCountriesData()
        console.log(data);
    }, [])

    const getCountriesData = async () => {
        try {
            const res = await fetch(`${ process.env.REACT_APP_ENDPOINT }`)
            const data = await res.json()
            dispatch({ type: 'GET_DATA', payload: data })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="countriesContainer">
            {data && data.map(country => (
                <CountryBox key={country.name} name={country.name} capital={country.capital} flag={country.flags.svg} />
            ))}
        </main>
    );
}

export default CountriesContainer;