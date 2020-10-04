import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, ScrollView, TouchableOpacity, ImageBackground, FlatList, Image } from 'react-native';
import { Block } from "../../components/Block"
import { DB } from '../db';


export class HomeScreen extends React.Component {
    state = {
        caty: 'cocktail',
        data: [],
    }
    fetchData = async (caty) => {
        const res = await fetch(`https://narekv2.firebaseio.com/NyamNyam/${caty}.json`)
        const fetchedData = await res.json()
        console.log(fetchedData)
        if (fetchedData) {
            const hamov = Object.keys(fetchedData).map(key => {
                return {
                    id: key,
                    ...fetchedData[key]
                }
            })
            this.setState({ data: hamov })
        }
    }

    componentDidMount() {
        this.fetchData(this.state.caty)
    }
    changeCat = (cat) => {
        this.setState({ caty: cat })
        this.fetchData(this.state.caty)

    }
    addFavorites = async (item) => {
        alert("Added to Saved")
        const response = await DB.createPost(item)
        console.log(response);
    }
    render() {


        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../../assets/images/cover.jpg')} style={{ width: "100%", height: "100%", }}>
                    <View style={styles.header}>
                        <View style={styles.head} >
                            <View style={styles.textBox}>
                                <Text style={{ fontSize: 30, color: "#eaac9d" }}>Honey Morning</Text>
                            </View>
                        </View>
                        <View style={styles.category}>
                            <TouchableOpacity onPress={() => { this.changeCat('cocktail') }} style={styles.buts}><Text style={{ color: "#eaac9d" }}>Cocktails</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.changeCat('cake') }} style={styles.buts}><Text style={{ color: "#eaac9d" }}>Cakes</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.changeCat('ice') }} style={styles.buts}><Text style={{ color: "#eaac9d" }}>IceCream</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.main}>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                console.log(item);
                                return (
                                    <View>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreenItem', { hopar: item })}>
                                            <Block title={item.title} img={item.imgUrl} des={item.description} />
                                        </TouchableOpacity>
                                        <View>
                                            <TouchableOpacity onPress={() => this.addFavorites(item)}>
                                                <Image style={{ width: 30, height: 30, alignSelf: 'flex-end', marginTop: -15 }}
                                                    source={{ uri: 'https://image.flaticon.com/icons/png/512/535/535183.png' }}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }}
                        />
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
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    main: {
        height: "70%",
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
