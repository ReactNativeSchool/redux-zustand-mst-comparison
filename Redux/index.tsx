import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import { Products } from "./Products";
import { Cart } from "./Cart";
import { store } from "./store";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Products"
            component={Products}
            options={({ navigation }) => ({
              headerRight: () => (
                <Button
                  title={`Cart`}
                  onPress={() => navigation.push("Cart")}
                />
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
    </Provider>
  );
};

export default App;
