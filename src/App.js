
import styled from "styled-components";
import { MainLayout } from "./styles/Layout";
import Orb from "./components/Orb/Orb";
import Navigation from "./components/Navigation/Navigation";
import { useMemo, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Income from './components/Income/Income';
import Expense from './components/Expense/Expense';
import Transaction from './components/Transaction/Transactioon';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Corrected import
import Login from "./components/Login";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Home() {
  const [active, setActive] = useState(1);
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Transaction />;
      case 3:
        return <Income />;
      case 4:
        return <Expense />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppStyle>
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setactive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyle>
  );
}

function App() {
  return (
    <Router>  {/* Corrected from Router to BrowserRouter */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}
const AppStyle = styled.div`
 height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`
export default App;
