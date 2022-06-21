import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import TodoElement from '../Parts/ToDoElement';
import { ITodo } from '../../../server/src/types/todos.type';
import Font from './../styleText/Font';
import { QueryClient, useQuery } from 'react-query';
import { queryKeys } from '../../keys/queryKey';
import TodoService from '../../service/todoService';
import PaginationButtons from '../Pages/PaginationButtons';
import { LogBox } from 'react-native';
import React from 'react';


LogBox.ignoreLogs(['Setting a timer', `Can't perform a React state`]);
const todoService = new TodoService;

const TodoList = ({ client, params }:
  {client: QueryClient, params: string}) => {
  let userId: string;
  const [page, setPage] = useState(0);
  const todosCount = 3;

  const { isLoading, data, refetch } = useQuery(queryKeys.todos,
      () => todoService.getAllTodos(params, page, todosCount), {
        select: (data: any) => {
          userId = todoService.getUserId(data);
          return data?.data;
        },
      });
  useEffect(() => {
    refetch();
  }, [page]);
  const rend = ({ item }: {item: ITodo}) =>
    <TodoElement id={item._id} authorId={item.authorId} userId={userId}
      client={client} title={item.title}
      text={item.text} completed={item.completed} isPublic={item.isPublic}
      year={item.year} />;

  return (<>
    {isLoading ?
      <Font text="Loading..." /> :
      <>
        <FlatList data={data.todos} renderItem={rend}
          keyExtractor={() => Math.random().toString()} />
        <PaginationButtons setPage={setPage} page={page}
          dataLength={data.listLength} todosCount={todosCount} />
      </>
    }
  </>);
};

export default TodoList;
