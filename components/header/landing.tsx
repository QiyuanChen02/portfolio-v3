import React, { useContext } from "react";
import "./header.css";

import { useModalUpdate } from "../../contexts/modalcontext";

const TopBar: React.FC = () => {

    const toggleModal = useModalUpdate();
    return (
        <div className="landing">
            <h1>Qiyuan Chen</h1>
            <h2>Future Web Dev</h2>
            <button onClick={toggleModal}>Let's Talk!</button>
        </div>
    )
}

export default TopBar;