import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    //  justifyContent: 'space-between', 
    padding: 20,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#555',
    marginTop: 15,
  },
  input:{
  fontSize: 16,
    color: '#555',
    marginTop: 15,
  },
  valuetitle: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  padding: 10,
  marginBottom: 15,
  backgroundColor: '#fff',
  
},

  Value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 5,
  },

  switchs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, 
  },

  switchtext: {
    fontSize: 16,
    color: '#333',
  },

  option: {
    fontSize: 15,
    color: '#666',
    marginTop: 20,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },

   buttonContainer: {
  position: 'absolute',
  bottom: 20,
  left: 20,
  right: 20,
},

 
});

export default styles;