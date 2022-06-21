import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Route, View } from 'react-native';
import { QueryClient, useMutation } from 'react-query';
import { navKeys } from '../../keys/navKey';
import { queryKeys } from '../../keys/queryKey';
import TodoService from '../../service/todoService';
import { mainStyles } from '../../styles/mainStyles';
import { ITodo } from '../../types/ITodo';
import Inputs from '../Parts/Inputs';
import { INav } from '../Parts/ToDoElement';

interface IProps {
  client: QueryClient,
  route: Route
}

const todoService = new TodoService;

const EditTodo = ({ route, client }: IProps) => {
  const nav = useNavigation<INav>();

  const initialV = {
    title: route.params.title,
    text: route.params.text,
    completed: route.params.completed,
    isPublic: route.params.isPublic,
  };

  const { mutateAsync } = useMutation(queryKeys.todos,
      ([id, data]: [string, ITodo]) => todoService.putTodo(data, id), {
        onError: (error: string) => console.log(error),
        onSuccess: async () => {
          await client.invalidateQueries(queryKeys.todos);
          nav.navigate(navKeys.home);
        },
      });

  const id = route.params._id;

  const onSubmitFunc = (values: ITodo) => {
    const todo: ITodo = values;
    mutateAsync([id, todo]);
  };

  return (
    <View style={mainStyles.wrapper}>
      <Inputs initValues={initialV} onSubmitFunc={onSubmitFunc} />
    </View>
  );
};


export default EditTodo;

