import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { CountryCodePicker } from "../../Components";
import theme from "../../../theme";
import { Button } from "../../Components";
const Signup = ({ navigation }) => {
  const numberHandleChange = (_num) => {
    console.log(_num);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <View style={styles._container}>
        <View style={styles._body}>
          <Text style={styles._heading}>Empecemos</Text>
          <Text style={styles._desc}>
            Ingresa tu número celular. Te enviaremos un código de confirmación
          </Text>
          <CountryCodePicker
            onTextChange={(_num) => numberHandleChange(_num)}
          />
          <Text style={styles._bottom_text}>
            ¿Ya tienes una cuenta? Inicia sesión
          </Text>
        </View>
        <View style={styles._btn_section}>
          <Button
            title={"Crear cuenta"}
            onPress={() => navigation.navigate("VerificationCode")}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: theme.white,
    padding: 15,
    paddingTop: 0,
  },
  _body: {
    flex: 1,
  },
  _heading: {
    fontFamily: theme.bold,
    fontSize: 17,
  },
  _desc: {
    fontFamily: theme.medium,
    marginTop: 15,
    color: theme.grey,
    fontSize: 16,
  },
  _bottom_text: {
    fontFamily: theme.medium,
    color: theme.primary,
  },
  _btn_section: {
    marginHorizontal: 10,
  },
});

export default Signup;
