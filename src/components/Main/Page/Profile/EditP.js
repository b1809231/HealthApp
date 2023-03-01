/* eslint-disable no-undef */
import React, { useState } from 'react';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'react-native-paper';
//import { Icon } from 'react-native-elements';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  //ScrollView,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';

//import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import a from '../../../../images/a.png';
//import seen from '../../../../images/seen.png';
import back from '../../../../images/back.png';

const EditP = ({ navigation, route }) => {
  const { item } = route.params;
  const [bmi, setBMI] = useState(item.CS_BMI);
  const [duonghuyet, setDuongHuyet] = useState(item.CS_DUONGHUYET);
  const [huyetap, setHuyetAp] = useState(item.CS_HUYETAP);
  const [choles, setCholes] = useState(item.CS_CHOLESTEROL);
  const [nhiptim, SetNhipTim] = useState(item.CS_NHIPTIM);
  const [cannang, setCanNang] = useState(item.CS_CANNANG);
  const [chieucao, setChieuCao] = useState(item.CS_CHIEUCAO);
  const { colors } = useTheme();

  function editchiso() {
    if (
      !duonghuyet ||
      !huyetap ||
      !choles ||
      !nhiptim ||
      !cannang ||
      !chieucao
    ) {
      Alert.alert('Thông báo', 'Không để trống');
    } else {
      fetch('http://192.168.195.111:80/WebAPI/public/editchiso', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          CS_ID: item.CS_ID,
          CS_DUONGHUYET: duonghuyet,
          CS_BMI: bmi,
          CS_HUYETAP: huyetap,
          CS_CHOLESTEROL: choles,
          CS_NHIPTIM: nhiptim,
          CS_CANNANG: cannang,
          CS_CHIEUCAO: chieucao,
        }),
        // eslint-disable-next-line no-unused-vars
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.success) {
            Alert.alert('Thông báo', 'Đã thay đôỉ');
            navigation.goBack();
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
          marginTop: 100,
          paddingHorizontal: 20,
          marginHorizontal: 30,
        }}
      >
        <View style={styles.action}>
          <FontAwesome name="pencil" color={colors.text} size={20} />
          <Text style={styles.textcs}>BMI</Text>
          <TextInput
            //placeholder="BMI"
            placeholderTextColor="#666666"
            editable={false}
            autoCorrect={false}
            style={styles.textInput}
            textContentType="text"
            value={(cannang / chieucao / chieucao).toFixed(2)}
            //secureTextEntry
            onChangeText={() => setBMI(cannang / chieucao / chieucao)} ////
          />
          <Text>{''}</Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="pencil" color={colors.text} size={20} />
          <Text style={styles.textcs}>Đường huyết</Text>
          <TextInput
            //placeholder="Đường huyết"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            //secureTextEntry
            value={duonghuyet}
            onChangeText={(text) => setDuongHuyet(text)}
          />
          <Text>mg/dl</Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="pencil" color={colors.text} size={20} />
          <Text style={styles.textcs}>Huyết áp</Text>
          <TextInput
            //placeholder="Huyết áp"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            value={huyetap}
            //secureTextEntry
            onChangeText={(text) => setHuyetAp(text)}
          />
          <Text>mmHg</Text>
        </View>
        <View style={styles.action}>
          <FontAwesome name="pencil" color={colors.text} size={20} />
          <Text style={styles.textcs}>Cholesterol</Text>
          <TextInput
            //placeholder="Cholesterol"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            value={choles}
            //secureTextEntry
            onChangeText={(text) => setCholes(text)}
          />
          <Text>mg/dl</Text>
        </View>
        <View style={styles.action}>
          <FontAwesome name="pencil" color={colors.text} size={20} />
          <Text style={styles.textcs}>Nhịp tim</Text>
          <TextInput
            //placeholder="Cholesterol"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            value={nhiptim}
            //secureTextEntry
            onChangeText={(text) => SetNhipTim(text)}
          />
          <Text>bpm</Text>
        </View>
        <View style={styles.action}>
          <FontAwesome name="pencil" color={colors.text} size={20} />
          <Text style={styles.textcs}>Cân nặng</Text>
          <TextInput
            //placeholder="Cân nặng"
            //placeholderTextColor="#666666"
            // editable={false}
            autoCorrect={false}
            style={styles.textInput}
            //textContentType="text"
            value={cannang.toString()}
            //secureTextEntry
            onChangeText={(text) => setCanNang(text)}
          />
          <Text>Kg</Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="pencil" color={colors.text} size={20} />
          <Text style={styles.textcs}>Chiều cao</Text>
          <TextInput
            //placeholder="Cholesterol"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            value={chieucao.toString()}
            //secureTextEntry
            onChangeText={(text) => setChieuCao(text)}
          />
          <Text>m</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.commandButton}
        onPress={() => editchiso()}
      >
        <Text style={styles.panelButton}>Sửa</Text>
      </TouchableOpacity>
    </View>
  );
};
export default EditP;

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
    color: '#007acc',
  },
  textcs: {
    padding: 5,
    width: 100,
  },
});
