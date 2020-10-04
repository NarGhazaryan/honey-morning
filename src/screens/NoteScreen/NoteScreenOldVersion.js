// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
// import { Block } from "../../components/Block"


// export const FavScreen = (props) => {

//     return (
//         <SafeAreaView style={styles.container}>
//             <ImageBackground source={{ uri: require("../../../assets/images/strawberries-blueberries_FCRS5OMAMN.jpg") }} style={styles.header}>
//                 <View style={styles.head} >
//                     <View style={styles.textBox}>
//                         <Text style={{ fontSize: 30, color: "#eaac9d" }}>My Favorites</Text>
//                     </View>
//                 </View>
//             </ImageBackground>
//             <View style={styles.main}>
//                 <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
//                     {
//                         data.map((i) => {
//                             return <TouchableOpacity key={i.id} onPress={()=> props.navigation.navigate('FavScreenItem',{horqur: i})}><Block  title={i.title} img={i.imgUrl} des={i.description} /></TouchableOpacity>
//                         })
//                     }
//                 </ScrollView>
//             </View>
//         </SafeAreaView>
//     );
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     header: {
//         height: "30%",
//         width: "100%",
//         backgroundColor: "#342ead",
//         display: "flex",
//         flexDirection: "column",
//     },
//     main: {
//         height: "70%",
//         width: "100%",
//         backgroundColor: "#123",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: 'center',
//     },
//     head: {
//         width: "100%",
//         height: "75%",
//         // backgroundColor: "red",
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: "column",
//     },
//     category: {
//         width: "100%",
//         height: "25%",
//         backgroundColor: "rgba(0,0,0,0)",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-evenly",
//         alignItems: 'center',
//     },
//     buts: {
//         width: 100,
//         height: 40,
//         backgroundColor: "rgba(0,0,0,0.7)",
//         borderRadius: 10,
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     textBox: {
//         width: "80%",
//         height: "50%",
//         backgroundColor: "rgba(0,0,0,0.5)",
//         borderRadius: 15,
//         flexDirection: "row",
//         justifyContent: 'center',
//         alignItems: "center"
//     },
//     textBox1: {
//         width: "80%",
//         height: "25%",
//         backgroundColor: "rgba(0,0,0,0.5)",
//         borderRadius: 15, 
//         flexDirection: "row",
//         justifyContent: 'center',
//         alignItems: "center"
//     },
// })
