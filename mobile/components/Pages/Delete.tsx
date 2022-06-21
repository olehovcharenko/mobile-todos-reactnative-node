import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Font from '../styleText/Font';

const Delete = () => {
  return (
    <View style={styles.block}>
      <Font text="Deleting..." />
    </View>
  );
};

export default Delete;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});