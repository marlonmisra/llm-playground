import React, { useState, ChangeEvent } from 'react';

interface Props {
  onSubmit: (searchText: string) => void;
}

const SearchExperience: React.FC<Props> = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [displayText, setDisplayText] = useState<string>('');


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setDisplayText(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(searchText);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="searchField">Search text:</label>
        <input type="text" id="searchField" value={searchText} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {displayText && (
        <div>
          <p>Search text:</p>
          <p>{displayText}</p>
        </div>
      )}
    </div>
  );
};

export default SearchExperience;