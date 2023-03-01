import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper';
//import { TextInput, ScrollView, TouchableOpacity } from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient';
// import logout from '../../../../images/logout.png';
// //import anh from '../../../../images/anh.png';
// import calender from '../../../../images/calender.png';
// import list from '../../../../images/list.png';
// import messange from '../../../../images/messange.png';
// import account from '../../../../images/account.png';
// import { TextInput } from 'react-native-gesture-handler';

export default function Account({ navigation }) {
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
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View
        style={{
          backgroundColor: '#F5DCE0',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 680,
          paddingHorizontal: 30,
        }}
      >
        <Text>{JSON.stringify(user)}</Text>
        {/* <SafeAreaView style={styles.container}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 50 }}>
              <Avatar.Image
                source={{
                  uri: `http://192.168.195.111/healthapp_web/image/nguoidung/${user.ND_ANH}`,
                }}
                size={60}
              />
              <View style={{ marginLeft: 20 }}>
                <Title
                  style={[
                    styles.title,
                    {
                      marginTop: 15,
                      marginBottom: 5,
                    },
                  ]}
                >
                  {user.ND_HOVATEN}
                </Title>
                <Caption style={styles.caption}>{user.EMAIL}</Caption>
              </View>
            </View>
          </View>

          <View style={styles.menuWrapper}>
            <TouchableRipple
              onPress={() => navigation.navigate('DetailAccount', { user })}
            >
              <View style={styles.menuItem}>
                <Icon name="file-document-outline" color="#D6202D" size={25} />
                <Text style={styles.menuItemText}> Thông tin cá nhân</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="calendar" color="#D6202D" size={25} />
                <Text style={styles.menuItemText}> Lịch hẹn</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => navigation.navigate('Chat')}>
              <View style={styles.menuItem}>
                <Icon name="facebook-messenger" color="#D6202D" size={25} />
                <Text style={styles.menuItemText}> Tin nhắn</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="bell-ring-outline" color="#D6202D" size={25} />
                <Text style={styles.menuItemText}> Thông báo</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon
                  type="ionicons"
                  name="eye-settings-outline"
                  color="#D6202D"
                  size={25}
                />
                <Text style={styles.menuItemText}> Cài đặt</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => navigation.navigate('ChangePassword')}
            >
              <View style={styles.menuItem}>
                <Icon name="key-change" color="#D6202D" size={25} />
                <Text style={styles.menuItemText}> Đổi mật khẩu</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="logout" color="#D6202D" size={25} />
                <Text style={styles.menuItemText}> Đăng xuất</Text>
              </View>
            </TouchableRipple>
          </View>
        </SafeAreaView> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5DCE0',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  inforBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  inforBox: {
    width: '50%',
    alignItems: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItemText: {
    color: '#7777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
});
