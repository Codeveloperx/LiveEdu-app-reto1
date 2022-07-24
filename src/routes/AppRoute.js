import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StepOne from '../components/StepOne';
import StepTwo from '../components/stepTwo';
import StepThree from '../components/stepThree';
import Loading from '../containers/Loading';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Home from '../containers/Home';
import '../styles/main.css'


export default class AppRoute extends Component {
  render() {
    return (
      <Router>
        <Routes> 
          <Route path='/' element={<Loading/>}/>
          <Route path='/step_1' element={<StepOne/>}/>
          <Route path='/step_2' element={<StepTwo/>}/>
          <Route path='/step_3' element={<StepThree/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
    )
  }
}
