import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
//import back from '../../../../images/back.png';
//import info from '../../../../images/info.png';
import bmi from '../../../../images/bmi.png';
import duonghuyet from '../../../../images/duonghuyet.png';
import huyetap from '../../../../images/huyetap.png';
import choles from '../../../../images/choles.png';
import nhiptim from '../../../../images/nhiptim.png';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Read = () => (
  <Swiper
    buttonWrapperStyle={styles.swiper}
    style={styles.wrapper}
    showsButtons
    paginationStyle={{
      marginRight: w * 0.7,
      marginBottom: h * 0.02,
    }}
    activeDotColor="#8A56AC"
    dotColor="#E37485"
    nextButton={
      <View style={styles.netbutton}>
        <AntDesign name="arrowright" size={22} color="#FFF" />
      </View>
    }
    prevButton={
      <View style={styles.prebutton}>
        <AntDesign name="arrowleft" size={22} color="#FFF" />
      </View>
    }
  >
    <View style={styles.slide}>
      <Image source={bmi} style={styles.img} />
      <Text style={styles.title}>BMI(Body mass index)</Text>
      <Text style={styles.text}>
       BMI 
      </Text>
    </View>
    <View style={styles.slide}>
      <Image source={huyetap} style={styles.img} />
      <Text style={styles.title}>Huyết áp</Text>
      <Text style={styles.text}>
        Huyết áp bình thường: Đối với người lớn, huyết áp tâm thu dưới 120mmHg
        và huyết áp tâm trương dưới 80mmHg thì được gọi là huyết áp bình thường.
        Huyết áp cao: Khi huyết áp tâm thu từ 140 mmHg trở lên hoặc huyết áp tâm
        trương từ 90 mmHg trở lên thì chẩn đoán là cao huyết áp. Tiền cao huyết
        áp: Giá trị nằm giữa huyết áp bình thường và cao huyết áp (Huyết áp tâm
        thu từ 120-139 mmHg hoặc huyết áp tâm trương từ 80-89 mmHg) thì được gọi
        là tiền cao huyết áp. Huyết áp thấp: (Hạ huyết áp) huyết áp thấp được
        chẩn đoán khi huyết áp tâm thu dưới 100 mmHg.
      </Text>
    </View>

    <View style={styles.slide}>
      <Image source={choles} style={styles.img} />
      <Text style={styles.title}>Cholesterol</Text>
      <Text style={styles.text}>
        Cholesterol là một trong 3 chất lipid quan trọng của hệ tuần hoàn và cần
        phải gắn với protein tan được trong nước để theo hệ mạch di chuyển khắp
        cơ thể. Phức hợp được tạo thành giữa Cholesterol với protein là các
        lipoprotein gồm LDL, HDL có trong lượng phân tử khác nhau.{' '}
      </Text>
    </View>
    <View style={styles.slide}>
      <Image source={duonghuyet} style={styles.img} />
      <Text style={styles.title}>Đường huyết</Text>
      <Text style={styles.text}>
        Đường ( hay glucose máu ) là nguồn năng lượng chính của cơ thể đồng thời
        cũng là nguồn nhiên liệu cực kỳ quan trọng và cần thiết cho các cơ quan
        đặc biệt hệ thần kinh và tổ chức não bộ. Chỉ số đường huyết viết tắt là
        GI (glycemic index) được định nghĩa là giá trị chỉ nồng độ glucose có
        trong máu thường được đo bằng đơn vị là mmol/l hoặc mg/dl. Nồng độ
        glucose trong máu liên tục thay đổi từng ngày thậm chí từng phút đặc
        biệt liên quan đến chế độ ăn uống sinh hoạt hàng ngày. Lúc nào trong máu
        luôn có một lượng đường nhất định, nếu lượng đường trong máu thường
        xuyên cao sẽ dẫn tới bệnh đái tháo đường và ảnh hưởng biến chứng đến
        nhiều cơ quan đặc biệt là thận mạch máu vv...
      </Text>
    </View>
    <View style={styles.slide}>
      <Image source={nhiptim} style={styles.img} />
      <Text style={styles.title}>Nhịp tim</Text>
      <Text style={styles.text}>
        Nhịp tim chuẩn có thể khác nhau ở mỗi người, tùy thuộc vào độ tuổi, thể
        trạng, giới tính,... Đối với người từ 18 tuổi trở lên, nhịp tim bình
        thường trong lúc nghỉ ngơi dao động trong khoảng từ 60 đến 100 nhịp mỗi
        phút. Thông thường, người có thể trạng càng khỏe mạnh, thì nhịp tim càng
        thấp. Đối với những vận động viên chuyên nghiệp, khi ở chế độ nghỉ ngơi,
        nhịp tim trung bình của họ chỉ khoảng 40 nhịp một phút. Ví dụ như vận
        động viên đua xe đạp Lance Armstrong - huyền thoại của làng thể thao thế
        giới, tim của anh chỉ đập khoảng 32 nhịp mỗi phút.
      </Text>
    </View>
  </Swiper>
);

export default Read;

const styles = StyleSheet.create({
  swiper: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  netbutton: {
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    backgroundColor: '#E37485',
  },
  prebutton: {
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    backgroundColor: '#E37485',
    marginHorizontal: 20,
  },
  slide: {
    flex: 1,
    paddingTop: 80,
    marginHorizontal: 30,
    //backgroundColor: 'F5DCE0'
  },
  img: {
    alignSelf: 'center',
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    height: h * 0.4,
    width: w * 0.9,
    borderColor: '#111',
    borderWidth: 1,
    backfaceVisibility: 'hidden',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  title: {
    //fontFamily: 'Montserrat_700Bold',
    marginTop: 60,
    marginHorizontal: 10,
    fontSize: 24,
  },
  text: {
    color: '#767676',
    //fontFamily: 'Montserrat_400Regular',
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
    //marginLeft: 10,
  },
});
