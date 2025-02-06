import { Linking, Text, View } from "react-native";
import { theme } from '../theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SGX_AnimatedButton } from "../Button";


export default function Index() {
  return (
    <View
      style={theme.container}
    >
      <SGX_AnimatedButton
        name={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name={'logo-github'} color={"#fff"} size={24} />
            <Text style={theme.text}> Github</Text>
          </View>
        }
        press={() => Linking.openURL('https://github.com/sGxOxDs')}
      />
      <SGX_AnimatedButton
        name={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name={'logo-twitch'} color={"#fff"} size={24} />
            <Text style={theme.text}> Twitch</Text>
          </View>
        }
        press={() => Linking.openURL('https://www.twitch.tv/sgxoxds')}
      />
      <SGX_AnimatedButton
        name={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name={'logo-youtube'} color={"#fff"} size={24} />
            <Text style={theme.text}> Twitch</Text>
          </View>
        }
        press={() => Linking.openURL('https://www.youtube.com/@sGxOxDs')}
      />


    </View>
  );
}
