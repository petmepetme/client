import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'

export default class Favorite extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.viewContainer}>
                <ScrollView>
                    <View style={styles.viewMenu}>
                        {/* Menu */}
                        <View style={styles.viewMenuContent}>
                            <View style={styles.viewMenuIcon}>
                                <Image
                                    style={styles.imageIcon}
                                    source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/icon-building-png-5.png' }}
                                />
                                <Text style={styles.textIcon}>PETO Adoption</Text>
                            </View>
                            <View style={styles.viewMenuIcon}>
                                <Image
                                    style={styles.imageIcon}
                                    source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/icon-building-png-5.png' }}
                                />
                                <Text style={styles.textIcon}>PETO Grooming</Text>

                            </View>
                            <View style={styles.viewMenuIcon}>
                                <Image
                                    style={styles.imageIcon}
                                    source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/icon-building-png-5.png' }}
                                />
                                <Text style={styles.textIcon}>PETO TAXI & Ambulance</Text>
                            </View>
                        </View>

                        {/* Menu */}

                        <View style={styles.viewMenuContent}>
                            <View style={styles.viewMenuIcon}>
                                <Image
                                    style={styles.imageIcon}
                                    source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/icon-building-png-5.png' }}
                                />
                                <Text style={styles.textIcon}>PETO Adoption</Text>
                            </View>
                            <View style={styles.viewMenuIcon}>
                                <Image
                                    style={styles.imageIcon}
                                    source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/icon-building-png-5.png' }}
                                />
                                <Text style={styles.textIcon}>PETO Grooming</Text>

                            </View>
                            <View style={styles.viewMenuIcon}>
                                <Image
                                    style={styles.imageIcon}
                                    source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/icon-building-png-5.png' }}
                                />
                                <Text style={styles.textIcon}>PETO TAXI & Ambulance</Text>
                            </View>
                        </View>

                        {/* Menu */}

                        <View style={styles.viewMenuContent}>
                            <View style={styles.viewMenuIcon}>
                                <Image
                                    style={styles.imageIcon}
                                    source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/icon-building-png-5.png' }}
                                />
                                <Text style={styles.textIcon}>PETO Adoption</Text>
                            </View>
                            <View style={styles.viewMenuIcon}>
                                <Image
                                    style={styles.imageIcon}
                                    source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/icon-building-png-5.png' }}
                                />
                                <Text style={styles.textIcon}>PETO Grooming</Text>

                            </View>
                            <View style={styles.viewMenuIcon}>
                                <Image
                                    style={styles.imageIcon}
                                    source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/icon-building-png-5.png' }}
                                />
                                <Text style={styles.textIcon}>PETO TAXI & Ambulance</Text>
                            </View>
                        </View>
                        {/* Menu */}
                        <View style={styles.viewMenuContent}>
                            <View style={styles.viewMenuIcon}>
                                <Image
                                    style={styles.imageIcon}
                                    source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/icon-building-png-5.png' }}
                                />
                                <Text style={styles.textIcon}>PETO Adoption</Text>
                            </View>
                            <View style={styles.viewMenuIcon}>
                                <Image
                                    style={styles.imageIcon}
                                    source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/icon-building-png-5.png' }}
                                />
                                <Text style={styles.textIcon}>PETO Grooming</Text>

                            </View>
                            <View style={styles.viewMenuIcon}>
                                <Image
                                    style={styles.imageIcon}
                                    source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/06/icon-building-png-5.png' }}
                                />
                                <Text style={styles.textIcon}>PETO TAXI & Ambulance</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    viewTop: {
        height: responsiveHeight(17),
        width: responsiveWidth(100),
        backgroundColor: 'red'
    },
    viewMenu: {
        backgroundColor: '#E4EAF0',
        height: responsiveHeight(73),
        width: responsiveWidth(90),
        alignSelf: 'center',
    },
    viewMenuContent: {
        flexDirection: 'row',
        marginTop: responsiveHeight(2.33)

    },
    viewMenuIcon: {
        paddingVertical: 4,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(25),
        height: responsiveHeight(15),
        backgroundColor: '#FFF',
        marginHorizontal: responsiveWidth(2),
        borderWidth: 0.5,
        borderColor: '#DDD',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,

        elevation: 2,
    },
    imageIcon: {
        width: 60,
        height: 60
    },
    textIcon: {
        color: '#000',
        fontSize: responsiveFontSize(1.7),
        alignSelf: 'center',
        textAlign: 'center'

    }
})
