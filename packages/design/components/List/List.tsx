import React from "react";
import { StyledList } from "./List.styles";

const List = ({ list }) => {
  return (
    <StyledList>
      {list.map((item, index) => (
        <li key={index}>{item.toString()}</li>
      ))}
    </StyledList>
  );
};

export default List;
