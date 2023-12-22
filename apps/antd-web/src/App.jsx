import React, { useState } from "react";

import Home from "@/views/Home";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Home />
        </>
    );
}

export default App;
