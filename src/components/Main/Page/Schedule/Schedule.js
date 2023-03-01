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
import add from '../../../../images/add.png';
import seen from '../../../../images/seen.png';
import back from '../../../../images/back.png';
// import { TextInput } from 'react-native-gesture-handler';

const Schedule = ({ navigation, route }) => {
  const { user } = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View
        style={{
          height: 140,
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
            fontSize: 20,
            fontWeight: 'bold',
            alignItems: 'center',
            alignSelf: 'center',
            color: '#fff',
          }}
        >
          LỊCH HẸN CỦA BẠN
        </Text>
      </View>

      <View style={styles.below}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Noti', { user })}
          style={styles.touchaaction}
        >
          <Image source={noti} style={{ width: 40, height: 40 }} />
          <View>
            <Text style={styles.texttouchaaction}>Thông báo</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('DetailSh', { user })}
          style={styles.touchaaction}
        >
          <Image source={seen} style={{ width: 40, height: 40 }} />
          <View>
            <Text style={styles.texttouchaaction}>Xem lịch hẹn</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddSchedule', { user })}
          style={styles.touchaaction}
        >
          <Image source={add} style={{ width: 40, height: 40 }} />
          <View>
            <Text style={styles.texttouchaaction}>Thêm lịch hẹn</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Schedule;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#E37485',
  },
  below: {
    backgroundColor: '#F5DCE0',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: 450,
    paddingHorizontal: 40,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    padding: 120,
  },
  touchaaction: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: -10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  touchaactionadd: {
    flexDirection: 'row',
    backgroundColor: '#007acc',
    height: 60,
    width: '50%',
    borderRadius: 20,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  texttouchaactionadd: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    paddingHorizontal: 20,
    //width: 170,
    textAlign: 'center',
  },
  texttouchaaction: {
    color: '#345c74',
    fontWeight: 'bold',
    fontSize: 13,
    paddingHorizontal: 20,
    width: 170,
  },
});
