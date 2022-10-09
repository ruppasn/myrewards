import {Dimensions} from 'react-native';

export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const PROFILE_SECTION_HEIGHT = 130;
export const CONTENT_SECTION_HEIGHT =
  DEVICE_HEIGHT - PROFILE_SECTION_HEIGHT - 23;
