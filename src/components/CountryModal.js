//icons
import { Icon } from '@iconify/react';
//hooks
import { useContext } from 'react';
//context
import { Context } from '../context/Context';

const CountryModal = ({ setShowModal }) => {

    //get modal data from context
    const context = useContext(Context)
    const { modal_data } = context
    //destructure data from context
    const {
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
    } = modal_data

    //close modal on close icon click
    const handleClick = (e) => {
        if (e.target.className === 'countryModalContainer' || e.target.id === 'closeIcon' || e.target.parentElement.id === 'closeIcon') {
            setShowModal(false)
        }
    }

    return (
        <div className="countryModalContainer" onClick={handleClick}>
            <div className="innerCountryModal">
                <div className="innerCountryModalOverlay">
                    <img src={flag} alt="flag overlay" />
                </div>
                <Icon className='closeIcon' id='closeIcon' icon="ep:close-bold" onClick={handleClick} />
                <div className="modalFlagContainer">
                    <img src={flag} alt={name + ' ' + 'Flag'} />
                </div>
                <h2 className="modalCountryName">{name + ' ' + '(' + nativeName + ')'}</h2>
                <div className="modalCountryInfoContainer1">
                    <div className="modalCountryCapital" title='Capital'>
                        <small><Icon className='countryCapitalIcon countryIcon modalCountryIcon' icon="map:city-hall" /></small>
                        <small>{capital}</small>
                    </div>
                    <div className="modalCountryArea" title='Area'>
                        <small><Icon className='countryAreaIcon countryIcon modalCountryIcon' icon="bx:area" /></small>
                        <small>{area === 0 ? 'N/A' : area.toLocaleString() + ' ' + 'km²'}</small>
                    </div>
                    <div className="modalCountryPopulation" title='Population'>
                        <small><Icon className='countryPopulationIcon countryIcon modalCountryIcon' icon="fluent:people-team-28-filled" /></small>
                        <small>{population.toLocaleString()}</small>
                    </div>
                    <div className="modalCountryRegion" title='Region'>
                        <small><Icon className='countryRegionIcon countryIcon modalCountryIcon' icon="bx:world" /></small>
                        <small>{region + ',' + ' ' + subregion}</small>
                    </div>
                </div>
                <div className="modalCountryInfoContainer2">
                    <small title='Languages'><Icon icon="emojione-monotone:speaking-head" className='languageIcon' /></small>
                    {languages.map(lang => (
                        <small className="languageText" key={lang.iso639_1} title='Language'>{lang.name}</small>
                    ))}
                </div>
                <div className="modalCountryInfoContainer3">
                    <small title='Currencies'><Icon icon="ep:money" className='moneyIcon' /></small>
                    {currencies.map(cur => (
                        <small className="currencyName" key={cur.code} title='Currency'>{'{' + ' ' + cur.symbol + ' ' + '}' + ' ' + cur.name}</small>
                    ))}
                </div>
                <div className="modalCountryInfoContainer4">
                    <small title='Timezones'><Icon icon="akar-icons:clock" className='timezoneIcon' /></small>
                    {timezones.map(zone => (
                        <small className="timezone" key={zone} title='Timezone'>{zone}</small>
                    ))}
                </div>
                <div className="modalCountryInfoContainer5">
                    <small title='Latitude/Longitude'><Icon icon="foundation:marker" className='coordinateIcon' /></small>
                    {latlng.map(coord => (
                        <small className="coordinate" key={coord} title='Coordinate'>{coord.toFixed(6)}</small>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CountryModal;