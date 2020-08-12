import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import ListingUserData from './components/ListingUserData';

export class LandingScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <View>
        <ScrollView>
          <Text style={{fontSize: 32}}> User Details </Text>
          <ListingUserData userData={this.props.userAuthDetails} />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {userAuthDetails: state.userDetails};
};

export default connect(mapStateToProps, null)(LandingScreen);
