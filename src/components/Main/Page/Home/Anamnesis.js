/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
  Image,
  Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import back from '../../../../images/back.png';

const Anamnesis = ({ navigation, route }) => {
  const { user } = route.params;
  const [khambenh, setKhambenh] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadKB();
    setRefreshing(false);
  }, []);
  function loadKB() {
    fetch(`http://192.168.195.111:80/WebAPI/public/getkhambenh/${user.ND_ID}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setKhambenh(responseJson.khambenh);
        //console.log(responseJson.khambenh);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    // eslint-disable-next-line no-undef
    loadKB();
  }, []);

  return (
    <ScrollView
      style={{ backgroundColor: '#F5DCE0' }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <View style={styles.oncontainer}>
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
                LỊCH SỬ KHÁM BỆNH CỦA {user.ND_HOVATEN}
              </Text>
            </View>
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
                  textAlign: 'center',
                }}
              >
                Danh sách
              </Text>
            </View>
          </View>
        </View>
        {/* table */}
        {/* <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 1, borderColor: 'teal' }}>
          <Row
            data={data.tableHead}
            style={styles.head}
            textStyle={styles.headText}
          />
          <Rows data={data.tableBody} textStyle={styles.text} />
        </Table>
      </View> */}
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headview}>
              <Text style={styles.headtviewtext}>Ngày khám</Text>
              <Text style={styles.headtviewtext}>Chuẩn đoán</Text>
              <Text style={styles.headtviewtext}>Thuốc uống</Text>
              <Text style={styles.headtviewtext}>Chuẩn đoán</Text>
            </View>
          </View>
          <View style={styles.body}>
            {khambenh.map((item) => (
              <View key={item.KB_ID} style={styles.itemView}>
                <View style={styles.dataView}>
                  <Text>{item.KB_NGAYKHAM}</Text>
                </View>
                <View style={styles.dataView}>
                  <Text>{item.KB_CHUANDOAN}</Text>
                </View>
                <View style={styles.dataView}>
                  <Text>{item.KB_THUOCUONG}</Text>
                </View>
                <View style={styles.dataView}>
                  <Text>{item.KB_NHACNHO}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Anamnesis;

const { width } = Dimensions.get('window');
const dataWidth = width / 4;
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
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: 100,
    textAlign: 'center',
    keyboardType: 'decimal',
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
  head: { height: 44, backgroundColor: '#E37485' },
  wrapper: { flexDirection: 'row' },
  headText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: { flex: 1, backgroundColor: '#2ecc71' },
  text: { textAlign: 'center' },
  //
  header: {
    width,
    backgroundColor: '#E37485',
    // height: 40,
  },
  headview: {
    flexDirection: 'row',
    width,
  },
  headtviewtext: {
    width: dataWidth - 1,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  body: {
    width,
  },
  itemView: {
    flexDirection: 'row',
    width,
  },
  dataView: {
    width: dataWidth - 1,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});
