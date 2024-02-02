import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {

    const { searchValue, setSearchValue  } = React.useContext(TodoContext);

    return(
      <div className="TodoSearch">
        <input 
        className="TodoSearch-input" 
        placeholder="Ingrese un texto"
        value={ searchValue }
        onChange={ (event) => {
          // Aqui se actualiza el estado y se guarda en el estado del componente
          setSearchValue(event.target.value);
        }}
        maxLength = {20}
        />
      </div>
    );
}

export { TodoSearch };