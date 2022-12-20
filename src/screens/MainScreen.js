import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
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
      enter:"Enter Text to be Converted to Morse Code : ",
      convert:"Convert to Morse Code!",
      please:"Please enter some text to convert",
      reset:"Reset!",
      converted:"Converted",
      copy:"Copy!"
    },
    "tr":{
      enter:"Mors Alfabesine Çevirmek İstediğiniz Metin : ",
      convert:"Mors Alfabesine Çevir!",
      please:"Lütfen çevrilmesini istediğiniz metni girin",
      reset:"Sıfırla!",
      converted:"Çeviri",
      copy:"Kopyala!"
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
    <SafeAreaView style={styles.responsiveView}>        
      <Text style={styles.textC}> {strings.enter} </Text>
          <View style={styles.input}>
            <TextInput 
            style={styles.inputText}
            onChangeText={onChangeText}
            value={text}
            clearButtonMode='always'
            cursorColor="#A89AF0"
            inlineImageLeft='search_icon'
            />
          </View>
          <TouchableOpacity onPress={() => setShowConverted(!showConverted)} style={styles.button}>
            <Text style={styles.textW}> {strings.convert} </Text>
          </TouchableOpacity>
          {
            showConverted == false ?
            <View>
              <Text style={styles.textC}> {strings.please} </Text>
            </View> 
            :
            showConverted == true ?
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 15, marginRight: 15}}>
                <Text style={styles.textC}> {strings.converted} </Text>
                <Text style={styles.textC}>  {convertToMorse(text)} </Text>
              </View>              
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <TouchableOpacity  onPress={() => copy()} style={styles.buttons}>
                  <Text style={styles.textW}> {strings.copy} </Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowConverted(!showConverted) & onChangeText("")} style={styles.buttons}>
                  <Text style={styles.textW}> {strings.reset} </Text>
                </TouchableOpacity>
              </View>
            </View>             
            :
            <View>
              <Text> error </Text>
            </View> 
          }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  responsiveView:{
    flex:1, 
    backgroundColor:'#F0F0FF', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  inputText: {
    color: '#434764',
    fontSize: 14,
    marginLeft: 5
  },
  input: {
    margin:10, 
    backgroundColor:"#fff", 
    borderColor: '#A89AF0', 
    borderRadius: 7, 
    borderLeftWidth: 0.9, 
    borderRightWidth: 0.9, 
    borderBottomWidth: 1.7, 
    borderTopWidth: 0.3, 
    width: 300, 
    height:40
  },
  button: {
    margin:10, 
    borderColor: '#A89AF0', 
    borderRadius: 1, 
    backgroundColor:'#A89AF0', 
    height: 30, 
    width: 190, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 10
  },
  buttons: {
    margin:10, 
    borderColor: '#A89AF0', 
    borderRadius: 1, 
    backgroundColor:'#A89AF0', 
    height: 30, 
    width: 100, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 15
  },
  textW: {
    color:'#fff', 
    fontSize:16
  },
  textC: {
    color:'#434764', 
    fontSize:16
  }
  });

export default MainScreen;