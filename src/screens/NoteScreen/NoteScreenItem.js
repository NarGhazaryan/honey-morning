import React from 'react'
import {StyleSheet, View, Text, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native"


export const FavScreenItem = (props) => {
    console.log(props.route.params.horqur);
    var horqur = props.route.params.horqur
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={{ uri: horqur.imgUrl }} style={{ flex: 1 }}>
                <View style={styles.header}>
                    <Text style={{ fontSize: 45, color: "#eaac9d" }}>{horqur.title}</Text>
                </View>
                <View style={styles.main}>
                    <View style={styles.content}>
                        <Text style={{ fontSize: 25, color: "#eaac9d" }}>{horqur.description}</Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header: {
        flex: 2,
        backgroundColor: "rgba(0,0,0,0.7)",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: "85%",
        height: "85%",
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8.27,
        elevation: 8,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 10
    }
});