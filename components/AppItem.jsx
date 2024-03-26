import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../styles";

export function AppItem({ appointment }) {
  return (
    <View style={styles.apItemContainer}>
      <View style={styles.apItemRight}>
        <Text style={{ fontWeight: 800, fontSize: 20 }}>
          {appointment.title}
        </Text>
        <Text style={{ fontWeight: 500, fontSize: 13 }}>
          {appointment.content}
        </Text>
      </View>
      <View style={styles.apItemLeft}>
        <Text>{appointment.date}</Text>
        <Text>{appointment.hour}h</Text>
       
      </View>
    </View>
  );
}