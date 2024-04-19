import LeftFooter from "./LeftFooter";
import MiddleFooter from "./MiddleFooter";
import RightFooter from "./RightFooter";

const Footer = () => {
    return (
        <div className="Footer bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 px-4">
                    <LeftFooter />
                </div>
                <div className="w-full md:w-1/3 px-4">
                    <MiddleFooter />
                </div>
                <div className="w-full md:w-1/3 px-4">
                    <RightFooter />
                </div>
            </div>
        </div>
    );
};

export default Footer;
