import React, { useState, useContext } from "react";

const ModalContext = React.createContext(false);
const ModalUpdateContext = React.createContext(() => {});

export const useModal = () => {
    return useContext(ModalContext);
}

export const useModalUpdate = () => {
    return useContext(ModalUpdateContext);
}

const ModalProvider = ({ children } : {children: React.ReactNode}) => {
    const [modalActive, setModalActive] = useState<boolean>(false);

    const toggleModal = () => {
        setModalActive(modalActive => !modalActive);
    }

    return (
        <ModalContext.Provider value={modalActive}>
            <ModalUpdateContext.Provider value={toggleModal}>
                {children}
            </ModalUpdateContext.Provider>
        </ModalContext.Provider>
    )
}

export default ModalProvider;
