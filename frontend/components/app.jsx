import React from "react";
import Modal from './modal/modal';
import Greeting from './greeting/greeting_container';
import {
    Link,
} from 'react-router-dom';


const App = () => (
    <div>
        <Modal />
        <header>
            <h1>Welcome to Zenterest!</h1>
        </header>
        <Greeting />
    </div>
);

export default App;