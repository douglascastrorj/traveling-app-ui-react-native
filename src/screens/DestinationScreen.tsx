import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StatusBar } from 'expo-status-bar';
import { ChevronLeftIcon, ClockIcon, HeartIcon as HeartIconOutline} from 'react-native-heroicons/outline';
import { HeartIcon as HeartIconSolid, SunIcon, MapPinIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';


export default function DestinationScreen(props) {
  const destination = props.route.params;
  const navigation = useNavigation();

  const [isFavorite, setFavorite] = useState(false);
  return (
    <View className='bg-white flex-1'>
        <Image 
            source={destination.image}
            style={{width: wp(100), height: hp(55)}}
        />
        <StatusBar style='light' />

        {/* back button */}
        <SafeAreaView
            className='flex-row justify-between items-center absolute w-full'
        >
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className='p-2 rounded-full ml-4'
                style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
            >
                <ChevronLeftIcon size={wp(7)} strokeWidth={4} color={'white'} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setFavorite(favorite => !favorite)}
                className='p-2 rounded-full mr-4'
                style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
            >
                <HeartIconSolid size={wp(7)} strokeWidth={4} color={ isFavorite ? 'red' : 'white'} />
            </TouchableOpacity>
        </SafeAreaView>

        {/* text and description */}
        <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} className='px-5 pt-8 flex flex-1 justify-between bg-white -mt-14'>
            <ScrollView showsVerticalScrollIndicator={false} className='space-y-5'>
                <View className='flex-row justify-between items-start'>
                    <Text style={{fontSize: wp(7)}} className='font-bold flex-1 text-neutral-700'>
                        {destination?.title}
                    </Text>
                    <Text style={{fontSize: wp(7), color: theme.text}} className='font-semibold'>
                        R$ {destination?.price}
                    </Text>
                </View>
                <Text style={{fontSize: wp(3.7)}} className='text-neutral-700 tracking-wide mb-2'>
                    {destination?.longDescription}
                </Text>
                <View className='flex-row justify-between mx-1'>
                    <View className='flex-row space-x-2 items-start'>
                        <ClockIcon size={wp(7)} color={'skyblue'} />
                        <View className='flex space-y-2'>
                            <Text style={{fontSize: wp(4.5)}} className='font-bold text-neutral-700'>
                                {destination?.duration}
                            </Text>
                            <Text style={{fontSize: wp(3)}} className='text-neutral-600 tracking-wide'>
                                Duration
                            </Text>
                        </View>
                    </View>

                    <View className='flex-row space-x-2 items-start'>
                        <MapPinIcon size={wp(7)} color={'#f87171'} />
                        <View className='flex space-y-2'>
                            <Text style={{fontSize: wp(4.5)}} className='font-bold text-neutral-700'>
                                {destination?.distance}
                            </Text>
                            <Text style={{fontSize: wp(3)}} className='text-neutral-600 tracking-wide'>
                                Distance
                            </Text>
                        </View>
                    </View>

                    <View className='flex-row space-x-2 items-start'>
                        <SunIcon size={wp(7)} color={'orange'} />
                        <View className='flex space-y-2'>
                            <Text style={{fontSize: wp(4.5)}} className='font-bold text-neutral-700'>
                                {destination?.weather}
                            </Text>
                            <Text style={{fontSize: wp(3)}} className='text-neutral-600 tracking-wide'>
                                Sunny
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity style={{backgroundColor: theme.bg(0.7), height: wp(15), width: wp(50)}} className='mb-6 mx-auto flex justify-center items-center rounded-full'>
                <Text className='text-white font-bold' style={{fontSize: wp(5.5)}}>
                    Book Now
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}