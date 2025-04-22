import React from 'react';


const Jumbotron = (props) => {
  return (
    <div className="jumbotron container mb-3">
      <h1 className="display-4">{props.title}</h1>
      <p className="lead">{props.description}</p>

      <a className="btn btn-primary btn-lg" href={props.btninfo.url} role="button">{props.btninfo.text}</a>
    </div>
  );
};

export default Jumbotron