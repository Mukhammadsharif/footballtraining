import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {PicturePuzzle} from 'react-native-picture-puzzle';

export default function Puzzle() {
  const navigation = useNavigation();
  const [hidden, setHidden] = React.useState(0);
  const [pieces, setPieces] = React.useState([1, 8, 4, 3, 6, 2, 5, 0, 7]);
  const source = React.useMemo(
    () => require('../../assets/images/puzzle/puzzle-2.png'),
    [],
  );
  const renderLoading = React.useCallback(() => <ActivityIndicator />, []);

  const onChange = React.useCallback(
    (nextPieces, nextHidden) => {
      setPieces(nextPieces);
      setHidden(nextHidden);
    },
    [setPieces, setHidden],
  );
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={[styles.backgroundImage]}
        source={require('../../assets/images/background.png')}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{width: 40, height: 40, marginTop: 20, marginLeft: 20}}
            source={require('../../assets/images/icons/icons8-back-64.png')}
          />
        </TouchableOpacity>

        <Text style={styles.detailTitle}>Соберите пазл</Text>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: '85%'}}>
            <PicturePuzzle
              size={Dimensions.get('window').width - 50}
              pieces={pieces}
              hidden={hidden}
              onChange={onChange}
              source={source}
              renderLoading={renderLoading}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
