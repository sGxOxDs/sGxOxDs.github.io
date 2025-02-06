import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { theme } from './theme';
import { SGX_AnimatedButton } from './Button';

export default function NotFoundScreen() {
    const router = useRouter();
    
    return (
        <View style={theme.container}>
            <SGX_AnimatedButton 
                name="返回主頁"
                press={() => router.replace('/')}
            />
        </View>
    );
}
