import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if(errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('')
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]); 


  const handleLogin = () => {
    if(email === 'test@gmail.com' && password === 'Test@123') {
      setErrorMessage('');
      navigation.push('Home');
    } else {
      setErrorMessage('Incorrect username or password');
    }
  }

  return (
    <ScrollView className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require('../assets/images/background.png')}></Image>

      {/* light  */}
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify(1000)}
          className="h-[225] w-[90]"
          source={require('../assets/images/light.png')}></Animated.Image>
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify(1000)}
          className="h-[160] w-[65]"
          source={require('../assets/images/light.png')}></Animated.Image>
      </View>

      {/* title and form */}
      <View className="h-full w-full flex justify-around pt-44 pb-10">
        {/* title */}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-white font-bold tracking-wider text-4xl mt-9">
            Login
          </Animated.Text>
        </View>

        {/* form */}
        <View className="flex items-center mx-4 space-y-4 mt-12 pt-10">
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="bg-black/5 p-3 rounded-2xl w-full mb-3">
            <TextInput
              className="text-black"
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor={'gray'}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="bg-black/5 p-3 rounded-2xl w-full mb-6">
            <TextInput
              className="text-black"
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor={'gray'}
              secureTextEntry
            />
          </Animated.View>
          {errorMessage ? (
            <Animated.View
              entering={FadeInDown.duration(1000).springify()}
              className="w-full mb-3"
            >
              <Text className="text-red-600 text-center">
                {errorMessage}
              </Text>
            </Animated.View>
          ) : null}
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="w-full"
          ></Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="w-full">
            <TouchableOpacity onPress={handleLogin} className="w-full bg-sky-600 p-3 rounded-2xl mb-3">
              <Text className="text-xl font-bold text-white text-center">
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            ew
            className="flex-row w-full justify-center">
            <Text className="text-black">Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push('SignUp')}>
              <Text className="text-sky-600">SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </ScrollView>
  );
}
