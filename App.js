import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  Text
} from 'react-native';

const morseCode = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--.."
}

const convertToMorse = (str) => {
  return str.toUpperCase().split("").map(x => {
     return morseCode[x] ? morseCode[x] : x;
  }).join("");
};

console.log("Ceyda : " + convertToMorse('Ceyda'));
const App = ({ navigation }) => {

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>  
      <View style={styles.responsiveView}>   
        <Text>ceyda</Text>
      </View>   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  responsiveView:{
    alignItems:'center', 
    justifyContent: 'center'
  }
});

export default App;