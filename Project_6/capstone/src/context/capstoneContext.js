import React, {useState, useEffect} from "react"
const CapstoneContext = React.createContext();

function CapstoneContextProvider(props) {

    const [photos, setPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

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

    function addImageToCart(newImgItem) {
        setCartItems(
            (prevCartItems) => ([...prevCartItems, newImgItem])
        )
    } 

    function removeImageFromCart(imgItemId) {
        setCartItems(
            ( prevItems ) => { 
                return prevItems.filter( 
                    (cartItem) => ( cartItem.id !==  imgItemId ) 
                )
            }
        )
    }

    function isItemInCart(itemId) {
        return cartItems.find( (cartItem) => ( itemId === cartItem.id ))
    }
    
    function clearCart(){
        setCartItems( () => ([]) )
    }

    // useEffect(
    //     () => {
    //         console.table(cartItems);       
    //     }, 
    //     [cartItems]
    // )    

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
        <CapstoneContext.Provider 
            value={ {
                photos: photos, 
                toggleFavorite: toggleFavorite,
                cartItems: cartItems, 
                addImageToCart: addImageToCart,
                isItemInCart: isItemInCart,
                removeImageFromCart: removeImageFromCart,
                clearCart: clearCart
            } }
        >
            {props.children}
        </CapstoneContext.Provider>
    )
}

export {CapstoneContextProvider, CapstoneContext}