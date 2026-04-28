import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  scroll:{
  flexGrow: 1,
    padding: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
    
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
  },

  button: {
    backgroundColor: '#323080',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

   createButton: {
    backgroundColor: '#0c0101',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  createText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  registerBtn:{
    backgroundColor:'green'
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
  },
  img:{
      width: 350,
       height: 150, 
       borderRadius:50
        
      }
  
});
export default styles;