import React, { Component } from 'react';
import Navbar from './component/Navbar';
import Signin from './page/Signin';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">

          <Signin/>
          <Routes>
            <Route path="/Navbar" element={<Navbar/>}/>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;