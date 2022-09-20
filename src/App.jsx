import React from 'react';
import './App.css';
import './AppMedia.css';
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
import Services from "./components/Services/Services";
// import Calculator from "./components/Calculator/Calculator";

const App = () => {
    return (
        <>
            <Preview />
            {/*<OurProducts />*/}
            <Advantages />
            <Stages />
            <ClientSites />
            <Slider />
            <Services />
            {/*<Calculator />*/}
            <Communication />
            <Form />

            <Footer />
        </>
    );
};

export default App;