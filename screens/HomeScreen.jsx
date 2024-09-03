import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.ticketNumber}>TICKET 597BFWERT</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Occupier</Text>
        <Text style={styles.value}>Reliance Fresh - Kakkanad</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <Text style={styles.label}>Destination</Text>
        <Text style={styles.value}>
          Marimuthu Processing Unit - Palarivattam
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewButtonText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.acceptButtonText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  ticketNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
  },
  section: {
    marginBottom: 15,
    marginTop: 15,
  },
  label: {
    fontSize: 14,
    color: '#8D8E8F',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  viewButton: {
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '48%',
  },
  viewButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  acceptButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '48%',
  },
  acceptButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default HomeScreen;
