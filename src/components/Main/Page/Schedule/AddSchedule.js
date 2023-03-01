/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
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
import { Dropdown } from 'react-native-element-dropdown';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import a from '../../../../images/a.png';
//import seen from '../../../../images/seen.png';
import back from '../../../../images/back.png';

const optionArray = [
  {
    id: '1',
    value: '7:30 - 8:30',
  },
  {
    id: '2',
    value: '8:30 - 9:30',
  },
  {
    id: '3',
    value: '9:30 - 10:30',
  },

  {
    id: '4',
    value: '10:30 - 10:30',
  },
  {
    id: '5',
    value: '13:30 - 14:30',
  },
  {
    id: '6',
    value: '14:30 - 15:30',
  },
  {
    id: '7',
    value: '15:30 - 16:30',
  },
];

const AddShAd = ({ navigation, route }) => {
  const { user } = route.params;

  const [selectedDate, setSelectedDate] = useState(null);
  const [nhanvien, setNhanVien] = useState();
  const [giohen, setGioHen] = useState(null);
  const [ghichu, setGhiChu] = useState('');

  const [dataNV, setDataNV] = useState([]);

  const { colors } = useTheme();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [isFocus, setIsFocus] = useState(null);

  const onPressChoose = (item) => {
    setIsFocus(item.id);
    setGioHen(item.value);
  };
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

  // const onSubmit = () => {
  //   Alert.alert(moment(selectedDate).format('YYYY-MM-DD').toString(), giohen);
  //   Alert.alert(`${nhanvien}` + ghichu);
  // };
  function submit() {
    if (!giohen || !nhanvien || !selectedDate) {
      Alert.alert('Thông báo', 'Không để trống dữ liệu');
    } else {
      console.log(
        nhanvien,
        user.ND_ID,
        moment(selectedDate).format('YYYY-MM-DD').toString(),
        giohen,
        ghichu
      );

      fetch('http://192.168.195.111:80/WebAPI/public/lichtuvan', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          NV_ID: nhanvien,
          ND_ID: user.ND_ID,
          L_NGAYDANGKY: moment(selectedDate).format('YYYY-MM-DD').toString(),
          L_GIODANGKY: giohen,
          L_GHICHU: ghichu,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
        });
      Alert.alert('Thông báo', 'Đã yêu cầu đặt lịch');
    }
  }
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('http://192.168.195.111:80/WebAPI/public/getnhanvien')
      .then((response) => response.json())
      .then((responseJson) => {
        const count = Object.keys(responseJson.nhanvien).length;
        const nvArray = [];
        for (let i = 0; i < count; i++) {
          nvArray.push({
            value: responseJson.nhanvien[i].NV_ID,
            label: responseJson.nhanvien[i].NV_HOTEN,
          });
        }
        setDataNV(nvArray);
        //console.log(responseJson.nhanvien);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          YÊU CẦU LỊCH HẸN
        </Text>
        <View style={styles.row}>
          <FontAwesome name="calendar-o" color={colors.text} size={20} />
          <Text>{`${
            selectedDate
              ? moment(selectedDate).format('DD-MM-YYYY')
              : 'Chọn ngày hẹn'
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
              minimumDate={new Date()}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View>
        <View style={styles.row}>
          <FontAwesome name="clock-o" color={colors.text} size={20} />
          <Text>Giờ: </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Chọn giờ hẹn"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={styles.textaction}
            />
          </View>
        </View>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ height: 30 }}
          >
            {optionArray.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.itemGiohen,
                  isFocus === item.id && { backgroundColor: 'pink' },
                ]}
                onPress={() => onPressChoose(item)}
              >
                <Text>{item.value}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.row}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
        </View>
        <Dropdown
          style={{}}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dataNV}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Chọn nhân viên...'}
          searchPlaceholder="Tìm kiếm..."
          value={nhanvien}
          //onFocus={() => setIsFocus(true)}
          //onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setNhanVien(item.value);
            //setIsFocus(false);
          }}
        />

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
export default AddShAd;

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
