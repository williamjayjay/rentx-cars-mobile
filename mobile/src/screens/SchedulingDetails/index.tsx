import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'
import { Alert, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { parseISO, format } from 'date-fns';


/* ============ NATIVES E LIBS ============ */

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,

} from './styles';
import { Button } from '../../components/Button';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';

/* ============ COMPONENTS E OTHERS CREATED ============ */

interface Params {
  car: CarDTO;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails() {
  const [loading, setLoading] = useState(false)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute()
  const { car, dates } = route.params as Params

  const rentTotal = Number(dates?.length * car?.rent?.price)


  async function handleNavSchedulingComplete() {


    const schedulingByCar = await api.get(`/schedules_bycars/${car?.id}`)

    const unavailable_dates = [
      ...schedulingByCar?.data?.unavailable_dates,
      ...dates
    ]



    await api.post('schedules_byuser', {
      user_id: 1,
      car,
      startDate: format(parseISO(dates[0]), 'dd/MM/yyyy'),
      endDate: format(parseISO(dates[dates?.length - 1]), 'dd/MM/yyyy'),
    })

    api.put(`/schedules_bycars/${car?.id}`, {
      id: car?.id,
      unavailable_dates
    })
      .then((response) => navigation.navigate('SchedulingComplete'))
      .catch(() => {
        setLoading(false),
          Alert.alert('Não foi possível confirmar o agendamento.')
      })

    console.log('handleNavSchedulingComplete.log')
    // navigation.navigate('SchedulingComplete')
  }

  function handleNavBack() {
    navigation.goBack()
  }



  useEffect(() => {
    setRentalPeriod({
      start: format(parseISO(dates[0]), 'dd/MM/yyyy'),
      end: format(parseISO(dates[dates?.length - 1]), 'dd/MM/yyyy'),
    })

  }, [])




  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton onPress={handleNavBack} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={car?.photos}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car?.brand}</Brand>
            <Name>{car?.name}</Name>
          </Description>

          <Rent>
            <Period>{car?.rent?.period}</Period>
            <Price>R$ {car?.rent?.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {
            car?.accessories?.map(accessory => (
              <Accessory
                key={accessory?.type}
                name={accessory?.name}
                icon={getAccessoryIcon(accessory?.type)}
              />

            ))

          }

        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(28)}
              color={theme.colors.shape}
            />
          </CalendarIcon>





          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod?.start}</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(18)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod?.end}</DateValue>

          </DateInfo>

        </RentalPeriod>






        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>

          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car?.rent?.price} x${dates?.length} diárias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>

      <Footer>
        <Button
          onPress={() => { setLoading(true), handleNavSchedulingComplete() }}
          color={theme.colors.success}
          title="Alugar agora"
          loading={loading}
          enabled={!loading}
        />
      </Footer>


    </Container>
  )
}