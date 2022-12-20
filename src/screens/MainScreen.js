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
      <Text style={{color:'#434764', fontSize:16}}> {strings.enter} </Text>
          <View style={{margin:10, backgroundColor:"#fff", borderColor: '#A89AF0', borderRadius: 7, borderLeftWidth: 0.9, borderRightWidth: 0.9, borderBottomWidth: 1.7, borderTopWidth: 0.3, width: 300, height:40}}>
            <TextInput 
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            clearButtonMode='always'
            cursorColor="#A89AF0"
            inlineImageLeft='search_icon'
            />
          </View>
          <TouchableOpacity onPress={() => setShowConverted(!showConverted)} style={{margin:10, borderColor: '#A89AF0', borderRadius: 1, backgroundColor:'#A89AF0', height: 30, width: 190, alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
            <Text style={{color:'#fff', fontSize:16}}> {strings.convert} </Text>
          </TouchableOpacity>
          {
            showConverted == false ?
            <View>
              <Text style={{color:'#434764', fontSize:16}}> {strings.please} </Text>
            </View> 
            :
            showConverted == true ?
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text style={{color:'#434764', fontSize:18}}> {strings.converted} </Text>
                <Text style={{color:'#434764', fontSize:18}}>  {convertToMorse(text)} </Text>
              </View>              
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <TouchableOpacity  onPress={() => copy()} style={{margin:10, borderColor: '#A89AF0', borderRadius: 1, backgroundColor:'#A89AF0', height: 30, width: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 15}}>
                  <Text style={{color:'#fff', fontSize:16}}> {strings.copy} </Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowConverted(!showConverted) & onChangeText("")} style={{margin:10, borderColor: '#A89AF0', borderRadius: 1, backgroundColor:'#A89AF0', height: 30, width: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 15}}>
                  <Text style={{color:'#fff', fontSize:16}}> {strings.reset} </Text>
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
  input: {
    color: '#434764',
    fontSize: 14,
    marginLeft: 5
  }
});

export default MainScreen;