import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

export default function TopNv() {
  const [top3, Settop3] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('http://192.168.195.111:80/WebAPI/public/topnv')
      .then((response) => response.json())
      .then((responseJson) => {
        Settop3(responseJson.top3);
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
          padding: 20,
          paddingTop: 40,
          borderWidth: 1,
          borderColor: '#E37485',
        }}
      >
        <Text style={{ textAlign: 'center', fontSize: 25, color: '#E37485' }}>
          Ba nhân viên có lịch hẹn nhiều nhất
        </Text>
      </View>
      {/* <Text>{JSON.stringify(nguoidung)}</Text> */}
      <ScrollView style={styles.container}>
        <View>
          {top3.map((item, key) => (
            <TouchableOpacity key={key} style={styles.itemView}>
              <View style={styles.itemLeftView}>
                <Image
                  source={{
                    uri: `http://192.168.195.111/healthapp_web/image/nhanvien/${item.NV_HINHANH}`,
                  }}
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <View style={styles.itemRightView}>
                <Text>Họ và tên: {item.NV_HOTEN}</Text>
                <Text>Email: {item.NV_MAIL}</Text>
                <Text>Số điện thoại: {item.NV_SDT}</Text>
                <Text>Tổng số lịch hẹn: {item.tong}</Text>
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
    paddingTop: 40,
    flex: 1,
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
