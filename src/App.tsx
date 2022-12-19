import { ToastContainer } from "react-toastify";
import { RoutesMain as Routes } from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      <GlobalStyle/>
      <Routes />
    </div>
  );
}

export default App;
