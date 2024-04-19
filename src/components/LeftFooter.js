const LeftFooter = () => {
    return (
        <div className="leftfooter flex flex-col items-start">
            <img className="leftfooter-logo mb-4" src="https://www.digilocker.gov.in/assets/img/digilocker-w.png" alt="logo" />
            <p className="about digilocker text-sm mb-4">DigiLocker aims at ‘Digital Empowerment’ of the citizen by providing access to authentic digital documents to the citizen’s digital document wallet.</p>
            <p className="mb-2">Follow Us</p>
            <div className="socialMedia flex">
                <img className="leftfooter-facebook mr-2" src="https://img1.digitallocker.gov.in/assets/img/icons/facebook.png" alt="social-media" />
                <img className="leftfooter-instagram mr-2" src="https://img1.digitallocker.gov.in/assets/img/icons/insta.png" alt="social-media" />
                <img className="leftfooter-twitter mr-2" src="https://img1.digitallocker.gov.in/assets/img/icons/x.png" alt="social-media" />
                <img className="leftfooter-youtube" src="https://img1.digitallocker.gov.in/assets/img/icons/youtube.png" alt="social-media" />
            </div>
        </div>
    );
};

export default LeftFooter;
