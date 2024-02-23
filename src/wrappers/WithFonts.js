import { useFonts } from 'expo-font';

export function WithFonts({ children }) {
    const [isDone] = useFonts({
        SecretCode: require('../../assets/fonts/secrcode.ttf'),

    });

    return isDone && <>{children}</>;
}