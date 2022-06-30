import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';


class Home extends React.Component {
   querry=()=>{
  this.props.navigation.navigate('News');
}
  render(){
  return (
    <View style={{flex:1,backgroundColor:'yellow',textAlign:'center',borderColor:'black',borderWidth:2}}>
    <View style={styles.container}>
    <Text style={{alignSelf:'center',fontSize:30,fontWeight:'bold'}}>sunshine ssm leader </Text>
</View>

    <Text style={{alignSelf:'center',fontSize:20,textAlign:'center',marginTop:30}}>dinesh kumar </Text>
    <TouchableOpacity style={styles.button}><Text style={{fontWeight:'bold',fontSize:20}}>manifesto</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={this.querry()}><Text style={{fontWeight:'bold',fontSize:20}}>querry</Text></TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
   backgroundColor:"red",borderColor:'black',borderWidth:2
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   button: {
  height:40,width:200,backgroundColor:'blue',alignSelf:'center',marginTop:40,alignItems:'center',borderColor:'black',borderWidth:2
  },
});
export default Home;