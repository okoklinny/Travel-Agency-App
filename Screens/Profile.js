import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Profile = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Image  source={require("../assets/logo.png")} />
        <Image style = {styles.avatarIcon}source ={require("../assets/AvatarIcon.png")} />
      </View>
      <View style={styles.informationPoster}>
        <Text style = {styles.posterTitle}> Your Preregistred Leisures :</Text>
      </View>
    </View>
  );
};
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
        height: 120,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#B0BEC5",
      },
      avatarIcon:{
        marginTop : 10,
        width : 50,
        height : 50,
      },
      posterTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color:"#D5160F",
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
      
})
export default Profile;
