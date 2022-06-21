import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { navKeys } from '../../keys/navKey';
import UserService from '../../service/userService';
import { mainStyles } from '../../styles/mainStyles';
import { IUser } from '../../types/IUser';
import LogRegInputs from '../Parts/LogRegInputs';
import { INav } from '../Parts/ToDoElement';

const RegPage = () => {
  const userService = new UserService;
  const nav = useNavigation<INav>();

  const regFunction = async (values: IUser) => {
    try {
      await userService.reg(values);
      nav.navigate(navKeys.userAdded);
    } catch (error) {
      setWarning('This email is already exist');
    }
  };

  const [warning, setWarning] = useState('');

  return (
    <>
      <View style={mainStyles.wrapper}>
        <Text style={mainStyles.loginWarning}>{warning}</Text>
        <LogRegInputs onSubmitFunc={regFunction} />
      </View>
    </>
  );
};

export default RegPage; 