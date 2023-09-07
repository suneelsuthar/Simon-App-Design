import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FirstPage, Celular, Nombre, VerificationCode } from "../Screens";
import UserDate from "../Screens/Signup/UserDate";
import UserGender from "../Screens/Signup/UserGender";
import { BackIcon, CalendarIcon } from "../../assets/svg";
import { WithLocalSvg } from "react-native-svg";

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Nombre"
          component={Nombre}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerLeft: () => <BackIcon backScreen={"FirstPage"} />,
          }}
        />

        <Stack.Screen
          name="Celular"
          component={Celular}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerLeft: () => <BackIcon backScreen={"Nombre"} />,
          }}
        />
        <Stack.Screen
          name="VerificationCode"
          component={VerificationCode}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerLeft: () => <BackIcon backScreen={"Celular"} />,
          }}
        />
        <Stack.Screen
          name="UserDate"
          component={UserDate}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerLeft: () => <BackIcon backScreen={"VerificationCode"} />,
          }}
        />
        <Stack.Screen
          name="UserGender"
          component={UserGender}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerLeft: () => <BackIcon backScreen={"UserDate"} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
