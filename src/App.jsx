import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ProfilePage } from "./pages/ProfilePage";
import { DashboardPage } from "./pages/DashboardPage";
import { NavbarComponent } from './components/Navbar/NavbarComponent';


export default function App ()
{
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/register" element={ <RegisterPage /> } />
        <Route path="/profile" element={ <ProfilePage /> } />
        <Route path="/dashboard" element={ <DashboardPage /> } />
      </Routes>
    </BrowserRouter>
  )
}