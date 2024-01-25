import { request } from '@/utils'

export const getListDetail = (id: number) => request.get('/playlist/detail', { params: { id } })


// 获取音乐url
export const getSongUrl = (id: number) => request.get(`/song/url?id=${id}`)

// 获取音乐详情
export const getSongDetail = (ids:number[]) => request.get(`/song/detail?ids=${ids}`)

// 歌词
export const getLyric = (id: number) => request.get(`/lyric?id=${id}`)
