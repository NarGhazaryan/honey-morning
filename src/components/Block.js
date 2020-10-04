import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export const Block = (props) => (
    <View style={styles.block}>
        <View style={styles.top}>
            <View style={{ flex: 2 }}>
                <View style={styles.img}>
                    <Image style={styles.image} source={{ uri: props.img }}></Image>
                </View>
            </View>
            <View style={{ flex: 3, flexDirection: 'column', justifyContent: "space-evenly", alignItems: "center", }}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </View>
        <View style={styles.bottom}>
            <Text style={styles.des}>{props.des}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    block: {
        height: 160,
        width: 350,
        backgroundColor: "rgba(0,0,0,0.7)",
        borderRadius: 15,
        marginTop: 18,
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.54,
        shadowRadius: 7.27,

        elevation: 5,
    },
    img: {
        margin: 15,
        borderRadius: 15,
        width: 100,
        height: 80,
    },
    top: {
        flex: 3,
        flexDirection: "row",
        justifyContent: 'center',
    },
    title: {
        textAlign: "center",
        marginTop: 15,
        fontSize: 25,
        textTransform: "uppercase",
        color: "#daaa8c"
    },
    bottom: {
        flex: 2,
    },
    des: {
        margin: 5,
        marginLeft: 20,
        fontSize: 15,
        color: "#eaac9d",
        overflow: 'hidden',
    },
    image: {
        height: "100%",
        width: "100%",
        borderRadius: 15
    }
});