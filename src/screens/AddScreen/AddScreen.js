import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { DB } from '../db';


export class AddScreen extends React.Component {
    state = {
        title: "",
        imgUrl: 'https://i.imgur.com/IEerOfR.png',
        description: "",
        caty: "cake"
    }

    handleChange(event = {}) {
        const name = event.target && event.target.name;
        const value = event.target && event.target.value;

        this.setState({ [name]: value });
    }

    addFavorites = async (state) => {
        alert("Added To Saved List")
        console.log(state);
        const response = await DB.createPost(state)
        console.log(response);
        this.state.title = ""
        this.state.description = ""
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../../../assets/images/cover.jpg')} style={{ width: "100%", height: "100%", justifyContent: 'center', alignItems: 'center', }}>
                    <View style={styles.form}>
                        <View style={styles.title}>
                            <Text style={styles.text}>Title:</Text>
                            <TextInput
                                style={styles.textinput}
                                name="title"
                                onChangeText={(value) => this.setState({ title: value })}
                                value={this.state.title}
                            />
                        </View>
                        <View style={styles.description}>
                            <Text style={styles.text}>Recipe:</Text>
                            <TextInput
                                multiline={true}
                                style={styles.textinput}
                                onChangeText={(value) => this.setState({ description: value })}
                                value={this.state.description}
                            />
                        </View>
                        <TouchableOpacity style={styles.but} onPress={() => this.addFavorites(this.state)}>
                            <View>
                                <Text style={{color: "#eaac9d"}}>SUBMIT</Text>
                            </View>
                        </TouchableOpacity>
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
    form: {
        width: "75%",
        height: "50%",
        backgroundColor: "rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 20,
    },
    title: {
        width: "80%",
        height: "20%",
        backgroundColor: "rgba(0,0,0,0.3)",
        display: 'flex',
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 8,
        },
        shadowOpacity: 0.54,
        shadowRadius: 7.27,
        elevation: 5,
    },
    description: {
        width: "80%",
        height: "45%",
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 8,
        },
        shadowOpacity: 0.54,
        shadowRadius: 7.27,
        elevation: 5,
    },
    text: {
        fontSize: 18,
        textTransform: "uppercase",
        paddingTop: 8,
        color: "#eaac9d"
    },
    textinput: {
        height: "90%",
        paddingBottom: 10,
        color: "#eaac9d",
        fontSize: 15,
    },
    but:{
        width: "40%",
        height: "10%",
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
})