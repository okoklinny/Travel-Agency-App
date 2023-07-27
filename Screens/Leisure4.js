import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function Leisure4({ navigation }) {
  const handlePreRegisterPress = () => {
    Alert.alert("You Have Successfully Preregistred to Leisure 4 ");
    navigation.navigate("Profile", {});
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.titlePoster}>
            <Text style={styles.titlePosterText}>Imperial Cities</Text>
          </View>
          <View style={styles.posterContainer}>
            <View style={[styles.poster, { marginRight: 10 }]}>
              <Image
                style={styles.posterImage}
                source={require("../assets/RabatByNight.jpg")}
              />
            </View>
            <View style={styles.poster}>
              <Image
                style={styles.posterImage}
                source={require("../assets/Marakesh2.jpg")}
              />
            </View>
          </View>
          <View style={styles.informationPoster}>
            <Text style={styles.informationPosterTitle}>
              Casablanca / Rabat / Fez / Marrakesh (5 Nights / 6 Days)
            </Text>
            <Text style={styles.informationPosterText}>
              Day 1 : Casablanca - Transfer to hotel.{"\n"}
              Day 2 : Casablanca - depature to Rabat - Meknes - Fez.{"\n"}
              Day 3 : Fez - Departure to Beni-Mellal - Marrakesh{"\n"}
              Day 4 : Marrakesh - Visit the city{"\n"}
              Day 5 : Marrakesh - Day free{"\n"}
              Day 6 : Marrakesh - Transfer to Casablanca Airport{"\n"}
            </Text>
            <Text style={styles.informationPosterTitleP}>
              Price Starts At 340€ / Person
            </Text>
          </View>
          <View style={styles.poster}>
            <Image
              style={styles.posterImage}
              source={require("../assets/Fez1.jpg")}
            />
          </View>
          <View style={styles.informationPoster2}>
            <Text style={styles.informationPosterText2}>
              <Text style={{ color: "red" }}>
                Rate includes :{"\n"}
                {"\n"}
              </Text>
              1 night BB basis Diwan Hotel CasaBlanca or similar.{"\n"}1 night
              on HB basis in Mazegh Salagh hotel Fes or similar.{"\n"}3 nights
              on BB basis in El Andalous hotel Marrakesh or similar.{"\n"}
              Air conditioned vehicule from the arrival to the departure.{"\n"}
              Entrance fees to monuments indicated and local guides.{"\n"}
              Portage of luggage and our assistance.{"\n"}
            </Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handlePreRegisterPress}>
            <Text style={styles.buttonText}>Pre-register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3F2FD",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#B0BEC5",
  },
  logo: {
    width: 120,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  titlePosterText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titlePoster: {
    width: "100%",
    height: 100,
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  informationPosterTitleP: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#D5160F",
  },
  posterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  poster: {
    width: "48%",
    height: 160,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  posterImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  posterTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  informationPoster: {
    width: "90%",
    height: 400,
    marginVertical: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "center",
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  informationPosterTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  informationPosterText: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  informationPosterText2: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#FF6F00",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  informationPoster2: {
    width: "90%",
    height: 300,
    marginVertical: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "center",
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
