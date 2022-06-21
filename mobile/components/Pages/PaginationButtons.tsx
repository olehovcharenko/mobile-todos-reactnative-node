import React, { Dispatch, SetStateAction } from 'react';
import { Pressable, Text, View } from 'react-native';
import { mainStyles } from '../../styles/mainStyles';

interface IProps{
  page: number;
  setPage: Dispatch<SetStateAction<number>>
  todosCount: number;
  dataLength: number;
}

const PaginationButtons = ({ page, setPage, todosCount, dataLength }:
  IProps) => {
  return (
    <View style={mainStyles.paginationButtons}>
      <Pressable onPress={() => {
        if (page > 0) {
          setPage((prev: number) => prev - 1);
        }
      }}><Text style={{ color: page > 0 ? 'black' : 'gray' }}>
          Prev</Text></Pressable>
      <Pressable onPress={() => {
        if (page < dataLength - todosCount * page) {
          setPage((prev: number) => prev + 1);
        }
      }}><Text style={{
          color: page < dataLength - todosCount * page ?
          'black' : 'gray',
        }}>Next</Text></Pressable>
    </View>
  );
};

export default PaginationButtons;