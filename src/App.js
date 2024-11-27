import './App.css';
import { FaArrowLeft } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";

function App() {
  return (
    <div>
      <header className='status-bar'></header>
      <section>
      <i><FaArrowLeft/></i>
      <p>Para fazer o login no Pounsflats, você precisa se identificar com uma das opções abaixo</p>
      </section>
      <main>
        <button><FaUser/> <br/>Sou Hospede</button>
        <button><FaUserTie/> <br/>Sou Anfitrião</button>
      </main>
    </div>
  );
}

export default App;
