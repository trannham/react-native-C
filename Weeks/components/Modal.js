import React, {Component} from 'react';
import {StyleSheet, Modal, Text, TouchableHighlight, View, Alert,Image} from 'react-native';
import {PropTypes} from 'prop-types';

const apiUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

export default class ModalExample extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        const {description,filename}= this.props.details;
        return (
            <View style={{marginTop: 10}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 75}}>
                        <View>
                            <Image
                                style={styles.image}
                                source={{uri: apiUrl + filename}}
                            />
                            <Text style={styles.text} >Description: {description}</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text style={styles.hide}>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text style={styles.hide}>More details</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

Modal.propTypes = {
    details: PropTypes.object,
};

const styles = StyleSheet.create({
    text: {
        position:'relative',
        paddingTop:20,
        alignItems: 'center',
        justifyContent: 'center',
        fontStyle: 'italic',
    },
    hide: {
        position:'relative',
        paddingTop:10,
        color: 'blue',
        fontStyle: 'italic',
    },
    
});