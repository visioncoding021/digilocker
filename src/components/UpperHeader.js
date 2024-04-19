import LanguageDropdown from "./LangDropDown";

const UpperHeader = () => {
    return (
        <div className="upperHeader flex justify-between items-center py-4 px-6 text-white bg-blue-950  ">
            <div className="left-upperHeader flex items-center ">
                <img className=" national-flag mr-2" src="https://img1.digitallocker.gov.in/assets/img/indian_flag.jpg" alt="Flag" />
                <p className="text-sm font-bold">Government Of India</p>
            </div>
            <div className="right-upperheader flex items-center">
                <p className="text-sm mr-4">Skip to main content</p>
                <LanguageDropdown />
            </div>
        </div>
    );
};

export default UpperHeader;
