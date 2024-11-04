// components/MovieCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MovieCard = ({ movie }) => {
  const { title, poster_path } = movie;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
          }}
          style={styles.poster}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center', // Center the title below the card
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android
    width: 120, // Width of the card
    height: 180, // Height of the card
  },
  poster: {
    width: '100%',
    height: '100%', // Make the image fill the card
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    paddingVertical: 5, // Padding for the title
    fontWeight: 'bold',
    textAlign: 'center',
    width: 120, // Align title width with card width
  },
});

export default MovieCard;
