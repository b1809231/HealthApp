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

export default function DetailPost({ navigation, route }) {
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
          }}
        >
          {item.BT_CHUDE}
        </Text>

        <Image
          source={{
            uri: `http://192.168.195.111/healthapp_web/image/bantin/${item.BT_ANH}`,
          }}
          style={{
            height: 120,
            width: 300,
            resizeMode: 'contain',
            alignSelf: 'center',
            borderRadius: 20,
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: 'pink',
          }}
        />
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
              //fontWeight: 'bold',
              fontSize: 12,
              textAlign: 'right',
            }}
          >
            Ngày đăng: {item.created_at}
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
            }}
          >
            Chi tiết:
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: '#111',
              marginTop: 10,
            }}
          >
            {item.BT_NOIDUNG}
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
    height: height * 0.3,
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
