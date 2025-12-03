// src/features/auth/screens/LoginScreen.tsx
import Input from '@/ui/components/Input';
import { Colors } from '@/ui/theme/colors';
import Fonts from '@/ui/theme/fonts';
import { images } from '@/utils/images';
// import { getActionFromState } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View, KeyboardAvoidingView, Keyboard, Image, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getProportionalFontSize } from '@/ui/theme/typography';
import CommonButton from '@/ui/components/CommonButton';
import { CommonActions } from '@react-navigation/native';
import { useLoginMutation } from '../api/authApi';
// import { API_BASE_URL } from '@env';

interface Props {
  navigation: any;
}

const LoginScreen: React.FC<Props> = (props) => {
  const [username, setUsername] = React.useState(''); // was "email"
  const [pwd, setPwd] = React.useState('');
  const [formError, setFormError] = React.useState<string | null>(null);

  const [login, { isLoading, error }] = useLoginMutation();

  console.log('FINAL URL =', `${API_BASE_URL}/patient-login`);

  const handleLogin = async () => {
    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      })
    );
    setFormError(null);

    // Basic validation
    if (!username?.trim() || !pwd) {
      setFormError('Please enter both phone/username and password.');
      return;
    }

    Keyboard.dismiss();

    try {
      const res = await login({ user_name: username.trim(), password: pwd }).unwrap();
      console.log('Logged in:', res);
      props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
      );
    } catch (e: any) {
      console.log('Login error:', e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={false}
      />

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {/* <Text>{formError}</Text> */}
          <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
          >
            <Image style={styles.logo} source={images.logo} />
            <View style={styles.mainView}>
              <Text style={styles.welcomeText}>Welcome</Text>
              <Text style={styles.loginText}>Place login to continue</Text>

              <Input
                // label="Email"
                placeholder="Phone Number"
                value={username}
                onChangeText={setUsername}
                containerStyle={styles.fieldContainer}
                inputWrapperStyle={styles.inputWrapper}
                inputStyle={styles.input}
                // helperText="We’ll never share your email."
              />

              <Input
                // label="Password"
                placeholder="Password"
                value={pwd}
                onChangeText={setPwd}
                isPassword
                containerStyle={styles.fieldContainer}
                inputWrapperStyle={styles.inputWrapper}
                inputStyle={styles.input}
                // errorText={pwd.length < 6 ? 'Password is too short' : undefined}
              />

              <TouchableOpacity style={styles.forgetPass}>
                <Text style={styles.forgetPassText}>Forgot Your Password?</Text>
              </TouchableOpacity>
 
              <CommonButton
                title={isLoading ? 'Logging in…' : 'Login'}
                variant="primary"
                onPress={handleLogin}
                loading={isLoading}
                disabled={isLoading}
                fullWidth={false}
                style={styles.button}
                textStyle={styles.buttonText}
              />

              <CommonButton
                title="Sign Up"
                variant="primary"
                onPress={() => { }}
                loading={false}
                disabled={false}
                fullWidth={false}
                style={styles.signupButton}
                textStyle={styles.buttonText}
                backgroundColor={Colors.white}
                textColor={Colors.black}

              />
            </View>

            <View style={styles.continueView}>
              <View style={styles.orView} />
              <Text style={styles.orText}>Continue with</Text>
              <View style={styles.orView} />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: Colors.white,
    // justifyContent: 'center', 
    // gap: 8 
  },
  logo:{
    alignSelf: 'center',
    marginTop: 30
  },
  mainView:{
    margin:20,
    alignItems: 'center',
  },
  welcomeText: {
    color: Colors.black,
    fontFamily: Fonts.font_700,
    fontSize: 24,
    // paddingVertical: 20
  },
  loginText: {
    color: Colors.grey,
    fontSize: getProportionalFontSize(16),
    paddingVertical: 15
  },
  fieldContainer: {
    marginVertical: 10,
  },
  inputWrapper: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.grey,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
    width: "100%"
  },
  input: {
    // “CSS-like” but in JS
    paddingVertical: 12,
   
  },
  forgetPass: {
    alignSelf: 'flex-start'
  },
  forgetPassText:{
    color: Colors.black,
    fontSize: getProportionalFontSize(14),
    fontFamily: Fonts.font_400,
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
  button:{
    marginTop: 20,
  },
  buttonText:{
    width: "100%"
  },
  signupButton: {
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 8,
    borderBlockColor: Colors.primary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueView:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 15
  },
  orView: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.black,
  },
  orText: {
    marginHorizontal: 10,
    color: Colors.grey,
    fontSize: getProportionalFontSize(14),
  },

});
