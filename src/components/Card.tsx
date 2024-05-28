import { Text, View, StyleSheet } from "react-native";

interface UserCardProps {}

export function UserCard({}: UserCardProps): JSX.Element {
  return (
    <View style={style.container}>
      <Text>UserCard</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {},
});
