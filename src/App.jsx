import React from 'react';
import './App.css';
import 'animate.css';
import Preview from "./components/Preview/Preview";
import OurProducts from "./components/OurProducts/OurProducts";
import Advantages from "./components/Advantages/Advantages";
import Stages from "./components/Stages/Stages";
import ClientSites from "./components/ClientSites/ClientSites";
import Slider from "./components/Slider/Slider";
import Footer from "./general-components/Footer/Footer";
import Communication from "./components/Communication/Communication";
import Form from "./components/Form/Form";

const App = () => {
    return (
        <>
            <Preview />
            <OurProducts />
            <Advantages />
            <Stages />
            <ClientSites />
            <Slider />
            <Communication />
            <Form />

            <Footer />
        </>
    );
};

export default App;