import React from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import routes from './components/routes'

function App() {
  return (
    <div>
      <Header />
      <Footer />
      {routes}
    </div>
  )
}

export default App;
