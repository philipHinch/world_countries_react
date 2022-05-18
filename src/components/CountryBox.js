//icons
import { Icon } from '@iconify/react';


const CountryBox = ({ name, capital, flag }) => {
    return (
        <div className="countryBox box">
            <div className="flagContainer">
                <img src={flag} alt={name + ' ' + 'flag'} />
            </div>
            <div className="countryInfo">
                <h3 className="countryName">
                    {name}
                </h3>
                <div className="countryCapital">
                    <small><Icon className='countryCapitalIcon' icon="map:city-hall" /></small>
                    <small>{capital}</small>
                </div>
                <div className="countryArea">
                    <small><Icon className='countryAreaIcon' icon="map:city-hall" /></small>
                    <small>{capital}</small>
                </div>
                <div className="countryPopulation">
                    <small><Icon className='countryPopulationIcon' icon="map:city-hall" /></small>
                    <small>{capital}</small>
                </div>
            </div>
        </div>
    );
}

export default CountryBox;