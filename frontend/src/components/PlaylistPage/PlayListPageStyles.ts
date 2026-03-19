import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
    Playlist: {
        height: "100%",
        color: "white"

    },
    H1:
    {
        textAlign: "end",
        margin: "0"

    },
    playlistsTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

    },
    ArrowBtn: {
        color: "white"
    }

}));

export default useStyles