import React , {useState , useLayoutEffect} from 'react'
import { StyleSheet } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { View } from 'react-native'
import {Button , Input , Text} from 'react-native-elements'
import {StatusBar} from 'expo-status-bar'
import { auth } from '../firebase'

const Register = ({navigation}) => {
    const [name,setName]=useState("")
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [image, setImage] = useState("")

    const register = ()=>{
        auth.createUserWithEmailAndPassword(email,password).then((authUser)=>{
               console.log(authUser)
            authUser.user.updateProfile({
                   displayName :name,
                   photoURL:
                     image || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
               })
        }).catch((error)=>alert(error.message))

    }
    useLayoutEffect(() => {
        
       navigation.setOptions({
           
        
       })
    }, [navigation])
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
         <StatusBar style="light" />
            {/*<Text h4 style={{marginBottom: 50 , marginTop:-50}}>
              Create a Signal Account
    </Text>*/}
            <view style={{ height: 20 }} />

            <View style={styles.inputContainer}>
               <Input  placeholder="Fullname" autoFocus type="text" value={name}
               onChangeText={(text)=>setName(text)} />
                <view style={{ height: 30 }} />

                <Input placeholder="email" autoFocus type="email" value={email}
                    onChangeText={(text) => setemail(text)} />
                <view style={{ height: 30 }} />
                <Input placeholder="password" autoFocus type="password" value={password} secureTextEntry
                    onChangeText={(text) => setPassword(text)} />

                <view style={{ height: 30}} />
                <Input placeholder="Image url" autoFocus type="text" value={image}
                    onChangeText={(text) => setImage(text)} 

                    onSubmitEditing={register}
                    />
                <view style={{height:60}}/>
                <Button  containerStyle={styles.button} raised  onPress={register} title="Register" />
            
            </View>
        </KeyboardAvoidingView>
    )
}

export default Register

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor:"white"
    },
    button : {
        width:200,
        marginTop:10
    },
    inputContainer:{
        width:300,

    }
}
    )
