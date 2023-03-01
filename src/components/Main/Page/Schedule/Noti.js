import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import noti from '../../../../images/noti.png';
import back from '../../../../images/back.png';

const Noti = ({ navigation, route }) => {
  const { user } = route.params;
  const [tbnd, setTbnd] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(`http://192.168.195.111:80/WebAPI/public/gettbcuand/${user.ND_ID}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setTbnd(responseJson.tbnd);
        console.log(responseJson.tbnd);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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
          Thông báo
        </Text>
        {tbnd
          .sort(() => -1)
          .map((item) => (
            <View key={item.TB_ID}>
              <View
                //onPress={() => navigation.navigate('ChatAd')}
                style={styles.framenoti}
              >
                <Image source={noti} style={{ width: 40, height: 40 }} />

                <View>
                  <Text style={styles.textframe}>
                    Thông báo: {item.TB_TIEUDE}
                  </Text>
                </View>
              </View>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};
export default Noti;

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
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: -10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  textframe: {
    color: '#345c74',
    fontWeight: 'bold',
    fontSize: 13,
    paddingHorizontal: 20,
    //width: 0,
  },
});
