import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
const index = () => {
  const [confirm, setConfirm] = useState(null);
  const signInWithPhoneNumber = async phoneNumber => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      console.log(confirmation);
      ToastAndroid.show('Code send successfully...', ToastAndroid.SHORT);
      setConfirm(confirmation);
    } catch (error) {
      console.log(error);
    }
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.headerWrapper}>
        <StatusBar backgroundColor="#ff4d78" />
        <View style={styles.header}>
          {/* <Text style={styles.headerText}>Login Here</Text> */}
        </View>
        <View style={styles.logoConatiner}>
          <Text style={styles.logo}>ChitChat</Text>
        </View>
      </SafeAreaView>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Personal Information &gt;</Text>
        </View>
        <View>
          <View style={styles.phoneContainer}>
            <Text style={{color: '#000'}}>+91</Text>
            <TextInput
              placeholder="Your Phone Number"
              placeholderTextColor="#ababab"
              keyboardType="phone-pad"
              style={{color: '#000'}}></TextInput>
          </View>
          <Text style={styles.desc}>
            We Will send you a verification code to your phone number
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => signInWithPhoneNumber('+919028367948')}>
              <Icon name="arrow-right" size={25} style={styles.iconButton} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  headerWrapper: {
    flex: 0,
    backgroundColor: '#ff4d78',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  header: {
    padding: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },
  logoConatiner: {
    paddingTop: 60,
    paddingBottom: 100,
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'BerkshireSwash',
    fontSize: 50,
    fontWeight: '600',
    color: '#fff',
  },
  content: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: -40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#2d2d2d',
    paddingVertical: 20,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  desc: {
    color: '#989898',
    textAlign: 'center',
    fontSize: 15,
    padding: 10,
    paddingVertical: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff4d78',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  iconButton: {
    color: '#fff',
  },
});
