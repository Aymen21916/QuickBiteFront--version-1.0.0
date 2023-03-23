import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


const HomePage = () => {

const logIn = async () => {
  console.log('Log in');
}

const signUp = async () => {
  console.log('Sign up');
}

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/143.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Eating, drinking, enjoying</Text>
        <Text style={styles.text2}>Log in or Sign up to explore delecious food and meals</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.login]} onPress={logIn}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.signup]} onPress={signUp}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "90%",
    height: "50%",
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: "80%",
  },
  textContainer: {
    width: '90%',
    alignItems: 'center',
  },
  text1: {
    fontSize: 19,
    marginBottom: 20,
    fontFamily: 'PJS-Bold',
  },
  text2: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 70,
    fontFamily: 'PJS-Medium',
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 55,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  signup: {
    backgroundColor: '#ff0087',
  },
  login: {
    backgroundColor: '#ffffff',
    borderColor: '#ff0087',
    borderWidth: 1.25,
    marginBottom: 15,
  },
  loginText: {
    color: '#ff0087',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomePage;