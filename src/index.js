import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
// La línea 8 y 9 son equivalentes
// todoList.todos.forEach( todo => crearTodoHtml(todo) );

todoList.todos.forEach( crearTodoHtml );
