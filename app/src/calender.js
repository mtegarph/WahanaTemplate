import DateTimePicker from "react-native-modal-datetime-picker";
import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import moment from  'moment'

export default class Calender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      chosenDate: ''
    };
  }
  handlePicker = (date) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(date).format(' MMMM Do YYYY ')
    });
  };

  hidePicker = () => {
    this.setState({
      isVisible: false,
      
    });
  };
  showPicker = () => {
    this.setState({
      isVisible: true
    });
  };
  render() {
    return (
      <View>
        <TouchableOpacity  onPress={this.showPicker}>
         <Image  source ={require('./../../assets/kalender.png')}
            style={styles.ImageIconStyle}/>
            
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode = {'date'} 
        />
        <Text style={styles.result}>
              tanggal Lahir:   {this.state.chosenDate}
            </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 50, 
    backgroundColor: "blue",
    borderRadius: 30,
    justifyContent: "center",
    marginLeft: 150,
  },
  text:{
      fontSize: 18,
      color: 'white',
      textAlign: 'center'
  },
  result:{
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: "#5b5dd1",
    borderBottomColor: '#f8f8f8' ,
    borderBottomWidth: 1
  },ImageIconStyle: {
    paddingTop: 10,
    marginLeft: 250,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
});
