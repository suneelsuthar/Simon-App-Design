import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import theme from "../../../theme";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const FirstPage = ({ navigation }) => {
  return (
    <View style={styles._container}>
      <View style={styles._body}>
        <Text style={styles._name}>CENT</Text>
      </View>
      <View style={styles._footer}>
        <TouchableOpacity
          style={[styles._btn, { backgroundColor: "#010022" }]}
          onPress={() => navigation.navigate("Nombre")}
        >
          <Text style={[styles._btn_text, { color: theme.white }]}>
            Iniciar sesión
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles._btn}
          onPress={() => navigation.navigate("Nombre")}
        >
          <Text style={styles._btn_text}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: theme.primary,
    padding: 10,
    paddingVertical: 50,
  },
  _body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  _name: {
    color: theme.white,
    fontFamily: theme.medium,
    fontSize: 40,
  },
  _footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  _btn: {
    height: 50,
    width: 95,
    backgroundColor: theme.white,
    borderRadius: 100,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  _btn_text: {},
});

export default FirstPage;
