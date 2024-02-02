// Revisamos si tenemos informacion en el localStorage
// const localStorageTodos = localStorage.getItem('TODOS_v1');
// Si no hay informacion en el localStorage, entonces usamos los todos por defecto
// let parsedTodos = JSON.parse(localStorageTodos);

// Estados
// Utilizamos useState para validar mas bien si hay informacion en el localStorage con el callback integrado del useState
// const [todos, setTodos] --> Como antes se retornaba un array no teniamos inconvenientes con los nombres de las variables
// Ahora como se retorna un objeto, entonces debemos desestructurar el objeto para poder utilizar las variables tal como son las propiedades del objeto
// Renombramos la variable item a todos y saveItem a saveTodos

```javascript
const {
  item: todos,
  saveItem: saveTodos,
  error,
  loading,
} = useLocalStorage("TODOS_v1", []);
const [searchValue, setSearchValue] = React.useState("");
```

// Contador de todos completados

```javascript
const completedTodos = todos.filter((todo) => !!todo.completed).length;
const totalTodos = todos.length;
```

// Filtrar los todos

```javascript
const searchedTodo = todos.filter((todo) =>
  todo.text
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, "")
    .includes(searchValue.toLowerCase())
);
```

// Funcion para marcar como completado un todo

```javascript
const completeTodos = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex((todo) => todo.text === text);
  newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
  saveTodos(newTodos);
};

const deleteTodo = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex((todo) => todo.text === text);
  newTodos.splice(todoIndex, 1); // Splice lo que permite es eliminar el elemento del array y reordenar los indices del array
  //delete newTodos[todoIndex]; // Delete lo que permite es eliminar el elemento del array, pero no reordena los indices del array
  saveTodos(newTodos);
};
```
## Despliegue

En el package.json colocamos una propiedad que se llama "homepage", si queremos desplegar en local utilizamos el path de nuestro archivo, si queremos desplegar en github pages, entonces colocamos el nombre del repositorio.

```json
"homepage": "...ruta"
```

Luego en el terminal ejecutamos el siguiente comando:

```bash
npm run build
```

Y para desplegar en github pages instalamos la dependecia gh-pages con --save-dev por que es solo para desarrollo esta dependecia a utilizar.

```bash
npm i --save-dev gh-pages
```

Luego en el package.json colocamos los siguientes scripts:

```json
"scripts": {
  "deploy": "gh-pages -d build"
}
```

Y ejecutamos el siguiente comando:

```bash
npm run deploy
```

