import { useFonts } from 'expo-font';

export function WithFonts({ children }) {
    const [isDone] = useFonts({
        SecretCode: require('../../assets/fonts/secrcode.ttf'),
        Serific: require('../../assets/fonts/Sanseriffic.otf'),

    });

    return isDone && <>{children}</>;
}