import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Movie, getPopularMovies, getImageUrl } from '../../services/api';
import styles from './styles';

type RootStackParamList = {
  MovieList: undefined;
  MovieDetails: { movieId: number };
};

const MovieList = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'MovieList'>>();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const data = await getPopularMovies();
      
      if (data && data.length > 0) {
        setMovies(data);
        setError(null);
      } else {
        setError('Nenhum filme encontrado');
      }
    } catch (err) {
      console.error('Error fetching movies:', err);
      setError('Falha ao buscar filmes. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const renderMovieItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity
      style={styles.movieItem}
      onPress={() => navigation.navigate('MovieDetails', { movieId: item.id })}
      activeOpacity={0.7}
    >
      <Image
        source={{ uri: getImageUrl(item.poster_path) }}
        style={styles.poster}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.releaseDate}>
          {item.release_date ? new Date(item.release_date).getFullYear() : 'N/A'}
        </Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>
            {item.vote_average ? item.vote_average.toFixed(1) : '?'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size={40} color="#FFA500" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchMovies}>
          <Text style={styles.retryText}>Tentar Novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default MovieList;
