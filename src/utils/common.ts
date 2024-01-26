export const formatNumber = (number: number): string | number => {
    return number > 100000 ? `${Math.round(number / 10000)}万` : number
}

export function formatDate(date: number | Date, fmt = 'yyyy-MM-dd hh:mm:ss') {
    date = date instanceof Date ? date : new Date(date)
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        )
    }
    const o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            const str = o[k as keyof {
                'M+': number;
                'd+': number;
                'h+': number;
                'm+': number;
                's+': number;
            }] + ''
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length === 1 ? str : padLeftZero(str)
            )
        }
    }
    return fmt
}

export function formatTime(interval: number) {
    interval = interval | 0
    const minute = pad((interval / 60) | 0)
    const second = pad(interval % 60)
    return `${minute}:${second}`
}


export function pad(num: string | number, n = 2) {
    let len = num.toString().length
    while (len < n) {
        num = '0' + num
        len++
    }
    return num
}


function padLeftZero(str: string) {
    return ('00' + str).substr(str.length)
}


export function createSong(song: any) {
    const { id, name, img, artists, duration, albumId, albumName, mvId, ...rest } = song

    return {
        id,
        name,
        img,
        artists,
        duration,
        albumName,
        url: genSongPlayUrl(song.id),
        artistsText: genArtistisText(artists),
        durationSecond: formatTime(duration / 1000),
        // 专辑 如果需要额外请求封面的话必须加上
        albumId,
        // mv的id 如果有的话 会在songTable组件中加上mv链接。
        mvId,
        ...rest
    }
}

function genSongPlayUrl(id: number) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

export function genArtistisText(artists: { name: string }[]) {
    return (artists || []).map(({ name }) => name).join('/')
}