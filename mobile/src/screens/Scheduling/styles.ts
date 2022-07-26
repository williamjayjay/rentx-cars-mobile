import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
flex:1;
background-color: ${({ theme }) => theme.colors.background_secondary} ;

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
font-size: ${RFValue(28)}px ;
/* padding-left: 8px; */
`;

export const RentalPeriod = styled.View`
width:100%;
flex-direction:row ;
justify-content: space-between ;
align-items: center ;
margin:18px 0 ;
`;

export const DateInfo = styled.View`
width:30%;
`;

export const DateTitle = styled.Text`
color: ${({ theme }) => theme.colors.text} ;
font-family: ${({ theme }) => theme.fonts.secondary_500} ;
font-size: ${RFValue(12)}px ;
`;

export const DateValue = styled.Text<DateValueProps>`
color: ${({ theme }) => theme.colors.shape} ;
font-family: ${({ theme }) => theme.fonts.primary_500} ;
font-size: ${RFValue(15)}px ;


${({ selected, theme }) => !selected && css`
border-bottom-width:1px ;
border-bottom-color: ${theme.colors.text};
padding-bottom:5px ;
`}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24
  },
  showsVerticalScrollIndicator: false
})``;

export const Footer = styled.View`
padding:18px ;
`;


