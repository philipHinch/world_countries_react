//icons
import { Icon } from '@iconify/react';
//hooks
import { useContext } from 'react';
//context
import { Context } from '../context/Context';

const CountryBox = ({ name, capital, area, population, region, flag, countryCode, latlng, timezones, currencies, languages, nativeName, independent, subregion, borders, isGrid, setShowModal }) => {

    const context = useContext(Context)
    const { dispatch } = context

    //create modal object
    const modalObj = {
        name,
        capital,
        area,
        population,
        region,
        flag,
        countryCode,
        latlng,
        timezones,
        currencies,
        languages,
        nativeName,
        independent,
        subregion,
        borders
    }

    const handleClick = (e) => {
        if (e.target.id === countryCode
            || e.target.parentElement.id === countryCode
            || e.target.parentElement.parentElement.id === countryCode
            || e.target.parentElement.parentElement.parentElement.id === countryCode
            || e.target.parentElement.parentElement.parentElement.parentElement.id === countryCode
            || e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id === countryCode) {
            setShowModal(true)
            //send modal data to context
            dispatch({ type: 'SET_MODAL_DATA', payload: modalObj })
        }
    }

    return (
        <div className={`countryBox box ${ isGrid ? 'boxGrid' : '' }`} onClick={handleClick} id={countryCode}>
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