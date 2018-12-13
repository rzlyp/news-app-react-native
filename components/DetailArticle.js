import React from 'react';
import { Tile, Html,ScrollView,ImagePreview, NavigationBar, Lightbox, Row, Title, Card, Caption, Image, View, Subtitle,Divider, Button, Overlay, Heading, Icon, Text, GridRow, GridView, Screen, ListView, TouchableOpacity, ImageBackground } from '@shoutem/ui';


class DetailArticle extends React.Component {
  render() {
  const { navigation } = this.props;
   const article = navigation.getParam('data');
    return (
    	<Screen>
    		<ScrollView>
			 <ImagePreview
			    source={{ uri: article.urlToImage }}
			    width={400}
			    height={200}
			  />
			  <View style={{ backgroundColor: '#03A9F4'}}>
			  		<Title style={{color: "#FFF"}} numberOfLines={3}>{article.title}</Title>
			  		<Caption style={{color: "#FFF"}}> {article.publishedAt} </Caption>
			  </View>
			  <View>
			  	<Html
				    body={JSON.stringify(article.content)}
				/>
			  </View>
			 </ScrollView>
		 </Screen>
    );
  }
}

export default DetailArticle;