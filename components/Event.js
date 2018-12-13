import React from 'react';
import { Tile, Video, NavigationBar, Row, Title, Card, Caption, Image, View, Subtitle,Divider, Button, Overlay, Heading, Icon, Text, GridRow, GridView, Screen, ListView, TouchableOpacity, ImageBackground } from '@shoutem/ui';


class Event extends React.Component {
  render() {
    return (
    	<Screen>
		  	<NavigationBar
		  			style={{ container: { zIndex: 1 } }}
				  centerComponent={<Title>Event</Title>}
				/>
				<View style={{ marginTop: 70}}>
			       <Card>
					  <Image
					    styleName="medium-wide"
					    source={{uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-12.png'}}
					  />
					  <View styleName="content">
					    <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
					    <View styleName="horizontal v-center space-between">
					      <Caption>21 hours ago</Caption>
					      <Button styleName="tight clear"><Icon name="add-event" /></Button>
					    </View>
					  </View>
					</Card>
				</View>
		  </Screen>
      
    );
  }
}

export default Event;