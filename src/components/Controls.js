//icons
import { Icon } from '@iconify/react';
//hooks
import { useState } from 'react';


const Controls = () => {

    const [isGrid, setIsGrid] = useState(false)

    return (
        <form className="controlsForm" onSubmit={(e) => e.preventDefault()}>
            <div className="innerControlsForm">
                <input type="text" name="searchInput" id="searchInput" placeholder='Search...' />
                <div className="controlsButtonsContainer">
                    <button className="btn nameBtn">name <Icon className='arrowIcon nameArrowIcon' icon="bx:arrow-from-top" />
                    </button>
                    <button className="btn capitalBtn">capital <Icon className='arrowIcon capitalArrowIcon' icon="bx:arrow-from-top" />
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