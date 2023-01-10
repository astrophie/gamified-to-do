import React, {useState, useEffect} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import components & contexts
import NavComponent from "./components/Navbar";
import TodoComp from "./components/TodoComponent";
import Store from "./components/Store";
import CartProvider from "./CartContext";

function App() {  
  const [coins, setCoins] = useState(0);

  // save to local
  const saveLocal = () => {
    if (coins !== 0) {
      localStorage.setItem("coins", JSON.stringify(coins));
    }

    else if (coins === 0) {
      localStorage.setItem("coins", JSON.stringify(0));
    }
  } 

  const getLocal = () => {
    if(localStorage.getItem("coins") == null) {
        localStorage.setItem("coins", JSON.stringify(0));
      } else {
        let localCoins = JSON.parse(localStorage.getItem("coins"));
        setCoins(localCoins);
      }

    localStorage.setItem("items", JSON.stringify(coins));

  }

    // run once at beginning
    useEffect(() => {
      getLocal();
    }, [])
  
     
    useEffect(() => {
      saveLocal();
    }, [coins])


  return (
    <CartProvider>
    <div className="App" >
      <Container>
      {/* routing to different pages*/}
      <BrowserRouter>
      <NavComponent/>
        <Routes>
          <Route path="/" element={<TodoComp
            coins={coins}
            setCoins={setCoins} />}/>

          <Route path="store" element={<Store 
            coins={coins}
            setCoins={setCoins} />}/>

        </Routes>
      </BrowserRouter>
      </Container>
    </div>
    </CartProvider>
  );
}

export default App;
