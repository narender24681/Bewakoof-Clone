import './App.css';
import Navbar from './Pages/Home/Navbar';
import Main from './Pages/Home/Main';
import Footer from './Pages/Home/Footer';
import ProductsMens from './Pages/Products/ProductsMens';
import Cart from './Pages/Cart/Cart';
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
