import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, View } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import SButton from '../Parts/SButton';
import TodoList from '../Parts/TodoList';
import { mainStyles } from '../../styles/mainStyles';
import { navKeys } from '../../keys/navKey';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { INav } from '../Parts/TodoElement';
import { IClientProp } from '../../types/IClient';
import FilterBar from './../Parts/FIlterBar';

const HomePage = ({ client }: IClientProp) => {
  const nav = useNavigation<INav>();

  const statusBarStyle = 'dark';
  const [params, setParams] = useState('');

  return (
    <>
      <StatusBar backgroundColor={mainStyles.statusBar.backgroundColor}
        style={statusBarStyle} />
      <ScrollView>
        <FilterBar setParams={setParams} />
        <View style={mainStyles.wrapper}>

          <View style={mainStyles.homePageNavBlock}>
            <View style={mainStyles.homePageNavButton}>
              <SButton onclick={() => nav.navigate(navKeys.addPage)}
                text="Create new Todo" />
            </View>
            <View style={{ justifyContent: 'flex-end' }}>
              <Pressable onPress={() => nav.navigate(navKeys.firstPage)}>
                <Icon name='logout' color="gray" size={35}
                  tvParallaxProperties={undefined} />
              </Pressable>
            </View>
          </View>

          <TodoList client={client} params={params} />

        </View>
      </ScrollView>
    </>
  );
};

export default HomePage;
