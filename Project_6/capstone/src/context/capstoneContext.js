import React, {useState} from "react"
const CapstoneContext = React.createContext();

function CapstoneContextProvider(props) {

    const [state, useSate] = useState("");


    return (
        <CapstoneContext.Provider value={ state }>
            {props.children}
        </CapstoneContext.Provider>
    )
}

export {CapstoneContextProvider, CapstoneContext}