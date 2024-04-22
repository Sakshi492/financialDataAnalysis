import React from 'react';
import './App.scss';
import RouterData from './assets/routerData';
// import NavBar from './components/navBar/navBar';

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(
      `%cFinancial Data Analysis - sakshiagarwal.dev %crunning on local environment`,
      'font-weight: bold; font-size: 30px;color: #ffe7d0;',
      'color: #fc6e20; font-weight: bold; padding: 20px 5px; font-size: 13px; '
    );
  }

  render() {
    return (
      <div className="app-container">
        <div className="App">
          {/* <NavBar /> */}
          <RouterData />
        </div>
      </div>
    );
  }
}

export default App;
