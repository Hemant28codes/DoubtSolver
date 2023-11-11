/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';

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

export default function Doubts({navigation}) {
    return (
        <ScrollView style={{ marginTop: 15 }}>
            {
                doubts.map((doubt, index) => (
                    <TouchableOpacity key={index} activeOpacity={1} style={{ marginBottom: 10, marginLeft: 10, marginRight: 10 }} onPress={() => navigation.navigate("DoubtDesc",{
                        topic: doubt.topic,
                    })}>
                        <View style={{flexDirection: "row", justifyContent: "space-between", padding: 15, backgroundColor: "white", borderRadius: 15, }}>
                            <View >
                                <Text style={{ color: "black", fontWeight: "500", fontSize: 20 }}>{doubt.topic}</Text>
                                <Text>{doubt.date}</Text>
                            </View>
                            <View>
                                <Image key={1} source={require("../../assets/icons/solve.png")} style={{
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
    );
}
