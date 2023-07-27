import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
  Image,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA8noIvFw8avf5s6FcHQyW-LCmAiPgSJ9U",
  authDomain: "finalproject-7eb02.firebaseapp.com",
  projectId: "finalproject-7eb02",
  storageBucket: "finalproject-7eb02.appspot.com",
  messagingSenderId: "143941032778",
  appId: "1:143941032778:web:45a14e77d8c12d2dbebfb3",
  measurementId: "G-M07FHXLD5H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



export default function LoginScreen({ navigation }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleLoginPress = () => {
    if (email === "" || password === "") {
      Alert.alert("You must fill both components");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigation.navigate("Main", {});
        })
        .catch((error) => {
          Alert.alert("Error", error.message);
        });
    }
  };
  

  return (
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#B0BEC5"
          onChangeText={(text) => setemail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B0BEC5"
          secureTextEntry={true}
          onChangeText={(text) => setpassword(text)}
        />
        <TouchableHighlight
          style={styles.loginButton}
          onPress={handleLoginPress}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register", {})}
        >
          <Text style={styles.registerText}>Register</Text>
        </TouchableHighlight>
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>
            "I am extremely blessed because I travel for my work but I always
            try to incorporate a bit of leisure with business
            Linda Gray"
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E3F2FD",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  logo: {
    width: 250,
    height: 120,
    borderRadius: 10,
  },
  form: {
    alignContent: "center",
    width: "90%",
    height: "60%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    color: "#37474F",
    marginTop: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
    height: 40,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    padding: 15,
    marginTop: 10,
    borderColor: "#000000",
    borderRadius: 5,
  },
  loginText: {
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "#03A9F4",
    borderRadius: 5,
    padding: 20,
    marginTop: 10,
  },
  registerText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  quoteContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 20,
    margin: 20,
  },
  quoteText: {
    fontStyle: 'italic',
    color: '#424242',
    fontSize: 16,
    textAlign: 'center',
  },

});
