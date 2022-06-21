import * as React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

interface IProps {
  text: string;
  style?: StyleProp<TextStyle>;
}

const Font = (props: IProps) => {
  return <Text style={props.style}>{props.text}</Text>;
};

export default Font;

