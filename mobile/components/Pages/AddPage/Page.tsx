import * as React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { mainStyles } from '../../../styles/mainStyles';
import { IClientProp } from '../../../types/IClient';
import Font from '../../styleText/Font';
import Add from './Form';

const AddPage = ({ client }: IClientProp) => {
  return (
    <ScrollView>
      <View style={mainStyles.wrapper}>
        <Font text="Create new Todo" style={mainStyles.addHeader} />

        <Add client={client} />

      </View>
    </ScrollView>
  );
};

export default AddPage;