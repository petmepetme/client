import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider
} from 'react-native-popup-menu';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MenuProvider>
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
         {/* <TouchableOpacity activeOpacity={0.8} onPress={() => alert('Helo')}>
           <View style={styles.viewWrench}>
           <Icon name="ellipsis-h" size={responsiveFontSize(3)} color="black"/>
           </View>
       </TouchableOpacity> */}
       <Menu>
      <MenuTrigger  >
      <Icon name="ellipsis-h" size={responsiveFontSize(3)} color="black"/>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={() => alert(`Delete`)} >
          <Text style={{color: '#50AFFB', fontWeight:'bold'}}>Lorem</Text>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Delete`)} >
        <Text style={{color: '#50AFFB', fontWeight:'bold'}}>Ipsum</Text>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Delete`)} >
        <Text style={{color: '#50AFFB', fontWeight:'bold'}}>Dolor</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
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
           <View style={styles.viewLine}/>

           <View style={styles.viewNumber}>
             <View style={styles.viewSubNumber}>
               <Text style={styles.textTitle}>7</Text>
               <Text style={styles.textSub}>FOLLOWING</Text>
             </View>
             <View style={[styles.viewSubNumber, {marginLeft:responsiveWidth(1.33)}]}>
               <Text style={styles.textTitle}>120</Text>
               <Text style={styles.textSub}>POST</Text>
             </View>
             <View style={styles.viewSubNumber}>
               <Text style={styles.textTitle}>1000</Text>
               <Text style={styles.textSub}>FOLLOWERS</Text>
             </View>
           </View>
           <View style={styles.viewLine}/>
           <View style={styles.viewBox}>
            <Text style={styles.textUpgrade}>See who already like you by upgrading to PetMe Boost</Text>
            <View style={styles.buttonActivated}>
              <Text style={styles.textActivate}>Activate</Text>
            </View>
          </View>

          <View style={styles.viewBoxRow}>
            <View style={[styles.viewSubNumber, {marginLeft:responsiveWidth(1.33)}]}>
               <View style={styles.viewPaid}>
               <Icon name="heart" size={responsiveFontSize(4)} color="#FFF"/>
               </View>
                <View>
                <Text style={styles.textSub}>Spotlight</Text>
                </View>
                <View>
                <Text>2 Coin</Text>
                </View>
             </View>

             <View style={[styles.viewSubNumber, {marginLeft:responsiveWidth(1.33)}]}>
             <View style={[styles.viewPaid, {backgroundColor:'#50AFFB'}]}>
               <Icon name="star" size={responsiveFontSize(4)} color="#FFF"/>
               </View>
                <View>
                <Text style={styles.textSub}>Boost</Text>
                </View>
                <View>
                <Text>Upgrade</Text>
                </View>
             </View>
          </View>
          
      </View>
      </MenuProvider>
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
    },
    viewLine:{
      width:responsiveWidth(90),
      height:responsiveHeight(0.15),
      backgroundColor:'#EEE',
      marginTop:responsiveHeight(1.6)
    },
    viewNumber:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:responsiveWidth(90),
      marginTop:responsiveHeight(2.3)
    },
    viewSubNumber:{
      justifyContent:'center',
      alignItems:'center'
    },
    textTitle:{
      color:'black',
      fontSize:responsiveFontSize(2.8),
      fontWeight:'bold'
    },
    textSub:{
      color:'#DDD',
      fontSize:responsiveFontSize(2),
      fontWeight:'bold'
    },
    viewBox:{
      width:responsiveWidth(88),
      height:responsiveHeight(20),
      borderWidth:1,
      alignSelf:'center',
      borderRadius:10,
      borderColor:'#DDD',
      marginTop:20,
      alignItems:'center',
      justifyContent:'center'
    },
    textUpgrade:{
      fontSize:responsiveFontSize(2.2),
      textAlign:'center',
      marginTop:responsiveHeight(5.33)
    },
    buttonActivated:{
      width: responsiveWidth(88),
      height:responsiveHeight(8),
      backgroundColor:'#50AFFB',
      marginTop:responsiveHeight(5),
      borderBottomEndRadius:10,
      borderBottomLeftRadius:10,
      justifyContent:'center',
      alignItems:'center'
    },
    textActivate:{
      color:'#FFF',
      fontWeight:'bold',
      fontSize:responsiveFontSize(2.2)
    },
    viewBoxRow:{
      width:responsiveWidth(88),
      height:responsiveHeight(19),
      borderWidth:1,
      alignSelf:'center',
      borderRadius:10,
      borderColor:'#DDD',
      alignItems:'center',
      justifyContent:'space-around',
      marginTop:30,
      flexDirection:'row',
      
    },
    viewPaid:{
      padding:15,
      backgroundColor:'red',
      borderRadius:50
    }
});