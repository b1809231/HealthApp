/* eslint-disable no-undef */
import React, { useState } from 'react';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
// eslint-disable-next-line import/no-named-as-default
import DateTimePickerModal from 'react-native-modal-datetime-picker';
//import { Dropdown } from 'react-native-element-dropdown';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import a from '../../../../images/a.png';
//import seen from '../../../../images/seen.png';
import back from '../../../../images/back.png';

const AddIn = ({ navigation, route }) => {
  const { user } = route.params;

  const [selectedDate, setSelectedDate] = useState(null);
  const [tenthuoc, setTenThuoc] = useState('');
  const [tenmui, setTenMui] = useState('');
  const [ghichu, setGhiChu] = useState('');

  const { colors } = useTheme();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // Datetime Picker
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };
  
  function submit() {
    if (tenthuoc === '' || tenmui === '') {
      Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin');
      return;
    }
    console.log(
      user.ND_ID,
      moment(selectedDate).format('YYYY-MM-DD').toString(),
      tenthuoc,
      tenmui,
      ghichu
    );

    fetch('http://192.168.195.111:80/WebAPI/public/sotiem', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ND_ID: user.ND_ID,
        ST_NGAYTIEM: moment(selectedDate).format('YYYY-MM-DD').toString(),
        ST_TENTHUOC: tenthuoc,
        ST_TENMUI: tenmui,
        ST_GHICHU: ghichu,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        navigation.navigate('Injection', { user });
      });

    Alert.alert('Thông báo', 'Đã thêm vào sổ tiêm');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View
        style={{
          height: 160,
          width: '100%',
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            paddingTop: 40,
            alignItems: 'center',
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
        <Image source={a} style={styles.imagepage} />
      </View>
      <View style={styles.below}>
        <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>
          Thêm vào sổ tiêm
        </Text>
        <View style={styles.row}>
          <FontAwesome name="calendar-o" color={colors.text} size={20} />
          <Text>{`${
            selectedDate
              ? moment(selectedDate).format('DD-MM-YYYY')
              : 'Ngày tiêm'
          }`}</Text>
          <View style={styles.choosedateView}>
            <Icon
              type="antdesign"
              onPress={showDatePicker}
              name="calendar"
              color="pink"
            />
            {/* <Button title="Show" onPress={showDatePicker} /> */}
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              //maximumDate={new Date()}
              //minimumDate={new Date()}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View>
        <View style={styles.row}>
          <FontAwesome name="sticky-note-o" color={colors.text} size={20} />
          <Text>Tên thuốc: </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Tên thuốc"
              placeholderTextColor="#666666"
              autoCorrect={false}
              value={tenthuoc}
              onChangeText={(text) => setTenThuoc(text)}
              style={styles.textaction}
            />
          </View>
        </View>
        <View style={styles.row}>
          <FontAwesome name="sticky-note-o" color={colors.text} size={20} />
          <Text>Tên mũi: </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Tên mũi"
              placeholderTextColor="#666666"
              autoCorrect={false}
              value={tenmui}
              onChangeText={(text) => setTenMui(text)}
              style={styles.textaction}
            />
          </View>
        </View>
        <View style={styles.row}>
          <FontAwesome name="sticky-note-o" color={colors.text} size={20} />
          <Text>Ghi chú: </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Ghi chú"
              placeholderTextColor="#666666"
              autoCorrect={false}
              value={ghichu}
              onChangeText={(text) => setGhiChu(text)}
              style={styles.textaction}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.commandButton} onPress={() => submit()}>
          <Text style={styles.panelButton}>Thêm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default AddIn;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#E37485',
  },
  below: {
    backgroundColor: '#F5DCE0',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    height: 600,
    paddingHorizontal: 40,
    // borderBottomLeftRadius: 100,
    // borderBottomRightRadius: 100,
    //alignItems: 'center',
    padding: 40,
  },
  touchaaction: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: -10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  texttouchaaction: {
    color: '#345c74',
    fontWeight: 'bold',
    fontSize: 13,
    paddingHorizontal: 20,
    width: 170,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  textinput: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: 100,
    textAlign: 'center',
    keyboardType: 'decimal',
  },
  textName: {
    width: 90,
  },
  imagepage: {
    width: 100,
    height: 100,
    borderRadius: 120,
    borderColor: '#fff',
    alignSelf: 'center',

    borderWidth: 2,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textaction: {
    //flex: 1,
    //marginTop: platform.OS === 'android' ? 0 : -12,
    width: '60%',
    paddingLeft: -10,
    color: '#05375a',
  },
  commandButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F5DCE0',
    alignItems: 'center',
    marginTop: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#E37485',
    alignItems: 'center',
    marginVertical: 7,
    color: '#fff',
    fontSize: 16,
  },
  optionView: {
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    //backgroundColor: color.white,
    borderRadius: 20,
    elevation: 8,
  },
  itemGiohen: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginRight: 10,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
