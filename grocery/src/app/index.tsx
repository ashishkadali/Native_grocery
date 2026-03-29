import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import "../../global.css";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text className="text-red-400">Edit src/app/index.tsx to edit this screen.</Text>
      <Link href={'/about'}>About screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
