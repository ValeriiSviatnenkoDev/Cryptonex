/* React */
import React from 'react';
import { Text, View, Modal } from 'react-native';

/* Styles */
import ErrorStyles from '../../Style/Styles/Login/Error.js';

const LoginError = (props) => {
    return (
        <Modal animationType="fade" transparent={true} visible={props.errorModal}>
            <View style={ErrorStyles.errorView}>
                <View style={ErrorStyles.errorModalView}>
                    <Text style={ErrorStyles.modalText}>{props.errorText}</Text>
                </View>
            </View>
        </Modal>
    );
}

export default LoginError;