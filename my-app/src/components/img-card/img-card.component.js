function ImageCard(props){
    return(
        <img
            alt=""
            src={require('../../img/' + props.name)} 
            width="500"
            height="400"
            className="d-inline-block align-center"
            />
    )
}

export default ImageCard;