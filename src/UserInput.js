import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { updateUsername, deletePin, initialState } from './redux/user';
import { Button, ThemeProvider, Header, Input } from 'react-native-elements';


class UserInput extends React.Component {
  state = {
    userpin: this.props.user.userpin || '',
  };

  componentDidMount(){
    this.setState({userpin: ''});
  }

  handleChange = userpin => {
    this.setState({ userpin });
  };

  handleSubmit = () => {
    if(this.state.userpin !== this.props.user.userpin){
      if (this.props.user.userpin !== '') {
        alert('Pincode is not correct! You must to enter new one!');
      }
      this.props.dispatch(updateUsername(this.state.userpin));
    } else if (this.state.userpin !== '') {
      alert('Pincode is correct!');
    }

    this.setState({userpin: ''});

  };

  handleDeletePin = () => {
    this.props.dispatch(deletePin(this.state.userpin));
  };

  render() {
    let buttonTitle = 'Check pincode';

    if (this.state.userpin === '') {
      buttonTitle = 'Add pincode'
    }

    return (
      <ThemeProvider>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'PinCode Checker', style: { color: '#fff', fontSize: 20 } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <View style={styles.container}>
          <Input
            placeholder="Choose a pincode"
            onChangeText={this.handleChange}
            value={this.state.userpin}
            secureTextEntry={true}
            containerStyle={{marginBottom: 30}}
          />
          <Button
            title={buttonTitle}
            onPress={this.handleSubmit}
            containerStyle={{marginBottom: 20}}
            />
          <Button
            title="Delete pincode"
            onPress={this.handleDeletePin}
            containerStyle={{marginBottom: 20}}
            />
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    width: '90%'
  },
});

const mapStateToProps = state => ({
  user: state.user,
});


export default connect(mapStateToProps)(UserInput);
