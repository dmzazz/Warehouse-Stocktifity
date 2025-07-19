import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Order from "./pages/Order";
import Supplier from "./pages/Supplier";

// Layout
import MainLayout from "./layouts/MainLayouts";

// Contexts
import { InventoryProvider } from "./context/InventoryContext";
import { SupplierProvider } from "./context/SupplierContext";
import { OrderProvider } from "./context/OrderContext";

const App = () => {
  return (
    <Router>
      <OrderProvider>
        <InventoryProvider>
          <SupplierProvider>
            <Routes>
              <Route path="/login" element={<Login />} />

              {/* Route dengan layout */}
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="order" element={<Order />} />
                <Route path="supplier" element={<Supplier />} />
              </Route>
            </Routes>
          </SupplierProvider>
        </InventoryProvider>
      </OrderProvider>
    </Router>
  );
};

export default App;
