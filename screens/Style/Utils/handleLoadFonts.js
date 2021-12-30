/* Expo lib for load Fonts */
import * as Font from 'expo-font';

/* custom fonts for application */
const customFonts = {
    'SanFrancisco-Regular': require('../../../assets/fonts/SanFrancisco/SanFrancisco-Regular.ttf'),
    'SanFrancisco-Medium': require('../../../assets/fonts/SanFrancisco/SanFrancisco-Medium.ttf'),
    'SanFrancisco-Semibold': require('../../../assets/fonts/SanFrancisco/SanFrancisco-Semibold.ttf'),
    'SanFrancisco-Bold': require('../../../assets/fonts/SanFrancisco/SanFrancisco-Bold.ttf'),
}
  
/* function for load fonts */
export async function heandlerFontsLoad() {
    await Font.loadAsync(customFonts);
    return true; 
}
