import * as React from 'react';
import { ITodo } from '../../../types/ITodo';
import { useMutation } from 'react-query';
import { useNavigation } from '@react-navigation/native';
import { INav } from '../../Parts/TodoElement';
import { navKeys } from '../../../keys/navKey';
import Inputs from '../../Parts/Inputs';
import { IClientProp } from '../../../types/IClient';
import { queryKeys } from '../../../keys/queryKey';
import TodoService from '../../../service/todoService';

const InputForm = ({ client }: IClientProp) => {
  const nav = useNavigation<INav>();

  const todoService = new TodoService;

  const { mutateAsync } = useMutation(queryKeys.todos,
      (data: ITodo) => todoService.postTodo(data), {
        onError: (error: string) => console.log(error),
        onSuccess: async () => {
          await client.invalidateQueries(queryKeys.todos);
          nav.navigate(navKeys.home);
        },
      });

  const initValues: ITodo = {
    title: '',
    text: '',
    isPublic: false,
    completed: false,
  };

  const onSubmitFunc = (values: ITodo) => {
    const todo: ITodo = values ;
    mutateAsync(todo);
  };

  return <Inputs onSubmitFunc={onSubmitFunc} initValues={initValues} />;
};
export default InputForm;

