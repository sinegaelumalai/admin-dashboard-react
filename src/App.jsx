import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./component/mainLayout";
import Dashboard from "./component/dashboard";
import Products from "./component/products";
import Favorites from "./component/favorites";
import Inbox from "./component/inbox";
import OrderLists from "./component/orderLists";
import ProductStock from "./component/productstock";
import Pricing from "./component/pricing";
import Calendar from "./component/calendar";
import Contact from "./component/contact";
import Invoice from "./component/invoice";
import UIElements from "./component/uiElements";
import Team from "./component/team";
import Settings from "./component/settings";
import Todo from "./component/todo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="orders" element={<OrderLists />} />
          <Route path="stock" element={<ProductStock />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/todo" element={<Todo />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/invoice" element={<Invoice />} />
           <Route path="/uielements" element={<UIElements />} />
            <Route path="/team" element={<Team />} />
            <Route path="settings" element={<Settings />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;