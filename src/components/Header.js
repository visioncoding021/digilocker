import UpperHeader from "./UpperHeader";
import LowerHeader from "./LowerHeader";

const Header = () => {
    return (
        <div className="Header">
            <UpperHeader className="mb-4"></UpperHeader>
            <LowerHeader className="mt-4"></LowerHeader>
        </div>
    );
};

export default Header;
