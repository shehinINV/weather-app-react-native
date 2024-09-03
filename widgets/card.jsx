// CardComponent.jsx
import React from 'react';
import {View, Text, Image} from 'react-native';

const CardComponent = ({name, country, continent, image}) => {
  return (
    <View style={{backgroundColor: 'black', padding: 10, borderRadius: 10}}>
      <Image source={{uri: image}} height={200} className="w-60 rounded-3xl" />
      <Text className="mt-3 text-lg font-bold"style={{color: 'white', fontWeight: 'bold'}}>{name}</Text>
      <Text className="text-black">{country}</Text>
      <Text>{continent}</Text>
    </View>
  );
};

export default CardComponent;
