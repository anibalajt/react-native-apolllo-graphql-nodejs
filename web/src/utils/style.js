import { StyleSheet,Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  contentInput:{
    borderBottomWidth:1,
    borderColor:'grey'
  },
  input:{
    fontSize:16,
    padding:10,
    color:'#000',
    width: windowWidth*80/100
  },
  textBtn:{
    paddingVertical:5,
    fontSize:18,
    textAlign:'center',
    color:'#fff'
  },
  btn:{
    marginTop:10,
    borderRadius:4,
    elevation:3,
    width:150,
    backgroundColor:'#2195f3',
  }
});
