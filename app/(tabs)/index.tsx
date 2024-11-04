import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "rgba(0, 255, 0, 0.5)",
        }}
      >
        <View
          style={{
            height: 100,
            width: "100%",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
          }}
        >
          <Text>Box That Should Be 100% Width</Text>
        </View>
        <Text>Long Text Long Text Long Text Long Text Long Text Long Text</Text>
      </View>
    </View>
  );
}
