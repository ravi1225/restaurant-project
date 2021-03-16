import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity, Switch, FlatList } from 'react-native';
import Constants from "expo-constants";
import { Colors } from './Colors';
import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { restaurantDetails } from './AllData';



export default function Restaurants() {
    const [data, setData] = useState(restaurantDetails);

    const toggleSwitch = (key) => {
        const toggle = data.map((e) => {
            if (e.key == key) {
                return { ...e, toggle: !e.toggle };
            } else {
                return { ...e };
            }
        })
        setData(toggle)
    }

    const changeCheck = (key) => {
        const checkStatus = data.map((e) => {
            if (e.key == key) {
                return { ...e, check: !e.check };
            } else {
                return { ...e };
            }
        })
        setData(checkStatus)
    }

    return (
        <View style={styles.container}>
            <View style={styles.headingView}>
                <Text style={styles.headingText}> RESTAURANTS </Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.flatlistView}>
                        <View style={styles.nameView}>
                            <Text style={styles.nameText}> {item.hotelName}  </Text>
                        </View>
                        <Image
                            source={require('../../assets/Images/Background.jpg')}
                            style={{ height: Dimensions.get('window').height - 450 }}
                        />
                        <View style={styles.detailView}>
                            <View style={styles.detailTextView}>
                                <Text style={styles.detailText}> {item.subDetails} </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => changeCheck(item.key)}
                            >
                                <Icon name={item.check ? 'heart' : 'heart-o'} size={25} color={Colors.red} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.locationView}>
                            <Entypo name='location-pin' size={20} />
                            <Text style={{ color: Colors.darkGreen }}> {item.location}</Text>
                        </View>
                        <View style={styles.moredetailsView}>
                            <Text style={{ color: Colors.black }}> {item.details} </Text>
                        </View>
                        <View style={styles.notificationView}>
                            <View style={styles.notificationTextView}>
                                <Text style={{ color: Colors.darkGreen, }}> {item.notifications} </Text>
                            </View>
                            <Switch
                                trackColor={{ false: Colors.darkGrey, true: Colors.darkGreen }}
                                thumbColor={Colors.darkGreen}
                                onValueChange={() => toggleSwitch(item.key)}
                                value={item.toggle}
                                style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.3 }] }}
                            />
                        </View>
                    </View>

                )}
            />
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        width: Dimensions.get('window').width,

    },
    headingView: {
        borderWidth: 1,
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
        backgroundColor: Colors.darkGreen
    },
    headingText: {
        color: Colors.white,
        fontSize: 18
    },
    flatlistView: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.darkGreen,
        backgroundColor: Colors.grey
    },
    nameView: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.darkGreen
    },
    detailView: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignContent: 'center',
        marginRight: 20
    },
    detailTextView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width - 150,
    },
    detailText: {
        fontSize: 10,
        fontWeight: 'bold',
        marginRight: 80,
        color: Colors.black
    },
    locationView: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 5
    },
    moredetailsView: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    notificationView: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 30,
        flexDirection: 'row',
        marginRight: 10,
        marginTop: 10,
    },
    notificationTextView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width - 95
    }
});
