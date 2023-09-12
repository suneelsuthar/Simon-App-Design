//@ts-check

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import theme from "../../../theme";
import { Input, Button } from "../../Components";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const Password = ({ navigation }) => {
  const [password, setpassword] = useState("");
  const [repassword, setrepassword] = useState("");
  const [show, setshow] = useState(false);
  const [rePasshow, setrePassshow] = useState(false);
  const hasCapitalLetter = () => {
    return /[A-Z]/.test(password);
  };
  const containsNumber = () => {
    // Define a regular expression pattern to match a digit
    let regex = /\d/;
    // Use the test() method to check if the pattern is found in the password
    return regex.test(password);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <View style={styles._container}>
        <View style={styles._body}>
          <Text style={styles._heading}>Crea una contraseña</Text>
          <Text style={styles._desc}>
            Por ley, necesitamos tu dirección para abrir tu cuenta
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles._input_row}>
              <View style={{ flex: 1 }}>
                <Input
                  placeholder="Contraseña"
                  value={password}
                  secureTextEntry={!show}
                  onChangeText={(v) => setpassword(v)}
                />
              </View>

              <TouchableOpacity
                onPress={() => setshow(!show)}
                style={styles._eye_section}
              >
                {show ? (
                  <Feather name="eye" size={24} color="black" />
                ) : (
                  <Feather name="eye-off" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>

            <View style={styles._input_row}>
              <View style={{ flex: 1 }}>
                {/* <Input
                  placeholder="Contraseña"
                  value={password}
                  secureTextEntry={!show}
                  onChangeText={(v) => setpassword(v)}
                /> */}
                <Input
                  placeholder="Repite la contraseña"
                  value={repassword}
                  secureTextEntry={!rePasshow}
                  onChangeText={(v) => setrepassword(v)}
                />
              </View>

              <TouchableOpacity
                onPress={() => setrePassshow(!rePasshow)}
                style={styles._eye_section}
              >
                {rePasshow ? (
                  <Feather name="eye" size={24} color="black" />
                ) : (
                  <Feather name="eye-off" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>

            {/* </View> */}
            <View style={styles._checkbox_row}>
              <View
                style={[
                  styles._checkbox,
                  {
                    borderColor: hasCapitalLetter()
                      ? theme.primary
                      : theme.greyLight,
                  },
                ]}
              >
                {hasCapitalLetter() && (
                  <Ionicons
                    name="checkmark-sharp"
                    size={15}
                    color={theme.primary}
                  />
                )}
              </View>
              <Text style={styles._checkbox_text}>
                Incluye una letra mayúscula
              </Text>
            </View>

            <View style={styles._checkbox_row}>
              <View
                style={[
                  styles._checkbox,
                  {
                    borderColor:
                      password.length >= 8 ? theme.primary : theme.greyLight,
                  },
                ]}
              >
                {password.length >= 8 && (
                  <Ionicons
                    name="checkmark-sharp"
                    size={15}
                    color={theme.primary}
                  />
                )}
              </View>
              <Text style={styles._checkbox_text}>Mínimo 8 caracteres</Text>
            </View>

            <View style={styles._checkbox_row}>
              <View
                style={[
                  styles._checkbox,
                  {
                    borderColor: containsNumber()
                      ? theme.primary
                      : theme.greyLight,
                  },
                ]}
              >
                {containsNumber() && (
                  <Ionicons
                    name="checkmark-sharp"
                    size={15}
                    color={theme.primary}
                  />
                )}
              </View>
              <Text style={styles._checkbox_text}>Incluye un número</Text>
            </View>
          </ScrollView>
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
  _row: {
    flexDirection: "row",
    alignItems: "center",
  },

  _checkbox_row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  _checkbox: {
    height: 25,
    width: 25,
    borderRadius: 8,
    elevation: 1,
    marginRight: 10,
    borderWidth: 1,
    backgroundColor: theme.greyLight,
    justifyContent: "center",
    alignItems: "center",
  },
  _checkbox_text: {
    fontFamily: theme.medium,
    fontSize: 16,
    color: theme.grey,
  },
  _input_row: {
    flexDirection: "row",
    alignItems: "center",
  },
  _eye_section: {
    position: "absolute",
    right: 20,
  },
});

export default Password;
