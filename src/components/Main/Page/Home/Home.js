import React, { useState, useEffect } from 'react';
import { Icon } from 'react-native-elements';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//import image11 from '../../../../images/image11.png';
import image22 from '../../../../images/image22.png';
import lich from '../../../../images/lich.png';
import mess from '../../../../images/mess.png';
import info from '../../../../images/info.png';
import injection from '../../../../images/injection.png';
//import medi1 from '../../../../images/medi1.png';

export default function Home({ navigation }) {
  const [user, setUser] = useState(null);

  async function User() {
    await AsyncStorage.getItem('user').then((userR) => {
      if (userR !== null) {
        const userCurrent = JSON.parse(userR);
        setUser(userCurrent);
      }
    });
  }
  useEffect(() => {
    User();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.oncontainer}>
        <TouchableOpacity onPress={() => navigation.navigate('DetailAccount',{ user }) }>
          <Icon
            name="account-circle"
            size={33}
            color="#fff"
            style={{ marginLeft: 280, marginTop: 30 }}
          />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 25,
            width: '100%',
          }}
        >
          <View style={{ width: '50%' }}>
            {
              user ===null ? (
                <Text
                style={{
                  fontSize: 20,
                  color: '#FFF',
                  fontWeight: 'bold',
                }}
              >
                
                 xin chào!
              </Text>
              ):(
                <Text
                style={{
                  fontSize: 20,
                  color: '#FFF',
                  fontWeight: 'bold',
                }}
              >
                
                Xin chào! {user.ND_HOVATEN}
              </Text>
              )
            }
           
          </View>
        </View>
      </View>

      <LinearGradient
        colors={['rgba(255,119,129,0.2)', 'transparent']}
        style={{
          left: 0,
          right: 0,
          height: 90,
          marginTop: -45,
        }}
      >
        <TouchableOpacity style={styles.touchasearch}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#717171',
              fontSize: 18,
              width: 260,
            }}
          >
            Tìm kiếm
          </Text>
          <Image source={image22} style={{ height: 20, width: 20 }} />
        </TouchableOpacity>
      </LinearGradient>

      <Text
        style={{
          color: '#111',
          fontStyle: 'italic',
          marginTop: -10,
          marginLeft: 20,
          fontSize: 18,
          borderRadius: 15,
        }}
      >
        Xem thông tin:
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginRight: -40, marginTop: 10 }}
      >
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Schedule', {user})}
            style={styles.toucharicon}
          >
            <Image source={lich} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
          <Text style={styles.textToucha}>Lịch hẹn</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.toucharicon}>
            <Image source={mess} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
          <Text style={styles.textToucha}>Tin nhắn</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Anamnesis', {user})} 
          style={styles.toucharicon}>
            <Image source={info} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
          <Text style={styles.textToucha}>Lịch sử bệnh</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Injection', {user})}
            style={styles.toucharicon}
          >
            <Image source={injection} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
          <Text style={styles.textToucha}>Sổ tiêm</Text>
        </View>        
      </ScrollView>
      {/* hEEEEEEEE */}

      <View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingVertical: 20,
            width: '100%',
            alignItems: 'center',
            marginBottom: -10,
          }}
        >
          <View style={{ width: '50%' }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 17,
                color: '#111',
              }}
            >
              Tiện ích
            </Text>
          </View>
          <View style={{ width: '50%', alignItems: 'flex-end' }}>
            <View
              style={{
                backgroundColor: '#007acc',
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15,
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: '#FFF',
                }}
              >
                Xem
              </Text>
            </View>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 350 }}
        >
          
          <TouchableOpacity
            onPress={() => navigation.navigate('MapEx')}
            style={styles.toucharmenu}
          >
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 10,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  paddingHorizontal: 0,
                  fontWeight: 'bold',
                  color: '#111',
                  paddingTop: 0,
                }}
              >
                Xem bản đồ
              </Text>
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Sick')}
            style={styles.toucharmenu}
          >
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 10,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  paddingHorizontal: 0,
                  fontWeight: 'bold',
                  color: '#111',
                  paddingTop: 0,
                }}
              >
                Thông tin bệnh
              </Text>              
             
              
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toucharmenu}
          onPress={() => navigation.navigate('ListAdnd')}>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 10,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  paddingHorizontal: 0,
                  fontWeight: 'bold',
                  color: '#111',
                  paddingTop: 0,
                }}
              >
                Nhân viên
              </Text>
              
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5DCE0',
    flex: 1,
  },
  oncontainer: {
    backgroundColor: '#E37485',
    height: '25%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
  },
  touchasearch: {
    backgroundColor: '#FFF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
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
  textToucha: {
    textAlign: 'center',
    color: '#E37485',
  },
  toucharmenu: {
    height: 120,
    elevation: 2,
    backgroundColor: '#E37485',
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 15,
    marginBottom: 10,
    width: 160,
  },
});

// import React, { useState } from 'react';
// import { Icon } from 'react-native-elements';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
// } from 'react-native';
// //import { TextInput, ScrollView, TouchableOpacity } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import image11 from '../../../../images/image11.png';
// import image22 from '../../../../images/image22.png';
// import lich from '../../../../images/lich.png';
// import mess from '../../../../images/mess.png';
// import info from '../../../../images/info.png';
// import profile from '../../../../images/profile.png';
// //import medi1 from '../../../../images/medi1.png';

// const array = [
//   {
//     id: 1,
//     imageName: lich,
//   },
//   {
//     id: 2,
//     imageName: mess,
//   },
//   {
//     id: 3,
//     imageName: info,
//   },
//   {
//     id: 4,
//     imageName: profile,
//   },
// ];

// const Home = ({ navigation }) => {
//   const [dataArray] = useState(array);
//   const gotoScreen = (id) => {
//     if (id === 1) navigation.navigate('Login');
//     if (id === 2) navigation.navigate('Register');
//     if (id === 3) navigation.navigate('HomeAd');
//   };
//   return (
//     <View style={styles.container}>
//       <View style={styles.oncontainer}>
//         <Image
//           source={image11}
//           style={{
//             height: 10,
//             width: 20,
//             marginTop: 50,
//           }}
//         />
//         <TouchableOpacity onPress={() => navigation.navigate('EditAccount')}>
//           <Icon
//             name="account-circle"
//             size={33}
//             color="#fff"
//             style={{ marginLeft: 280 }}
//           />
//         </TouchableOpacity>

//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             marginTop: 25,
//             width: '100%',
//           }}
//         >
//           <View style={{ width: '50%' }}>
//             <Text
//               style={{
//                 fontSize: 28,
//                 color: '#FFF',
//                 fontWeight: 'bold',
//               }}
//             >
//               WELCOME
//             </Text>
//           </View>
//         </View>
//       </View>

//       <LinearGradient
//         colors={['rgba(255,119,129,0.2)', 'transparent']}
//         style={{
//           left: 0,
//           right: 0,
//           height: 90,
//           marginTop: -45,
//         }}
//       >
//         <TouchableOpacity style={styles.touchasearch}>
//           <Text
//             style={{
//               fontWeight: 'bold',
//               color: '#717171',
//               fontSize: 18,
//               width: 260,
//             }}
//           >
//             Tìm kiếm
//           </Text>
//           <Image source={image22} style={{ height: 20, width: 20 }} />
//         </TouchableOpacity>
//       </LinearGradient>

//       <Text
//         style={{
//           color: '#111',
//           fontStyle: 'italic',
//           marginTop: 30,
//           marginLeft: 20,
//           fontSize: 18,
//           borderRadius: 15,
//         }}
//       >
//         Xem thông tin:
//       </Text>
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={{ marginRight: -40, marginTop: 30 }}
//       >
//         {dataArray.map((item) => (
//           <TouchableOpacity
//             key={item.id}
//             onPress={() => gotoScreen(item.id)}
//             style={styles.toucharicon}
//           >
//             <Image source={item.imageName} style={{ height: 24, width: 24 }} />
//           </TouchableOpacity>
//         ))}

//         {/* <TouchableOpacity
//           onPress={() => navigation.navigate('Schedule')}
//           style={{
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: 66,
//             width: 66,
//             marginHorizontal: 10,
//             borderRadius: 50,
//             backgroundColor: '#E37485',
//           }}
//         >
//           <Image source={lich} style={{ height: 24, width: 24 }} />
//         </TouchableOpacity> */}

//         {/* <TouchableOpacity
//           style={{
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: 66,
//             width: 66,
//             borderRadius: 50,
//             backgroundColor: '#E37485',
//             marginHorizontal: 10,
//           }}
//         >
//           <Image source={mess} style={{ height: 24, width: 24 }} />
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={{
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: 66,
//             width: 66,
//             borderRadius: 50,
//             backgroundColor: '#E37485',
//             marginHorizontal: 10,
//           }}
//         >
//           <Image source={info} style={{ height: 24, width: 24 }} />
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={{
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: 66,
//             width: 66,
//             borderRadius: 50,
//             backgroundColor: '#E37485',
//             marginHorizontal: 10,
//           }}
//         >
//           <Image source={profile} style={{ height: 24, width: 24 }} />
//         </TouchableOpacity> */}
//       </ScrollView>
//       {/* hEEEEEEEE */}
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={{ height: 350 }}
//       >
//         <LinearGradient
//           colors={['rgba(230,170,160,0.3)', 'transparent']}
//           style={{
//             position: 'absolute',
//             left: 0,
//             right: 0,
//             height: 100,
//             marginTop: 220,
//             top: 0,
//           }}
//         />
//         <TouchableOpacity style={styles.toucharmenu}>
//           <View
//             style={{
//               flexDirection: 'row',
//               paddingTop: 10,
//               paddingHorizontal: 10,
//             }}
//           >
//             <Text
//               style={{
//                 fontWeight: 'bold',
//               }}
//             >
//               SAMANTHA
//             </Text>
//             <Text
//               style={{
//                 fontWeight: 'bold',
//                 color: '#F996AB',
//                 paddingLeft: 35,
//               }}
//             >
//               $400
//             </Text>
//           </View>
//           <Text
//             style={{
//               paddingHorizontal: 10,
//               fontWeight: 'bold',
//               color: '#111',
//               paddingTop: 3,
//             }}
//           >
//             RUSSIA
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.toucharmenu}
//         >
//           <View
//             style={{
//               flexDirection: 'row',
//               paddingTop: 10,
//               paddingHorizontal: 10,
//             }}
//           >
//             <Text
//               style={{
//                 fontWeight: 'bold',
//               }}
//             >
//               SAMANTHA
//             </Text>
//             <Text
//               style={{
//                 fontWeight: 'bold',
//                 color: '#F996AB',
//                 paddingLeft: 35,
//               }}
//             >
//               $400
//             </Text>
//           </View>
//           <Text
//             style={{
//               paddingHorizontal: 10,
//               fontWeight: 'bold',
//               color: '#111',
//               paddingTop: 3,
//             }}
//           >
//             RUSSIA
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.toucharmenu}
//         >
//           <View
//             style={{
//               flexDirection: 'row',
//               paddingTop: 10,
//               paddingHorizontal: 10,
//             }}
//           >
//             <Text
//               style={{
//                 fontWeight: 'bold',
//               }}
//             >
//               SAMANTHA
//             </Text>
//             <Text
//               style={{
//                 fontWeight: 'bold',
//                 color: '#F996AB',
//                 paddingLeft: 35,
//               }}
//             >
//               $400
//             </Text>
//           </View>
//           <Text
//             style={{
//               paddingHorizontal: 10,
//               fontWeight: 'bold',
//               color: '#111',
//               paddingTop: 3,
//             }}
//           >
//             RUSSIA
//           </Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };
// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#F5DCE0',
//     flex: 1,
//   },
//   oncontainer: {
//     backgroundColor: '#E37485',
//     height: '25%',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     paddingHorizontal: 20,
//   },
//   touchasearch: {
//     backgroundColor: '#FFF',
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     marginHorizontal: 20,
//     borderRadius: 15,
//     marginTop: 25,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   toucharicon: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 66,
//     width: 66,
//     marginHorizontal: 10,
//     borderRadius: 50,
//     backgroundColor: '#E37485',
//   },
//   toucharmenu: {
//     height: 220,
//     elevation: 2,
//     backgroundColor: '#FFF',
//     marginLeft: 20,
//     marginTop: 20,
//     borderRadius: 15,
//     marginBottom: 10,
//     width: 160,
//   },
// });
