function ImageCard(props){
    return(
        <img
            alt=""
            src={require('../../img/' + props.name)} 
            width={props.w}
            height={props.h}
            className="d-inline-block align-center"
            />
    )
}

export default ImageCard;