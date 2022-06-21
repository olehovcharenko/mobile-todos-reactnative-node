import React from 'react';
import { View } from 'react-native';
import { filterKeys } from '../../keys/filterKey';
import { mainStyles } from '../../styles/mainStyles';
import IconButton from './IconButton';

// eslint-disable-next-line no-unused-vars
const FilterBar = ({ setParams }: {setParams: ( arg: string ) => void}) => {
  return (
    <View style={mainStyles.homeFilterPanel}>
      <IconButton text='Public' onClick={() => setParams(filterKeys.public)}
        name='person' style={mainStyles.homeFilterButton} />
      <IconButton text='Privat' onClick={() => setParams(filterKeys.privat)}
        name='lock' style={mainStyles.homeFilterButton} />
      <IconButton text='All' onClick={() => setParams(filterKeys.all)}
        name='menu' style={mainStyles.homeFilterButton} />
      <IconButton text='Comp...'
        onClick={() => setParams(filterKeys.completed)}
        name='done' style={mainStyles.homeFilterButton} />
      <IconButton text='In pro...'
        onClick={() => setParams(filterKeys.inProgress)}
        name='timer' style={mainStyles.homeFilterButton} />
    </View>
  );
};

export default FilterBar;
