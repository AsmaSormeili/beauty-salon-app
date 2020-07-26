import React, { Component } from 'react';
import {Image,StatusBar} from "react-native";
import { Container,Item,Label, Header,Thumbnail, Title, List,ListItem,Content, Card,CardItem,Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import ResponsiveImage from 'react-native-responsive-image';
import { Actions } from 'react-native-router-flux';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppIntro from 'react-native-app-intro';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily : 'IRANSansMobile',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    textAlign:'center',
  
  },
});



var  headerColor = '#6eb214';
var submitColor=  '#82ccdd';






export default class Intro extends Component {

    onSkipBtnHandle = (index) => {
       Actions.login();
      }
      doneBtnHandle = () => {
        Actions.login();
    }
    onSlideChangeHandle = () => {
    //  this.setState ({statusColor : (this.state.statusColor === '#82ccdd') ?  '#6eb214' : '#82ccdd'})
    }
    constructor(props){
      super(props);
      this.state = {
        statusColor : '#6eb214'


      }



  }



  render() {
  
       
          return (
<View>
<StatusBar backgroundColor={this.state.statusColor} barStyle="light-content"/>

  
            <AppIntro
            onDoneBtnClick={this.doneBtnHandle}
            onSkipBtnClick={this.onSkipBtnHandle}
            onSlideChange={this.onSlideChangeHandle}
            skipBtnLabel={<Label style={{fontFamily : 'IRANSansMobile',fontSize:16,color:'white',paddingRight:100}}>
بی خیال           
             </Label>}
            doneBtnLabel={<Label style={{fontFamily : 'IRANSansMobile',fontSize:16,color:'white',paddingLeft:10}}>
            بسیار خب            
                         </Label>}
            activeDotColor='white'
            
            >

            <View style={[styles.slide,{ backgroundColor: '#6eb214' }]}>
            <View level={10}>
            <ResponsiveImage source={require('./../assets/image/intro/1.png')} initWidth="221" initHeight="168"/>

</View>
              <View   style={{paddingTop:80}} level={15}><Text style={styles.text}> به اپلیکیشن حضور و غیاب کارا دوهزار</Text></View>
              <View   level={8}><Text style={styles.text}> خوش آمدید</Text></View>

            </View>
            <View style={[styles.slide, { backgroundColor: '#82ccdd'  }]}>
            <View level={-10}>
            <ResponsiveImage source={require('./../assets/image/intro/2.png')} initWidth="221" initHeight="168"/>

</View>
              <View   style={{paddingTop:80}} level={15}><Text style={styles.text}>با همراه اپ کارا دوهزار </Text></View>
              <View   level={5}><Text style={styles.text}>میتوانید در هر لحظه گزارش بگیرید </Text></View>
              

            </View>
            <View style={[styles.slide,{ backgroundColor: '#6eb214'  }]}>
            <View level={20}>
            <ResponsiveImage source={require('./../assets/image/intro/3.png')} initWidth="212" initHeight="206"/>

</View>
              <View   style={{paddingTop:80}} level={15}><Text style={styles.text}> میتوانید وضعیت پرسنل خود را</Text></View>
              <View   level={-10}><Text style={styles.text}> بررسی و مدیریت کنید</Text></View>
              

            </View>
            <View style={[styles.slide, { backgroundColor: '#82ccdd' }]}>
            <View level={8}>
            <ResponsiveImage source={require('./../assets/image/intro/4.png')} initWidth="221" initHeight="168"/>

</View>
              <View   style={{paddingTop:80}} level={0}><Text style={styles.text}>میتوانید درخواست های خود را </Text></View>
              <View   level={-10}><Text style={styles.text}> ارسال و تایید کنید </Text></View>
              

            </View>
            <View style={[styles.slide,{ backgroundColor: '#6eb214'   }]}>
            <View level={20}>
            <ResponsiveImage source={require('./../assets/image/intro/5.png')} initWidth="221" initHeight="206"/>

</View>
              <View   style={{paddingTop:80}} level={15}><Text style={styles.text}>میتوانید موقعیت جغرافیایی خود را </Text></View>
              <View   level={-10}><Text style={styles.text}>ثبت و ارسال نمایید</Text></View>
              <View   level={30}><Text style={styles.text}>و ... </Text></View>

              

            </View>
          </AppIntro>
          </View>
    );
  }
}
