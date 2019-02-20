import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Text,
  TextInput,
  DatePickerAndroid
} from "react-native";

export default class Counter extends React.Component {
  Press = () => {
    this.secondTextInput.focus();
  };
  Submit = input => {
    this.secondTextInput = input;
  };
  Press2 = () => {
    this.thirdTextInput.focus();
  };
  Submit2 = input => {
    this.thirdTextInput = input;
  };
  Press3 = () => {
    this.fourthTextInput.focus();
  };
  Submit3 = input => {
    this.fourthTextInput = input;
  };
  Press4 = () => {
    this.fifthTextInput.focus();
  };
  Submit4 = input => {
    this.fifthTextInput = input;
  };
  Press5 = () => {
    this.sixthTextInput.focus();
  };
  Submit5 = input => {
    this.sixthTextInput = input;
  };
  Press6 = () => {
    this.seventhTextInput.focus();
  };
  Submit6 = input => {
    this.seventhTextInput = input;
  };
  Press7 = () => {
    this.eighthTextInput.focus();
  };
  Submit7 = input => {
    this.eighthTextInput = input;
  };
  render() {
    return (
      <ScrollView style={styles.view}>
        <Text style={styles.header}>Counter</Text>

        <TextInput
          blurOnSubmit={false}
          onSubmitEditing={this.Press}
          style={styles.textinput}
          placeholderTextColor="#5b5dd1"
          placeholder="Nama Pemilik Bangunan"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          onSubmitEditing={this.Press2}
          blurOnSubmit={false}
          ref={this.Submit}
          style={styles.textinput}
          placeholderTextColor="#5b5dd1"
          placeholder="Nomor Telepon Pemilik Bangunan"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          onSubmitEditing={this.Press3}
          ref={this.Submit2}
          blurOnSubmit={false}
          style={styles.textinput}
          placeholderTextColor="#5b5dd1"
          placeholder="Lebar Bangunan"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          ref={this.Submit3}
          onSubmitEditing={this.Press4}
          blurOnSubmit={false}
          style={styles.textinput}
          placeholderTextColor="#5b5dd1"
          placeholder="Panjang Bangunan"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          ref={this.Submit4}
          onSubmitEditing={this.Press5}
          blurOnSubmit={false}
          style={styles.textinput}
          placeholderTextColor="#5b5dd1"
          placeholder="Lebar Jalan Depan"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          ref={this.Submit5}
          onSubmitEditing={this.Press6}
          blurOnSubmit={false}
          style={styles.textinput}
          placeholderTextColor="#5b5dd1"
          placeholder="kecamatan"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          ref={this.Submit6}
          onSubmitEditing={this.Press7}
          blurOnSubmit={false}
          style={styles.textinput}
          placeholderTextColor="#5b5dd1"
          placeholder="no identitas"
          underlineColorAndroid={"transparent"}
        />
        <TextInput
          ref={this.Submit7}
          blurOnSubmit={false}
          style={styles.textinput}
          placeholderTextColor="#5b5dd1"
          placeholder="Taking Picture"
          underlineColorAndroid={"transparent"}
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
    fontSize: 24,
    color: "#fff",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#199187",
    borderBottomWidth: 1
  },
  view: {
    alignSelf: "stretch",
    paddingLeft: 60,
    paddingRight: 60
  },

  textinput: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "#fff",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1
  }
});
