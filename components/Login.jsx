import React , { useState } from 'react';
import { StyleSheet,View, Text, TextInput, Button, TouchableOpacity, } from 'react-native';
import {styles} from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

 


const Login = ({navigation}) => {

 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [showPassword, setShowPassword] = useState(false);
 const[error,setError]=useState('');

 const loginOP = () =>
 {
  if(email === '' || password === '') {
    setError('Email and password are required.');
  } else{
    const validEmail = 'Aa';
    const validPassword = 'Aa';
  
    if(email===validEmail && password ===validPassword){
      navigation.navigate('AppList');
    }else{
      setError('Invalid email or password.Please try again.');
    }
  }
 }
 const navigateToSignUp = () => {
  navigation.navigate('Sign Up'); // Navigating to SignUp component
}

  return (
    <View  style={{paddingTop:'8%'}}>
          
    <Text style={styles.header} >Login</Text>
    <View style={styles.inputContainer}>
      <View>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputArea} >
          <Icon name="email" size={20} color="#7e7e7e" style={styles.icon} />
                  <TextInput
                      placeholder="Enter your email"
                      onChangeText={(text) => setEmail(text)}
                      value={email}

                  />
          </View>
      </View>
        
      <View>
          <Text style={styles.label} >Password</Text>
          <View style={styles.inputArea} >
          <Icon name="lock" size={20} color="#7e7e7e" style={styles.icon} />

              <TextInput
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              onChangeText={(text) => setPassword(text)}
              value={password}
              style={{ flex: 1 }}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{paddingRight:10}} >
                    <Icon name={showPassword ? 'visibility-off' : 'visibility'}  size={20} color="#7e7e7e"  />
              </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <Text style={{color:'rgb(0, 55, 107)e'}}>forgot password?</Text>
            </TouchableOpacity>
            <View style={{height:'25%'}}>
              {error ? <Text style={styles.errorText}>{error}</Text>:null}
            </View>
            <View style={{alignItems:'center', marginTop:'0%'}}>
              <TouchableOpacity
                  onPress={ loginOP }
                  style={styles.loginButton}
                
              >
                <Text  style={styles.buttonText}>sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={navigateToSignUp}>
                <Text style={{color:'rgb(0, 55, 107)e',paddingTop:'2%'}}>sign up</Text>
              </TouchableOpacity>
          </View>
      </View>
    </View>


    
    </View>
    
</View>
  )
}

export default Login
const header = StyleSheet.create({

  });