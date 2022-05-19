//components
import CountryBox from "./CountryBox";
import Spinner from "./Spinner";
//context
import { Context } from "../context/Context";
//hooks
import { useContext } from "react";

const CountriesContainer = ({ isSearching }) => {

    const context = useContext(Context)
    const { data, searchValue, isLoading } = context

    return (
        <main className="countriesContainer">
            {isSearching && searchValue.length === 0 && <p className="noResults">No Results</p>}
            {
                !isLoading && !isSearching && data.map(country => (
                    <CountryBox key={country.name} name={country.name} capital={country.capital} area={country.area} population={country.population} region={country.region} flag={country.flags.svg} />
                ))
            }
            {
                !isLoading && isSearching && searchValue.map(country => (
                    <CountryBox key={country.name} name={country.name} capital={country.capital} area={country.area} population={country.population} region={country.region} flag={country.flags.svg} />
                ))
            }
            {isLoading && <Spinner />}
        </main >
    );
}

export default CountriesContainer;