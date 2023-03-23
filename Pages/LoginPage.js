import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { useState } from 'react';
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import IconAD from 'react-native-vector-icons/AntDesign'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        console.log('Welcome User ' + email);
        // try {
        //     const response = await fetch('https://your-symfony6-server.com/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             email: email,
        //             password: password,
        //         }),
        //     });

        //     const data = await response.json();
        //     console.log(data);
        // } catch (error) {
        //     console.error(error);
        // }
    }

    const handleForget = () => {
        console.log("Forgot Password")
    }

    const handleIcon = () => {
        console.log("icon")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.iconContainer}>
                <IconAD name="left" size={30} color="black" onPress={handleIcon}/>
            </View>
            <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>Log in</Text>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.fieldLabel}>Email</Text>
                <TextInput
                    style={styles.inputField}
                    value={email}
                    placeholder="example@mail.com"
                    onChangeText={(text) => setEmail(text)}
                />
                <View>
                    <Text style={styles.fieldLabel}>Password</Text>
                    <TextInput
                        style={styles.inputField}
                        value={password}
                        secureTextEntry={true}
                        placeholder="Enter Password"
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.orText}>or</Text>
            <View style={styles.loginIconCont}>
                <IconFA5 name="facebook" size={30} color="blue"/>
                <IconFA5 name="google" size={30} color="blue"/>
            </View>
            <TouchableOpacity style={styles.resetContainer} onPress={handleForget}>
                <Text style={styles.resetText}>Forgot password?</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
    },
    iconContainer: {
        paddingTop: 10,
        height: '10%',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 10,
    },
    headingTextContainer: {
        height: '10%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    headingText: {
        color: "black",
        fontSize: 25,
        fontFamily: 'PJS-Medium',
    },
    fieldContainer: {
        width: '90%',
        marginBottom: 15,
    },
    fieldLabel: {
        marginBottom: 5,
        color: '#666666',
    },
    inputField: {
        width: '100%',
        borderWidth: 1.25,
        borderColor: '#b3b3b3',
        borderRadius: 10,
        height: 50,
        marginBottom: 15,
        paddingLeft: 15,
        paddingRight: 35,
    },
    button: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 55,
        borderRadius: 15,
        backgroundColor: '#ff0087',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orText: {
        color: '#666666',
        marginVertical: 25,
    },
    loginIconCont: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 25,
    },
    resetText: {
        color: '#ff0087',
    },
    resetContainer: {
        marginVertical: 40,
    },
});

export default LoginPage;