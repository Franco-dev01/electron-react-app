import React, { useState } from "react";


type ContextProps = { 
    openModal: boolean,
    setOpenModal: boolean,
    
  };


  export const ModalContext = 
  React.createContext<Partial<ContextProps>>({});


type PropsType = {
  children: React.ReactNode;
};


export const ModalContextProvider: React.FC<PropsType> = ({ children }) => {
const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <ModalContext.Provider value={ {openModal } }>
      {children}
    </ModalContext.Provider>
  );
};
