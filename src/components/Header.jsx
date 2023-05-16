const Header = ({isLoading}) => {
    return isLoading ? (
        <p>Loadding....</p>
    ) : (
        <div className="tyu">
            <h1>Alice</h1>
        </div>
    );
};

export default Header;