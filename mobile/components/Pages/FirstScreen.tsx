import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { navKeys } from '../../keys/navKey';
import { mainStyles } from '../../styles/mainStyles'
import SButton from '../Parts/SButton';
import { INav } from '../Parts/ToDoElement';

const FirstScreen = () => {
  const nav = useNavigation<INav>();

  return (
    <View style={mainStyles.firstScreenBlock}>
      <View style={mainStyles.firstScreenButtonBlock}>
        <SButton text="Sign In" onclick={() => nav.navigate(navKeys.loginPage)}
          styles={{ text: mainStyles.firstScreenText,
            button: mainStyles.firstScreenButton }} />
        <SButton text="Sign Up" onclick={() => nav.navigate(navKeys.regPage)}
          styles={{ text: mainStyles.firstScreenText,
            button: mainStyles.firstScreenButton }} />
      </View>
    </View>
  );
};

export default FirstScreen;