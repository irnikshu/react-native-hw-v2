import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        style={styles.image}
        source={require("./assets/images/auth-bcg-image.jpg")}>        
        </ImageBackground>
      {/* <View style={styles.innerBox}>
        <Text style={styles.text}>Регистрация</Text>
      </View> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#212121",
    fontSize: 30,
  },
  innerBox: {
    width: 184,
    height: 35,
  },
  image: {
     flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  }
});
