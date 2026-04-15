import { Platform } from 'react-native'

export const BASE_BACKEND_URL  = Platform.OS === 'android' ? 'http://10.0.2.2:9999' : 'http://127.0.0.1:9999'