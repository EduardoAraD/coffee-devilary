import { useEffect, useRef, useState } from "react";
import { FlatList, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";

import { CardCoffee } from "../CardCoffee";

import { Coffee } from "../../Model/Coffee";

type Props = {
  dataCarrousel: Coffee[];
}

export function Carrousel({ dataCarrousel }: Props){
  const scale1 = useSharedValue(1.4);
  const scale2 = useSharedValue(1);
  const scale3 = useSharedValue(1);
  const [activeBanner, setActiveBanner] = useState(0);

  const FlatlistRef = useRef<FlatList>(null);

  const animetedContainerStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale1.value }],
    }
  })
  const animetedContainerStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale2.value }],
    }
  })
  const animetedContainerStyle3 = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale3.value }],
    }
  });

  function updateItemAnimated (newIndex: number) {
    if(newIndex === 0) {
      scale1.value = withTiming(1, { duration: 800 });
      scale2.value = withTiming(0.7, { duration: 800 });
      scale3.value = withTiming(0.7, { duration: 800 });
    } else if(newIndex === 1) {
      scale1.value = withTiming(0.7, { duration: 800 });
      scale2.value = withTiming(1, { duration: 800 });
      scale3.value = withTiming(0.7, { duration: 800 });
    } else {
      scale1.value = withTiming(0.7, { duration: 800 });
      scale2.value = withTiming(0.7, { duration: 800 });
      scale3.value = withTiming(1, { duration: 800 });
    }
  }

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if(viewableItems[0]) {
      setActiveBanner(viewableItems[0].index);
      updateItemAnimated(viewableItems[0].index);
    }
  }

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 50,
      },
      onViewableItemsChanged
    }
  ]);

  useEffect(() => {
    if(dataCarrousel.length <= 1) return;
    const timeId = setTimeout(() => {
      const newIndex = activeBanner === dataCarrousel.length - 1 ? 0 : activeBanner + 1;

      FlatlistRef.current?.scrollToIndex({ index: newIndex });
      setActiveBanner(newIndex);
      updateItemAnimated(newIndex);
    }, 5000);
    return () => clearTimeout(timeId);
  }, [activeBanner, dataCarrousel.length]);

  function styledAnimated (val: number) {
    switch(val) {
      case 0: return animetedContainerStyle1;
      case 1: return animetedContainerStyle2;
      case 2: return animetedContainerStyle3;
      default: return animetedContainerStyle1;
    }
  }

  return (
    <FlatList
      ref={FlatlistRef}
      data={dataCarrousel}
      keyExtractor={(item, index) => `${item}-${index}`}
      renderItem={({ item, index }) => (
        <Animated.View style={styledAnimated(index)}>
          <CardCoffee
            image={item.image}
            marked={item.marked}
            price={item.price}
            description={item.description}
            name={item.name}
          />
        </Animated.View>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: 'center',
        height: 308,
        paddingHorizontal: 64,
        marginLeft: 32,
      }}
      ItemSeparatorComponent={() => <View style={{ height: 10, width: 10 }} />}
    />
  )
}
