//icons
import { Icon } from '@iconify/react';


const CountryBox = ({ name, capital, area, population, region, flag }) => {

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
                    <small>{area && area.toLocaleString()} km&sup2;</small>
                    <small><Icon className='countryAreaIcon' icon="bx:area" /></small>
                </div>
                <div className="countryPopulation">
                    <small><Icon className='countryPopulationIcon' icon="fluent:people-team-28-filled" /></small>
                    <small>{population.toLocaleString()}</small>
                </div>
                <div className="countryRegion">
                    <small>{region}</small>
                    <small><Icon className='countryRegionIcon' icon="bx:world" /></small>
                </div>
            </div>
        </div>
    );
}

export default CountryBox;