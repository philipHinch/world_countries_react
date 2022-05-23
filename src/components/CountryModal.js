//icons
import { Icon } from '@iconify/react';
//hooks
import { useContext, useState, useEffect } from 'react';
//context
import { Context } from '../context/Context';
//mapbox
import Map, { NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
//uuid
import { v4 as uuidv4 } from 'uuid';


const CountryModal = ({ setShowModal }) => {

    const [geoLocation, setGeoLocation] = useState(null)

    //set geolocation data on page load
    useEffect(() => {
        //check if there are coordinates
        latlng
            ? setGeoLocation({
                lat: latlng[0],
                lon: latlng[1],
                zoom: area < 2000 ? 8 : 6
            })
            : setGeoLocation({
                lat: 0,
                lon: 0,
                zoom: 1
            })
        //if usa minor outlaying islands
        name === 'United States Minor Outlying Islands'
            && setGeoLocation({
                lat: 19.3,
                lon: 166.633333,
                zoom: 10
            })
    }, [])

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
                <div className="modalCountryInfoContainer1" title='Capital'>
                    <small><Icon className='countryCapitalIconModal countryIcon modalCountryIcon' icon="map:city-hall" /></small>
                    <small>{capital}</small>
                </div>
                <div className="modalCountryInfoContainer2" title='Area'>
                    <small><Icon className='countryAreaIconModal countryIcon modalCountryIcon' icon="bx:area" /></small>
                    <small>{area === 0 ? 'N/A' : area.toLocaleString() + ' ' + 'km²'}</small>
                </div>
                <div className="modalCountryInfoContainer3" title='Population'>
                    <small><Icon className='countryPopulationIconModal countryIcon modalCountryIcon' icon="fluent:people-team-28-filled" /></small>
                    <small>{population.toLocaleString()}</small>
                </div>
                <div className="modalCountryInfoContainer4" title='Region'>
                    <small><Icon className='countryRegionIconModal countryIcon modalCountryIcon' icon="bx:world" /></small>
                    <small>{region + ',' + ' ' + subregion}</small>
                </div>
                <div className="modalCountryInfoContainer5">
                    <small title='Languages'><Icon icon="emojione-monotone:speaking-head" className='languageIcon' /></small>
                    {languages.map(lang => (
                        <small className="languageText" key={uuidv4()} title='Language'>{lang.name}</small>
                    ))}
                </div>
                <div className="modalCountryInfoContainer6">
                    <small title='Currencies'><Icon icon="ep:money" className='moneyIcon' /></small>
                    {currencies && currencies.map(cur => (
                        <small className="currencyName" key={uuidv4()} title='Currency'>{'{' + ' ' + cur.symbol + ' ' + '}' + ' ' + cur.name}</small>
                    ))}
                    {!currencies && <small className="currencyName" title='Currency'>N/A</small>}
                </div>
                <div className="modalCountryInfoContainer7">
                    <small title='Timezones'><Icon icon="akar-icons:clock" className='timezoneIcon' /></small>
                    {timezones.map(zone => (
                        <small className="timezone" key={uuidv4()} title='Timezone'>{zone}</small>
                    ))}
                </div>
                <div className="modalCountryInfoContainer8">
                    <small title='Latitude/Longitude'><Icon icon="foundation:marker" className='coordinateIcon' /></small>
                    {latlng && latlng.map(coord => (
                        <small className="coordinate" key={uuidv4()} title='Coordinate'>{coord.toFixed(6)}</small>
                    ))
                    }
                    {/* {!latlng && (
                        <>
                            <small className="coordinate" title='Coordinate'>{geoLocation.lat}</small>
                            <small className="coordinate" title='Coordinate'>{geoLocation.lon}</small>
                        </>
                    )} */}
                </div>
                {geoLocation && <Map
                    id='map'
                    initialViewState={{
                        longitude: geoLocation.lon,
                        latitude: geoLocation.lat,
                        zoom: geoLocation.zoom
                    }}
                    style={{ width: '100%', height: '300px', margin: 'auto', boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)' }}
                    // mapStyle="mapbox://styles/mapbox/light-v10"
                    mapStyle="mapbox://styles/philiphinch/cl3ha99om001h15o49331yaga"
                    mapboxAccessToken='pk.eyJ1IjoicGhpbGlwaGluY2giLCJhIjoiY2wzaDkzaXQzMG11ajNkdDVqZjlyNzM5bCJ9.-j4gQ4HOhxE8uCrDW3-fDw'>
                    <NavigationControl />
                    {/* <GeolocateControl /> */}
                </Map >}
            </div>
        </div>
    );
}

export default CountryModal;