import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Order from "./pages/Order";
import Supplier from "./pages/Supplier";
import Sidebar from "./layouts/Sidebar";

// Import useContext
import { InventoryProvider } from "./context/InventoryContext";
import { SupplierProvider } from "./context/SupplierContext";
import { OrderProvider } from "./context/OrderContext";

// Import Header from "./layouts/Header";
import Header from "./layouts/Header";

const App = () => {
  return (
    <Router>
      <OrderProvider>
        <InventoryProvider>
          <SupplierProvider>
            <Routes>
              <Route path="login" element={<Login />} />

              <Route
                path="/"
                element={<Sidebar />}
                children={
                  <>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="inventory" element={<Inventory />} />
                    <Route path="order" element={<Order />} />
                    <Route path="supplier" element={<Supplier />} />
                    <Route path="header" element={<Header />} />
                  </>
                }
              />
            </Routes>
          </SupplierProvider>
        </InventoryProvider>
      </OrderProvider>
    </Router>
  );
};

export default App;
