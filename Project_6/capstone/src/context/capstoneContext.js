import React, {useState} from "react"
const CapstoneContext = React.createContext();

function CapstoneContextProvider(props) {

    const [photos, usePhotos] = useState([]);

    return (
        <CapstoneContext.Provider value={ {photos: photos} }>
            {props.children}
        </CapstoneContext.Provider>
    )
}

export {CapstoneContextProvider, CapstoneContext}