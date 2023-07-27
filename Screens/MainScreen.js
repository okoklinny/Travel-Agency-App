import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity 
        style = {styles.profileContainer}
        onPress={() => navigation.navigate("Profile", {})}
        >
          <Image
            style = {styles.avatarIcon}
            source={require("../assets/AvatarIcon.png")}
          />
          <Text style = {{color : 'white'}}> profile </Text>
          
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.placeHolder}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Leisure 1", {})}
          >
            <Image
              source={require("../assets/Marakesh3.jpg")}
              style={styles.image}
            />

            <Text style={styles.buttonTxt}>Leisure 1 : The White/Red Trip</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Leisure 1", {})}><Text style={styles.learnMore}>Learn More</Text></TouchableOpacity>
          <View style={styles.description}>
            <Text style={styles.descriptionC}>
              Discover the beauty of the red city of Marrakech and our white metropole Casablanca.
            </Text>
          </View>
        </View>

        <View style={styles.placeHolder}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Leisure 2", {})}
          >
            <Image
              source={require("../assets/Chefch12.jpg")}
              style={styles.image}
            />

            <Text style={styles.buttonTxt}>Leisure 2 : Saphir of Morocco</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Leisure 2", {})} ><Text style={styles.learnMore}>Learn More</Text></TouchableOpacity>
          
          <View style={styles.description}>
            <Text style={styles.descriptionC}>
              Discover the breathtaking beauty of the Rif Mountains with our
              unforgettable trekking adventures in Tangier, Tetouan, and
              Akchour.
            </Text>
          </View>
        </View>

        <View style={styles.placeHolder}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Leisure 3", {})}
          >
            <Image
              source={require("../assets/Tangier2.jpg")}
              style={styles.image}
            />

            <Text style={styles.buttonTxt}>
              Leisure 3 : Business and Chill{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => navigation.navigate("Leisure 3", {})}><Text style={styles.learnMore}>Learn More</Text></TouchableOpacity>
          <View style={styles.description}>
            <Text style={styles.descriptionC}>
              Explore the dynamic charm of business and chilling cities with our
              unique urban expeditions.
            </Text>
          </View>
        </View>
        <View style={styles.placeHolder}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Leisure 4", {})}
          >
            <Image
              source={require("../assets/CasaBlanca.jpg")}
              style={styles.image}
            />

            <Text style={styles.buttonTxt}>Leisure 4 : Imperial Cities</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Leisure 4", {})}><Text style={styles.learnMore}>Learn More</Text></TouchableOpacity>
          <View style={styles.description}>
            <Text style={styles.descriptionC}>
              Experience the enchanting allure of the Moroccan Imperial cities
              with our unforgettable travel adventures.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer :{
    backgroundColor : "#03A9F4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.01,
    shadowRadius: 0.05,
    
   
  },
  avatarIcon:{
    width : 50,
    height : 50,
    
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
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "space-between",
    backgroundColor: "#E3F2FD",
    marginBottom: 10,
  },
  placeHolder: {
    width: "95%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    marginBottom: 10,
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#03A9F4",
    borderRadius: 5,
    padding: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonTxt: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  learnMore: {
    textAlign: "center",
    color: "#03A9F4",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    borderRadius: 5,
  },
  descriptionC: {
    marginTop: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    padding: 10,
    lineHeight: 24,
  },
  description: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    borderRadius: 10,
    textAlign: "justify",
  },
});
