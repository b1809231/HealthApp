import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../HealthApp/src/components/Main/Main';
import Login from '../HealthApp/src/components/Authentication/Login';
//import Logout from '../HealthApp/src/components/Authentication/Logout';
//simport ForgotPass from '../HealthApp/src/components/Authentication/ForgotPass';
import Page from './src/components/Main/Page/Page';
import PageAd from './src/components/Main/PageAd/PageAd';
import Home from './src/components/Main/Page/Home/Home';
import Anamnesis from './src/components/Main/Page/Home/Anamnesis';
import ListAdnd from './src/components/Main/Page/Home/ListAdnd';
import MapEx from './src/components/Main/Page/Home/MapEx';
import Register from '../HealthApp/src/components/Authentication/Register';
import EditAccount from './src/components/Main/Page/Account/EditAccount';
import ChangePassword from './src/components/Main/Page/Account/ChangePassword';
import Chat from './src/components/Main/Page/Chat/Chat';
import Account from './src/components/Main/Page/Account/Account';
import DetailMediSick from './src/components/Main/Page/MedicineSick/DetailMediSick';
import DetailSick from './src/components/Main/Page/MedicineSick/DetailSick';
import Sick from './src/components/Main/Page/MedicineSick/Sick';
import DetailAccount from './src/components/Main/Page/Account/DetailAccount';
//import HomeAd from './src/components/Main/PageAd/HomeAd/HomeAd';
import AccountAd from './src/components/Main/PageAd/AccountAd/AccountAd';
import EditAccountAd from './src/components/Main/PageAd/AccountAd/EditAccountAd';
import DetailPost from './src/components/Main/Page/Post/DetailPost';
import Read from './src/components/Main/Page/Profile/Read';
import EditP from './src/components/Main/Page/Profile/EditP';
import Injection from './src/components/Main/Page/Injection/Injection';
//import EditIn from './src/components/Main/Page/Injection/EditIn';
import TopNv from './src/components/Main/Page/Home/TopNv';
import AddIn from './src/components/Main/Page/Injection/AdIn';
import Profile from './src/components/Main/Page/Profile/Profile';
import Report from './src/components/Main/Page/Profile/Report';
import Message from './src/components/Main/Page/Chat/Message';
import Schedule from './src/components/Main/Page/Schedule/Schedule';
import AddSchedule from './src/components/Main/Page/Schedule/AddSchedule';
import DetailSh from './src/components/Main/Page/Schedule/DetailSh';
import Noti from './src/components/Main/Page/Schedule/Noti';
import ChangePassAd from './src/components/Main/PageAd/AccountAd/ChangePassAd';
import ChatAd from './src/components/Main/PageAd/ChatAd/ChatAd';
import ScheduleAd from './src/components/Main/PageAd/ScheduleAd/ScheduleAd';
import NotiAd from './src/components/Main/PageAd/ScheduleAd/NotiAd';
import ListShAd from './src/components/Main/PageAd/ScheduleAd/ListShAd';
import ListAd from './src/components/Main/PageAd/ListAd/ListAd';
//import AddShAd from './src/components/Main/PageAd/ScheduleAd/AddShAd';
import DetailShAd from './src/components/Main/PageAd/ScheduleAd/DetailShAd';
import EditShAd from './src/components/Main/PageAd/ScheduleAd/EditShAd';
import LoginAd from '../HealthApp/src/components/Authentication/LoginAd';

const Stack = createNativeStackNavigator();
// const Dra= createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Dra.Navigator drawerContent={props => <Drawer {...props} />}>
       <Dra.Screen name='Home' component={Home} />
      </Dra.Navigator> */}
      <Stack.Navigator>
        {/* --------------------Co ban---------------------- */}
        {/* <Stack.Screen
          name="ForgotPass"
          component={ForgotPass}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="AddAnam"
          component={AddAnam}
          options={{ headerShown: false }}
        /> */}

        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginAd"
          component={LoginAd}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        {/* -------------Nguoi dung------------ */}
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TopNv"
          component={TopNv}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailAccount"
          component={DetailAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditAccount"
          component={EditAccount}
          options={{ headerShown: false }}
        />
        {/* ----------- */}
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Message"
          component={Message}
          options={{ headerShown: false }}
        />
        {/* ----------- */}

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MapEx"
          component={MapEx}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Anamnesis"
          component={Anamnesis}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sick"
          component={Sick}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListAdnd"
          component={ListAdnd}
          options={{ headerShown: false }}
        />
        {/* ----------- */}
        {/* ----------- */}

        <Stack.Screen
          name="Injection"
          component={Injection}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddIn"
          component={AddIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailMediSick"
          component={DetailMediSick}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailSick"
          component={DetailSick}
          options={{ headerShown: false }}
        />
        {/* ----------- */}

        <Stack.Screen
          name="DetailPost"
          component={DetailPost}
          options={{ headerShown: false }}
        />
        {/* ----------- */}
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Read"
          component={Read}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Report"
          component={Report}
          options={{ headerShown: false }}
        />

        {/* ----------- */}

        <Stack.Screen
          name="Schedule"
          component={Schedule}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddSchedule"
          component={AddSchedule}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailSh"
          component={DetailSh}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Noti"
          component={Noti}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditP"
          component={EditP}
          options={{ headerShown: false }}
        />
        {/* ----------- */}

        {/* ----------- */}
        <Stack.Screen
          name="Page"
          component={Page}
          options={{ headerShown: false }}
        />
        {/* --------------Nhan vien---------------- */}
        <Stack.Screen
          name="AccountAd"
          component={AccountAd}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditAccountAd"
          component={EditAccountAd}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePassAd"
          component={ChangePassAd}
          options={{ headerShown: false }}
        />
        {/* ----------- */}
        {/* ----------Chat--------- */}
        <Stack.Screen
          name="ChatAd"
          component={ChatAd}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PageAd"
          component={PageAd}
          options={{ headerShown: false }}
        />
        {/*  */}
        {/* -------Lịch------- */}
        <Stack.Screen
          name="ScheduleAd"
          component={ScheduleAd}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotiAd"
          component={NotiAd}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListAd"
          component={ListAd}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ListShAd"
          component={ListShAd}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailShAd"
          component={DetailShAd}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditShAd"
          component={EditShAd}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
