import { Platform } from 'react-native'

export const IS_MAESTRO_DEV =
  process.env.EXPO_PUBLIC_MAESTRO_DEV === 'true'

export const BASE_BACKEND_URL =
  process.env.EXPO_PUBLIC_BASE_BACKEND_URL
  ?? (Platform.OS === 'android'
    ? 'http://10.0.2.2:9999'
    : 'http://127.0.0.1:9999')
