/* eslint-disable quotes */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from 'react-native';
//import noti from '../../../../images/noti.png';
import back from '../../../../images/back.png';

export default function NotiAd({ navigation, route }) {
  //const [lichhen, setLichhen] = useState([]);
  const { nv } = route.params;

  const [lh, setLH] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadLichHen();
    setRefreshing(false);
  }, []);
  function loadLichHen() {
    // eslint-disable-next-line no-undef
    fetch(`http://192.168.195.111:80/WebAPI/public/getlhcuanv/${nv.NV_ID}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setLH(responseJson.listlhnv);
        //console.log(responseJson.listlhnv);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadLichHen();
  }, []);
  function onSubmit(L_ID, L_TRANGTHAI) {
    //console.log(L_ID, L_TRANGTHAI);

    fetch('http://192.168.195.111:80/WebAPI/public/xacnhanlich', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        L_ID,
        L_TRANGTHAI,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        //navigation.navigate('Injection', { user });
      });

    //Alert.alert('Thông báo', 'Đã đặt lại trạng thái');
  }
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
          //height: 120,
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
            fontSize: 24,
            fontWeight: 'bold',
            alignItems: 'center',
            alignSelf: 'center',
            color: '#fff',
          }}
        >
          LỊCH CỦA TÔI
        </Text>

        {lh
          .sort(() => -1)
          .map((item) => (
            <View key={item.L_ID} style={styles.framenoti}>
              <View>
                <Text style={styles.textframe}>
                  Ngày đăng ký:{' '}
                  <Text style={styles.ct}>{item.L_NGAYDANGKY}</Text>
                </Text>
              </View>
              <View>
                <Text style={styles.textframe}>
                  Giờ đăng ký: <Text style={{ color: '#1ed760' }}> {item.L_GIODANGKY}</Text>
                 
                </Text>
              </View>
              <View>
                <Text style={styles.textframe}>
                  Trạng thái: <Text style={{ color: '#e33e31' }}> {item.L_TRANGTHAI}</Text>
                </Text>
              </View>
              <View>
                <Text style={styles.textframe}>
                  Người đặt lịch: <Text style={{ color: '#f3c64a' }}>{item.ND_HOVATEN}</Text>
                </Text>
              </View>
              {item.L_TRANGTHAI === 0 ? (
                <View>
                  <TouchableOpacity onPress={() => onSubmit(item.L_ID, 1)}>
                    <Text style={styles.textadd}>Xác nhận</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => onSubmit(item.L_ID, -1)}
                    style={styles.huyButton}
                  >
                    <Text style={styles.textHuy}>Hủy</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#E37485',
  },
  below: {
    backgroundColor: '#F5DCE0',
    borderTopLeftRadius: 300,
    borderTopRightRadius: 300,
    height: 550,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    alignItems: 'center',
    padding: 120,
  },
  framenoti: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: -10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    height: 150,
  },
  textframe: {
    color: '#111',
    fontWeight: 'bold',
    fontSize: 13,
    paddingHorizontal: 20,
    //width: 170,
  },
  textadd: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#59C991',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },

  textdetail: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#007acc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  textedit: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fdd35e',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  huyButton: {
    backgroundColor: 'red',
    //paddingHorizontal: 10,
    //paddingVertical: 5,
    //borderRadius: 15,
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
    //backgroundColor: '#59C991',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  textHuy: {
    color: 'white',
    padding: 1,
    textAlign: 'center',
  },
  ct: {
    color: '#007acc',
  },
});
