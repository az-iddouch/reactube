import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyAPq3Q4kRsBSFHwZzVYdmuoXlq-CCm2Cqc';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )};

ReactDOM.render(<App/>, document.querySelector('.container'));
