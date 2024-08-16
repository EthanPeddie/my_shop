import { NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  WELCOME: undefined;
  LOGIN: undefined;
  SIGNUP: undefined;
};

export type NavigationProps = NavigationProp<RootStackParamList>;
