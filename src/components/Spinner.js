const Spinner = () => {
    return (
        <div className="loadingSpinnerContainer" >
            <svg width="70" height="70" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#3EB489">
                <g fill="none" fillRule="evenodd">
                    <g transform="translate(1 1)" strokeWidth="2">
                        <circle strokeOpacity=".2" cx="18" cy="18" r="18" />
                        <path d="M36 18c0-9.94-8.06-18-18-18">
                        </path>
                    </g>
                </g>
            </svg>
        </div>
    );
}

export default Spinner;