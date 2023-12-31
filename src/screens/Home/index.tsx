import { useCallback, useEffect, useState } from 'react';
import { ImageSourcePropType, SectionList, StatusBar, View } from 'react-native';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import Animated, {
  Extrapolate,
  SlideInRight,
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import { Coffee } from '../../Model/Coffee';
import { MarketCoffee } from '../../Model/MarkedCoffee';
import { SectionListCoffee } from '../../Model/SectionListCoffee';

import { CardTouchCoffee } from '../../components/CardTouchCoffee';
import { Carrousel } from '../../components/Carrousel';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ModalShopCart } from '../../components/ModalCarrinho';
import { OptionFilterCoffee } from '../../components/OptionFilterCoffee';

import { getAllCoffeeSectionList } from '../../services/getAllCoffeeSectionList';
import { getThreeCoffeeInCarrousel } from '../../services/getThreeCoffeeInCarrousel';

import SementesCoffee from '../../assets/sementesCoffee.svg';
import {
  Container,
  Content,
  Local,
  Title,
  HView,
  IconMap,
  IconShop,
  ViewCoffee,
  Container2,
  TextTitle,
  ViewOptions,
  TextSection
} from './styles';

export type HomeRouteProps = {
  product?: {
    name: string;
    image: ImageSourcePropType;
    ml: string;
    qtd: number;
  }
}

export function Home() {
  const params = useRoute().params as HomeRouteProps;
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  const [showModal, setShowModal] = useState(false);
  const [productModal, setProductModal] = useState({ name: '', ml: '', qtd: 0 })
  const [isUpdateColorStatusBar, setIsUpdateColorStatusBar] = useState(false);
  const [dataCarrousel, setDataCarrousel] = useState<Coffee[]>(getThreeCoffeeInCarrousel());
  const [search, setSearch] = useState('');
  const [optionFilter, setOptionFilter] = useState<MarketCoffee | ''>('');
  const [listSection, setListSection] = useState<SectionListCoffee[]>([]);

  const scrollY = useSharedValue(0);

  function handleUpdateFilter(mark: MarketCoffee) {
    if(mark === optionFilter) {
      setOptionFilter('');
    } else {
      setOptionFilter(mark);
    }
  }

  function handleGoDetails(name: string) {
    navigate('details', { name });
  }

  function getLoadingData() {
    const list = getAllCoffeeSectionList({ marked: optionFilter, search });
    setListSection(list);
  }

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
      if(event.contentOffset.y >= 80 && !isUpdateColorStatusBar) {
        runOnJS(setIsUpdateColorStatusBar)(true);
      } else if(event.contentOffset.y < 80 && isUpdateColorStatusBar) {
        runOnJS(setIsUpdateColorStatusBar)(false);
      }
    }
  })

  const fixedHeaderStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      zIndex: 2,
      paddingHorizontal: 32,
      paddingTop: 44,
      backgroundColor: colors.GRAY900,
      borderBottomWidth: 1,
      borderBottomColor: colors.GRAY500,
      opacity: interpolate(scrollY.value, [50, 90], [0, 1], Extrapolate.CLAMP),
      marginBottom: 0,
      transform: [
        { translateY: interpolate(scrollY.value, [50, 100], [-50, 0], Extrapolate.CLAMP) }
      ],
    }
  })
  const fixedOptionsStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      zIndex: 1,
      paddingHorizontal: 32,
      marginTop: 100,
      backgroundColor: colors.GRAY900,
      width: '100%',
      opacity: interpolate(scrollY.value, [550, 590], [0, 1], Extrapolate.CLAMP),
      marginBottom: 0,
      transform: [
        { translateY: interpolate(scrollY.value, [550, 600], [-40, 0], Extrapolate.CLAMP) }
      ],
    }
  })

  const getParamsHome = useCallback(() => {
    if(params) {
      if(params.product) {
        setShowModal(true);
        setProductModal(params.product);

        const time = setTimeout(() => {
          setShowModal(false);
        }, 3000);

        return () => clearTimeout(time);
      } else {
        setShowModal(false);
      }
    }
  }, [params])

  useEffect(() => {
    getLoadingData(); 
  }, [search, optionFilter]);

  useEffect(() => {
    setDataCarrousel(
      getThreeCoffeeInCarrousel()
    );
  }, []);

  useFocusEffect(getParamsHome);

  return (
    <Container>
      <Animated.View style={fixedHeaderStyle}>
        <StatusBar
          barStyle={isUpdateColorStatusBar ? 'dark-content' : 'light-content'}
          translucent
        />
        <Header typeColor='SECUNDARY' showIconShop />
      </Animated.View>
      <Animated.View style={fixedOptionsStyle}>
        <ViewOptions>
          <TextTitle>Nossos Cafés</TextTitle>
          <HView style={{ columnGap: 8 }}>
            <OptionFilterCoffee
              marked='TRADICIONAL'
              active={optionFilter === 'TRADICIONAL'}
              onPress={() => handleUpdateFilter('TRADICIONAL')}
            />
            <OptionFilterCoffee
              marked='DOCE'
              active={optionFilter === 'DOCE'}
              onPress={() => handleUpdateFilter('DOCE')}
            />
            <OptionFilterCoffee
              marked='ESPECIAL'
              active={optionFilter === 'ESPECIAL'}
              onPress={() => handleUpdateFilter('ESPECIAL')}
            />
          </HView>
        </ViewOptions>
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Content>
          <Header showIconShop />
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Input
            style={{ marginTop: 15 }}
            placeholder='Pesquisar'
            onChangeText={setSearch}
            value={search}
          />
          <ViewCoffee>
            <SementesCoffee />
          </ViewCoffee>
        </Content>
        <View style={{ marginTop: -120, zIndex: 1 }}>
          <Carrousel dataCarrousel={dataCarrousel} />
        </View>

        <Container2>
          <ViewOptions>
            <TextTitle>Nossos Cafés</TextTitle>
            <HView style={{ columnGap: 8 }}>
              <OptionFilterCoffee
                marked='TRADICIONAL'
                active={optionFilter === 'TRADICIONAL'}
                onPress={() => handleUpdateFilter('TRADICIONAL')}
              />
              <OptionFilterCoffee
                marked='DOCE'
                active={optionFilter === 'DOCE'}
                onPress={() => handleUpdateFilter('DOCE')}
              />
              <OptionFilterCoffee
                marked='ESPECIAL'
                active={optionFilter === 'ESPECIAL'}
                onPress={() => handleUpdateFilter('ESPECIAL')}
              />
            </HView>
          </ViewOptions>
          <SectionList
            sections={listSection}
            scrollEnabled={false}
            keyExtractor={(item) => item.name}
            renderItem={({item, index}) => (
              <Animated.View entering={SlideInRight.delay(index * 200)}>
                <CardTouchCoffee
                  coffee={item}
                  onPress={() => handleGoDetails(item.name)}
                />
              </Animated.View>
            )}
            renderSectionHeader={({section: {title}}) => (
              <TextSection>{title}</TextSection>
            )}
          />
        </Container2>
      </Animated.ScrollView>
      {showModal && params && (
        <ModalShopCart
          ml={productModal.ml}
          name={productModal.name}
          qtd={productModal.qtd.toString()}
        />
      )}
    </Container>
  )
}
