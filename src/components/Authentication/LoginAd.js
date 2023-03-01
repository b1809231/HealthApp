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
//import { blue100 } from 'react-native-paper/lib/typescript/styles/colors';
import list from '../../images/staff.png';

export default function LoginAd({ navigation }) {
  const [sdt, setSdt] = useState('0386123240');
  const [mk, setMk] = useState('vanphi');

  function dangnhap() {
    if (sdt === '' || mk === '') {
      Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin');
      return;
    }

    fetch('http://192.168.195.111:80/WebAPI/public/loginad', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        NV_SDT: sdt,
        NV_MATKHAU: mk,
      }),
    })
      .then((response) => response.json())
      .then(async (res) => {
        if (res.success) {
          await AsyncStorage.setItem('nv', JSON.stringify(res.nhanvien));
          Alert.alert(res.message);
          navigation.navigate('PageAd');
        } else {
          Alert.alert(res.message);
        }
      });
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={list} />

      <StatusBar style="auto" />
      <Text style={{ textAlign: 'left' }}>Nhập số điện thoại:</Text>
      <View style={styles.inputView}>
        <TextInput
        value={sdt}
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          keyboardType="number-pad"
          onChangeText={(text) => setSdt(text)}
        />
      </View>
      <Text style={{ textAlign: 'left' }}>Nhập mật khẩu:</Text>
      <View style={styles.inputView}>
        <TextInput
        value={mk}
          secureTextEntry
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          textContentType="password"
          onChangeText={(text) => setMk(text)}
        />
      </View>

      <TouchableOpacity onPress={() => dangnhap()} style={styles.loginBtn}>
        <Text style={styles.loginText}>ĐĂNG NHẬP</Text>
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
    marginBottom: 20,
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
    height: 30,
    marginBottom: 30,
    marginTop: 40,
    color: '#2d71b8',
  },

  loginBtn: {
    width: '80%',
    borderRadius: 30,
    height: 50,
    //width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#2d71b8',
  },
  loginText: {
    color: 'white',
  },
});
