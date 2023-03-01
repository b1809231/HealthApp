import React from 'react';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import a from '../../../../images/a.png';
//import seen from '../../../../images/seen.png';
import back from '../../../../images/back.png';
import { useTheme } from 'react-native-paper';
// import { TextInput } from 'react-native-gesture-handler';
import { DatePicker } from '@react-native-community/datetimepicker';

const EditShAd = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View
        style={{
          height: 160,
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
      
      </View>
      <View style={styles.below}>
        <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>
          CHỈNH SỬA LỊCH HẸN
        </Text>
        <View style={styles.row}>
          <FontAwesome name="clock-o" color={colors.text} size={20} />
          <Text>Người hẹn: </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Gán cứng theo csdl"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={styles.textaction}
            />
          </View>
        </View>
        <View style={styles.row}>
          <FontAwesome name="clock-o" color={colors.text} size={20} />
          <Text>Giờ: </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Giờ hẹn"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={styles.textaction}
            />
          </View>
        </View>
        <View style={styles.row}>
          <FontAwesome name="calendar-o" color={colors.text} size={20} />
          <Text>Ngày hẹn: </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Theem datetimepicker"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={styles.textaction}
            />
          </View>
        </View>
        <View style={styles.row}>
          <FontAwesome name="sticky-note-o" color={colors.text} size={20} />
          <Text>Ghi chú: </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Ghi chú"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={styles.textaction}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButton}>Chỉnh sửa</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default EditShAd;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#E37485',
  },
  below: {
    backgroundColor: '#F5DCE0',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    height: 500,
    paddingHorizontal: 40,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    //alignItems: 'center',
    padding: 40,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  textinput: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: 100,
    textAlign: 'center',
    keyboardType: 'decimal',
  },
  textName: {
    width: 90,
  },
  imagepage: {
    width: 100,
    height: 100,
    borderRadius: 120,
    borderColor: '#fff',
    alignSelf: 'center',

    borderWidth: 2,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textaction: {
    //flex: 1,
    //marginTop: platform.OS === 'android' ? 0 : -12,
    width: '60%',
    paddingLeft: -10,
    color: '#05375a',
  },
  commandButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F5DCE0',
    alignItems: 'center',
    marginTop: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#E37485',
    alignItems: 'center',
    marginVertical: 7,
    color: '#fff',
    fontSize: 16,
  },
});
