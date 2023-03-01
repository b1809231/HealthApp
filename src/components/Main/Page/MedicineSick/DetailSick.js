import React from 'react';
//import { Icon } from 'react-native-elements';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
//import { TextInput, ScrollView, TouchableOpacity } from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient';
//import image11 from '../../../../images/image11.png';
//import image22 from '../../../../images/image22.png';
import back from '../../../../images/back.png';
//import medi2 from '../../../../images/medi2.png';

// import { TextInput } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen');

export default function DetailSick({ navigation, route }) {
  const { item } = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.above}>
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
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
            borderWidth: 1,
            borderColor: 'pink',
            borderRadius: 20,
            backgroundColor: 'pink',
            
           
          }}
        >
          Tên bệnh: {item.B_TENBENH}
        </Text>
      </View>
      <View style={styles.below}>
        <View
          style={{
            width,
            alignItems: 'center',
            //backgroundColor: '#333',
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
              
            }}
          >
            Thông tin chi tiết
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
              color: '#007acc'
            }}
          >
            Chuyên khoa: {item.CK_TEN}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#111',
              marginTop: 10,
            }}
          >
            {item.B_THONGTINTONGQUAT}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    backgroundColor: '#fff',
  },
  above: {
    height: 130,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },

  below: {
    backgroundColor: '#F5DCE0',
    //   borderTopLeftRadius: 20,
    //   borderTopRightRadius: 20,
    flexDirection: 'row',
    width,
    paddingLeft: 5,
    paddingBottom: 20,
  },
  touchaphone: {
    position: 'absolute',
    backgroundColor: '#000',
    height: 50,
    width: 50,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 25,
  },
});
