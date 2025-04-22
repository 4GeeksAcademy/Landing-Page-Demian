import React from 'react';

const Cards = (props) => {
  return (
    <div className="card container m-2 w-100" style={{ width: '18rem' }}>
      <img src={props.imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.content}
        </p>
        <a href="{props.btnUrl}" className="btn btn-primary">{props.btnText}</a>
      </div>
    </div>
  );
};

export default Cards