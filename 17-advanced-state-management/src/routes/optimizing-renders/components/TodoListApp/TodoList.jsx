import { func } from 'prop-types';
import { memo } from 'react';
import { TodoListType } from './@types';
import S from './style.module.css';
import Todo from './Todo';

TodoList.propTypes = {
  list: TodoListType.isRequired,
  onChangeTodo: func,
};

function TodoList({ list, onChangeTodo }) {
  return (
    <ul className={S.TodoList}>
      {list.map((todo) => (
        <Todo key={todo.id} todo={todo} onChange={onChangeTodo} />
      ))}
    </ul>
  );
}

export default memo(TodoList);
