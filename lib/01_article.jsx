// TODO: import the right dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// TODO: code the Article component
const Article = (props) => {
  return <div className="article"><h2>{props.title}</h2><p>{props.body}</p></div>;
};

// const contain = document.querySelector('.container');
// ReactDOM.render(<Article title="My fancy new product" body="Test it now!" />, contain);
// ReactDOM.render(<Article title="My fancy new product" body="Test it now!" />);
// TODO: export your Article component for tests
export default Article;
