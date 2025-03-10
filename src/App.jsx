import "./App.css";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Layout from "./components/Layout.jsx";
import ContactsPage from "./pages/Contacts/ContactsPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
