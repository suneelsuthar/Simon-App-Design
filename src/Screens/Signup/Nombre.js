//@ts-check

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import theme from "../../../theme";
import { Input, Button } from "../../Components";
import { useKeyboard } from "../../hooks/KeyboardAware";
const Nombre = ({ navigation }) => {
  const [num, setnum] = useState("");
  const [surname, setsurname] = useState("");
  const [secsurname, setsecsurname] = useState("");
  const keyboardHeight = useKeyboard();

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <View style={styles._container}>
        <View style={styles._body}>
          <Text style={styles._heading}>Nombre tal cual tu INE</Text>
          <Text style={styles._desc}>
            Nombre tal cual está en tus identificaciones oficiales
          </Text>
          <Input
            placeholder="Nombre"
            value={num}
            onChangeText={(v) => setnum(v)}
          />
          <Input
            placeholder="Primer apellido"
            value={surname}
            onChangeText={(v) => setsurname(v)}
          />
          <Input
            placeholder="Segundo apellido"
            value={secsurname}
            onChangeText={(v) => setsecsurname(v)}
          />
        </View>
        <View
          style={{
            ...styles._btn_section,
            marginBottom: 10,
          }}
        >
          <Button
            title={"Continuar"}
            onPress={() => navigation.navigate("Celular")}
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
    marginBottom: 30,
  },
  _btn_section: {
    marginHorizontal: 10,
  },
});

export default Nombre;
