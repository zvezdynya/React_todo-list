import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Login_page from './components/Login_page/Login_page';

function App() {

  let userLoggedIn = true;

  return (
    <React.Fragment>
      <Header />
      { userLoggedIn 
      ? <Content />
      : <Login_page />}
    </React.Fragment>
  );
}

export default App;
