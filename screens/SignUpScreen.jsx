import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React from 'react';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';


export default function SignUpScreen() {
  const navigation = useNavigation();

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
          className="h-[220] w-[90]"
          source={require('../assets/images/light.png')}></Animated.Image>
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify(1000)}
          className="h-[160] w-[65]"
          source={require('../assets/images/light.png')}></Animated.Image>
      </View>

      {/* title and form */}
      <View className="h-full w-full flex justify-around pt-48 pb-10">
        {/* title */}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-white font-bold tracking-wider text-4xl mt-9">
            SignUp
          </Animated.Text>
        </View>

        {/* form */}
        <View className="flex items-center mx-4 space-y-4 mt-20 pt-10">
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="bg-black/5 p-3 rounded-2xl w-full">
            <TextInput
              className="text-black"
              placeholder="Username"
              placeholderTextColor={'gray'}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="bg-black/5 p-3 rounded-2xl w-full">
            <TextInput
              className="text-black"
              placeholder="Email"
              placeholderTextColor={'gray'}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="bg-black/5 p-3 rounded-2xl w-full mb-3">
            <TextInput
              className="text-black"
              placeholder="Password"
              placeholderTextColor={'gray'}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(800).duration(1000).springify()}
            className="w-full">
            <TouchableOpacity className="w-full bg-sky-600 p-3 rounded-2xl mb-3">
              <Text className="text-xl font-bold text-white text-center">
                SignUp
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(1000).duration(1000).springify()}
            ew
            className="flex-row w-full justify-center">
            <Text className="text-black">Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push('Login')}>
              <Text className="text-sky-600">Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </ScrollView>
  );
}
