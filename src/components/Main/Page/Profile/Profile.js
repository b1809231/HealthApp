import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-elements';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
//import { TextInput, ScrollView, TouchableOpacity } from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient';
//import image11 from '../../../../images/image11.png';
//import image22 from '../../../../images/image22.png';
// import lich from '../../../../images/lich.png';
// import mess from '../../../../images/mess.png';
// import info from '../../../../images/info.png';
// import profile from '../../../../images/profile.png';
//import medi1 from '../../../../images/medi1.png';

const Profile = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [bmi, setBMI] = useState(null);
  const [duonghuyet, setDuongHuyet] = useState('');
  const [huyetap, setHuyetAp] = useState('');
  const [choles, setCholes] = useState('');
  const [nhiptim, SetNhipTim] = useState('');
  const [cannang, setCanNang] = useState(null);
  const [chieucao, setChieuCao] = useState(null);

  async function User() {
    await AsyncStorage.getItem('user').then((userR) => {
      if (userR !== null) {
        const userCurrent = JSON.parse(userR);
        setUser(userCurrent);
      }
    });
  }
  useEffect(() => {
    User();
  }, []);

  function submit() {
    if (
      !duonghuyet ||
      !huyetap ||
      !choles ||
      !nhiptim ||
      !cannang ||
      !chieucao
    ) {
      Alert.alert('Thông báo', 'Không để trống');
    }

    fetch('http://192.168.195.111:80/WebAPI/public/chiso', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ND_ID: user.ND_ID,
        CS_DUONGHUYET: duonghuyet,
        CS_BMI: (cannang/chieucao/chieucao),
        CS_HUYETAP: huyetap,
        CS_CHOLESTEROL: choles,
        CS_NHIPTIM: nhiptim,
        CS_CHIEUCAO: chieucao,
        CS_CANNANG: cannang,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);         
        
      });
      Alert.alert('Thông báo', 'Đã thêm ');     
      navigation.navigate('Report', { user });

    
  }
  return (
    <View style={styles.container}>
      <View style={styles.oncontainer}>
        <TouchableOpacity>
          <Icon
            name="account-circle"
            size={33}
            color="#fff"
            style={{ marginLeft: 280, marginTop: 30 }}
          />
        </TouchableOpacity>

        <View>
          <Text
            style={{
              fontSize: 22,
              color: '#FFF',
              fontWeight: 'bold',
              alignItems: 'center',
              alignSelf: 'center',
              flexDirection: 'row',
            }}
          >
            CHỈ SỐ CÁ NHÂN
          </Text>
        </View>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingVertical: 20,
            width: '100%',
            alignItems: 'center',
          }}
        >
          <View style={{ width: '50%' }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 17,
                color: '#111',
              }}
            >
              Cập nhật chỉ số
            </Text>
          </View>
          <View style={{ width: '50%', alignItems: 'flex-end' }}>
            <View
              style={{
                backgroundColor: '#007acc',
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate('Report',{ user }) }
              >
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: '#FFF',
                }}>Lịch sử</Text>
                
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* form */}
        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.form}>
            <View style={styles.row}>
              <Text style={styles.textName}>BMI</Text>
              <TextInput
                style={styles.textinput}
                placeholder="BMI"
                placeholderTextColor="#666666"
                autoCorrect={false}
                editable={false}
                value={(cannang / chieucao / chieucao).toFixed(2)}
                onChangeText={(text) => setBMI(text)}
                //style={styles.textaction}
              />
              <Text>{''}</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text>Đường huyết</Text>
              <TextInput
                style={styles.textinput}
                placeholder="đường huyết"
                placeholderTextColor="#666666"
                autoCorrect={false}
                value={duonghuyet}
                onChangeText={(text) => setDuongHuyet(text)}
                
              />
              <Text>mg/dl</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textName}>Huyết áp</Text>
              <TextInput
                style={styles.textinput}
                placeholder="Huyết áp"
                placeholderTextColor="#666666"
                autoCorrect={false}
                value={huyetap}
                onChangeText={(text) => setHuyetAp(text)}
                //style={styles.textaction}
              />
              <Text>mmHg</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textName}>Cholesterol</Text>
              <TextInput
                style={styles.textinput}
                placeholder="Cholesterol tổng hợp"
                placeholderTextColor="#666666"
                autoCorrect={false}
                value={choles}
                onChangeText={(text) => setCholes(text)}
                //style={styles.textaction}
              />
              <Text>mg/dl</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textName}>Nhịp tim</Text>
              <TextInput
                style={styles.textinput}
                placeholder="Nhịp tim"
                placeholderTextColor="#666666"
                autoCorrect={false}
                value={nhiptim}
                onChangeText={(text) => SetNhipTim(text)}
                //style={styles.textaction}
              />
              <Text>bpm</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textName}>Chiều cao</Text>
              <TextInput
                style={styles.textinput}
                placeholder="Chiều cao"
                placeholderTextColor="#666666"
                autoCorrect={false}
                value={chieucao}
                onChangeText={(text) => setChieuCao(text)}
                //style={styles.textaction}
              />
              <Text>m</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.textName}>Cân nặng</Text>
              <TextInput
                style={styles.textinput}
                placeholder="Cân nặng"
                placeholderTextColor="#666666"
                autoCorrect={false}
                value={cannang}
                onChangeText={(text) => setCanNang(text)}
                //style={styles.textaction}
              />
              <Text>kg</Text>
            </View>
            <TouchableOpacity
              style={styles.commandButton}
              onPress={() => {
                submit();
              }}
            >
              <Text style={styles.panelButton}>Thêm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* hEEEEEEEE */}
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingVertical: 20,
          width: '100%',
          alignItems: 'center',
        }}
      >
        <View style={{ width: '50%' }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
              color: '#111',
            }}
          >
            Thông tin về các chỉ số cơ bản
          </Text>
        </View>

        <View style={{ width: '50%', alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Read')}>
            <View
              style={{
                backgroundColor: '#007acc',
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15,
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: '#FFF',
                }}
              >
                Xem chi tiết
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5DCE0',
    flex: 1,
  },
  oncontainer: {
    backgroundColor: '#E37485',
    height: '20%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
  },

  toucharicon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 66,
    width: 66,
    marginHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#E37485',
  },
  form: {
    borderWidth: 1,
    borderColor: '#E37485',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textinput: {
    //borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: 100,
    // stextAlign: 'center',
    // keyboardType: 'decimal',
  },
  textName: {
    width: 80,
    
  },
  panelButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#007acc',
    alignItems: 'center',
    marginVertical: 7,
    color: '#fff',
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  commandButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F5DCE0',
    alignItems: 'center',
    marginTop: 10,
  },
});
