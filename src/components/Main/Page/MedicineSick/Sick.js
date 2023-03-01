/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Icon } from 'react-native-elements';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
//import { TextInput, ScrollView, TouchableOpacity } from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient';
//import image11 from '../../../../images/image11.png';
import image22 from '../../../../images/image22.png';
// import medi1 from '../../../../images/medi1.png';
// import medi2 from '../../../../images/medi2.png';
// import { TextInput } from 'react-native-gesture-handler';

export default function Sick({ navigation }) {
  const [benh, setBenh] = useState([]);
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('http://192.168.195.111:80/WebAPI/public/getbenh')
      .then((response) => response.json())
      .then((responseJson) => {
        setBenh(responseJson.benh);
        setMasterDataSource(responseJson.benh);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter((item) => {
        // Applying filter for the inserted text in search bar
        const itemData = item.B_THONGTINTONGQUAT
          ? item.B_THONGTINTONGQUAT.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log(newData);
      setBenh(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setBenh(masterDataSource);
      setSearch(text);
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.above}>
        <View style={styles.onabove}>
          <View
            style={{
              width: '50%',
              alignItems: 'flex-end',
              left: 160,
            }}
          >
            <TouchableOpacity>
              <Icon
                name="account-circle"
                size={30}
                color="#fff"
                style={{
                  marginRight: 4,
                  marginTop: 7,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            fontWeight: 'Bold',
            fontSize: 20,
            color: '#FFF',
            paddingVertical: 10,
          }}
        >
          Tìm bệnh:
        </Text>

        <View
          style={{
            flexDirection: 'row',
            borderColor: '#fff',
            borderRadius: 20,
            borderWidth: 0.5,
            paddingVertical: 5,
            alignItems: 'center',
          }}
        >
          <TextInput
            style={{
              paddingHorizontal: 20,
              fontWeight: 'Medium',
              fontSize: 14,
              width: '90%',
              color: '#fff',
            }}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Nhập tên bệnh cần tìm"
          />

          <Image source={image22} style={{ height: 20, width: 20 }} />
        </View>
      </View>
      <View style={styles.below}>
        {benh.map((item, key) => (
          <TouchableOpacity
            key={key}
            onPress={() => navigation.navigate('DetailSick', { item })}
            style={styles.frame}
          >
            <Text style={styles.title}>{item.B_TENBENH}</Text>
            <Text
              style={{ alignSelf: 'center', fontSize: 12, color: '#E53F32' }}
            >
              Xem chi tiết
            </Text>
          </TouchableOpacity>
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
  above: {
    height: 160,
    width: '100%',
    paddingHorizontal: 35,
  },
  onabove: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 20,
    alignItems: 'center',
  },
  below: {
    backgroundColor: '#F5DCE0',
    
    //height: 800,
    padding: 30,
   
    borderRadius: 20,
  },
  frame: {
    //flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 50,
    marginHorizontal: -10,
    marginVertical: -10,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 20,
    height: 120,
    width: 320,
  },
  title: {
    color: '#345c74',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
  },
});
