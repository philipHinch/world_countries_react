//components
import CountryBox from "./CountryBox";
import Spinner from "./Spinner";
//context
import { Context } from "../context/Context";
//hooks
import { useContext, useEffect, useState, useLayoutEffect } from "react";

const CountriesContainer = ({ isSearching, isGrid, setIsGrid, setShowModal }) => {

    const context = useContext(Context)
    const { data, searchValue, isLoading } = context

    useEffect(() => {
        if (window.innerWidth < 700) {
            setIsGrid(true)
        }
    }, [])

    return (
        <main className={`countriesContainer ${ isGrid ? 'grid' : '' }`}>
            {isSearching && searchValue.length === 0 && <p className="noResults">No Results</p>}
            {
                !isLoading && !isSearching && data.map(country => (
                    <CountryBox key={country.name} name={country.name} capital={country.capital} area={country.area} population={country.population} region={country.region} flag={country.flags.svg} countryCode={country.alpha3Code} latlng={country.latlng} timezones={country.timezones} currencies={country.currencies} languages={country.languages} nativeName={country.nativeName} independent={country.independent} subregion={country.subregion} borders={country.borders} isGrid={isGrid} setShowModal={setShowModal} />
                ))
            }
            {
                !isLoading && isSearching && searchValue.map(country => (
                    <CountryBox key={country.name} name={country.name} capital={country.capital} area={country.area} population={country.population} region={country.region} flag={country.flags.svg} countryCode={country.alpha3Code} latlng={country.latlng} timezones={country.timezones} currencies={country.currencies} languages={country.languages} nativeName={country.nativeName} independent={country.independent} subregion={country.subregion} borders={country.borders} isGrid={isGrid} setShowModal={setShowModal} />
                ))
            }
            {isLoading && <Spinner />}
        </main >
    );
}

export default CountriesContainer;