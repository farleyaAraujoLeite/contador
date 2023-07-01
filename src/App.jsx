import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const refeicao = () => {
      let now = new Date();
      let target = new Date();
      target.setDate(now.getDate() + ((7 - now.getDay() + 0) % 7));
      target.setHours(20,0,0,0)
      let diferenca = target - now;
      let hora = Math.floor(diferenca / (1000 * 60 * 60));
      var minutes = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((diferenca % (1000 * 60)) / 1000);
      setCount(`${hora}h ${minutes}m ${seconds}s`);
      setTimeout(refeicao, 1000)
    }
    refeicao()
  },[])

  return (
    <>
      <div style={
        {
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'gray',
        }
      }>
        <h3>tempo restante para sua próxima refeição livre</h3>
          <h2>{count}</h2>
      </div>
    </>
  )
}

export default App
