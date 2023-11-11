/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import { getDocs, collection } from "firebase/firestore";
import { db } from '../../firebase';

const image_url = "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg";
const college = "Indian Institute of Information Technology, Allahabad";

//const querySnapshot = getDocs(collection(db, "userslist"));

export const defusers = [
    {
        name: "Hemant Goyal",
        // image_url:
        //     "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        // college: "Indian Institute of Information Technology, Allahabad",
        // count: 1244,
    },
    {
        name: "Prashast Jain",
        // image_url:
        //     "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        // college: "Indian Institute of Information Technology, Allahabad",
        // count: 1244,
    },
    {
        name: "Vaibhav Maheshwari",
        // image_url:
        //     "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        // college: "Indian Institute of Information Technology, Allahabad",
        // count: 1244,
    },
    {
        name: "Prakhar Chitravanshi",
        // image_url:
        //     "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        // college: "Indian Institute of Information Technology, Allahabad",
        // count: 1244,
    },
    {
        name: "Prakhar Chitravanshi",
        // image_url:
        //     "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        // college: "Indian Institute of Information Technology, Allahabad",
        // count: 1244,
    },
];

export default function UserList ({navigation}) {

    

    const [users, setUsers] = useState(defusers);

    
    async function getdata () {
        const dbusers = [];
        const querySnapshot = await getDocs(collection(db, "userslist"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const user = doc.data();
            console.log()
            dbusers.push({name: user.name});
        });
        console.log(dbusers.length);
        setUsers(dbusers);
    }


    useEffect(() => {
        getdata();
    },[]);

    return (
        <ScrollView style={{marginTop: 10}}>
            {
                users.map((user, index) => (
                    <TouchableOpacity key={index} activeOpacity={1} style={{ marginBottom: 10, marginLeft: 10, marginRight: 10}} onPress={() => navigation.navigate( "UserDoubt", {
                        name: user.name,
                        image: image_url,
                    })}>
                        <View style={{ padding: 15, backgroundColor: "white", flexDirection: "row", justifyContent: "space-between", borderRadius: 15, }}>
                            <Image style={{
                                width: 70,
                                height: 70,
                                resizeMode: "contain",
                                borderRadius: 40,
                            }} source={{ uri: image_url }} />
                            <View>
                                <Text style={{ color: "black", fontWeight: "500", fontSize: 20 }}>{user.name}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: 200, flexWrap: 'wrap' }}>{college}</Text>
                                </View>
                            </View>
                            <View >
                                <Text>1244</Text>
                                <Image key={1} source={require("../../assets/icons/msgicon.png")} style={{
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
};

