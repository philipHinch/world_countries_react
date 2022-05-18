//icons
import { Icon } from '@iconify/react';


const Controls = () => {
    return (
        <form className="controlsForm" onSubmit={(e) => e.preventDefault()}>
            <div className="innerControlsForm">
                <input type="text" name="searchInput" id="searchInput" />
                <div className="controlsButtonsContainer">
                    <button className="btn nameBtn">name <Icon className='arrowIcon nameArrowIcon' icon="bx:arrow-from-top" />
                    </button>
                    <button className="btn capitalBtn">capital <Icon className='arrowIcon capitalArrowIcon' icon="bx:arrow-from-top" />
                    </button>
                    <button className="btn populationBtn">population <Icon className='arrowIcon populationArrowIcon' icon="bx:arrow-from-top" />
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Controls;