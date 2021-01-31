import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import  {Button , Input , Image} from 'react-native-elements'
import { StatusBar} from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'
import { auth } from '../firebase'
const Login = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword]= useState("")
    const login = ()=>{
        auth.signInWithEmailAndPassword(email,password).catch(error=>alert(error.message))

    }
    useEffect(() => {
     const unsubscribe= auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                navigation.replace("Home")
            }
        })

        return unsubscribe
    }, [])
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
         <StatusBar style="dark" />
            <Image  source={{
                uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
            }} 
            style={{width: 200, height:200}}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus type="Email" value={email}
                onChangeText={(text)=>setEmail(text)} 
                 />
                  <Input placeholder="Password" autoFocus type="password" secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={login} 
                  />

            </View>

            <Button containerStyle={styles.button} onPress={login} title="login" />
            <Button containerStyle={styles.button} title="Register" type="outline" onPress={()=>navigation.navigate('Register')} />
            <view style={{height:100}} />
        </KeyboardAvoidingView>
    )
}
 
export default Login

const styles=StyleSheet.create({
    container:{
        flex :1,
        alignItems: "center",
        justifyContent : "center",
        padding: 10,
        backgroundColor : "white"

    },
    inputContainer:{
        width:300

    },
    button: {
        width: 200,
        marginTop : 10
    }
})