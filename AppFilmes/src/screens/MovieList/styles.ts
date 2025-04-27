import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  list: {
    padding: 10,
  },
  movieItem: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#1A1A1A',
    height: 280,
  },
  poster: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoContainer: {
    padding: 10,
    position: 'relative',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  releaseDate: {
    color: '#FFA500',
    fontSize: 12,
    marginBottom: 4,
  },
  ratingContainer: {
    position: 'absolute',
    top: -40,
    right: 10,
    backgroundColor: '#FFA500',
    borderRadius: 12,
    width: 36,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  rating: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#FFA500',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  retryButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  retryText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
