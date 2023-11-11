/* eslint-disable prettier/prettier */
import { View, Text, Image} from 'react-native';
import React from 'react';

//const image_url = "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg";
export default function UserHeader(props) {
    return (
        <View >
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", padding: 15 }}>
                    <Image style={{
                        width: 40,
                        height: 40,
                        resizeMode: "contain",
                        borderRadius: 40,
                    }} source={{ uri: props.route.params.image }} />
                    <Text style={{ color: "black", fontWeight: "500", fontSize: 25, paddingLeft: 10 }}>{props.route.params.name}</Text>
                </View>
                <View style={{padding :10}}>
                    <Image key={1} source={require("../../assets/icons/msgicon.png")} style={{
                        width: 50,
                        height: 50,
                        resizeMode: "contain",
                    }} />
                </View>
            </View>
        </View>
    );
}
