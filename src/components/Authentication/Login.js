/* eslint-disable no-undef */
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
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import dangnhap from '../../api/dangnhap';
import logo from '../../images/logo.png';

export default function Login({ navigation }) {
  const [sdt, setSdt] = useState('0949348750');
  const [mk, setMk] = useState('myhien');

  function dangnhap() {
    if (sdt === '' || mk === '') {
      Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin');
      return;
    }

    fetch('http://192.168.195.111:80/WebAPI/public/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ND_SODIENTHOAI: sdt,
        ND_MATKHAU: mk,
      }),
    })
      .then((response) => response.json())
      .then(async (res) => {
        if (res.success) {
          await AsyncStorage.setItem('user', JSON.stringify(res.nguoidung));
          Alert.alert(res.message);
          navigation.navigate('Page');
        } else {
          Alert.alert(res.message);
        }
      });
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput

          value={sdt}
          style={styles.TextInput}
          placeholder="Nhập số điện thoại"
          placeholderTextColor="#003f5c"
          keyboardType="decimal-pad"
          onChangeText={(text) => setSdt(text)}

        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.TextInput}
          value={mk}
          placeholder="Mật khẩu"
          placeholderTextColor="#003f5c"
          textContentType="password"
          onChangeText={(text) => setMk(text)}
        />
      </View>

      <TouchableOpacity onPress={() => dangnhap()} style={styles.loginBtn}>
        <Text style={styles.loginText}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.dk}>Đăng ký tài khoản?</Text>
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
