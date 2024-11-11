import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';

import { globalColors } from '../../styles/Global';
import AddPhotoIcon from '../../icons/AddPhotoIcon';

import Input from '../components/Input';
import ShowPasswordButton from '../components/BtnShowPassword';
import { registerDB } from '../utils/auth';

type Props = {
  navigation: any;
  route: any;
};

const RegistrationScreen: React.FC<Props> = ({ navigation, route }) => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleSubmit = () => {
    console.log('Login:', login);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const visibilityPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const onSignIn = () => {
    registerDB({ email, password });
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={styles.background}>
      <View style={styles.formContainer}>
        <View style={styles.addPhoto}>
          <TouchableOpacity style={styles.addPhotoIcon}>
            <AddPhotoIcon />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Реєстрація</Text>
        <View style={[styles.innerContainer, styles.inputBlock]}>
          <Input
            placeholder='Логін'
            value={login}
            onChangeText={setLogin}
          />
          <Input
            placeholder='Емейл'
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
        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}>
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </TouchableOpacity>
          <View style={styles.line}>
            <Text>Вже є аккаунт?</Text>
            <TouchableOpacity onPress={onSignIn}>
              <Text style={styles.textLogIn}>Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegistrationScreen;

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
    height: 550,
    width: '100%',
    bottom: 0,
  },
  addPhoto: {
    marginTop: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: globalColors.light,
    marginBottom: 32,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  addPhotoIcon: {
    width: 25,
    height: 25,
    marginRight: -14,
    marginBottom: 14,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    color: globalColors.black,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    marginBottom: 32,
  },

  innerContainer: {
    gap: 16,
    width: '100%',
  },

  inputBlock: {
    marginBottom: 43,
  },

  textLogIn: {
    fontFamily: 'Roboto-Regular',
    color: globalColors.secondary,
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
  password: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: globalColors.primary,
    borderRadius: 100,
    width: '100%',
    height: 51,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: globalColors.white,
    fontSize: 16,
    lineHeight: 19,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
