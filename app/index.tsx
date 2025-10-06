import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.bioContainer}>
        {/* Foto */}
        <Image
          source={require("../assets/images/my-image.jpg")}
          style={styles.profilePhoto}
          resizeMode="contain"
        />

        {/* Nome */}
        <Text style={styles.name}>Pedro Mota Mendes</Text>

        {/* Bio */}
        <Text style={styles.bioText}>
          Olá! Sou Pedro Mota Mendes. Sou estudante de Ciência da Computação na
          Universidade Católica de Pernambuco (UNICAP). Apaixonado por
          tecnologia, programação e desenvolvimento de software.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "#1a1a1a",
    paddingTop: 50,
  },
  bioContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },

  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginBottom: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
    textAlign: "center",
  },
  bioText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#ffffff",
    textAlign: "center",
    opacity: 0.9,
    maxWidth: 350,
  },
});
