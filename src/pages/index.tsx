import Layout from "../components/layout";
import React, { useState } from "react";



// console.log(window.chrome);
export default function IndexPage() {
const [state, setState] = useState({
    flex: false
});
// const setFlex = state[1];

const getPrev = prevState => console.log(setState(prevState));

    return ( 
    <Layout>{getPrev()}</Layout>
   
    )
}

