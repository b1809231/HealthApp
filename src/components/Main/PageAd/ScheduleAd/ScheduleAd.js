import React from 'react';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import noti from '../../../../images/noti.png';
//import add from '../../../../images/add.png';
import seen from '../../../../images/seen.png';
import back from '../../../../images/back.png';
// import { TextInput } from 'react-native-gesture-handler';

const ScheduleAd = ({ navigation, route }) => {
  const { nv } = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View
        style={{
          height: 120,
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
          Quản lý lịch hẹn
        </Text>
      </View>
      <View style={styles.below}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NotiAd', { nv })}
          style={styles.touchaaction}
        >
          <Image source={noti} style={{ width: 40, height: 40 }} />
          <View>
            <Text style={styles.texttouchaaction}>Thông báo</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ListShAd')}
          style={styles.touchaaction}
        >
          <Image source={seen} style={{ width: 40, height: 40 }} />
          <View>
            <Text style={styles.texttouchaaction}>Xem lịch hẹn</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default ScheduleAd;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#E37485',
  },
  below: {
    backgroundColor: '#F5DCE0',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    height: 550,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    alignItems: 'center',
    padding: 120,
  },
  touchaaction: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: -10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  texttouchaaction: {
    color: '#345c74',
    fontWeight: 'bold',
    fontSize: 13,
    paddingHorizontal: 20,
    width: 170,
  },
});
