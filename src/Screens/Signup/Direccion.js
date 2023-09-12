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
const Direccion = ({ navigation }) => {
  const [postal, setpostal] = useState("");
  const [outdoor, setoutdoor] = useState("");
  const [checked, setchecked] = useState(false);
  const [interior, setinterior] = useState("");
  const [colonia, setcolonia] = useState("");
  const [state, setstate] = useState("");
  const [town, settown] = useState("");

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <View style={styles._container}>
        <View style={styles._body}>
          <Text style={styles._heading}>Dirección</Text>
          <Text style={styles._desc}>
            Por ley, necesitamos tu dirección para abrir tu cuenta
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              placeholder="Código postal"
              value={postal}
              onChangeText={(v) => setpostal(v)}
            />

            <View style={styles._row}>
              <View style={styles._field_row}>
                <Input
                  placeholder="Número exterior"
                  value={outdoor}
                  onChangeText={(v) => setoutdoor(v)}
                />
              </View>

              <View style={styles._checkbox_row}>
                <TouchableOpacity
                  onPress={() => setchecked(!checked)}
                  style={[
                    styles._checkbox,
                    { borderColor: checked ? theme.primary : theme.greyLight },
                  ]}
                ></TouchableOpacity>
                <Text style={styles._checkbox_text}>Sin número</Text>
              </View>
            </View>
            <Input
              placeholder="Numero interior"
              value={interior}
              onChangeText={(v) => setinterior(v)}
            />
            <Input
              placeholder="Colonia"
              value={colonia}
              onChangeText={(v) => setcolonia(v)}
            />

            <Input
              placeholder="Estado"
              value={state}
              onChangeText={(v) => setstate(v)}
            />
            <Input
              placeholder="Alcaldía"
              value={town}
              onChangeText={(v) => settown(v)}
            />
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
            onPress={() => navigation.navigate("Password")}
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
  _field_row: {
    flex: 1,
  },
  _checkbox_row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  _checkbox: {
    height: 25,
    width: 25,
    borderRadius: 8,
    elevation: 1,
    marginRight: 10,
    borderWidth: 1,
    backgroundColor: theme.greyLight,
  },
  _checkbox_text: {
    fontFamily: theme.medium,
    fontSize: 16,
    color: theme.grey,
  },
});

export default Direccion;
