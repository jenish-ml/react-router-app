import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Dashboard from './pages/Dashboard';
import DashboardOverview from './pages/DashboardOverview';
import DashboardSettings from './pages/DashboardSettings';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardOverview />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;