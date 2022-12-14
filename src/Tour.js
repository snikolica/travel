import React, {useState} from "react";


const Tour = ({id,image,info,price,name,removeTour}) => {
    const [readMore, setReadMore] = useState(false);
    const deleteText = () => {

    }
    return ( 
<article className="single-tour">
<img src={image} alt={name} />
<footer>
    <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="price">{price}</h4>
    </div>
    <p>{readMore ? info :`${info.substring(0,200)}...`
    }
    <button onClick={()=> setReadMore(prev=> !prev)} className='read-more'>{readMore ? 'read less' : 'read more'}</button>
    </p>
    <button className="delete-btn" onClick={()=>removeTour(id)}>Not Interested</button>
</footer>
        </article>
     );
}
 
export default Tour;