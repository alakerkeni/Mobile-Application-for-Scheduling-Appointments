import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { AppItem } from './AppItem';
import { styles } from '../styles';

const AppList = ({ navigation, DATA }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: '90%', marginHorizontal: 'auto' }}>
        <TouchableOpacity onPress={() => navigation.navigate('AddRDV')}
        style={styles.loginbutton}>
          <Text style={styles.buttontext}>Add an Appointment</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => <AppItem appointment={item} />} 
      />
    </View>
  );
};

export default AppList;
