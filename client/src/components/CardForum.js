import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles/style.ForumScreen';

const CardForum = ({
    params,
}) => (
        <View style={styles.viewForum}>
            <View>
                <Image
                    style={styles.imageForum}
                    source={{ uri: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg?w=1155&h=1541' }}
                />
            </View>
            <View style={styles.viewTextForum}>
                <Text style={styles.textTitle}>Telah Ditemukan Anjing Di Depok</Text>
                <Text style={styles.textDescription}>Kondisi Dalam Keadaan Kritis</Text>
            </View>
        </View>
    );

export default CardForum;
