import { StyleSheet } from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },
    viewNav: {
        flexDirection: 'row',
    },
    viewTextNav: {
        flexDirection: 'row',
        marginLeft: responsiveWidth(2.33),
        justifyContent: 'center',
        marginTop: responsiveHeight(2.33)
    },
    viewIconNav: {
        height: responsiveHeight(7.5),
        backgroundColor: '#4AACA7',
        width: responsiveWidth(78),
        flexDirection: 'row'
    },
    textNews: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.2),
        marginHorizontal: responsiveWidth(0.5)
    },
    lineNav: {
        height: responsiveHeight(0.15),
        backgroundColor: '#DDDDDD',
        width: responsiveWidth(1000),
        marginTop: responsiveHeight(0.2)
    },
    viewSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#DDDDDD',
        height: responsiveHeight(6),
        borderRadius: 5,
        width: responsiveWidth(40),
        justifyContent: 'center',
        marginTop: responsiveHeight(0.5),
        marginLeft: responsiveWidth(1)
    },

    imageIcon: {
        margin: 5,
        height: 15,
        width: 15,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    inputSearch: {
        flex: 1,
        fontSize: responsiveFontSize(1.3),
        justifyContent: 'center'
    },
    viewIconBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: responsiveHeight(1.6),
        marginLeft: responsiveWidth(1.66)
    },
    viewTextForum: {
        flex: 1,
        marginLeft: responsiveWidth(2.33),
        marginRight: responsiveWidth(0.8)
    },
    iconBar: {
        marginHorizontal: responsiveWidth(1)
    },
    viewForum: {
        flexDirection: 'row',
        marginLeft: responsiveWidth(2.33),
        marginTop: responsiveHeight(2.33),
        marginBottom: responsiveHeight(1.66),
    },
    imageForum: {
        width: 120,
        height: 120
    },
    textTitle: {
        fontSize: responsiveFontSize(1.8),
        color: '#000000',
        fontWeight: 'bold'
    },
    textDescription: {
        fontSize: responsiveFontSize(1.8),
        color: '#000000',
        marginTop: responsiveHeight(0.33)
    }
})

export default styles