/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  RefreshControl
} from 'react-native';
import back from '../../../../images/back.png';

export default function DetailSh({ navigation, route }) {
  const { user } = route.params;
  const [lh, setLH] = useState([]);

  const [refreshing, setRefreshing] = React.useState(false);  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadLichHen();
    setRefreshing(false);
  }, []);

  function loadLichHen() {
    fetch(`http://192.168.195.111:80/WebAPI/public/getlhcuand/${user.ND_ID}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setLH(responseJson.listlhnd);
        //console.log(responseJson.listlhnd);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    // eslint-disable-next-line no-undef
    loadLichHen();
  }, []);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <View
        style={{
          height: 150,
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
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            color: '#fff',
            paddingTop: 20,
          }}
        >
          LỊCH TƯ VẤN CỦA {user.ND_HOVATEN}
        </Text>
      </View>
      {lh
        .sort(() => -1)
        .map((item) => (
          <ScrollView key={item.L_ID} style={styles.frame}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.textframe}>
                Mã lịch hẹn:{' '}
                <Text style={{ color: '#007acc' }}>{item.L_ID}</Text>
              </Text>
              <Text style={styles.textframe}>
                Ngày hẹn:{' '}
                <Text style={{ color: '#299946' }}>{item.L_NGAYDANGKY}</Text>
              </Text>
              <Text style={styles.textframe}>
                Giờ hẹn:{' '}
                <Text style={{ color: '#007acc' }}>{item.L_GIODANGKY}</Text>
              </Text>
              <Text style={styles.textframe}>Ghi chú: {item.L_GHICHU}</Text>
              <Text style={styles.textframett}>
                Trạng thái: {item.L_TRANGTHAI}
              </Text>
              <Text style={styles.textframe}>
                Người tư vấn: {item.NV_HOTEN}
              </Text>
            </View>
          </ScrollView>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#E37485',
  },
  action: {
    paddingTop: 60,
    backgroundColor: '#F5DCE0',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    height: 620,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  frame: {
    backgroundColor: 'white',
    height: 140,
    width: '100%',
    borderRadius: 20,
    paddingTop: 10,
    padding: 20,
    marginTop: 10,
  },
  textframe: { fontSize: 16, fontWeight: 'bold' },
  textframett: { fontSize: 16, fontWeight: 'bold', color: '#e03c2f' },
});
