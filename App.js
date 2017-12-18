/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Container,Header,Content,Card,CardItem,Button,Icon,Text,Tab,Tabs,TabHeading} from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
import Tab4 from './tabFour';


export default class tw3 extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button iconLeft transparent primary>
          <Icon name='home' />
          <Text> Home </Text>
          </Button>
          <Tabs>
            <Tab heading={ <TabHeading><Icon name="home" /></TabHeading>}>
            <Tab1 />
            <CardItem>
              <Body>
                <Text> Bala </Text>
                <Text note> Hasura is amazing </Text>
                </Body>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
                      I'm feeling so greatful to be a part of Hasura Product Development Fellowship.
                      </Text>
                      </Body>
                      
                      <Left>
                        <Button transparent textStyle={{color: '87838B'}}>
                        <Icon name="logo-messages" />
                        <Text> 60 </Text>
                        </Button>
                        </Left>
                        
                        <Button iconRight light>
                        <Icon name="beer" />
                        <Text> 700 </Text>
                        </Button>
                        </CardItem>
                        



            </Tab>
            <Tab heading={ <TabHeading><Icon name="ios-search"/></TabHeading>}>
              <Tab2 />
              </Tab>
              <Tab heading={<TabHeading><Icon name="bell"/></TabHeading>}>
              <Tab3 />
              </Tab>
              <Tab heading={<TabHeading><Icon name="letter"/></TabHeading>}>
              <Tab4 />
              </Tab>
              </Tabs>
              </Content>
              </Container>
    );
  }
}


      



  