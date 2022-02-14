import React from 'react'


const ProductDetailPlaceHolder = (props) => {

    const loaderStyles = {
        backgroundColor : "#eee",
        width: "100%",
        overflow: "hidden",
        position : 'relative' ,
        ...props.extraStyles
    }

    const loaderSwipeStyles = {
        position: "absolute" ,
        top: "0" ,
        left: "0" ,
        width: "100%" ,
        Animation: "loaderSwipeAnim 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite" ,
        background : "linear-gradient(to right , #eeeeee 10% , #dddddd 50% , #eeeeee 90%)" ,
        height : "100%"
    }
  return (
    <div>
        <div style={loaderStyles}>
            <div style={loaderSwipeStyles}></div>
        </div>
    </div>
  )
}

export default ProductDetailPlaceHolder