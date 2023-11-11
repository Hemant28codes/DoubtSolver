/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


export default function SignUp({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    function register() {
        if (email === '' || password === '' || name === '') {
            Alert.alert('Enter valid details!');
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigation.navigate('Home', {
                        name: name,
                    });
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });

        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#FFFDD0", flex: 1 }}>
            <View style={{ alignItems: "center", paddingTop: 20 }}>
                <Image key={1} source={require("../assets/icons/Doubti.png")} style={{
                    width: 200,
                    height: 200,
                    resizeMode: "contain"
                }} />
            </View>
            <View style={{ borderColor: "gray", borderWidth: 1, marginTop: 40, marginLeft: 25, marginRight: 25, borderRadius: 5, }}>
                <View style={{ flexDirection: "row", justifyContent: "center", paddingTop: 30 }}>
                    <Text style={{ color: "black", fontWeight: "800", textAlign: 'center', fontSize: 30 }}> Ask Us </Text>
                    <Image key={1} source={require("../assets/icons/msgicon.png")} style={{
                        width: 50,
                        height: 50,
                        resizeMode: "contain",
                    }} />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    onChangeText={setName}
                    value={name}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    keyboardType="numeric"
                />
                <TouchableOpacity style={styles.btn}><Text style={{
                    textAlign: 'center',
                    textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 10,
                }} onPress={() => register()}>Sign Up</Text></TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 15,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    btn: {
        height: 40,
        margin: 15,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#FF5F15",
        justifyContent: "center",
        borderRadius: 10,
    },
});