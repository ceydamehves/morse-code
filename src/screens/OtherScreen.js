import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Linking,
    SafeAreaView
} from 'react-native';
import LocalizedStrings from 'react-native-localization';

function OtherScreen ({}) {

    let strings = new LocalizedStrings({
        "en":{      
          title: "Hi! I wish you a happy day :)",      
          desc:"This app is designed and developed by ceydamehves. \n To support, you can reach my social media accounts via the buttons below! \n Thank you very much for your interest in advance, \n Loves.",
          
        },
        "tr":{
          title: "Merhaba! Mutlu Günler Dilerim :)", 
          desc:"Bu uygulama ceydamehves tarafından tasarlanmış ve kodlanmıştır. \n Destek olmak için aşağıdaki butonlar aracılığıyla sosyal medya hesaplarıma ulaşabilirsiniz! \n Şimdiden ilginiz için çok teşekkür ederim, \n Sevgiler.",
        }
      })

      
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#F0F0FF', justifyContent:'center', alignItems:'center'}}>  
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#434764'}}> {strings.title} </Text>
            <View style={styles.commentContainer}>  
              <Text style={{margin:5}}> {strings.desc} </Text>
            </View>  
            <View style={styles.socialContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.patreon.com/ceydamehves')
                        .catch(err => console.error('An error occurred', err))}>
                <Image style={styles.socialLogo} source={require('../assets/patreon.png')}/> 
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://rarible.com/token/0xB66a603f4cFe17e3D27B87a8BfCaD319856518B8:109678530564134719096419227807687177662215650966088963623599946164410360266783?tab=owners')
                        .catch(err => console.error('An error occurred', err))}>
                <Image style={styles.socialLogo} source={require('../assets/ethereum.png')}/> 
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com/ceydamehves.apps')
                        .catch(err => console.error('An error occurred', err))}>
                <Image style={styles.socialLogo} source={require('../assets/instagram.png')}/> 
              </TouchableOpacity> 
              <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/c/CeydaKeklik')
                        .catch(err => console.error('An error occurred', err))}>
                <Image style={styles.socialLogo} source={require('../assets/youtube.png')}/> 
              </TouchableOpacity> 
            </View> 
        </SafeAreaView>
      );
    };
    
const styles = StyleSheet.create({
    commentContainer:{
        shadowColor: "#A5A6F6",
        shadowOffset: {
        width: 1,
        height: 2,
        },
      shadowOpacity: 1,
      shadowRadius: 2.3, 
      elevation: 3, 
      padding:5, 
      marginBottom:5, 
      justifyContent:'center', 
      alignItems:'center', 
      backgroundColor: '#fff', 
      borderRadius: 10, 
      width: 300, 
      height: 200
    },
    socialContainer:{
        flexDirection:'row',
        shadowColor: "#A5A6F6",
        shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 2.3, 
      elevation: 3, 
      padding:5, 
      marginTop:10,
      marginBottom:5, 
      justifyContent:'center', 
      alignItems:'center', 
      backgroundColor: '#fff', 
      borderRadius: 50, 
      width: 280,
      height: 100
    },
    socialLogo:{
        width: 40, 
        height: 40, 
        margin: 10
    },
});
    
export default OtherScreen;