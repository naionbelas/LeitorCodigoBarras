/*Container, Scroller, PageBody, UserInfoArea, UserAvatar, UserInfo,
        UserInfoName*/
import React from 'react'
import styled from 'styled-components/native' 

export const Container = styled.SafeAreaView`
background-color: #FFF;
flex: 1;
`
export const Scroller = styled.ScrollView`
flex: 1;
`
export const PageBody = styled.View`
background-color: #FFF;
border-top-left-radius: 50px;
margin-top: -50px;
`
export const UserInfoArea = styled.View`
flex-direction: row;
margin-top: -30px;
`
export const UserAvatar = styled.Image`
width: 110px;
height: 110px;
border-radius: 20px;
margin-left: 30px;
margin-right: 20px;
border-color: #FFF;
border-width: 4px;
`
export const UserInfo = styled.View`
flex: 1;
`
export const UserInfoName = styled.Text`
color:#FFF;
font-size: 18px;
font-weight: bold;
margin-bottom: 10px;
`
export const LoadingIcon = styled.ActivityIndicator`
margin-top: 50px; 
`
export const FakeSwiper = styled.View`height: 240px;background-color: #63C2D1;`
export const SwipeDot = styled.View`width: 10px;height: 10px;border-radius: 5px;background-color: #FFF;margin: 3px;`
export const SwipeDotActive = styled.View`width: 10px;height: 10px;border-radius: 5px;background-color: #000;margin: 3px;`
export const SwipeItem = styled.View`flex:1;background-color: #63C2D1;`
export const SwipeImage = styled.Image`width: 100%;height: 240px;`

export const UserFavButton = styled.TouchableOpacity`
width: 40px;
height: 40px;
background-color: #FFF;
justify-content: center;
align-items: center;
margin-right: 20px;
margin-left: 20px;
margin-top: 20px;
border: 2px solid #999;
border-radius: 20px;
`

export const ServiceArea = styled.View`
margin-top: 10px;
`

export const ServiceTitle = styled.Text`
font-size: 18px;
color: #268596;
font-weight: bold;
margin-left: 30px;
margin-bottom: 20px;
`

export const ServiceItem = styled.View`
flex-direction: row;
margin: 20px;
`

export const ServiceInfo = styled.View`
flex: 1;
`
        
export const ServiceName = styled.Text`
font-size: 16px;
font-weight:bold;
color: #999;
`
export const ServicePrice = styled.Text`
font-size: 14px;
color: #268596;
`
export const ServiceChooseButton = styled.TouchableOpacity`
background-color: #4EADBE;
border-radius: 10px;
padding: 10px;
`

export const ServiceChooseBtnText = styled.Text`
font-size: 14px;
font-weight: bold;
color: #FFF;
`
export const TestimonialArea = styled.View`
margin-top: 30px;
margin-bottom: 30px;
`

export const TestimonialItem= styled.View`
background-color: #268596;
padding: 15px;
border-radius: 10px;
height: 110px;
justify-content: center;
margin-left: 50px;
margin-right: 50px;
`
export const TestimonialInfo = styled.View`
flex-direction: row;
justify-content: space-between;
margin-bottom: 5px;
`
export const TestimonialName = styled.Text`
color: #000;
font-size: 16px;
font-weight: bold;
`
export const TestimonialBody = styled.Text`
color: #FFF;
font-size: 13px;
`