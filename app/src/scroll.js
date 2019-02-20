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
import Calender from "./calender";

export default class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      presetDate: "",
      stateKey: ""
    };
  }

  /* showPicker = async (stateKey, options) => {
        try {
            var newState = {}
          const {action, year, month, day, hour, minute, second} = await DatePickerAndroid.open({date: new Date(Date.UTC(year, month, day, hour, minute, second)),
                                                                                mode: 'spinner',});
          if (action !== DatePickerAndroid.dismissedAction) {
            newState[stateKey + 'Text'] = 'Click to add Date';
            
          }else{
            // <<newly selected  date >>
            var date = new Date(year, month, day);
            console.log(year, month, day);
            newState[stateKey + 'Text'] = date.toDateString();
            newState[stateKey + 'Date'] = date.toISOString();
          }
          this.setState(newState)
        } catch ({code, message}) {
          console.warn(`Error in example '${stateKey}' : `, message);
        }
      };*/
  render() {
    return (
      <ScrollView style={styles.view}>
        <Text style={styles.header}>Personal</Text>

        <TextInput
          style={styles.textinput}
          placeholderTextColor="#5b5dd1"
          placeholder="Nama anda"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          style={styles.textinput}
          placeholderTextColor="#5b5dd1"
          placeholder="umur"
          underlineColorAndroid={"transparent"}
        />

        <Calender />

        <TextInput
          style={styles.textinput}
          placeholderTextColor="#5b5dd1"
          placeholder="no telepon"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          style={styles.textinput}
          placeholderTextColor="#5b5dd1"
          placeholder="no HP"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          style={styles.textinput}
          placeholderTextColor="#5b5dd1"
          placeholder="Alamat"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          style={styles.textinput}
          placeholderTextColor="#5b5dd1"
          placeholder="kode pos"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          style={styles.textinput}
          placeholderTextColor="#5b5dd1"
          placeholder="no identitas"
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
