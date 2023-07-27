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

export default function Leisure4({navigation}) {
    const handlePreRegisterPress = () => {
        Alert.alert("You Have Successfully Preregistred to Leisure 2 ");
        navigation.navigate("Profile", {});
      };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <ScrollView >
        <View style={styles.content}>
          <View style={styles.titlePoster}>
            <Text style={styles.titlePosterText}>Saphir of Morocco</Text>
          </View>
          <View style={styles.posterContainer}>
            <View style={[styles.poster, { marginRight: 10 }]}>
              <Image
                style={styles.posterImage}
                source={require("../assets/chefch123.jpg")}
              />
            </View>
            <View style={styles.poster}>
              <Image
                style={styles.posterImage}
                source={require("../assets/tangier123.jpg")}
              />
            </View>
          </View>
          <View style={styles.informationPoster}>
            <Text style={styles.informationPosterTitle}>
              Tetouan / Tangier / Chefchaouen / Akchour (4 Nights / 5 Days)
            </Text>
            <Text style = {styles.informationPosterText}>
            {"\n"}Day 1 : Casablanca transfer to Tangier 350KM.{"\n"}
                Day 2 : Visit Tangier Guide tour.{"\n"}
                Day 3 : Tangier - Tetouan - Tangier (On Request){"\n"}
                Day 4 : Tangier - Chefchaouen - Akchour - Tangier{"\n"}
                Day 5 : Tangier - Casablanca departure{"\n"}{"\n"}{"\n"}
                
                
                
               
            </Text>
            <Text style={styles.informationPosterTitleP}>
            Price Starts At 390€ / Person 
            </Text>
          </View>
          <View style={styles.poster}>
            <Image
              style={styles.posterImage}
              source={require("../assets/Tetouan123.jpg")}
            />
          </View>
          <View style={styles.informationPoster2}>
           
            <Text style = {styles.informationPosterText2}>
                <Text style = {{color : 'red'}}>Price includes :{"\n"}{"\n"}</Text>
                4 nights on HB basis in hotel Kenzi Solazur Tangier similar.{"\n"}
                1/2 Seminar about Tangier with lunch and cafe break.{"\n"}
                City Tangier tour.{"\n"}
                Transport for the whole stay.{"\n"}
                Professional guide for the whole stay.{"\n"}
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
  informationPosterTitleP : {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color :'#D5160F'
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
    borderRadius : 10,
    
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
  informationPosterText :{
    fontSize : 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  informationPosterText2 :{
    fontSize : 16,
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
