import React , { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './components/Login';
import AddRDV from './components/AddRDV';
import AppList from './components/AppList';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './components/SignUp';

const Stack = createStackNavigator();

export default function App() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,          
      title: "Meeting",
      content: "Meeting content",
      date: "11-11-23",
      hour: "12",
  },
  {
      id: 2,
      title: "Workshop",
      content: "Workshop content",
      date: "12-11023",
      hour: "12",
  },
 
  ]);
 
  const addAppointment = (newAppointment) => {
    setAppointments((Appointments) => [...Appointments, newAppointment]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign in" component={Login}/>
        <Stack.Screen name="Sign Up" component={SignUp}/>
        <Stack.Screen name="AppList" options={{ title: 'Appointments' }}>
         {(props) => <AppList {...props} DATA={appointments} />}
        </Stack.Screen>

        <Stack.Screen
          name="AddRDV" options={{headerShown: false,}}>
          {(props) => <AddRDV {...props} addAppointment={addAppointment} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
