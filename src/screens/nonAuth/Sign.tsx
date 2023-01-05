import React, { useRef, useState } from 'react';
import {
    View, StyleSheet, Text,
    TextInput,
    TouchableOpacity, Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import Logo from '../../Components/logo';


import Entypo from 'react-native-vector-icons/Entypo';
import Indicator from '../Components/Indicator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNetInfo } from '@react-native-community/netinfo';



const SignIn = (props:any) => {
    const [showPassword, setShowPassword] = useState(true);
    const textInput:any = useRef();
    const netInfo = useNetInfo();

    const onShowPassword = () => {
        setShowPassword(show => !show);
    };

    const onSubmitForm = () => {
        if (Object.values(props.formValidity).every(Boolean)) {
            props.onSignIn({
                phoneNumber: props.formValues.phoneNumber,
                password: props.formValues.password,
            });
        } else {
            for (let key in props.formValues) {
                let target = {
                    name: key,
                    text: props.formValues[key],
                };
                props.handleValidation(target);
            }
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Logo />
            </View>
            <View style={styles.formWrapper}>
                {/*--login form*/}

                <View style={styles.formWrapperInt}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={text => {
                                props.onTextInputChange(text, 'phoneNumber');
                            }}
                            placeholderTextColor="#808080"
                            keyboardType="numeric"
                            maxLength={10}
                            placeholder="PhoneNumber"
                            autoCapitalize="none"
                            ref={textInput}
                        />
                        {props.formValues.phoneNumber.length > 0 && (
                            <TouchableOpacity
                                style={styles.passwordIcon}
                                onPress={() => {
                                    textInput.current.clear();
                                    props.clearInputText('phoneNumber');
                                }}>
                                <Entypo name="cross" size={25} color="#bbb" />
                            </TouchableOpacity>
                        )}
                    </View>
                    <Text style={styles.errors} allowFontScaling={false}>
                        {props.formErrors.phoneNumber}
                    </Text>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.textInput}
                            placeholderTextColor="#808080"
                            onChangeText={text => {
                                props.onTextInputChange(text, 'password');
                            }}
                            maxLength={30}
                            placeholder="Password"
                            autoCapitalize="none"
                            secureTextEntry={showPassword}
                        />
                        {!showPassword ? (
                            <TouchableOpacity
                                style={styles.passwordIcon}
                                onPress={onShowPassword}>
                                <Ionicons name="eye" size={25} color="green" />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={onShowPassword}>
                                <Ionicons
                                    style={styles.passwordIcon}
                                    name="eye-outline"
                                    size={25}
                                    color="#808080"
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                    <Text style={styles.errors} allowFontScaling={false}>
                        {props.formErrors.password}
                    </Text>

                    {netInfo.isConnected ? (
                        !props.isLoading ? (
                            <TouchableOpacity style={styles.button} onPress={onSubmitForm}>
                                <Text style={styles.buttonText} allowFontScaling={false}>
                                    SignIn
                                </Text>
                            </TouchableOpacity>
                        ) : (
                            <Indicator />
                        )
                    ) : (
                        <TouchableOpacity style={styles.errorButton}>
                            <Text style={styles.buttonText} allowFontScaling={false}>
                                No Connection!
                            </Text>
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity
                        style={styles.signupBtn}
                        onPress={() => props.navigation.navigate('signUpScreen')}>
                        <Text
                            style={[styles.buttonText, { color: '#009387' }]}
                            allowFontScaling={false}>
                            SignUp
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.signInWrapper}>
                        <Text style={styles.linkWrapper} allowFontScaling={false}>
                            SignIn as water supplier{'  '}
                            <Text
                                style={styles.link}
                                allowFontScaling={false}
                                onPress={() => props.navigation.navigate('supplierSignIn')}>
                                SignIn
                            </Text>
                        </Text>
                    </View>
                </View>
                );




            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formWrapper: {
        flex: 1,
        width: '100%',
        height: '70%',
        paddingHorizontal: 20,
    },

    formWrapperInt: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    inputView: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
    },
    textInput: {
        flex: 1,
        paddingLeft: 15,
        color: 'black',
        backgroundColor: 'white',
        zIndex: 5,
    },
    passwordIcon: {
        marginHorizontal: 5,
    },
    button: {
        width: '100%',
        marginTop: 20,
        backgroundColor: '#1aa1a5',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
    },
    signupBtn: {
        width: '100%',
        marginTop: 20,
        backgroundColor: '#fff',
        borderColor: '#009387',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
    },
    errorButton: {
        width: '100%',
        marginTop: 20,
        backgroundColor: '#DC143C',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Nunito-Bold',
    },
    labels: {
        marginTop: 8,
        fontSize: 13,
        fontFamily: 'Lato_700Bold',
        color: 'black',
    },
    errors: {
        color: 'red',
        marginTop: 5,
        fontSize: 12,
        fontFamily: 'Lato_400Regular',
    },
    signInWrapper: {
        width: '100%',
        height: 50,
        borderTopColor: '#ddd',
        borderTopWidth: 1,
        marginBottom: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height >= 760 ? '61%' : height >= 720 ? '47%' : '25%',
    },
    linkWrapper: {
        height: 25,
        marginLeft: 30,
        color: 'grey',
        fontFamily: 'Nunito-Light',
    },
    link: {
        fontSize: 15,
        color: '#1aa1a5',
        fontFamily: 'Nunito-Bold',
    },
});



export default SignIn;