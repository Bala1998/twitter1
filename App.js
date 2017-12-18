/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Drawer} from 'native-base';
import {Container,Header,Content,footer,Footertab,Button,Icon,Card,CardItem,Thumbnail} from 'native-base';
export default class App extends Component{
  render(){
    return(
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text> Bala </Text>
                  <Text Note> @Bala </Text>
                  </Body>
                  </Left>
                  </CardItem>

                  
                  
                  <CardItem>
                  <Button iconLeft transparent>
                  <Icon name='profile'/>
                  <Text> Profile </Text>
                  <Icon name='lists'/>
                  <Text> Lists </Text>
                  <Icon name='power'/>
                  <Text> Moments </Text>
                  <Icon name='beer'/>
                  <Text> Highlights </Text>
                  </Button>
                  </CardItem>
                  <CardItem>
                  <Button transparent Settings and Privacy>
                  <Text> Settings and Privacy </Text>
                  </Button>
                  <Button transparent Help Center>
                  <Text> Help Center </Text>
                  </Button>
                  </CardItem>
                  </Card>

                  <Footer>
                    <FooterTab>
                      <Button>
                        <Icon name="moon" />
                        </Button>
                        <Button>
                          <Icon name="apps"/>
                          </Button>
                          </FooterTab>
                          </Footer>
                          </Content>
                          </Container>
    );
  }
}

                        

                        

                  


                  

                   


  
