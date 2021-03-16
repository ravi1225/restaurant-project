import React from 'react';
import Constants from "expo-constants";
import { Dimensions, ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../components/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import * as Facebook from 'expo-facebook'



export default function Login(props) {
    async function logIn() {
        try {
            await Facebook.initializeAsync({
                appId: '239961727775901',
            });
            const {
                type,
                token,
                expirationDate,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
                console.log(response, 'rrrrrrrrrr');
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }
    return (
        <ImageBackground
            source={require('../../assets/Images/Background.jpg')}
            resizeMode="cover"
            style={styles.container}
        >
            <View style={styles.loginView}>
                <View style={styles.imageView}>
                    <Image
                        source={require('../../assets/Images/FirstServed.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.descriptionView}>
                    <Text style={styles.descriptionText}>The fastest and easiest way to get a table at a good restaurant today. FirstServed will give you an overview of the best restaurants in town. </Text>
                </View>
                <TouchableOpacity
                    // onPress={() => props.navigation.navigate('Home')}
                    onPress={() => logIn()}
                    style={styles.loginTouchable}
                >
                    <Entypo
                        name='facebook'
                        size={25}
                        color={Colors.white}
                        style={{ marginRight: 10, marginLeft: 10 }}
                    />
                    <Text style={styles.facebookText}> Continue with facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Home')}
                    style={{ position: 'absolute', bottom: 30, }}
                >
                    <Text style={{ color: Colors.darkGreen }}> Login as Restaurant </Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight,
    },
    loginView: {
        alignSelf: 'center',
        height: Dimensions.get('window').height - 100,
        width: Dimensions.get('window').width - 50,
        backgroundColor: Colors.grey,
        opacity: 0.8,
        alignItems: 'center'
    },
    imageView: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    image: {
        height: 180,
        width: 250,
        backgroundColor: Colors.grey
    },
    descriptionView: {
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    descriptionText: {
        fontSize: 15,
        color: Colors.darkGreen,
    },
    loginTouchable: {
        width: 250,
        alignItems: 'center',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: Colors.blue,
        marginTop: 100,
    },
    facebookText: {
        color: Colors.white,
        marginLeft: 15,
        fontSize: 15
    }
});
