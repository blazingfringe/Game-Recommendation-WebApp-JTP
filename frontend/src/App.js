import React from 'react'
import './styles/styles.scss'
import GameList from './components/GameList/GameList';
import Hero from './components/Hero/Hero';

/**
 * @component Main Layout of webapp
 * @returns Main App component
 */

const App = () => {
  return (
    <div className='main-container'>
      <section className='hero-section'>
        <Hero />
      </section>
      <section className='gamelist-section' id='gamelist-section'>
        <GameList />
      </section>
    </div>
  )
}

export default App