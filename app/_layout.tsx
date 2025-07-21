import { Stack } from "expo-router";
import { View } from "react-native";
import '../global.css';

export default function RootLayout() {
  return (
    <View style={{flex:1, backgroundColor: '#f3f4f6'}}>
      <Stack
    screenOptions={{
      headerShown: false
    }}
  />
    </View>
  )
}
