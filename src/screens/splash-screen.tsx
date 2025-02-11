import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View, Animated, Linking } from 'react-native'

import Img from '@src/assets'
import { hp, wp } from '@src/commonCSS/GlobalCss';

const SplashScreen = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const rotation = useRef(new Animated.Value(0)).current;
  const zoom = useRef(new Animated.Value(1)).current;

  // check internet connection
  const checkInternetConnection = async () => {
    try {
      const response = await fetch('https://www.google.com', {
        method: 'HEAD',
      });
      return response.ok;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    const checkConnection = async () => {
      const result = await checkInternetConnection();
      setIsConnected(result);
    };

    checkConnection();
    const interval = setInterval(checkConnection, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // var deepLinkReceived = false;
    // Linking.getInitialURL().then(url => {
    //   if (url) {
    //     deepLinkReceived = true;
    //   }
    // });
    // const handleDeepLink = ({ url }: any) => {
    //   console.log('Deep link received:1', url);
    // };
    // const unsubscribe = Linking.addEventListener('url', handleDeepLink);


    Animated.timing(rotation, {
      toValue: 360,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(zoom, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          if (isConnected === false) {
            console.log('internet is inactive');
            return
          }
          // else {
          //   console.log('internet is active',);
          //   if (deepLinkReceived === false) {
          //     console.log('deep link not received');
          //     return
          //   }
          //   if (deepLinkReceived === true) {
          //     console.log('deep link received');
          //     let reset = CommonActions.reset({
          //       index: 0,
          //       routes: [{
          //         name: 'SignupStack',
          //       }],
          //     });
          //     navigation.dispatch(reset);
          //   }
          // }
        }, 1000);
      });
    });
    // return () => {
    //   unsubscribe.remove();
    // };
  }, []);

  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Animated.Image
        source={Img.Logo}
        style={[
          styles.logo,
          {
            transform: [
              {
                rotate: rotation.interpolate({
                  inputRange: [0, 0],
                  outputRange: ['0deg', '0deg'],
                }),
              },
              {
                scale: zoom,
              },
            ],
          },
        ]}
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({

  logo: {
    width: wp(30),
    height: hp(20),
    resizeMode: "contain"
  },
})