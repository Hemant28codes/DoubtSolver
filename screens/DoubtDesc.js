/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, ScrollView, TextInput, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import React from 'react';

export default function DoubtDesc({ route }) {
    return (
        <SafeAreaView style={{ justifyContent: "space-between", flex: 1 }}>
            <View>
                <View style={{ padding: 10, backgroundColor: "#FFBF00" }}>
                    <Text style={{ color: "black", fontWeight: "500", fontSize: 25, paddingLeft: 10, textAlign: "center" }}>Problem Description</Text>
                    <Text style={{ color: "black", fontWeight: "500", fontSize: 15, paddingLeft: 10, textAlign: "center" }}>Topic : {route.params.topic}</Text>
                    <View style={{ paddingTop: 15 }}>
                        <Text style={{ padding: 10, flexWrap: "wrap", fontWeight: "400" }}>Hello this is a problem of dynamic Programming which is of codeforces. In this I am unable to find an approach to solve this</Text>
                    </View>
                </View>
                <Divider width={1} />
                <ScrollView style={{ padding: 15 }}>
                    <View style={{ backgroundColor: "#FFFDD0", width: "70%", borderRadius: 15 }}>
                        <Text style={{ color: "black", fontWeight: "500", fontSize: 15, padding: 10 }}>Hemant Goyal</Text>
                        <Text style={{ padding: 10, flex: 1, flexWrap: "wrap" }}>Hello this is Hemant Goyal. Could you please help me with this</Text>
                    </View>
                </ScrollView>
            </View>
            <View>
                <Divider width={1}></Divider>
                <View style={{flexDirection: "row", justifyContent: "space-between", margin: 15}}>
                    <View style={{ width: "80%", flexDirection: "row", flexWrap: "wrap", borderRadius: 20, backgroundColor: "#FFFDD0" }}>
                        <TextInput placeholder='Say something' style={{ padding: 10 }}></TextInput>
                    </View>
                    <Image source={require("../assets/icons/right-arrow.png")} style={{
                        width: 30,
                        height: 30,
                        resizeMode: "contain",
                        marginTop: 10
                    }} />
                </View>

            </View>

        </SafeAreaView>
    );
}
