import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { navKeys } from '../../keys/navKey';
import { mainStyles } from '../../styles/mainStyles';
import SButton from '../Parts/SButton';
import { INav } from '../Parts/ToDoElement';

const UserAdded = () => {
  const nav = useNavigation<INav>();

  return (
    <>
      <View style={styles.block}>
        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 22 }}>User Added!</Text>
        </View>
        <SButton text='Go to Sign In'
          styles={{ text: mainStyles.buttonText }}
          onclick={() => nav.navigate(navKeys.loginPage)} />
      </View>
    </>
  );
};

export default UserAdded;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 