import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  //Image,
  Dimensions,
} from 'react-native';

export default function ListShAd() {
  const [lichtuvan, setLichtuvan] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('http://192.168.195.111:80/WebAPI/public/getlichtuvan')
      .then((response) => response.json())
      .then((responseJson) => {
        setLichtuvan(responseJson.lichtuvan);
        //console.log(responseJson.nhanvien);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: 40,
          paddingBottom: 30,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#f88070',
          }}
        >
          DANH SÁCH LỊCH HẸN
        </Text>
      </View>
      {/* <Text>{JSON.stringify(nguoidung)}</Text> */}
      <ScrollView style={styles.container}>
        <View>
          {lichtuvan.map((item) => (
            <TouchableOpacity style={styles.itemView}>
              <View style={styles.itemRightView}>
                <Text style={{ fontSize: 16 }}>
                  ID lịch: <Text style={{ color: '#007acc' }}>{item.L_ID}</Text>
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Giờ đăng ký:{' '}
                  <Text style={{ color: '#1ed760' }}>{item.L_GIODANGKY}</Text>
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Ngày đăng ký:{' '}
                  <Text style={{ color: '#e97120' }}>{item.L_NGAYDANGKY}</Text>
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Người dùng:{' '}
                  <Text style={{ color: '#007acc' }}>{item.ND_HOVATEN}</Text>
                </Text>
                <Text style={{ fontSize: 16 }}>
                  Nhân viên:{' '}
                  <Text style={{ color: '#e09f00' }}>{item.NV_HOTEN}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
const { width } = Dimensions.get('window');
const itemWidth = width - 40;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  wrapper: {
    flex: 1,
  },
  itemView: {
    flex: 1,
    width: itemWidth,
    flexDirection: 'row',
    borderColor: 'pink',
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 20,
    padding: 10,
  },
  itemLeftView: {
    width: itemWidth * 0.15,
  },
  itemRightView: {
    width: itemWidth * 0.85,
  },
});
