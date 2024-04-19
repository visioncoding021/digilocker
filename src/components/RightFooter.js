const RightFooter = () => {
    return (
        <div className="rightFooter flex flex-col items-center">
            <img className="right-footer-img mb-4" src="https://www.digilocker.gov.in/assets/img/digital-india-logo.png" alt="logo" />
            <p className="text-xs text-center mb-2">Digital India Corporation (DIC)<br />Ministry of Electronics & IT (MeitY) Government of India</p>
            <p className="text-sm font-bold mb-2">DOWNLOAD APP</p>
            <div className="flex">
                <img className="playStore mr-2" src="https://img1.digitallocker.gov.in/assets/img/playstore_2.png" alt="download" />
                <img className="appStore" src="https://img1.digitallocker.gov.in/assets/img/ios_1.png" alt="download" />
            </div>
        </div>
    );
};

export default RightFooter;
