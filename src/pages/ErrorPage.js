import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ErrorPage(){

    return(
        <div>
            <Navbar />
            <h1>Uh oh... There is a server error. Come back later ; ) </h1>
            <Footer />
        </div>
    )
}

export default ErrorPage;