import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { destinationData } from '../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { LinearGradient } from 'expo-linear-gradient';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown, FadeInRight, FadeInUp } from 'react-native-reanimated';


export default function Destinations() {
  const navigation = useNavigation();

  return (
    <View className='mx-4 flex-row justify-between flex-wrap'>
      {
        destinationData.map((destination, index) => {
            return (
              <Animated.View key={index} entering={FadeInDown.duration(500).delay(500)}>      
                <DestinationCard navigation={navigation} destination={destination} />  
              </Animated.View>

            )
        })
      }
    </View>
  )
}

const DestinationCard = ({destination, navigation}) => {
    const [isFavorite, setFavorite] = useState(false);
    return (
      <View>
        <TouchableOpacity
            onPress={() => navigation.navigate('Destination', {...destination})}
            className='flex justify-end relative p-4 py-6 space-y-2 mb-5'
            style={{width: wp(44), height: wp(65)}}
        >
            <Image
                style={{width: wp(44), height: wp(65), borderRadius: 35}}
                source={destination.image}
                className='absolute'
            />
            <LinearGradient 
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={{width: wp(44), height: hp(15), borderBottomLeftRadius: 35, borderBottomRightRadius: 35}}
                start={{x: 0.5, y: 0}}
                end={{x: 0.5, y: 1}}
                className='absolute bottom-0'
            />

            <TouchableOpacity
                onPress={() => setFavorite(favorite => !favorite)}
                style={{backgroundColor: 'rgba(255,255,255, 0.4)'}} className='absolute top-1 right-3 rounded-full p-3'>
                <HeartIcon size={wp(5)} color={ isFavorite ? 'red' : 'white'}/>
            </TouchableOpacity>

            <Text style={{fontSize: wp(4)}} className='text-white font-semibold'>
                {destination.title}
            </Text>

            <Text style={{fontSize: wp(2.2)}} className='text-white font-semibold'>
                {destination.shortDescription}
            </Text>
        </TouchableOpacity>
      </View>
    )
  }