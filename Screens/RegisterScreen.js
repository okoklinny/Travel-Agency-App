import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';

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

const RegisterScreen = (props) => {
  const [email, setemail] = useState("");
  const [age, setAge] = useState("");
  const [cin, setCin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleRegisterPress = ({ navigation }) => {
    if (email && age && cin && password && repeatPassword) {
      if (password === repeatPassword) {
        createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            Alert.alert("Registration successful!");
            navigation.navigate("Main", {});
          })
          .catch((error) => {
            Alert.alert("Error", error.message);
          });
      } else {
        Alert.alert("Error", "Passwords do not match!");
      }
    } else {
      Alert.alert("Error", "Please fill in all fields!");
    }
  };

  return (
    <ScrollView
      
      contentContainerStyle={styles.screen}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
      </View>
      <Text style={styles.title}>Register</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setemail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={(text) => setAge(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="CIN"
          value={cin}
          onChangeText={(text) => setCin(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Repeat Password"
          value={repeatPassword}
          onChangeText={(text) => setRepeatPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegisterPress}
        >
          <Text style={styles.registerText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E3F2FD",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  form: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#90A4AE",
    marginBottom: 20,
    fontSize: 16,
    color: "#37474F",
    height: 40,
  },
  registerButton: {
    backgroundColor: "#03A9F4",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  registerText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  logo: {
    width: 250,
    height: 125,
    borderRadius: 10,
  },
});

export default RegisterScreen;
