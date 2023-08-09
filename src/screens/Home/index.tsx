import { useEffect, useState } from 'react';
import { ScrollView, SectionList, View } from 'react-native'

import { MarketCoffee } from '../../Model/MarkedCoffee';
import { SectionListCoffee } from '../../Model/SectionListCoffee';

import { CardTouchCoffee } from '../../components/CardTouchCoffee';
import { Carrousel } from '../../components/Carrousel';
import { Input } from '../../components/Input';
import { OptionFilterCoffee } from '../../components/OptionFilterCoffee';

import { getAllCoffeeSectionList } from '../../services/getAllCoffeeSectionList';

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

export function Home() {
  const [optionFilter, setOptionFilter] = useState<MarketCoffee | ''>('');
  const [listSection, setListSection] = useState<SectionListCoffee[]>([]);

  function handleUpdateFilter(mark: MarketCoffee) {
    if(mark === optionFilter) {
      setOptionFilter('');
    } else {
      setOptionFilter(mark);
    }
  }

  function getLoadingData() {
    const list = getAllCoffeeSectionList({ marked: '', search: '' });
    setListSection(list);
  }

  useEffect(() => {
    getLoadingData(); 
  }, [])

  return (
    <Container>
      <ScrollView>
        <Content>
          <HView style={{ justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <IconMap />
              <Local>Caucaia, CE</Local>
            </View>
            <IconShop />
          </HView>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Input
            style={{ marginTop: 15 }}
            placeholder='Pesquisar'
          />
          <ViewCoffee>
            <SementesCoffee />
          </ViewCoffee>
        </Content>
        <View style={{ marginTop: -120, zIndex: 1 }}>
          <Carrousel />
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
            renderItem={({item}) => (
              <CardTouchCoffee
                coffee={item}
              />
            )}
            renderSectionHeader={({section: {title}}) => (
              <TextSection>{title}</TextSection>
            )}
          />
        </Container2>
      </ScrollView>
    </Container>
  )
}