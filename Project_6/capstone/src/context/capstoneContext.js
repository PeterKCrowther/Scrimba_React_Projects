import React, {useState, useEffect} from "react"
const CapstoneContext = React.createContext();

function CapstoneContextProvider(props) {

    const [photos, setPhotos] = useState([]);
    const jsonUrl = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(
        () => {
            fetch(jsonUrl)
            .then(response => response.json())
            .then(data => {
                setPhotos(data)
            })        
        }, 
        []
    )

    // useEffect(
    //     () => {
    //         console.log(photos);       
    //     }, 
    //     [photos]
    // )



    return (
        <CapstoneContext.Provider value={ {photos: photos} }>
            {props.children}
        </CapstoneContext.Provider>
    )
}

export {CapstoneContextProvider, CapstoneContext}