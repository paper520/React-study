import React from 'react';

const liStyle = {
  display: 'inline-block',
  margin: ".3rem"
};

const aStyle = {
  backgroundColor: '#2196F3',
  color: "white",
  lineHeight: "3em",
  padding: "0 .3rem"
};

export default class menu extends React.Component {
  render() {

    const menulist = [
      ["jsx", "JSX基本写法"]
    ];

    return (
      <ul>
        {menulist.map((value, key) => (
          <li key={key} style={liStyle}>
            <a href={"#/" + value[0]} style={aStyle}>{value[1]}</a>
          </li>))}
      </ul>
    );
  }
};