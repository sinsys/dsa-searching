import React, {useState} from 'react';
import './App.css';
import searchFuncs from './search-utils';




function App() {

  const [state, setState] = useState({
    val: null,
    res: {
      found: false,
      count: 0
    }
  });
  
  const handleSearchLinear = (e, val) => {
    e.preventDefault();
    let res = searchFuncs.searchLinear(val);
    setState({
      ...state,
      res: res
    });
  };
  
  const handleSearchBinary = (e, val) => {
    e.preventDefault();
    let res = searchFuncs.searchBinary(val);
    setState({
      ...state,
      res: res
    });
  };

  const handleIntChange = (val) => {
    setState({
      val: parseInt(val),
      res: {
        found: false,
        count: 0
      }
    });
  }

  return (
    <div className="App">
      <h1>
        Data Structures and Algorithms - Searching
      </h1>
      <section className="dataset_wrapper">
        <p>This is our array to search through</p>
        <blockquote><code>
          89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5
        </code></blockquote>
      </section>
      <section className="linear-search_wrapper">
        <h2>
          Search:
        </h2>
        <div>
          <form className="form">
            <label htmlFor="searchVal">
              Search:
            </label>
            <input 
              id="searchVal"
              type="text"
              onChange={(e) => handleIntChange(e.target.value)}
            />
            <button 
              type="button" 
              onClick={(e) => handleSearchLinear(e, state.val)}
            >
              Search Linear
            </button>
            <button 
              type="button" 
              onClick={(e) => handleSearchBinary(e, state.val)}
            >
              Search Binary
            </button>
          </form>
          <div className="results_wrapper">
            <p>
              Value: 
              <span className="value">
                {`${state.val}`}
              </span>
            </p>
            <p>
              Searches: 
              <span className="searches">
                {`${state.res.count}`}
              </span>
            </p>
            <p>
              Found Result: 
              <span className="result-val">
                {`${state.res.found}`}
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
