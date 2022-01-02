import React from "react";

import { useModalUpdate } from "../../contexts/modalcontext";

const Landing: React.FC = () => {

    const toggleModal = useModalUpdate();
    return (
        <div className="landing">
            <h1>Qiyuan Chen</h1>
            <h2>Future Web Dev</h2>
            <button onClick={toggleModal}>Let&apos;s Talk!</button>
        </div>
    )
}

export default Landing;