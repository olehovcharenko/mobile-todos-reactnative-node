import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { navKeys } from '../../keys/navKey';
import UserService from '../../service/userService';
import { mainStyles } from '../../styles/mainStyles';
import { IUser } from '../../types/IUser';
import LogRegInputs from '../Parts/LogRegInputs';
import { INav } from '../Parts/TodoElement';

const LoginPage = () => {
  const userService = new UserService;
  const nav = useNavigation<INav>();

  const logFunction = async (values: IUser) => {
    try {
      const token = await userService.login(values);
      AsyncStorage.setItem('token', token.data.result);
      nav.navigate(navKeys.home);
    } catch (error) {
      setWarning('wrong email or password');
    }
  };

  const [warning, setWarning] = useState('');

  return (
    <>
      <View style={mainStyles.wrapper}>
        <Text style={mainStyles.loginWarning}>{warning}</Text>
        <LogRegInputs onSubmitFunc={logFunction} />
      </View>
    </>
  );
};

export default LoginPage;