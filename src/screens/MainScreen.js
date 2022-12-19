import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { useState } from "react";
import LocalizedStrings from 'react-native-localization';

function MainScreen ({ navigation }) {
  
  let strings = new LocalizedStrings({
    "en":{
      convert:"Convert to Morse Code!"
    },
    "tr":{
      convert:"Mors Alfabesine Çevir!"
    }
  })

  const [showConverted, setShowConverted] = useState(false);
  const [text, onChangeText] = useState("");

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

  const copy = () => Clipboard.setString(convertToMorse(text));

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#f1f1f1'}}>  
      <View style={styles.responsiveView}> 
          <View style={{margin:10, backgroundColor: '#F178B6', width: 300, height:40}}>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            clearButtonMode='always'
            cursorColor="blue"
            inlineImageLeft='search_icon'
            />
          </View>
          <TouchableOpacity onPress={() => setShowConverted(!showConverted)} style={{backgroundColor:'#F178B6', height: 30, width: 190, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color:'#fff', fontSize:16}}> {strings.convert} </Text>
          </TouchableOpacity>
          {
            showConverted == false ?
            <View>
              <Text> please enter some text to convert </Text>
            </View> 
            :
            showConverted == true ?
            <View>
              <Text> converted : {convertToMorse(text)} </Text>
              <TouchableOpacity  onPress={() => copy()}> 
                <Text>copy</Text> 
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowConverted(!showConverted) & onChangeText("")} style={{backgroundColor:'#F178B6', height: 30, width: 190, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color:'#fff', fontSize:16}}>Reset!</Text>
              </TouchableOpacity>
            </View>             
            :
            <View>
              <Text> error </Text>
            </View> 
          }
          
      </View>   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  responsiveView:{
    alignItems:'center', 
    justifyContent: 'center'
  },
  input: {
    color: '#FFF'
  }
});

export default MainScreen;