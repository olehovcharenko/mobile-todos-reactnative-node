import * as React from 'react';
import { TouchableOpacity, View  } from 'react-native';
import { Icon } from 'react-native-elements';
import { mainStyles } from '../../styles/mainStyles';
import Font from '../styleText/Font';

interface Props {
 type?: string;
 name: string;
 text: string;
 onClick: () => void;
 style: { width: string };
}

const IconButton = (props: Props) => {
  return (
    <TouchableOpacity style={[props.style || mainStyles.Button]}
      onPress={props.onClick}>
      <View style={{ alignItems: 'center' }}>
      <Icon name={props.name} size={30} type={props.type}
        tvParallaxProperties={undefined} />
        <Font text={props.text} />
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;

