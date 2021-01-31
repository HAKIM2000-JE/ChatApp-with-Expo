import React , {useLayoutEffect , useState} from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import {Button , Icon, Input} from "react-native-elements"
import { db } from '../firebase'

const AddChat = ({navigation}) => {
    const [input, setInput] = useState("")
    const createChat = async()=>{
        await db.collection('chats').add({
            chatName:input
        }).then(()=>{
            navigation.goBack();
        }).catch((error)=>alert(error.message))

    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add New Chatt",
            headerBackTitle:"Chats"
        })
    }, [])
    return (
        <View style={styles.container}>
            <Input placeholder="Enter a chat name" value={input}
            onChangeText={(text)=>setInput(text)}
             leftIcon={
                 <Icon name="wechat" type="antdesign" size={24} color="black"
                 />
             }
             onSubmitEditing={createChat}
            />
            <Button disabled={!input} onPress={createChat} title="Create new chat Room"/>
        </View>
    )
}

export default AddChat


const styles=StyleSheet.create({
    container :{
      backgroundColor: "white",
      padding:30,
      height:"100%"
    }
})