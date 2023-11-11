/* eslint-disable prettier/prettier */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Header({navigation, ...props}) {
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 15 }}>
                <Text style={{ color: "black", fontWeight: "800", fontSize: 25, }}> Hi, {props.route.params.name}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("User")}>
                    <Image key={1} source={require("../../assets/icons/user.png")} style={{
                        width: 40,
                        height: 40,
                        resizeMode: "contain"
                    }} />
                </TouchableOpacity>

            </View>
            <View style={{ backgroundColor: "#FFBF00" }}>
                <Text style={{ color: "black", fontWeight: "800", fontSize: 25, textAlign: "center", paddingTop: 30 }}>Doubt?</Text>
                <View style={{ paddingBottom: 10, alignItems: "center", paddingTop: 5 }}>
                    <Image key={1} source={require("../../assets/icons/Doubti.png")} style={{
                        width: 200,
                        height: 100,
                        resizeMode: "contain"
                    }} />
                </View>
                <Text style={{ color: "black", fontWeight: "500", fontSize: 15, textAlign: "center", paddingBottom: 10 }}>Solve your doubts instantly</Text>
            </View>
        </View>

    );
}
