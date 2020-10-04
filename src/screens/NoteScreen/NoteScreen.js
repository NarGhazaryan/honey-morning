import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, FlatList, Alert } from 'react-native';
import { Block } from "../../components/Block"
import { DB } from '../db';

export class FavScreen extends React.Component {
    state = {
        data: [],
        hello: 'true'
    }

    componentDidMount() {
        this.fetchData()

    }

    Remove(id) {
        Alert.alert(
            'Delete?',
            'You sure?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => this.removePost(id)
                },
            ],
            { cancelable: true },
        );
    }
    removePost = async (id) => {
        await DB.removePost(id)
        this.fetchData()
    }

    fetchData = async () => {
        const res = await DB.getPosts()
        this.setState({
            data: res
        })
        console.log(this.state.data);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) this.props.fetchdata();
    }

    render() {
        // this.fetchData()
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground source={require("../../../assets/images/cover.jpg")} style={{ width: "100%", height: "100%", }}>
                    <View style={styles.header}>
                        <View style={styles.head} >
                            <View style={styles.textBox}>
                                <Text style={{ fontSize: 30, color: "#eaac9d" }}>My Recipes</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.main}>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return <TouchableOpacity onLongPress={() => this.Remove(item.id)} key={item.id} onPress={() => this.props.navigation.navigate('FavScreenItem', { horqur: item })}>
                                    <Block title={item.title} img={item.imgUrl} des={item.description} /></TouchableOpacity>
                            }}
                        />
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity onPress={()=>this.fetchData()} style={styles.button}><Text style={{ fontSize: 20, color: "#eaac9d" }}>REFRESH</Text></TouchableOpacity>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: "30%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    main: {
        height: "65%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
    },
    head: {
        width: "100%",
        height: "75%",
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: "column",
    },
    footer:{
        height: "5%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        width: "50%",
        height: "80%",
        backgroundColor: "rgba(0,0,0,0.6)",
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    category: {
        width: "100%",
        height: "25%",
        backgroundColor: "rgba(0,0,0,0)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: 'center',
    },
    buts: {
        width: 100,
        height: 40,
        backgroundColor: "rgba(0,0,0,0.7)",
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBox: {
        width: "80%",
        height: "50%",
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center"
    },
    textBox1: {
        width: "80%",
        height: "25%",
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center"
    },
})
