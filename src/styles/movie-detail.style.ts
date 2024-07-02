import {StyleSheet} from 'react-native';

export const movieDetail = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 5,
  },
  poster: {
    width: 200,
    height: 300,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  vote: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  overview: {
    fontSize: 14,
  },
});
