import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider
} from 'react-native-popup-menu';


export default class EditProfile extends Component {
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

           <TouchableOpacity activeOpacity={0.8} onPress={() => alert('Helo')}>
          <View style={styles.viewWrench}>
           <Icon name="check" size={responsiveFontSize(3)} color="black"/>
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
               <Text>Change Profile</Text>
           </View>
           <View style={styles.viewLine}/>
    <ScrollView>
        <View style={styles.viewProfileRow}>
        <View>
            <Text>Profile Data</Text>
        </View>
        {/* Profile ROW */}
        <View>
            <Text style={styles.textRowProfile}>Username</Text>
            <View style={styles.rowProfile}>
            <TextInput
            style={styles.inputPofile}
             placeholder={"Username"}
            
            />
            </View>
        </View>


     {/* Profile ROW */}
     <View>
            <Text style={styles.textRowProfile}>Username</Text>
            <View style={styles.rowProfile}>
            <TextInput
            style={styles.inputPofile}
             placeholder={"Username"}
            
            />
            </View>
        </View>

             {/* Profile ROW */}
     <View>
            <Text style={styles.textRowProfile}>FullName</Text>
            <View style={styles.rowProfile}>
            <TextInput
            style={styles.inputPofile}
             placeholder={"Fullname"}
            
            />
            </View>
        </View>

             {/* Profile ROW */}
     <View>
            <Text style={styles.textRowProfile}>Descrption</Text>
            <View style={[styles.rowProfile, {height:responsiveHeight(10)}]}>
            <TextInput
            style={styles.inputPofile}
             placeholder={"Descrption"}
             numberOfLines={5}
            
            />
            </View>
        </View>

             {/* Profile ROW */}
     <View>
            <Text style={styles.textRowProfile}>Phone Number</Text>
            <View style={styles.rowProfile}>
            <TextInput
            style={styles.inputPofile}
             placeholder={"Phone Number"}
            
            />
            </View>
        </View>

                     {/* Profile ROW */}
     <View>
            <Text style={styles.textRowProfile}>Address</Text>
            <View style={styles.rowProfile}>
            <TextInput
            style={styles.inputPofile}
             placeholder={"Address"}
            
            />
            </View>
        </View>

                             {/* Profile ROW */}
     <View>
            <Text style={styles.textRowProfile}>City</Text>
            <View style={styles.rowProfile}>
            <TextInput
            style={styles.inputPofile}
             placeholder={"City"}
            
            />
            </View>
        </View>

                                     {/* Profile ROW */}
     <View>
            <Text style={styles.textRowProfile}>Country</Text>
            <View style={styles.rowProfile}>
            <TextInput
            style={styles.inputPofile}
             placeholder={"Country"}
            
            />
            </View>
        </View>
          
          
          
     </View>
 </ScrollView>

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
    viewProfileRow:{
     alignItems:'flex-start',
     alignSelf:'flex-start',
     marginLeft:responsiveWidth(5.33),
     marginTop:responsiveHeight(2.33),
     marginBottom:responsiveHeight(2.33)
    },
    rowProfile:{
        width: responsiveWidth(90),
        alignSelf:'center',
        borderWidth:1,
        height:responsiveHeight(8),
        borderColor:'#DDD',
        justifyContent:'center',
        borderRadius:20
    },
    inputPofile:{
        flex:1,
        marginLeft:responsiveWidth(2.2)
    },
    textRowProfile:{
        marginLeft:responsiveWidth(2.33),
        marginTop:responsiveHeight(2.33)
    }
    
});