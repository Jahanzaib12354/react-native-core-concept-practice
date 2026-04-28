import { StyleSheet } from 'react-native';

const regis= StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },

  btn: {
    backgroundColor: 'blue',
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },

  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },

  link: {
    textAlign: 'center',
    marginTop: 15,
    color: 'blue',
  },

  loginBtn:{
    backgroundColor:'green'
  },
});

export default regis;