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
    iconBar: {
        marginHorizontal: responsiveWidth(1)
    },
    viewStory: {
        marginTop: responsiveHeight(0.66),
        marginLeft: responsiveWidth(2.33),
        alignItems: 'center'
    },
    imageStory: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    textName: {
        color: '#000000',
        fontSize: responsiveFontSize(1.8),
    },
    viewCard: {
        flexDirection: 'column',
        marginBottom: responsiveHeight(2)
    },
    viewHead: {
        flexDirection: 'row',
        marginLeft: responsiveWidth(5.3),
        marginTop: responsiveHeight(1.3),
        justifyContent: 'space-between'
    },
    imagePost: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    textPost: {
        color: '#000',
        marginTop: responsiveHeight(1.8),
        marginLeft: responsiveWidth(1),
        fontSize: responsiveFontSize(1.6),
        fontWeight: 'bold'
    },
    iconPost: {
        marginRight: responsiveWidth(5.33),
        marginTop: responsiveHeight(2.3)
    },
    imageBody: {
        width: responsiveWidth(100),
        height: responsiveHeight(50),
        alignSelf: 'center',
        marginTop: responsiveHeight(1.33),
        marginBottom: responsiveHeight(1.33)
    },
    viewFooter: {
        flexDirection: 'row',
        marginLeft: responsiveWidth(5.3),
        marginTop: responsiveHeight(1.3),
        justifyContent: 'space-between'
    },
    iconLove: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    iconComment: {
        marginRight: responsiveWidth(5.33),
        marginTop: responsiveHeight(2.3)
    },
    iconShare: {
        marginRight: responsiveWidth(5.33),
        marginTop: responsiveHeight(2.3)
    },
    imageBody: {
        width: responsiveWidth(100),
        height: responsiveHeight(50),
        alignSelf: 'center',
        marginTop: responsiveHeight(1.33),
        marginBottom: responsiveHeight(1.33)
    },
})

export default styles