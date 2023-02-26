import React, {useState, useEffect} from "react"
const CapstoneContext = React.createContext();

function CapstoneContextProvider(props) {

    const [photos, setPhotos] = useState([]);
    const jsonUrl = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    function toggleFavorite(id) {
        const updatedPhotoArr = photos.map(
            (eachPhoto) => {
                if (eachPhoto.id === id) {
                    return {...eachPhoto, isFavorite: !eachPhoto.isFavorite};
                } else {
                    return eachPhoto;
                }
            }
        )
        setPhotos( () => ( updatedPhotoArr ) )
    }

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
        <CapstoneContext.Provider value={ {photos: photos, toggleFavorite: toggleFavorite} }>
            {props.children}
        </CapstoneContext.Provider>
    )
}

export {CapstoneContextProvider, CapstoneContext}