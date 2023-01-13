import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
  Dimensions,
  StyleSheet,
} from 'react-native';
// import {connect} from 'react-redux';
// import * as actions from '../../Store/actions/index';
import {useNavigation} from '@react-navigation/native';

import ColonyOptionBtn from '../../Components/Button';
import Card from './card/Card';
import Indicator from './Indicator';

const {height} = Dimensions.get('screen');

const ColonyData = props => {
  const {token, user} = props.user;
  const [visible, setVisible] = useState(false);
  const [colonyAddress, setColonyAddress] = useState(user.colonyName);
  const navigation = useNavigation();

  const menuHandler = () => {
    if (!props.locations.length) {
      props.fetchLocationsData(token, 'locationsForUser', 'user');
    }
    setVisible(prev => !prev);
  };

  const closeMenuHandler = () => setVisible(false);

  const renderItem = ({item, index}: any) => (
    <View>
      <TouchableOpacity
        style={styles.singleItem}
        onPress={() => {
          props.updateLocation({colonyName: item}, token);
          setColonyAddress(item);
          setVisible(false);
          navigation.goBack();
        }}>
        <Text>
          {`${index + 1}  `} {item}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Pressable style={styles.wrapper} onPress={closeMenuHandler}>
      <Card style={styles.menuCard}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Your Colony Address</Text>
        </View>
        <ColonyOptionBtn
          color="white"
          style={styles.button}
          onPress={menuHandler}
          title={colonyAddress}
        />
      </Card>
      {visible && (
        <Card style={styles.listWrapper}>
          {!props.isLoading ? (
            <FlatList
              keyExtractor={(k, i) => k + i}
              data={props.locations}
              renderItem={renderItem}
            />
          ) : (
            <Indicator style={styles.indicator} />
          )}
        </Card>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  menuCard: {
    width: '90%',
    height: 150,
    marginTop: '10%',
    marginHorizontal: 20,
    zIndex: 700,
  },
  singleItem: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  titleWrapper: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
  },
  button: {
    backgroundColor: '#1aa1a1',
    borderRadius: 20,
    marginHorizontal: 70,
    marginTop: 20,
  },
  listWrapper: {
    width: '60%',
    height: height <= 650 ? '45%' : '50%',
    position: 'absolute',
    left: 70,
    top: height <= 650 ? '35%' : '28%',
  },
  indicator: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const mapStateToProps = state => ({
  user: state.user,
  locations: state.locations.locations,
  isLoading: state.locations.isLoading,
});

const mapDispatchToProps = dispatch => ({
  updateLocation: (data, token) =>
    dispatch(actions.updateDetailes(data, token)),
  fetchLocationsData: (token, need, through) =>
    dispatch(actions.fetchLocationsData(token, need, through)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColonyData);
