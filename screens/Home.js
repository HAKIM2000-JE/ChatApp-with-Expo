import { HeaderTitle } from '@react-navigation/stack'
import React, { useLayoutEffect, useState , useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native'
import { Avatar } from 'react-native-elements'
import CustemListitems from '../components/CustemListitems.js'
import {AntDesign , SimpleLineIcons} from "@expo/vector-icons"
import { auth , db} from '../firebase'

const Home = ({navigation}) => {
    const [chats,setChats]= useState([])
    const singnout = ()=>{
        auth.signOut().then(()=>{
             navigation.replace("Login")
        })
    }


    useEffect(() => {
      const unsubscribe = db.collection('chats').onSnapshot((snapshot)=>{
        
          setChats(
              snapshot.docs.map((doc)=>({
              id: doc.id,
              data: doc.data(),
              
          })))
         
     
        })
       
        return unsubscribe
        
    }, [])
    console.log(chats)
      useLayoutEffect(() => {
          navigation.setOptions({
            title: "Live Chat",
              headerStyle: { backgroundColor: "#fffff", textalign: 'center',},
            headerTitleStyle : {color: "black"},
            headerTintColor : "balck",
           headerLeft : ()=> (
               <View style={{marginLeft:20}}>
               <TouchableOpacity activeOpacity={0.5} onPress={singnout}>
                   <Avatar
                       rounded
                       source={{ uri: auth?.currentUser?.photoURL }}
                   />
                 </TouchableOpacity>
                
           </View>),
           headerRight : ()=>(
               <View  style={{
                   flexDirection : "row",
                   justifyContent : "space-between",
                   width: 80,
                   marginRight:20
               }} >
                  <TouchableOpacity activeOpacity={0.5}>
                     <AntDesign name="camerao" size={24} color="black"  />
                  </TouchableOpacity>
                  <TouchableOpacity  onPress={()=>navigation.navigate("AddChat")} activeOpacity={0.5} >
                       <SimpleLineIcons name="pencil" size={24} color="black"/>

                  </TouchableOpacity>
                   
               </View>
           )
          })
        
      }, [navigation])

      const enterChat = (id , chatName)=>{
          navigation.navigate('Chat',{
              id: id,
              chatName : chatName
          })
      }
    return (
       <SafeAreaView>
         <ScrollView>

                {chats.map(({ id, data: {chatName}})=>(
                    <CustemListitems key={id} id={id} chatName={chatName}  
                    enterChat={enterChat}/>
             
         )
            )}
               
           
         </ScrollView>
       </SafeAreaView>
    )
}

export default Home
