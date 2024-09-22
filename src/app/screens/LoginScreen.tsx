import { View, StyleSheet } from "react-native";
import React, { useState } from "react";

import { MyButton, MyTextInput, MySafeArea, MyText } from "../components/index";
import colors from "../constants/colors";

type FormData = {
  username: string;
  password: string;
};

const LoginScreen = () => {
  const [username, setUsername] = useState<string>("emilys");
  const [password, setPassword] = useState<string>("emilyspass");

  return (
    <MySafeArea style={{ padding: 20 }}>
      <View style={{ marginVertical: 10, gap: 10 }}>
        <MyText variant="header">Welcome Back</MyText>
        <MyText variant="body">Login your account to continue</MyText>
      </View>
      <View style={{ marginVertical: 10, gap: 10, width: "100%" }}>
        <View style={{ width: "100%" }}>
          <MyTextInput
            label="Username"
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            style={{ borderRadius: 15 }}
          />
        </View>

        <View style={{ width: "100%" }}>
          <MyTextInput
            label="Password"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            keyboardType={"visible-password"}
            style={{ borderRadius: 15 }}
          />
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <MyButton
          title="Login"
          onPress={() => console.log("")}
          style={{ backgroundColor: colors.red, borderRadius: 20 }}
        />
      </View>
    </MySafeArea>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
