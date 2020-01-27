import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ActivityIndicator,FlatList,TouchableOpacity,TouchableHighlight, Modal, Linking ,Alert} from 'react-native';


export default class InfiniteScroll1 extends Component<Props> {


	constructor()
	{
      super();
 
      this.state =
      {
          isLoading: true,
          modalVisible: false,
          responseList: [],
		  reviewResponseList: [],
          selectedUser: {},
          fetchingStatus: false,
          setOnLoad : false,
          page:0
      }
	}

	componentDidMount()
	{
		// this.page = this.page + 1;
		// this.apiCall();
	}




	apiCall =()=> {
    
    this.setState({ fetching_Status: true, isLoading: true }); 
  
    fetch('https://api.github.com/search/users?q=mak&sort=stars&order=desc&page=' +     this.state.page   + "&per_page=10")
      .then((response) => response.json())
      .then((responseJson) =>
      {

		let tmpArray = this.state.responseList;

            for (var i = 0; i < responseJson.items.length; i++) {
                tmpArray.push(responseJson.items[i])
            }



			this.setState({ 
				reviewResponseList: tmpArray, 
		        responseList: tmpArray, 
		        isLoading: false,
				//setOnLoad: true ,
				page: this.state.page+1,
				total: tmpArray.length
			});
      
			//alert(this.state.responseList.length); 
      
      })
      .catch((error) =>
      {
		  alert(error);
          console.error(error);
          this.setState({setOnLoad: false, fetching_Status: false });
      });
	}


	onClick(item){

		//Alert.alert(item.id);
		// console.log(item);
	}

	load(){

		//Alert.alert(item.id);
		// console.log(item);
		this.apiCall();
	}

	ItemSeparator =()=> {
		return (
		  <View
			style={{
			  height: .5,
			  width: "100%",
			  backgroundColor: "#FFFFFF",
			}}
		  />
		);
	  }


	BottomView=()=>
	{
    return (
       
        <View>
                {
                    ( this.state.fetchingStatus )
                    ?
                     
			<View>
                         
                <TouchableOpacity 
					activeOpacity = { 0.5 } 
					onPress = { this.load.bind(this) } 
                >
					<View style = {styles.viewStyle}>
						<Text style = { styles.flatListItems }> Load Data </Text>
					</View>
                </TouchableOpacity>
            </View>
                    :
						null
                }

        </View>           

        
		)
	}

	showDetails(item) {
		this.setState({ selectedUser: item });
		this.toggleModal(true);
	}

	toggleModal(visible) {
		//alert('in toggleModal()');
		this.setState({ modalVisible: visible });
	}

	renderFooter=()=>
	{
    let url=this.state.selectedUser.repos_url;

    return (
       

                     
        <View  style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}>


          <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
              <View>

                   <View style={{flexDirection: 'row'}}>
                  <Text style = {styles.field}>ID</Text>
                  <Text style = {styles.value}>{this.state.selectedUser.id}</Text>
                  </View>

                   <View style={{flexDirection: 'row'}}>
                   <Text style = {styles.field}>Login</Text>
                  <Text style = {styles.value}>{this.state.selectedUser.login}</Text>
                  </View>

                   <View style={{flexDirection: 'row'}}>
                  <Text style = {styles.field}>Type</Text>
                  <Text style = {styles.value}>{this.state.selectedUser.type}</Text>
                  </View>

                   <View style={{flexDirection: 'row'}}>
                   <Text style = {styles.field}>Score</Text>
                  <Text style = {styles.value}>{this.state.selectedUser.score}</Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                   <Text style = {styles.field}>Repos</Text>
                  
                   <Text style = {styles.value}
                    onPress={() => {
                      //on clicking we are going to open the URL using Linking
                      Linking.openURL(url)
                    }}>
                  Link To Repos
                  </Text>
                  </View>

                  <TouchableOpacity onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}
                       activeOpacity = { 0.7 } >
                     
                      <View style = {styles.viewStyle}>
                      <Text style = { styles.flatListItems }>Close</Text>
                      </View>
                  </TouchableOpacity>
               </View>
            </Modal>



                        <TouchableOpacity 
                activeOpacity = { 0.7 } 
               
                onPress = { this.load.bind(this) } 
                >
                 <View style = {styles.buttonStyle}>
                      <Text style = { styles.flatListItems }>Load More Data</Text>
                      </View>
              
               
                </TouchableOpacity>
             
                  
        </View>                
		)
	}


	render() {
		return (
		<View style = { styles.MainContainer }>
		{
        ( this.state.isLoading )
        ?
          (  <View>
                    
                        <TouchableOpacity 
                activeOpacity = { 0.5 } 
               
                onPress = { this.load.bind(this) } 
                >
                <View style = {styles.viewStyle}>
                <Text style = { styles.flatListItems }> Load Data </Text>
                </View>
                </TouchableOpacity>
              </View>
          )
        :
          (
            <View>   
              
              <FlatList
              
                style={{width: '100%'}}
 
                keyExtractor = {( item, index ) => index }
 
                data = { this.state.responseList }
 
                ItemSeparatorComponent = {this.ItemSeparator}
                ListHeaderComponent={<Text style = {styles.headerStyle}>Total: {this.state.total}  Page: {this.state.page}</Text>}
                ListFooterComponent={this.renderFooter}
                renderItem = {({ item, index }) => 
                <View>
                  <TouchableOpacity 
                    activeOpacity = { 0.7 } 
                    onPress = {() => {this.showDetails(item)}} 
                  >
                    <View style = {styles.viewStyle}>
                      <Text style = { styles.flatListItems }> { item.id } </Text>
                      <Text style = { styles.flatListItems }> { item.login } </Text>
				            </View>
                  </TouchableOpacity>
                </View>
              }
 
               
              />
            </View>   
          )
      }    
      </View>
    );
	}
}

const styles = StyleSheet.create(
{
	MainContainer:
	{
		flex: 1,
		justifyContent: 'center',
		margin: 5,
		paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
	},

	headerStyle:
	{
		padding: 7,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,
		backgroundColor: 'steelblue',
		borderTopColor: 'steelblue',
		color: '#FFFFFF',
	},

	viewStyle: {
		padding: 7,
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F44336',
		borderRadius: 5,
		margin: 5
	},

	field: {
		fontSize: 20,
		color: 'steelblue',
		padding: 10,
		marginLeft:8,
		width: 80,
		fontWeight: 'bold'
	},

	value: {
		fontSize: 20,
		color: 'steelblue',
		padding: 10,
		marginRight:8,
		//width: 200    
	},
	
	buttonStyle: {
		fontSize: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'steelblue',
		color: '#fff',
		padding: 10,
	},
  
	flatListItems:{
		fontSize: 20,
		color: '#fff',
		padding: 10,    
	}
});