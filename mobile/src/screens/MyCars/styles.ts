import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
align-items:center ;
background-color: ${({ theme }) => theme.colors.background_primary} ;

`;


export const Header = styled.View`
width:100% ;
height: 280px ;
background-color: ${({ theme }) => theme.colors.header} ;
justify-content: center ;
padding: 25px;
padding-top:${getStatusBarHeight() + 18}px ;

/* align-items:flex-start ; */
/* flex-direction: row ;

position:absolute;
margin-top:${getStatusBarHeight() + 18}px ;
margin-left: 24px; */
`;

export const Title = styled.Text`
color: ${({ theme }) => theme.colors.shape} ;
font-family: ${({ theme }) => theme.fonts.secondary_600} ;
font-size: ${RFValue(30)}px ;
/* padding-left: 8px; */
`;

export const SubTitle = styled.Text`
color: ${({ theme }) => theme.colors.shape} ;
font-family: ${({ theme }) => theme.fonts.secondary_400} ;
font-size: ${RFValue(16)}px ;
/* padding-left: 8px; */
`

export const Content = styled.View`
flex:1;
width:100%;
padding: 0 16px;
`;

export const Appointments = styled.View`
width:100%;
flex-direction:row ;
justify-content: space-between ;
align-items:center ;
padding: 24px 0;

`;

export const AppointmentsTitle = styled.Text`
color: ${({ theme }) => theme.colors.text} ;
font-family: ${({ theme }) => theme.fonts.primary_400} ;
font-size: ${RFValue(16)}px ;
`;

export const AppointmentsQuantity = styled.Text`
color: ${({ theme }) => theme.colors.title} ;
font-family: ${({ theme }) => theme.fonts.primary_500} ;
font-size: ${RFValue(16)}px ;
`;

export const CarWrapper = styled.View`
  margin-bottom: 16px ;

`;

export const CarFooter = styled.View`
  width: 100%;
  padding: 12px;

  margin-top: -10px ;

  flex-direction: row ;
  align-items: center ;
  justify-content: space-between ;
background-color: ${({ theme }) => theme.colors.background_secondary} ;

`;

export const CarFooterTitle = styled.Text`
color: ${({ theme }) => theme.colors.text_details} ;
font-family: ${({ theme }) => theme.fonts.secondary_500} ;
font-size: ${RFValue(12)}px ;
`;

export const CarFooterPeriod = styled.View`
flex-direction:row ;
`;

export const CarFooterDate = styled.Text`
color: ${({ theme }) => theme.colors.title} ;
font-family: ${({ theme }) => theme.fonts.primary_400} ;
font-size: ${RFValue(16)}px ;
`;

