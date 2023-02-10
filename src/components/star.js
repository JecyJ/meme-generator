import emptyStar from "../images/star-empty.png"
import filledStar from "../images/star-filled.png"


function Star(props) {   
    const starIcon = props.isFilled ? `${filledStar}` : `${emptyStar}` 
    return (
        
        <img 
            src={starIcon}
            alt="" 
            className="w-7 mb-3"
            // onClick={toggleFavorite}
        />
    )
}

export default Star;