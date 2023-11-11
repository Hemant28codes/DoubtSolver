/* eslint-disable prettier/prettier */
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, Pressable, Alert, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';

const doubts = [
    {
        topic: "Dynamic Programming",
        date: "May 7, 2023",
    },
    {
        topic: "Graphs ",
        date: "May 2, 2023",
    },
    {
        topic: "Binary Search",
        date: "May 7, 2023",
    },
    {
        topic: "Dynamic Programming",
        date: "May 1, 2023",
    },
    {
        topic: "C++",
        date: "May 7, 2023",
    },
    {
        topic: "Segment Tree",
        date: "May 3, 2023",
    },
    {
        topic: "Dynamic Programming",
        date: "May 7, 2023",
    },
    {
        topic: "Web Development",
        date: "May 2, 2023",
    },
    {
        topic: "React",
        date: "May 7, 2023",
    },
    {
        topic: "Dynamic Programming",
        date: "May 7, 2023",
    },
];

export default function User({ navigation }) {

    const [visible, setVisible] = useState(false);
    const [newtopic, setNewtopic] = useState("");
    const [description, setDescription] = useState("");

    return (
        <View>
            <View style={{ padding: 10, backgroundColor: "#FFBF00", alignItems: "center" }}>
                <View style={{ flexDirection: "row", marginTop: 25 }}>
                    <Image style={{
                        width: 70,
                        height: 70,
                        resizeMode: "contain",
                        borderRadius: 40,
                    }} source={{ uri: "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg" }} />
                    <View style={{ paddingLeft: 15 }}>
                        <Text style={{ color: "black", fontWeight: "500", fontSize: 20 }}>Hemant Goyal</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ width: 200, flexWrap: 'wrap' }}>Indian Institute of Information Technology, Allahabad</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 17, fontWeight: "500" }}>Email id:   </Text>
                        <Text style={{ fontSize: 17 }}>hemantgoyal748@gmail.com</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 17, fontWeight: "500" }}>Contact:   </Text>
                        <Text style={{ fontSize: 17 }}>8949064004</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={{ marginTop: 15 }}>
                {
                    doubts.map((doubt, index) => (
                        <TouchableOpacity key={index} activeOpacity={1} style={{ marginBottom: 10, marginLeft: 10, marginRight: 10 }} onPress={() => navigation.navigate("DoubtDesc", {
                            topic: doubt.topic,
                        })}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 15, backgroundColor: "white", borderRadius: 15, }}>
                                <View >
                                    <Text style={{ color: "black", fontWeight: "500", fontSize: 20 }}>{doubt.topic}</Text>
                                    <Text>{doubt.date}</Text>
                                </View>
                                <View>
                                    <Image key={1} source={require("../assets/icons/solve.png")} style={{
                                        width: 50,
                                        height: 50,
                                        resizeMode: "contain"
                                    }} />
                                </View>
                            </View>

                        </TouchableOpacity>
                    ))
                }

            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setVisible(!visible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View>
                            <View>
                                <Text style={{fontSize: 15, fontWeight: "600"}}>Topic : </Text>
                                <TextInput
                                    placeholder='Enter Topic'
                                    onChangeText={setNewtopic}
                                    value={newtopic}
                                />
                            </View>
                            <View >
                                <Text style={{fontSize: 15, fontWeight: "600"}}> Description: </Text>
                                <TextInput
                                    placeholder='Enter Problem Description'
                                    onChangeText={setDescription}
                                    value={description}
                                />
                            </View>
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setVisible(!visible)}>
                            <Text style={styles.textStyle}>Add</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            {/* <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setVisible(true)}>
                <Text style={styles.textStyle}>Add Doubt + </Text>
            </Pressable> */}
            <View style={{ flex: 1, alignItems: "center", flexDirection: "row", position: "absolute", justifyContent: "center", bottom: 250, zIndex: 99 }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "100%",
                }}>
                    <TouchableOpacity style={{ marginTop: 20, backgroundColor: "#FF7518", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 15, borderRadius: 30, widht: 300, position: "relative" }} onPress={() => setVisible(true)}>
                        <Text style={{ color: "white", fontSize: 20, }}>Add Doubt</Text>
                        {/* <Text style={{ color: "white", fontSize: 20 }}>totalUSD</Text> */}
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        //alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
