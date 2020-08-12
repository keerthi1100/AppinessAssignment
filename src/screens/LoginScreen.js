import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {connect} from 'react-redux';
import {userAuthgetAction,} from '../Redux/Actions/userAuthAction';

var emailBorderColor = '',
  passwordBorderColor = '',
  isvalidEmail = false,
  isvalidPassword = false;

export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: '',
      password: '',
    };
  }

  componentWillMount() {
    this.props.userAuthgetAction();
  
  }

  setUserIDValue = (userId) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(userId) === false) {
     
      emailBorderColor = 'red';
      isvalidEmail = false;
      this.setState({userID: userId});
    } else {
     
      emailBorderColor = 'green';
      isvalidEmail = true;
      this.setState({userID: userId});
    }
  };

  setUserPasswordValue = (userPassword) => {
    let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (reg.test(userPassword) === false) {
     
      passwordBorderColor = 'red';
      isvalidPassword = false;
      this.setState({password: userPassword});
    } else {
      passwordBorderColor = '';
      isvalidPassword = true;
      this.setState({password: userPassword});
    }
  };

  validUserInput = () => {};

  ValidateUser = () => {
    if (isvalidEmail && isvalidPassword) {
      if (this.state.userID !== this.props.userAuthDetails.userID) {
        alert('Invalid user ID');
        return;
      }

      if (this.state.password !== this.props.userAuthDetails.password) {
        alert(
          'Invalid Password' +
            this.state.password +
            'user pass  ' +
            this.props.userAuthDetails.password,
        );
        return;
      }

      if (
        this.state.userID === this.props.userAuthDetails.userID &&
        this.state.password === this.props.userAuthDetails.password
      ) {
        this.props.navigation.navigate('Landing');
      } else {
        
        alert('Somthing went wrong ..!!');
        return;
      }
    }
  };

  render() {
   
    return (
      <View style={styles.mainContainer}>
        <View style={styles.formStyle}>
          <Text style ={{fontSize:25, fontWeight:'bold'}}> Login </Text>
          <TextInput
            label="Username"
            value={this.state.userID}
            mode="outlined"
            error={!isvalidEmail}
            onChangeText={(userid) => this.setUserIDValue(userid)}
          />

          <TextInput
            label="Password"
            password={true}
            value={this.state.userPassword}
            mode="outlined"
            error={!isvalidPassword}
            onChangeText={(password) => this.setUserPasswordValue(password)}
          />

          <View style={{alignItems: 'center'}}>
            <Button
              style={styles.loginButton}
              icon="camera"
              mode="contained"
              onPress={() => this.ValidateUser()}>
              Login
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignContent: 'center',
  },

  formStyle: {
    justifyContent: 'center',
  },
  loginButton: {
    height: 60,
    width: 180,
    borderRadius: 240 / 2,
    marginTop: 5,
  },
});

const mapStateToProps = (state) => {
  return {userAuthDetails: state.userCorretCred};
};


export default connect(mapStateToProps, {userAuthgetAction})(LoginScreen);
