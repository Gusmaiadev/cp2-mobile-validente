import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieList from '../screens/MovieList/MovieList';
import MovieDetails from '../screens/MovieDetailsScreen/MovieDetailsScreen';

export type RootStackParamList = {
  MovieList: undefined;
  MovieDetails: { movieId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MovieList"
      screenOptions={{
        headerStyle: { backgroundColor: '#000000' },
        headerTintColor: '#FFA500',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          color: '#FFFFFF',
        },
        contentStyle: {
          backgroundColor: '#000000',
        },
      }}
    >
      <Stack.Screen 
        name="MovieList" 
        component={MovieList} 
        options={{ title: 'Lista de Filmes' }}
      />
      <Stack.Screen 
        name="MovieDetails" 
        component={MovieDetails} 
        options={{ title: 'Detalhes do Filme' }}
      />
    </Stack.Navigator>
  );
};