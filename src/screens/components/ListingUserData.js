import React from 'react';
import {FlatList, StyleSheet, Text, StatusBar, View} from 'react-native';
import { Card, Title, Paragraph} from 'react-native-paper';

export default function ListingUserData(props) {
  const Item = ({item}) => (
    <View style={styles.item}>
      <Card>
        <Card.Content>
          <Title>{item.name} Details</Title>
          <Paragraph>Age :{item.age}</Paragraph>
          <Paragraph>Gender :{item.gender}</Paragraph>
          <Paragraph>Email :{item.email}</Paragraph>
          <Paragraph>Phone number :{item.phoneNo}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );

  const renderItem = ({item}) => <Item item={item} />;

  return (
    <View>
      <FlatList
        data={props.userData.user}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    borderWidth: 0.5,
  },

  title: {
    fontSize: 32,
  },
});
