import React, { useState, ChangeEvent } from 'react';

interface Props {
  onSubmit: (searchText: string) => void;
}

const SearchExperience: React.FC<Props> = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [displayText, setDisplayText] = useState<string>('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(searchText);
    setDisplayText(searchText);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h2>Search</h2>
        <input type="text" id="searchField" value={searchText} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <br></br>
      {displayText && (
        <div>
          <h2>Result</h2>
          <p>{displayText}</p>
        </div>
      )}
      
    </div>
  );
};

export default SearchExperience;