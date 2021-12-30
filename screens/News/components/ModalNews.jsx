/* React */
import React, { useEffect, useState } from "react";
import { Text, View, Modal, Image } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

/* Expo */
import { FontAwesome } from '@expo/vector-icons';

/* Style */
import ModalStyle from "../../Style/Styles/News/ModalNews.js";

const ModalNews = (props) => {
    let imageUrl = { uri: props.news.urlToImage };

    return (
        <GestureRecognizer onSwipeDown={() => { props.setModal(false) }}>
            <Modal animationType="slide" transparent={true} visible={props.showModal}>
                <View style={ModalStyle.modalView}>
                    <View style={ModalStyle.chartModalView}>
                        <View style={ModalStyle.modalControl}>
                            <FontAwesome name="angle-down" size={36} style={ModalStyle.modalControlIcon} color="#50cc5c"/>
                        </View>
                        <View>
                            <Text style={[ModalStyle.modalNewsText, { fontSize: 18 }]}>{props.news.title}</Text>
                            <Image style={ModalStyle.modalNewsImage} source={imageUrl} />
                            <Text style={[ModalStyle.modalNewsText, { fontSize: 15 }]}>{props.news.description}</Text>
                            <Text style={[ModalStyle.modalNewsText, { fontSize: 13 }]}>{props.news.content}</Text>
                            <Text style={[ModalStyle.modalNewsText, { fontSize: 12 }]}>{props.news.publishedAt}</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </GestureRecognizer>
    );
}

export default ModalNews;