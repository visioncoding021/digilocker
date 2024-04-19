import React, { useState } from 'react';

function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className='text-black flex gap-2 items-center'>
      <label className='text-white text-sm' htmlFor="languageSelect">Select a language:</label>
      <select id="languageSelect" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="">Select...</option>
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
        <option value="german">German</option>
        <option value="italian">Italian</option>
      </select>
     
    </div>
  );
}

export default LanguageDropdown;
