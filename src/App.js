import './App.css';
import {originals,actions} from './urls'
import Banner from './Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './RowPost/RowPost';
import React from 'react';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <RowPost title={`Netflix Originals`} url={originals}/>
        <RowPost title={`Action`} isSmall url={actions} />
    </div>
  );
}

export default App;
