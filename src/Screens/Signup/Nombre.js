import React,{useState} from "react";
import { View, Text, StyleSheet,SafeAreaView } from 'react-native'
import theme from "../../../theme";
import {Input,Button} from "../../Components";
const Nombre = ({navigation}) => {
    const [num,setnum] = useState('')
    const [surname,setsurname] = useState('')
    const [secsurname,setsecsurname] = useState('')

    

    return (
        <SafeAreaView style={styles._container}>
            <View style={styles._body}>

            <Text style={styles._heading}>Nombre tal cual tu INE</Text>
            <Text style={styles._desc}>Nombre tal cual está en tus identificaciones oficiales</Text>
            <Input placeholder="Nombre" value={num} onTextChange={(v)=>setnum(v)} />
            <Input placeholder="Primer apellido" value={surname} onTextChange={(v)=>setsurname(v)} />
            <Input placeholder="Segundo apellido" value={secsurname} onTextChange={(v)=>setsecsurname(v)} />

            </View>
            <View style={styles._btn_section}>
            <Button title={"Continuar"} onPress={()=>navigation.navigate("Celular")}  />
            </View>
        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    _container: {
        flex: 1,
        backgroundColor:theme.white,
        padding:15,
        paddingTop:0
    },
    _body:{
        flex:1
    },
    _heading:{
        fontFamily:theme.bold,
        fontSize:17
    },
    _desc:{
        fontFamily:theme.medium,
        marginTop:15,
        color:theme.grey,
        fontSize:16,
        marginBottom:30
    },
    _btn_section:{
        marginHorizontal:10
    }
})

export default Nombre