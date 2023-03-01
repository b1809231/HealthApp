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
  RefreshControl,
} from 'react-native';
import back from '../../../../images/back.png';


export default function DetailSh({ navigation, route }) {
  const { user } = route.params;

  const [cs, setCS] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadChiSo();
    setRefreshing(false);
  }, []);

  function loadChiSo() {
    fetch(`http://192.168.195.111:80/WebAPI/public/getchiso/${user.ND_ID}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setCS(responseJson.chiso);
        //console.log(responseJson.chiso);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    loadChiSo();
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
          CHỈ SỐ CỦA {user.ND_HOVATEN}
        </Text>
      </View>

      {cs
        .sort(() => -1)
        .map((item, key) => (
          <ScrollView key={key} style={styles.frame}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.textframe}>
                BMI: <Text style={styles.textcs}>{item.CS_BMI}</Text>{' '}
              </Text>
              <Text style={styles.textframe}>
                Đường huyết: <Text style={styles.textcs}>{item.CS_DUONGHUYET}</Text> mg/dl{' '}
              </Text>
              <Text style={styles.textframe}>
                Huyết áp: <Text style={styles.textcs}>{item.CS_HUYETAP}</Text> mmHg
              </Text>
              <Text style={styles.textframe}>
                Cholesterol: <Text style={styles.textcs}>{item.CS_CHOLESTEROL}</Text> mg/dl
              </Text>
              <Text style={styles.textframe}>
                Nhịp tim: <Text style={styles.textcs}>{item.CS_NHIPTIM}</Text> bpm
              </Text>
              <Text style={styles.textframe}>
                Cân nặng: <Text style={styles.textcs}>{item.CS_CANNANG}</Text> kg
              </Text>
              <Text style={styles.textframe}>
                Chiều cao: <Text style={styles.textcs}>{item.CS_CHIEUCAO} </Text> m
              </Text>

              <Text style={styles.textframe}>Ngày nhập: {item.created_at}</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditP', { item, user })}
                style={{
                  backgroundColor: '#73bd67',
                  borderRadius: 10,
                  height: 20,
                  width: 40,
                  alignItems: 'center',
                  marginTop: 10,
                }}
              >
                <Text>Sửa</Text>
              </TouchableOpacity>
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
    height: 250,
    width: '100%',
    borderRadius: 20,
    paddingTop: 10,
    padding: 20,
    marginTop: 10,
  },
  textframe: { fontSize: 16, fontWeight: 'bold', },
  textframett: { fontSize: 16, fontWeight: 'bold', color: '#e03c2f' },
  textcs: { fontSize: 14, color: '#2d71b8' },
});
