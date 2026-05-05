import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f7fa',
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
  backgroundColor: '#fff'
},

  valueText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    elevation: 2,
  },

  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  button: {
    marginTop: 30,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
  position: 'absolute',
  bottom: 20,
  left: 20,
  right: 20,
},
});

export default styles;