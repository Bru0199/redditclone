'use client';

import React, { useState } from 'react';
import AuthButtons from '@/./components/Navbar/RightContent/AuthButtons';
import AuthModal from './AuthModal';

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalView, setModalView] = useState('login');

  const handleLoginClick = () => {
    console.log('login click')
    setModalView('login');
    setIsModalOpen(true);
  };

  const handleSignupClick = () => {
        console.log('signup click')

    setModalView('signup');
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <AuthButtons onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} />
      <AuthModal isModalOpen={isModalOpen} onClose={handleModalClose} modalView={modalView} />
    </div>
  );
};

export default ParentComponent;