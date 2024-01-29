import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { theme } from '../theme';
import { categoriesData } from '../constants';
import Animated, { FadeInRight } from 'react-native-reanimated';


export default function categories() {
  return (
    <View className='space-y-5'>
        <View className='mx-5 flex-row justify-between items-center'>

            <Text
                style={{fontSize: wp(4)}}
                className='font-semibold text-neutral-700'
            >
                Categories
            </Text>
            <TouchableOpacity>
                <Text
                    style={{fontSize: wp(4), color: theme.text}}
                    className='text-orange-500 font-medium'
                >
                    See all
                </Text>
            </TouchableOpacity>
        </View>
        <ScrollView
            horizontal
            contentContainerStyle={{paddingHorizontal: 15}}
            className='space-x-4'
            showsHorizontalScrollIndicator={false}
        >
            {
                categoriesData.map((item, index) => (
                    <Animated.View key={index} entering={FadeInRight.duration(50).delay((index + 1) * 150)}>      
                        <TouchableOpacity className='flex items-center space-y-2'>
                            <Image 
                                source={item.image}
                                style={{width: wp(20), height: wp(19)}}
                                className='rounded-3xl'
                            />
                            <Text style={{fontSize: wp(3)}} className='text-neutral-700 font-medium'>{item.title}</Text>
                        </TouchableOpacity>
                    </Animated.View>
                ))
            }
        </ScrollView>
    </View>
  )
}