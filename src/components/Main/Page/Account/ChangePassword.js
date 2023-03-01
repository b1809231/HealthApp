/* eslint-disable no-undef */
import React, { useState } from 'react';
//import { View, SafeAreaView, StyleSheet, Platform } from 'react-native';
//import { Icon } from 'react-native-elements';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
///import * as ImagePicker from 'expo-image-picker';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
//import Animated from 'react-native-reanimated';
//import { BottomSheet } from 'react-native-elements';
//import BottomSheet from 'react-native-sheet';
import back from '../../../../images/back.png';

export default function ChangePassword({ navigation, route }) {
  const { user } = route.params;
  const { colors } = useTheme();
  //const [sdt, setSdt] = useState('');
  const [mk, setMk] = useState('');
  const [mkn, setMkNew] = useState('');
  const [mkc, setMkCon] = useState('');

  function changepass() {
    if (mkn !== mkc || !mk || !mkc || !mkn) {
      Alert.alert('Thông báo', 'Vui lòng nhập lại');
    } else {
      fetch('http://192.168.195.111:80/WebAPI/public/changepassnd', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ND_SODIENTHOAI: user.ND_SODIENTHOAI,
          ND_MATKHAU: mk,
          MK_NEW: mkn,
        }),
        // eslint-disable-next-line no-unused-vars
      }).then((response) => response.json())
      .then((res) => {
        if (res.success) {
          Alert.alert('Thông báo', 'Thay đổi mật khẩu thành công');
          navigation.navigate('Login');
        } else {
          Alert.alert(res.message);
        }
      });
    }
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingTop: 40,
          alignItems: 'center',
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: '100%',
          }}
        >
          <Image
            source={back}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 200,
          paddingHorizontal: 20,
          marginHorizontal: 30,
        }}
      >
        <View style={styles.action}>
          <FontAwesome name="pencil" color={colors.text} size={20} />
          <TextInput
            placeholder="Nhập mật khẩu"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            textContentType="password"
            value={mk}
            secureTextEntry
            onChangeText={(text) => setMk(text)}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="pencil" color={colors.text} size={20} />
          <TextInput
            placeholder="Nhập mật khẩu mới"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            secureTextEntry
            value={mkn}
            onChangeText={(text) => setMkNew(text)}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="pencil" color={colors.text} size={20} />
          <TextInput
            placeholder="Nhập lại mật khẩu mới"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            value={mkc}
            secureTextEntry
            onChangeText={(text) => setMkCon(text)}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => changepass()}
      >
        <Text style={styles.panelButton}>Đổi mật khẩu</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5DCE0',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F5DCE0',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#ffffff',
    paddingTop: 20,
  },
  avatar: {
    position: 'relative',
    width: 100,
    height: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCamera: {
    position: 'absolute',
    color: '#A9A9A9',
    bottom: 0,
    right: 5,
  },
  header: {
    backgroundColor: '#ffffff',
    shadowColor: '#333333',
    textShadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000000',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#ff6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ff0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    //marginTop: platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
