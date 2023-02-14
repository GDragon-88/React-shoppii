import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Register } from "./components/Register/Register";
import {FashionMale} from "./components/FashionMale/FashionMale"
function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/login" element={<Login/>}/>
          <Route  path="/register" element={<Register/>}/>
          <Route path="/fashion-male" element={< FashionMale/>}/>
        </Routes>
      </Provider>

    </>
  );
}

export default App;
