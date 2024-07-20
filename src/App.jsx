import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';

import AuthPage from './pages/AuthPage';

import { AuthProvider } from './components/AuthProvider';

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/login" element={<AuthPage />} />
                    <Route path="*" element={<AuthPage />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
};

