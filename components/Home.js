import React from 'react';
import { Tile, NavigationBar, Row, Title, Card, Caption, Image, View, Subtitle,Divider, Button, Overlay, Heading, Icon, Text, GridRow, GridView, Screen, ListView, TouchableOpacity, ImageBackground } from '@shoutem/ui';
import {StyleSheet, BNTouchableView} from 'react-native';
import axios from 'axios';


class Home extends React.Component {
constructor(props) {
  super(props);
  this.renderRow = this.renderRow.bind(this);
  this.state = {
    article: [],
  }
}
componentDidMount(){
	axios.get('https://newsapi.org/v2/everything?q=ai&apiKey=100eb85f3817476fac1f8992b9098864').then((response)=>{
		let results = response.data.articles;
		var articles = [];
		results.map((val)=>{
			if(val.title !== null || val.urlToImage !== null || val.content !== null){
				articles.push({
					title : val.title,
					urlToImage : val.urlToImage,
					publishedAt : val.publishedAt,
					content : val.content

				})
			}
			
		})
		this.setState({ article: articles});
	});
}
renderRow(article) {
    return (
      <TouchableOpacity styleName="flexible" onPress={() =>
            this.props.navigation.push('DetailArticle', {
              data: article,
            })}>
      <Row>
		  <Image
		    styleName="small rounded-corners"
		    source={{ uri: (article.urlToImage).toString() }}
		  />
		  <View styleName="vertical stretch space-between">
		    <Text>{article.title}</Text>
		    <Caption>{article.publishedAt}</Caption>
		  </View>
		</Row>
      </TouchableOpacity>
    );
}
  render() {
  	const data = this.state.article;
    return (
		  <Screen>
		  	<NavigationBar
		  		  style={{ container: { zIndex: 1 } }}
				  leftComponent={<Icon name="sidebar" />}
				  centerComponent={<Title>Home</Title>}
				/>
			<View style={{ marginTop: 70}}>
				<ListView
			        data={data}
			        renderRow={this.renderRow}
			      />
			 </View>
		  </Screen>
    );
  }
}

export default Home;