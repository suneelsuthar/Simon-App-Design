//@ts-check
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  TextInput,
  Platform,
} from "react-native";
import React from "react";
import theme from "../../../theme";
import { Button } from "../../Components";
import { useKeyboard } from "../../hooks/KeyboardAware";

const UserDate = ({ navigation }) => {
  const [day, setDay] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");

  if (day > "31") {
    setDay("");
  }
  if (month > "12") {
    setMonth("");
  }

  const keyboardHeight = useKeyboard();

  console.log(day, month, year);

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <View style={styles._container}>
        <View style={styles._body}>
          <Text style={styles._heading}>Fecha de nacimiento</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="Día"
              style={styles._input}
              onChangeText={(e) => setDay(e)}
              value={day}
              maxLength={2}
              keyboardType="number-pad"
              multiline={true}
              textAlign="center"
              verticalAlign="middle"
              numberOfLines={1}
              autoFocus
            />
            <TextInput
              placeholder="Mes"
              style={styles._input}
              onChangeText={(e) => setMonth(e)}
              value={month}
              maxLength={2}
              keyboardType="number-pad"
              multiline={true}
              textAlign="center"
              verticalAlign="middle"
              numberOfLines={1}
            />
            <TextInput
              placeholder="Año"
              multiline={true}
              style={styles._input}
              onChangeText={(e) => setYear(e)}
              keyboardType="number-pad"
              maxLength={4}
              value={year}
              textAlign="center"
              verticalAlign="middle"
              numberOfLines={1}
            />
          </View>
        </View>
        <View
          style={{
            ...styles._btn_section,
            marginBottom: Platform.OS === "ios" ? keyboardHeight + 10 : 0,
          }}
        >
          <Button
            title={"Continuar"}
            onPress={() => navigation.navigate("UserGender")}
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
    marginBottom: 30,
  },

  _btn_section: {
    marginHorizontal: 10,
  },

  _input: {
    backgroundColor: theme.greyLight,
    height: 59,
    // borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    borderRadius: 8,

    marginVertical: 14,
    fontFamily: theme.medium,
    // paddingLeft: 10,
    textAlign: "center",
    fontSize: 16,
    elevation: 1,
  },
});

export default UserDate;
