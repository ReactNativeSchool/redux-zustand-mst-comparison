import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import { Products } from "./Products";
import { Cart } from "./Cart";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={Products}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button title={`Cart`} onPress={() => navigation.push("Cart")} />
            ),
          })}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
