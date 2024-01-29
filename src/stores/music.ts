import { defineStore } from 'pinia'

export const useStore = defineStore('music', {
    state: () => ({
        currentSong: null,
        songs: [] as any,
    }),
    actions: {
        setCurrentSong(song: any) {
            this.currentSong = song
        },
        addSongs(songs: any) {
            songs = Array.isArray(songs) ? songs : [songs]
            console.log('songs',songs);
            this.songs.push(...songs)
        },
        setNewSongs(songs: any) {
            this.songs = songs
        },
    },
    getters: {
        currentIndex: (state) => state.songs.indexOf(state.currentSong),
    },
})