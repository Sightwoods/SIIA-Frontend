export const BarsCross = ({isNavOpen}) => {

    return (
        <div className="selector show">
            <div className={`bar-icon-wrapper ${(isNavOpen) ? 'active' : ''}` }>
                <span className="bar-icon"></span>
                <span className="bar-icon"></span>
                <span className="bar-icon"></span>
            </div>
        </div>
    )
}
