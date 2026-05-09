import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import MainLayout from './layouts/MainLayout';
import EducationDept from './pages/EducationDept';
import EnergyDept from './pages/EnergyDept';
import Security from './pages/Security';
import FoodDep from './pages/FoodDep';
import HealthDept from './pages/Health';
import Departments from './pages/DeptPages';
import PlansPage from './pages/PlansPage';
import EngineeringDept from './pages/EngineeringDept';
import SingleBusiness from './pages/SingleBusiness';
import SubPages from './pages/SubPages';


export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/education" element={<EducationDept />} />
        <Route path="/energy" element={<EnergyDept />} />
        <Route path="/security" element={<Security />} />
        <Route path="/food" element={<FoodDep />} />
        <Route path="/health" element={<HealthDept />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/plans" element={<PlansPage/>} />
        <Route path="/engineering" element={<EngineeringDept/>} />
<Route path="/business/:name" element={<SingleBusiness />} />
<Route path="/business/:name/:subpage" element={<SubPages />} />
      </Route>
    </Routes>
  );
}
