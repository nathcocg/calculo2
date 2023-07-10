import { SafeAreaProvider } from "react-native-safe-area-context";

import AlarmScreen from "../screens/AlarmScreen";
import DetailsScreen from "../screens/DetailsScreen";
import FormulaScreen from "../screens/FormulaScreen";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Formula" component={FormulaScreen} />
            <Tab.Screen name="Alarm" component={AlarmScreen} />
            <Tab.Screen name="Details" component={DetailsScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}