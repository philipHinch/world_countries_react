//icons
import { Icon } from '@iconify/react';

const CountryBox = ({ name, capital, area, population, region, flag, isGrid }) => {

    return (
        <div className={`countryBox box ${ isGrid ? 'boxGrid' : '' }`}>
            <div className={`flagOverlay ${ isGrid ? 'flagOverlayGrid' : '' }`}>
                <img src={flag} alt={name + ' ' + 'overlay flag'} />
            </div>
            <div className="flagContainer">
                <img src={flag} alt={name + ' ' + 'flag'} />
            </div>
            <div className="countryInfo">
                <div className="countryCapital" title='Capital'>
                    <small><Icon className='countryCapitalIcon countryIcon' icon="map:city-hall" /></small>
                    <small>{capital}</small>
                </div>
                <div className="countryArea" title='Area'>
                    <small><Icon className='countryAreaIcon countryIcon' icon="bx:area" /></small>
                    <small>{area === 0 ? 'N/A' : area.toLocaleString() + ' ' + 'km²'}</small>
                </div>
                <div className="countryPopulation" title='Population'>
                    <small><Icon className='countryPopulationIcon countryIcon' icon="fluent:people-team-28-filled" /></small>
                    <small>{population.toLocaleString()}</small>
                </div>
                <div className="countryRegion" title='Region'>
                    <small><Icon className='countryRegionIcon countryIcon' icon="bx:world" /></small>
                    <small>{region}</small>
                </div>
            </div>
            <h3 className="countryName">
                {name}
            </h3>
        </div>
    );
}

export default CountryBox;