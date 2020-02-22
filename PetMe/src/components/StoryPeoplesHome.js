import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles/style.HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { responsiveFontSize } from 'react-native-responsive-dimensions'

const StoryPeoplesHome = ({
    params,
}) => (
        <View style={styles.viewStory}>
            <Image
                style={[styles.imageStory, {
                    borderWidth: 4,
                    borderColor: 'pink'
                }]}
                source={{ uri: 'https://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg' }} />
            <Text style={styles.textName}>johdoe</Text>
        </View>
    );

export default StoryPeoplesHome;
