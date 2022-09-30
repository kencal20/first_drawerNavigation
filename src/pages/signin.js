import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.Header}>Signin</Text>
      <View style={styles.filling}>
        <View style={styles.each_filling}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
          />
        </View>
        <View style={styles.each_filling}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
          />
        </View>
        <View style={styles.each_filling}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
          />
        </View>
        <View style={styles.each_filling}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            secureTextEntry={true}
          />
          <View style={styles.each_filling}>
            <Text style={styles.label}>Confirm password</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
              secureTextEntry={true}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttons}>
        <View>
          <TouchableOpacity
            style={styles.login_button}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.login_buttontxt}>Login</Text>
          </TouchableOpacity>
        </View>
        {/* <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signin");
            }}
            style={styles.signin_button}
          >
            <Text style={styles.login_buttontxt}>Signin</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Header: {
    color: "dodgerblue",
    fontSize: 30,
    marginHorizontal: 20,
    marginVertical: 10,
    marginTop: 20,
  },
  filling: {
    marginHorizontal: 20,
    marginVertical: 10,
  },

  label: {
    fontSize: 15,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    width: 200,
  },
  buttons: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  login_button: {
    backgroundColor: "dodgerblue",
    height: 40,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  login_buttontxt: {
    fontSize: 19,
    color: "white",
  },
  signin_button: {
    backgroundColor: "dodgerblue",
    height: 40,
    width: 90,
    alignItems: "center",
    justifyContent: "center",

    marginTop: 20,
  },
});
