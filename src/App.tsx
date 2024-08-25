// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import './App.css'

function App() {

  const TAGS = ['Code', 'D&D', 'Vegan', 'FAQ', 'Toastmasters']
  console.log('TAGS', TAGS);

  return (
    <>
      <Header />

      {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}

    </>
  )
}

export default App
