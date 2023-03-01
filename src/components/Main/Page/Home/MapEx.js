import React from 'react';
import { useTheme } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export default function MapEx() {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();
  const latitudeDelta = 0.04;
  const { width, height } = Dimensions.get('screen');
  const longitudeDelta = latitudeDelta * (width / height);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 10.045162,
          longitude: 105.746857,
          latitudeDelta,
          longitudeDelta,
        }}
      >
        <Marker
          coordinate={{
            latitude: 10.035237357577277,
            longitude: 105.75594601763206, // đại học y dược
            
          }}
          pinColor='#2D71B8'
        />
        <Marker
          coordinate={{
            latitude: 10.029280961261563,
            longitude: 105.75553112524337, //dktu
          }}
          pinColor="pink"
        />
        <Marker
          coordinate={{
            latitude: 10.03095686366175, //dktp
            longitude: 105.78294511814374,
          }}
          pinColor="pink"
        />
        <Marker
          coordinate={{
            latitude: 10.029794818379887, //quany
            longitude: 105.78233663824209,
          }}
          pinColor="pink"
        />
        <Marker
          coordinate={{
            latitude: 10.047131887268515, //chanthuongch
            longitude: 105.77875684631282,
          }}
          pinColor="pink"
        />
        <Marker
          coordinate={{
            latitude: 10.04962505354281, //phusan
            longitude: 105.77815603150319,
          }}
          pinColor="pink"
        />
        <Marker
          coordinate={{
            latitude: 10.049556480963146, //hoahao
            longitude: 105.77664576864171,
          }}
          pinColor="pink"
        />
        <Marker
          coordinate={{
            latitude: 10.03021849167024, //phuongchau
            longitude: 105.7508810383368,
          }}
          pinColor="pink"
        />
        <Marker
          coordinate={{
            latitude: 10.017627487319226, //nhidong
            longitude: 105.73920386062382,
          }}
          pinColor="pink"
        />
        <Marker
          coordinate={{
            latitude: 10.015778567097492, //dotquytymmach
            longitude: 105.7387120522565,
          }}
          pinColor="pink"
        />

        <Marker
          coordinate={{
            latitude: 10.035549611957926, //tymmach
            longitude: 105.77534343815331,
          }}
          pinColor="pink"
        />
        <Marker
          coordinate={{
            latitude: 10.034924601521467, //taimuihong
            longitude: 105.77582330595156,
          }}
          pinColor="pink"
        />
        <Marker
          coordinate={{
            latitude: 10.039290482846459, //matranghammat
            longitude: 105.78597264477668,
          }}
          pinColor="pink"
        />
        <Marker
          coordinate={{
            latitude: 10.00665673619739,  //hoanmycuulong
            longitude: 105.79921385129154,
          }}
          pinColor="pink"
        />
        <Marker
          coordinate={{
            latitude: 10.013107990649182,  //yhocotruyen
            longitude: 105.75831891304442,
          }}
          pinColor="pink"
        />
        <Marker
          coordinate={{
            latitude: 10.011602027338762, //da liễu
            longitude: 105.75067181786952,
            
          }}
          pinColor="green"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
