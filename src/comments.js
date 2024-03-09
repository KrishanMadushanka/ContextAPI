import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {useComments} from './useComments';

export const Comments = () => {
  const {data, isFetching, refetch} = useComments();

  const onPress = () => {
    refetch();
  };

  return (
    <View style={styles.container}>
      {isFetching ? (
        <ActivityIndicator color={'red'} />
      ) : (
        <View style={styles.bottomContainer}>
          <Text style={styles.text}>{data?.body}</Text>
          <TouchableOpacity onPress={onPress} style={{marginTop: 20}}>
            <Text>Press</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
  bottomContainer: {alignItems: 'center'},
  text: {color: 'red', marginTop: 100, paddingHorizontal: 20},
});
