import { StyleSheet } from 'react-native';

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',   
    alignItems: 'center',     
    backgroundColor: '#078b75',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color:'#010054',
    textAlign:'center',
    marginBottom: 20,
  },

  card:{
    backgroundColor:'#fff',
    padding:20,
    marginBottom:15,
    borderRadius:10,
    shadowColor:'#000',
    shadowOffset:{width:0, height:4},
    shadowOpacity:0.2,
    shadowRadius:10,
    elevation:8,
    borderLeftWidth:5,
    borderLeftColor:'#00796b'

  }
});

export default styles;