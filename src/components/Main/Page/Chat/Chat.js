import React from 'react';
import { Icon } from 'react-native-elements';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
//import { TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//import image11 from '../../../../images/image11.png';
//import image22 from '../../../../images/image22.png';
//import lich from '../../../../images/lich.png';
//import mess from '../../../../images/mess.png';
import info from '../../../../images/info.png';
//import profile from '../../../../images/profile.png';
//import medi1 from '../../../../images/medi1.png';
import Entypo from '@expo/vector-icons/Entypo';

const Chat = ({ navigation }) => (
  <LinearGradient colors={['#E06C78', '#FA9284']} style={styles.gradient}>
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Chat</Text>
      <Icon name="add" color="#fff" size={30} />
    </View>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginRight: -40, marginTop: 30 }}
    >
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Message')}
          style={styles.toucharicon}
        >
          <Image source={info} style={{ height: 20, width: 20 }} />
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', color: 'white' }}>July</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.toucharicon}>
          <Image source={info} style={{ height: 20, width: 20 }} />
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', color: 'white' }}>Summi</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.toucharicon}>
          <Image source={info} style={{ height: 20, width: 20 }} />
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', color: 'white' }}>Pink Hope</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.toucharicon}>
          <Image source={info} style={{ height: 20, width: 20 }} />
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', color: 'white' }}>Kimi</Text>
      </View>
    </ScrollView>
    <View style={styles.ops}>
      <View style={styles.col}>
        <Text style={styles.day}>Date</Text>
        <Entypo
          borderTopLeftRadius
          name="dots-three-horizontal"
          color="#000119"
          size={30}
        />
      </View>
      <ScrollView style={{ padding: 20 }}>
        <Text>hello nữa đưa list người chat vô</Text>
      </ScrollView>
    </View>
  </LinearGradient>
  // <View style={styles.container}>
  //   <View style={styles.oncontainer}>
  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         alignItems: 'center',
  //         marginTop: 40,
  //         width: '100%',
  //       }}
  //     >
  //       <View style={styles.headerContainer}>
  //         <Text style={styles.header}>Chat</Text>
  //         <Icon name="add" color="#fff" size={30} />
  //       </View>
  //     </View>
  //     <ScrollView
  //       horizontal
  //       showsHorizontalScrollIndicator={false}
  //       style={{ marginRight: -40, marginTop: 30 }}
  //     >
  //       <View>
  //         <TouchableOpacity style={styles.toucharicon}>
  //           <Image source={info} style={{ height: 20, width: 20 }} />
  //         </TouchableOpacity>
  //         <Text style={{ textAlign: 'center', color: 'white' }}>July</Text>
  //       </View>
  //       <View>
  //         <TouchableOpacity style={styles.toucharicon}>
  //           <Image source={info} style={{ height: 20, width: 20 }} />
  //         </TouchableOpacity>
  //         <Text style={{ textAlign: 'center', color: 'white' }}>Summi</Text>
  //       </View>
  //       <View>
  //         <TouchableOpacity style={styles.toucharicon}>
  //           <Image source={info} style={{ height: 20, width: 20 }} />
  //         </TouchableOpacity>
  //         <Text style={{ textAlign: 'center', color: 'white' }}>Pink Hope</Text>
  //       </View>
  //       <View>
  //         <TouchableOpacity style={styles.toucharicon}>
  //           <Image source={info} style={{ height: 20, width: 20 }} />
  //         </TouchableOpacity>
  //         <Text style={{ textAlign: 'center', color: 'white' }}>Kimi</Text>
  //       </View>
  //     </ScrollView>
  //   </View>
  //   {/* hEEEEEEEE */}
  //   <ScrollView>
  //     <View style={styles.ops}>
  //       <View style={styles.col}>
  //         <Text style={styles.day}>Date</Text>
  //         <Entypo
  //           borderTopLeftRadius
  //           name="dots-three-horizontal"
  //           color="#000119"
  //           size={30}
  //         />
  //       </View>
  //     </View>
  //   </ScrollView>
  // </View>
);
export default Chat;

const styles = StyleSheet.create({
  gradient: {
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  list: {
    marginTop: 300,
  },
  // container: {
  //   backgroundColor: '#E37485',
  //   flex: 1,
  // },
  // oncontainer: {
  //   backgroundColor: '#E37485',
  //   height: '25%',
  //   borderBottomLeftRadius: 20,
  //   borderBottomRightRadius: 20,
  //   paddingHorizontal: 20,
  // },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#FFF',
    flex: 1,
    fontSize: 24,
  },

  toucharicon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    marginHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#E37485',
    borderWidth: 1,
    borderColor: 'white',
  },
  ops: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 550,
    backgroundColor: '#F5DCE0',
    marginHorizontal: -20,
  },
  col: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 40,
    alignItems: 'center',
  },
  day: {
    color: '#000119',
    flex: 1,
    fontSize: 20,
  },
});
