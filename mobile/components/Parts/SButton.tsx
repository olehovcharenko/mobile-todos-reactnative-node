import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { mainStyles } from '../../styles/mainStyles';

interface Props {
  onclick: () => void;
  text: string
  styles?: {text?: {}, button?: {}}
}

const SButton = ({ onclick, text, styles }: Props) => {
  return (
    <View style={mainStyles.buttonShadow}>
       <Button buttonStyle={styles?.button || mainStyles.addButton}
        titleStyle={styles?.text || mainStyles.buttonText}
        onPress={onclick} title={text} /> 
    </View>
  );
};

export default SButton;