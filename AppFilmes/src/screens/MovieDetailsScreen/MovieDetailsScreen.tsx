import React, { useEffect, useState, useCallback } from 'react';
import {
  ScrollView,
  ActivityIndicator,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { getMovieDetails, MovieDetails, getImageUrl } from '../../services/api';
import styles from './styles';

type RootStackParamList = {
  MovieList: undefined;
  MovieDetails: { movieId: number };
};

type MovieDetailsScreenRouteProp = RouteProp<RootStackParamList, 'MovieDetails'>;

type Props = {
  route: MovieDetailsScreenRouteProp;
};

const { width } = Dimensions.get('window');

const MovieDetailsScreen: React.FC<Props> = ({ route }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovieDetails = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getMovieDetails(movieId);
      setMovie(data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar detalhes do filme');
    } finally {
      setLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#FFA500" />
      </View>
    );
  }

  if (error || !movie) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error || 'Filme não encontrado'}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchMovieDetails}>
          <Text style={styles.retryText}>Tentar Novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: getImageUrl(movie.poster_path) }}
        style={styles.poster}
        resizeMode="cover"
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>
        
        <View style={styles.detailsRow}>
          <Text style={styles.detailText}>
            {movie.release_date?.split('-')[0] || 'N/A'} • {movie.runtime || '--'} min
          </Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{movie.vote_average?.toFixed(1) || '?'}</Text>
          </View>
        </View>

        <View style={styles.genresContainer}>
          {movie.genres?.map(genre => (
            <View key={genre.id} style={styles.genre}>
              <Text style={styles.genreText}>{genre.name}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Sinopse</Text>
        <Text style={styles.overview}>
          {movie.overview || 'Sinopse não disponível'}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetailsScreen;
