import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles/style.HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { responsiveFontSize } from 'react-native-responsive-dimensions'

const StoryHome = ({
    params,
}) => (
        <View style={styles.viewStory}>
            <Image
                style={styles.imageStory}
                source={{ uri: 'https://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg' }} />
            <Icon name="plus" size={responsiveFontSize(2)} color="#79B8DA" style={{ marginTop: -7, marginLeft: 20 }} />
            <Text style={[styles.textName, { marginTop: -5 }]}>Your Story</Text>
        </View>
    );

export default StoryHome;
