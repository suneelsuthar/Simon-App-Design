import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import theme from "../../../theme";

const CountryCodePicker = ({onTextChange}) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef();
  return (
        <View style={styles.container}>
          
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            placeholder="Número celular"
            defaultCode="MX"
            layout="second"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
              onTextChange(text)
            }}
            containerStyle={{backgroundColor:theme.white,elevation:0,width:"100%"}}
            countryPickerButtonStyle ={styles.countryPickerButtonStyle}
            textContainerStyle={styles.textContainerStyle}
            textInputStyle={styles.textInputStyle}
            codeTextStyle={styles.codeTextStyle}
            withShadow
            autoFocus
          />
         
        </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginVertical:40,
        
    },
    countryPickerButtonStyle:{
        marginRight:20,
        backgroundColor:theme.greyLight,
        borderRadius:5
    },
    textContainerStyle:{
        backgroundColor:theme.greyLight,
        borderRadius:5,
        padding:0,
    },
    textInputStyle:{
        padding:0,
        // fontSize:15,
        fontFamily:theme.medium,
        fontSize:17,

    },
    codeTextStyle:{
        padding:0,
        fontSize:17,
        fontFamily:theme.medium,
    }
})

export default CountryCodePicker;