import { NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  WELCOME: undefined;
  LOGIN: undefined;
  SIGNUP: undefined;
  HOME: undefined;
  CART: undefined;
  FAVOURITE: undefined;
};

export type NavigationProps = NavigationProp<RootStackParamList>;
