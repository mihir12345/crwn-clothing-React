import React from 'react';
import './menu-item.style.scss';
import {withRouter} from 'react-router-dom'

function MenuItem ({title,imageUrl,size,history,match,linkUrl}) {
    return (
        <div  className={`${size} menu-item`} onClick={()=>{history.push(`${match.url}${linkUrl}`)}}>
        <div className='background-image' style={{background:`url(${imageUrl})`}}/>
        <div className='content'>  
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
        </div>
      </div>
    );
}

export default withRouter(MenuItem) ;