export type RootStackParamList = {
    MovieList: undefined;
    MovieDetails: { movieId: number };
  };
  
  declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }