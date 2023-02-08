import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
// import { Camera } from 'react-native-vision-camera';

export default function App() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {isCameraOpen ? (
          <Text>Camera!</Text>
        // <Camera style={styles.camera} />
      ) : (
        <View>
          <Text style={styles.text}>Open the camera</Text>
          <Button
            title="Open camera"
            onPress={() => setIsCameraOpen(true)}
            color="#333"
          />
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    height: '100%',
    width: '100%',
  },
});
