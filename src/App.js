import React, { Component } from 'react';
import Navbar from './component/Navbar';
import Signin from './page/Signin';
import Signup from './page/Signup';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Signin/>}/>
            <Route path="/" element={<Signin/>}/>
            <Route path="/" element={<Signin/>}/>
            <Route path="/" element={<Signin/>}/>
            <Route path="/" element={<Signup/>}/>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;