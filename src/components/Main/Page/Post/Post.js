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

export default function Post({ navigation }) {
  const [bantin, setBantin] = useState([]);

  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('http://192.168.195.111:80/WebAPI/public/getbantin')
      .then((response) => response.json())
      .then((responseJson) => {
        setBantin(responseJson.bantin);
        setMasterDataSource(responseJson.bantin);

        //console.log(responseJson.nhanvien);
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
        const itemData = item.BT_CHUDE
          ? item.BT_CHUDE.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log(newData);
      setBantin(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setBantin(masterDataSource);
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
          Tìm bài viết:
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
            placeholder="Nhập tên bài viết"
          />

          <Image source={image22} style={{ height: 20, width: 20 }} />
        </View>
      </View>
      <View style={styles.below}>
        {bantin
          .sort(() => -1)
          .map((item, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => navigation.navigate('DetailPost', { item })}
              style={styles.frame}
            >
              <Image
                source={{
                  uri: `http://192.168.195.111/healthapp_web/image/bantin/${item.BT_ANH}`,
                }}
                style={styles.frameimg}
              />
              <Text style={styles.title}>{item.BT_CHUDE}</Text>
            </TouchableOpacity>
          ))}

        {/* <TouchableOpacity style={styles.touchaproduct}>
        <Image source={medi2} style={{ width: 60, height: 60 }} />
        <View>
          <Text style={styles.textproduct}>Tên bài viết</Text>
          <Text style={styles.textproducttitle}>Tiêu đề</Text>
        </View>
        <Text style={styles.textproductdetail}>Chi tiết</Text>
      </TouchableOpacity> */}
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
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 30,
    height: 240,
    width: 320,
  },
  frameimg: {
    width: 200,
    height: 120,
    resizeMode: 'contain',
    overflow: 'hidden',
    alignSelf: 'center',
  },
  title: {
    color: '#345c74',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
  },
  // touchaproduct: {
  //   flexDirection: 'row',
  //   backgroundColor: '#fff',
  //   padding: 60,
  //   marginHorizontal: -10,
  //   marginVertical: -10,
  //   borderRadius: 10,
  //   alignItems: 'center',
  //   marginTop: 30,
  // },
  // textproduct: {
  //   color: '#345c74',
  //   fontWeight: 'bold',
  //   fontSize: 14,
  //   paddingHorizontal: 10,
  //   width: 140,
  // },
  // textproducttitle: {
  //   color: '#2D71B8',
  //   fontWeight: 'bold',
  //   fontSize: 14,
  //   paddingHorizontal: 10,
  // },
  textproductdetail: {
    color: '#f58084',
    fontWeight: 'bold',
    fontSize: 12,
    paddingLeft: 180,
  },
});
