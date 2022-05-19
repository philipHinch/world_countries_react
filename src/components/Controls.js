//icons
import { Icon } from '@iconify/react';
//hooks
import { useState } from 'react';
//context
import { useContext } from 'react';
import { Context } from '../context/Context';


const Controls = () => {

    const context = useContext(Context)
    const { dispatch, data } = context

    const [isSortedAZ, setIsSortedAZ] = useState(true)
    const [isSortedCapital, setIsSortedCapital] = useState(false)
    const [isGrid, setIsGrid] = useState(false)

    //sort countries either from az or za
    const sortByName = () => {
        dispatch({ type: 'SET_IS_LOADING', payload: true })
        let sortedArr
        if (isSortedAZ) {
            sortedArr = data.sort((a, b) => {
                setIsSortedAZ(false)
                return a.name < b.name ? 1 : -1
            })
        } else {
            sortedArr = data.sort((a, b) => {
                setIsSortedAZ(true)
                return b.name < a.name ? 1 : -1
            })
        }
        dispatch({ type: 'SET_DATA', payload: sortedArr })
        dispatch({ type: 'SET_IS_LOADING', payload: false })
    }

    //sort countires by capital from az or za
    const sortByCapital = () => {
        dispatch({ type: 'SET_IS_LOADING', payload: true })
        let sortedArr
        if (isSortedCapital) {
            setIsSortedCapital(false)
            sortedArr = data.sort((a, b) => {
                return a.capital < b.capital ? 1 : -1
            })
        } else {
            setIsSortedCapital(true)
            sortedArr = data.sort((a, b) => {
                return b.capital < a.capital ? 1 : -1
            })
        }
        dispatch({ type: 'SET_DATA', payload: sortedArr })
        dispatch({ type: 'SET_IS_LOADING', payload: false })
    }

    return (
        <form className="controlsForm" onSubmit={(e) => e.preventDefault()}>
            <div className="innerControlsForm">
                <input type="text" name="searchInput" id="searchInput" placeholder='Search...' />
                <div className="controlsButtonsContainer">
                    <button className="btn nameBtn" onClick={sortByName}>name <Icon className={`arrowIcon nameArrowIcon ${ !isSortedAZ ? 'rotate180' : '' }`} icon="bx:arrow-from-top" />
                    </button>
                    <button className="btn capitalBtn" onClick={sortByCapital}>capital <Icon className={`arrowIcon capitalArrowIcon ${ !isSortedCapital ? 'rotate180' : '' }`} icon="bx:arrow-from-top" />
                    </button>
                    <button className="btn populationBtn">population <Icon className='arrowIcon populationArrowIcon' icon="bx:arrow-from-top" />
                    </button>
                    <button className="btn areaBtn">area <Icon className='arrowIcon populationArrowIcon' icon="bx:arrow-from-top" />
                    </button>
                </div>
            </div>
            {isGrid ? <Icon className='layoutIcon' icon="akar-icons:grid" onClick={() => setIsGrid(!isGrid)} />
                : <Icon className='layoutIcon' icon="mi:three-rows" onClick={() => setIsGrid(!isGrid)} />
            }
        </form>
    );
}

export default Controls;