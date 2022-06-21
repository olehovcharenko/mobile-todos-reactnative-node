import * as React from 'react';
import { View, Text } from 'react-native';
import Button from './IconButton';
import Font from '../styleText/Font';
import { useNavigation } from '@react-navigation/native';
import { mainStyles } from '../../styles/mainStyles';
import { Icon } from 'react-native-elements';
import { navKeys } from '../../keys/navKey';
import { useMutation } from 'react-query';
import { queryKeys } from '../../keys/queryKey';
import TodoService from '../../service/todoService';

const todoService = new TodoService;

export interface INav {
  // eslint-disable-next-line no-unused-vars
  navigate: (props: string, obj?: any) => {}
}

const TodoElement = (props: any) => {
  const nav = useNavigation<INav>();
  const { mutateAsync } = useMutation(queryKeys.todos,
      () => todoService.deleteTodo(props.id));

  const { mutateAsync: findOne } = useMutation(queryKeys.todos,
      () => todoService.getOneTodo(props.id));

  return (
    <View style={mainStyles.todoElementBlock}>
      <View style={mainStyles.underline} />
      <View style={mainStyles.todoElementUnder}>

        <View style={mainStyles.todoElementTextBlock}>
          <Text style={mainStyles.todoElementTitle}>
            {props.title + '    ' + props.year}
          </Text>
          <Font text={props.text} />
          <Font text={(props.completed ? 'Completed' : 'In progress')+
          ',  ' + (props.isPublic ? 'Public' : 'Private')}
          style={mainStyles.todoElementPS} />
        </View>

        <View style={mainStyles.todoElementIconBlock}>
          {props.authorId === props.userId ?
          <>
            <Button name='edit' text='Edit'
              type="feather" onClick={async () => {
                const dataTodo = await findOne();
                nav.navigate(navKeys.editPage, dataTodo?.data);
              } } style={{
                width: '',
              }} />
            <Button name="trash-can-outline" text="Delete"
              type="material-community" onClick={async () => {
                nav.navigate(navKeys.deletingPage);
                await mutateAsync();
                await props.client.invalidateQueries(queryKeys.todos);
                nav.navigate(navKeys.home);
              } } style={{
                width: '',
              }} />
          </>:
          <View style={mainStyles.todoElementNotAuthor}>
            <Icon name='lock' size={30} tvParallaxProperties={undefined} />
          </View>
          }
        </View>

      </View>
    </View>
  );
};

export default TodoElement;

