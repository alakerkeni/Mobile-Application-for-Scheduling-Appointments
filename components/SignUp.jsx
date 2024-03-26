import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { styles } from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [age, setAge] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const signUpOP = () => {
    if (email === '' || password === '' || name === '' || familyName === '' || age === '') {
      setError('All fields are required.');
    } else {
      // Perform sign-up logic here
      navigation.navigate('AppList');
    }
    setEmail('');
    setPassword('');
    setName('');
    setFamilyName('');
    setAge('');
  }

  const navigateToSignIn=()=>{
    navigation.navigate('Sign in');
  }

  return (
    <ScrollView style={{ flex: 1 , height:'120%'}}>

    <View style={{ paddingTop: '8%' }}>
      <Text style={styles.header}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.label}>Name</Text>
          <View style={styles.inputArea}>
            <Icon name="person" size={20} color="#7e7e7e" style={styles.icon} />
            <TextInput
              placeholder="Enter your name"
              onChangeText={(text) => setName(text)}
              value={name}
            />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Family Name</Text>
          <View style={styles.inputArea}>
            <Icon name="person" size={20} color="#7e7e7e" style={styles.icon} />
            <TextInput
              placeholder="Enter your family name"
              onChangeText={(text) => setFamilyName(text)}
              value={familyName}
            />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputArea}>
            <Icon name="email" size={20} color="#7e7e7e" style={styles.icon} />
            <TextInput
              placeholder="Enter your email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              keyboardType="email-address"
            />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputArea}>
            <Icon name="lock" size={20} color="#7e7e7e" style={styles.icon} />
            <TextInput
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              onChangeText={(text) => setPassword(text)}
              value={password}
              style={{ flex: 1 }}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ paddingRight: 10 }}>
              <Icon name={showPassword ? 'visibility-off' : 'visibility'} size={20} color="#7e7e7e" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.label}>Age</Text>
          <View style={styles.inputArea}>
            <Icon name="date-range" size={20} color="#7e7e7e" style={styles.icon} />
            <TextInput
              placeholder="Enter your age"
              onChangeText={(text) => setAge(text)}
              value={age}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.SignUpButton}>
          <View style={{height:30, marginBottom:'5%'}}>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
          <TouchableOpacity onPress={signUpOP} style={styles.loginButton}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToSignIn}>
            <Text style={{ color: 'rgb(0, 55, 107)e', marginTop: '1%' }}>Already have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
  )
}

export default SignUp;
