import { BrowserRouter as Router, Route, } from 'react-router-dom';
import "./App.css";
// import {
//   Home,
//   Error,
//   Register,
//   Login,
//   Verify,
//   Dashboard,
//   ProtectedRoute,
//   ForgotPassword,
//   ResetPassword,
// } from './pages';
import Login from "./pages/Login";
import Register from './pages/Register';
import AuctionPage from './pages/AuctionPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
// import Navbar from './components/Navbar';
// import { useGlobalContext } from './context';
function App() {
  // const { isLoading } = useGlobalContext();

  // if (isLoading) {
    return (
      <section className='page page-center'>
        <Navbar />
        {/* <div className='loading'></div> */}
        {/* <Login/> */}
        {/* <Register/> */}
        {/* <AuctionPage/> */}
        {/* <ProductDetailPage/> */}
        <Dashboard/>
      </section>
    );
  // }
 
}

export default App;
