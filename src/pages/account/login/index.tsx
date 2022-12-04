import React, {useState} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {pxToDp} from '../../../utils/stylesKits';
import {Input} from 'react-native-elements';
import validator from '../../../utils/validator';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [phoneValid, setPhoneValid] = useState<boolean>(true);

  const handlePhoneNumberChangeText = (changeVal: string) => {
    setPhoneNumber(changeVal);
  };

  const handleSubmit = () => {
    const phoneTest = validator.validatePhone(phoneNumber);

    setPhoneValid(phoneTest);
  };

  return (
    <View>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Image
        source={require('../../../images/login.jpg')}
        style={{width: '100%', height: pxToDp(400)}}
      />
      <View style={{padding: pxToDp(20)}}>
        <View>
          <Text
            style={{fontSize: pxToDp(25), color: '#888', fontWeight: 'bold'}}>
            手机号登录注册
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <Input
            placeholder="请输入手机号码"
            maxLength={11}
            keyboardType="phone-pad"
            inputStyle={{color: '#333'}}
            value={phoneNumber}
            onChangeText={handlePhoneNumberChangeText}
            errorMessage={phoneValid ? '' : '手机号码格式不正确'}
            onSubmitEditing={handleSubmit}
            leftIcon={{
              type: 'font-awesome',
              name: 'phone',
              color: '#ccc',
              size: pxToDp(20),
            }}
            autoCompleteType={undefined}
          />
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default Login;
