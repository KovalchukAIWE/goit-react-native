import { FC, useState, useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../navigation/StackNavigator";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { styles } from "../styles/css";

import Input from "../components/Input";
import Button from "../components/Button";

type LoginScreenProps = NativeStackScreenProps<StackParamList, "Login">;

const LoginScreen: FC<LoginScreenProps> = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => setKeyboardStatus(true));
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => setKeyboardStatus(false));

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const handleEmailChange = (value: string) => setEmail(value);
  const handlePasswordChange = (value: string) => setPassword(value);

  const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);

  const onLogin = () => navigation.navigate("Home");
  const onRegister = () => navigation.navigate("Registration", { userEmail: email });

  const showButton = (
    <TouchableOpacity onPress={togglePasswordVisibility}>
      <Text style={[styles.baseText, styles.passwordButtonText]}>
        {isPasswordVisible ? "Показати" : "Приховати"}
      </Text>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={require("../assets/images/bg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.formContainerLogin,
              height: keyboardStatus ? "50%" : "55%",
            }}
          >
            <Text style={styles.title}>Увійти</Text>

            <View style={[styles.innerContainer, styles.inputContainer]}>
              <Input
                value={email}
                autofocus={true}
                placeholder="Адреса електронної пошти"
                onTextChange={handleEmailChange}
              />

              <Input
                value={password}
                placeholder="Пароль"
                rightButton={showButton}
                outerStyles={styles.passwordButton}
                onTextChange={handlePasswordChange}
                secureTextEntry={isPasswordVisible}
              />
            </View>

            <View style={[styles.innerContainer, styles.buttonContainer]}>
              <Button onPress={onLogin}>
                <Text style={[styles.baseText, styles.buttonText]}>Увійти</Text>
              </Button>

              <View style={styles.loginContainer}>
                <Text style={[styles.baseText, styles.passwordButtonText]}>
                  Немає акаунту?&ensp;
                  <TouchableOpacity onPress={onRegister}>
                    <Text style={styles.linkText}>Зареєструватися</Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
