/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import logo from '../../images/logo.png';

export default function Register({ navigation }) {
  const [sdt, setSdt] = useState('');
  const [mk, setMk] = useState('');
  const [m, setM] = useState('');
  const [ht, setHT] = useState('');

  function dangky() {
    if (m === '' || ht === '' || sdt === '' || mk === '') {
      Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin');
      return;
    }

    fetch('http://192.168.195.111:80/WebAPI/public/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ND_SODIENTHOAI: sdt,
        ND_MATKHAU: mk,
        ND_HOVATEN: ht,
        ND_EMAIL: m,
      }),
    }).then((res) => {
      alert('Đăng ký thành công');
      navigation.navigate('Login');
    });
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nhập họ và tên"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setHT(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nhập email: example@gmail.com"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setM(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nhập số điện thoại"
          placeholderTextColor="#003f5c"
          keyboardType="number-pad"
          textContentType="telephoneNumber"
          onChangeText={(number) => setSdt(number)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.TextInput}
          placeholder="Mật khẩu"
          placeholderTextColor="#003f5c"
          textContentType="password"
          onChangeText={(text) => setMk(text)}
        />
      </View>

      <TouchableOpacity onPress={() => dangky()} style={styles.loginBtn}>
        <Text style={styles.loginText}>ĐĂNG KÝ</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.dk}>Đã có tài khoản? Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5DCE0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
    height: 100,
    width: 100,
  },

  inputView: {
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'White',
    paddingBottom: 5,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 20,
    marginBottom: 20,
    marginTop: 20,
    color: '#2d71b8',
  },
  dk: {
    height: 20,
    marginBottom: 10,
    marginTop: 10,
    color: '#2d71b8',
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#ff6b81',
  },
  loginText: {
    color: 'white',
  },
});
