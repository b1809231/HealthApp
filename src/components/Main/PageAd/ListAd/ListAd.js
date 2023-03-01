import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

export default function ListAd() {
  const [nguoidung, setNguoiDung] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('http://192.168.195.111:80/WebAPI/public/getnguoidung')
      .then((response) => response.json())
      .then((responseJson) => {
        setNguoiDung(responseJson.nguoidung);
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
          paddingTop: 60,
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
          DANH SÁCH NGƯỜI DÙNG
        </Text>
      </View>
      {/* <Text>{JSON.stringify(nguoidung)}</Text> */}
      <ScrollView style={styles.container}>
        <View>
          {nguoidung.map((item, key) => (
            <TouchableOpacity key={key} style={styles.itemView}>
              <View style={styles.itemLeftView}>
                <Image
                  source={{
                    uri: `http://192.168.195.111/healthapp_web/image/nguoidung/${item.ND_ANH}`,
                  }}
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <View style={styles.itemRightView}>
                <Text>Họ và tên: {item.ND_HOVATEN}</Text>
                <Text>Email: {item.ND_EMAIL}</Text>
                <Text>Số điện thoại: {item.ND_SODIENTHOAI}</Text>
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
