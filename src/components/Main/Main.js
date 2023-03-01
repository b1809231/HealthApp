import React from 'react';
//import { Icon } from 'react-native-elements';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
//import { TextInput, ScrollView, TouchableOpacity } from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient';
import logo from '../../images/logo.png';
//import anh from '../../../../images/anh.png';
//import staff from '../../images/staff.png';
//import list from '../../images/list.png';

// import { TextInput } from 'react-native-gesture-handler';

const Main = ({ navigation }) => (
  <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
    <View style={styles.above}>
      <View style={{ paddingTop: 60 }}>
        <Image source={logo} style={styles.imagepage} />
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
        HEALTHAPP
      </Text>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.touchaaction}
        >
          <Text style={styles.texttouchaaction}>Người dùng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginAd')}
          style={styles.touchaaction}
        >
          {/* <Image source={staff} style={{ width: 40, height: 40 }} /> */}

          <Text style={styles.texttouchaaction}>Nhân viên</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
);
export default Main;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FDB5B6',
  },
  above: {
    paddingHorizontal: 50,
  },

  imagepage: {
    width: 100,
    height: 100,
    borderRadius: 90,
    borderColor: '#fff',
    alignSelf: 'center',
    //borderColor: '#fff',
    borderWidth: 2,
    marginTop: 60,
  },

  touchaaction: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: -10,
    borderRadius: 60,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 80,
  },
  texttouchaaction: {
    color: '#345c74',
    fontWeight: 'bold',
    fontSize: 13,
    paddingHorizontal: 80,
    //width: 170,
    textAlign: 'center',

    borderRadius: 80,
    borderColor: '#fff',
    alignSelf: 'center',
    //borderColor: '#fff',
   
  },
});
