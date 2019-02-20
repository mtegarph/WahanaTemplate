import React, { Component } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity,Button,TextInput } from "react-native";
export default class extends Component {
  render() {
    return (
        <View style={styles.container}>
             <Text style={styles.header}>LOGIN</Text>
            <TextInput placeholder= "Your Email" placeholderTextColor="#5b5dd1"></TextInput>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1cf3e',
    },header:{
        alignSelf: 'center',
         fontSize: 24,
         color: '#fff',
         paddingBottom: 10,
         marginBottom: 40,
         borderBottomColor: '#199187',
         borderBottomWidth: 1,
});