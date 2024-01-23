import { request } from '@/utils'

export const getBanner = () => request.get('/banner?type=0')

export const getNewSongs = () => request.get('/personalized/newsong')

export const getPersonalized = (params: { limit: number }) => request.get(`/personalized`, { params })

export const getPersonalizedMv = () => request.get(`/personalized/mv`)