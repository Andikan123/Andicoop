import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ChatWidget from '../components/ChatWidget';


export default function MainLayout() {
return (
<>
<Navbar />
<ChatWidget/>
<main className="">
<Outlet />
</main>
</>
);
}