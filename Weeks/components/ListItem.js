import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {PropTypes} from 'prop-types';
import Modal from './Modal';

const apiUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const ListItem = (props) => {
    const item = props.singleMedia;
    return (
        <TouchableOpacity onPress={() =>props.navigation.push('Single',{item: item})} style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: apiUrl + item.thumbnails.w160}}
            />
            <View style={styles.text}>
                <Text style={styles.title}>{item.title}</Text>
                <Text >{item.description}</Text>
            </View>
        </TouchableOpacity>
    )
};

ListItem.propTypes = {
    singleMedia: PropTypes.object,
};

const styles = StyleSheet.create({
    container: {
        minHeight:300,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'grey',
        marginBottom:30,
        borderRadius:15
    },
    image:{
        flex:1,
        resizeMode:'stretch',
        margin:15,
        marginRight:0,
        borderRadius:15,
    },
    text: {
        flex:1,
        margin:20
    },
    title: {
        fontWeight:'bold',
        flex:1,
    }
});

export default ListItem;