import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.viewContainer}>
           <View style={{
               flexDirection:'row',
               justifyContent:'space-between',
               width:responsiveWidth(90),
               
           }}>
         <TouchableOpacity activeOpacity={0.8} onPress={() => alert('Helo')}>
          <View style={styles.viewWrench}>
           <Icon name="wrench" size={responsiveFontSize(3)} color="black"/>
           </View>
           </TouchableOpacity>
         <TouchableOpacity activeOpacity={0.8} onPress={() => alert('Helo')}>
           <View style={styles.viewWrench}>
           <Icon name="ellipsis-h" size={responsiveFontSize(3)} color="black"/>
           </View>
       </TouchableOpacity>
           </View>

        <View style={styles.viewPicture}>
         <TouchableOpacity activeOpacity={0.8} onPress={() => alert('Helo')}>
            <View>
            <Image  
            style={styles.imageProfile}
            source={{uri: 'https://djbooth.net/.image/t_share/MTY4NzY3MzI4MDgxNzQ5NTc3/dinah-jane-interview-header.jpg'}}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.viewPencil}>
           <Icon name="pencil" size={responsiveFontSize(3)} color="black"/>
           </View>
           </TouchableOpacity>
          

        </View>
          <View>
               <Text>Tap To Edit</Text>
           </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    viewContainer:{
        alignItems:'center',
        backgroundColor:'#FFF',
        flex:1
    },
    imageProfile:{
        width:120,
        height:120,
        borderRadius:60
    },
    viewPencil:{
        width: 30,
        height:30,
        backgroundColor:'#EEE',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        marginTop:responsiveHeight(15),
        marginLeft:responsiveWidth(-9.33)
    },
    viewWrench:{
        width: 30,
        height:30,
        backgroundColor:'#EEE',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
    },
    viewPicture:{
        flexDirection:'row'
    }
});