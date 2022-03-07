import './App.css';
import React from 'react';
import localData from './Data.js'
import Card from './Card';
import Categories from './Categories';


function App() {

  const [category, setCategory] = React.useState("all")

  function handleClick(e) {
    setCategory(e.target.innerHTML)
  }


  return (
    <>
      <Categories
        onClick={handleClick}
        localData={localData}
        category={category}
      />

      <div className='container'>

        <Card
          localData={localData}
          category={category}
        />

      </div >
    </>

  );
}

export default App;
