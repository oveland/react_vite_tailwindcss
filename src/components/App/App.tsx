import './App.scss';

function App() {
  return (
    <div className='app'>
      <div className='app-message__container'>
        <span className='app-message__title'>Bienvenido</span>
        <span className='app-message__description' data-testid='description'>
          Vite + React + Tailwindcss + TS
        </span>
      </div>
    </div>
  );
}

export default App;
