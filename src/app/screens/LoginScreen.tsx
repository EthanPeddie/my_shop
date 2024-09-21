import { View, StyleSheet, Alert } from "react-native";
import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

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
          />
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <MyButton title="Login" onPress={() => console.log("")} />
      </View>
    </MySafeArea>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
