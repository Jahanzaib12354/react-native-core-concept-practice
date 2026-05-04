import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 20,
  },

  title: {
    fontSize: 16,
    color: '#555',
    marginTop: 15,
  },

  Value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 5,
  },

  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // android shadow
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
});

export default styles;