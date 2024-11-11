import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { globalColors } from '../../styles/Global';
import ShowPasswordButton from '../components/BtnShowPassword';
import Input from '../components/Input';
import { loginDB } from '../utils/auth';

type Props = {
  navigation: any;
  route: any;
};

const LoginScreen: React.FC<Props> = ({ navigation, route }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const visibilityPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleSubmit = () => {
    navigation.navigate('Main');
  };

  const onSignUp = () => {
    loginDB(email, password);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require('../../assets/images/background.jpg')}
        style={styles.background}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Увійти</Text>
          <View style={styles.innerContainer}>
            <Input
              placeholder='Адреса електронної пошти'
              value={email}
              onChangeText={setEmail}
            />
            <Input
              placeholder='Пароль'
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isShowPassword}
              rightButton={
                <ShowPasswordButton
                  togglePasswordVisibility={visibilityPassword}
                  isShowPassword={isShowPassword}
                />
              }
              outerStyle={styles.password}
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={handleSubmit}>
            <Text style={styles.btnText}>Увійти</Text>
          </TouchableOpacity>
          <View style={styles.registerText}>
            <TouchableOpacity>
              <Text>Немає акаунту?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSignUp}>
              <Text style={styles.registerLink}>Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    flex: 1,
    position: 'absolute',
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: globalColors.white,
    alignItems: 'center',
    height: 490,
    width: '100%',
    bottom: 0,
  },
  title: {
    marginTop: 32,
    marginBottom: 32,
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    color: globalColors.black,
  },
  btn: {
    width: '100%',
    height: 51,
    backgroundColor: globalColors.primary,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 43,
  },
  btnText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    color: globalColors.white,
  },
  innerContainer: {
    width: '100%',
    gap: 16,
  },
  password: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  registerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  registerLink: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    color: globalColors.secondary,
  },
});

export default LoginScreen;
