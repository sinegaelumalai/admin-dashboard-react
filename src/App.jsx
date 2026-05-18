import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./component/mainLayout";
import Dashboard from "./component/dashboard";
import Transactions from "./component/transactions";
import Accounts from "./component/accounts";
import Investments from "./component/investments";
import CreditCards from "./component/creditcards";
import Loans from "./component/loans";
import Services from "./component/services";
import Settings from "./component/settings";
import Preferences from "./component/preferences";
import Security from "./component/security";
import ScrollToTop from "./component/scrollToTop";



const App = () => {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/creditcards" element={<CreditCards />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/services" element={<Services />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="settings/preferences" element={<Preferences />} />
          <Route path="settings/security" element={<Security />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
};

export default App;