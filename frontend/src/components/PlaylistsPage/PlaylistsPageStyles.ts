import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
    playlists: {
        overflowY: "auto",
        maxHeight: "73vh",
        direction: "rtl",
        scrollbarColor: "#C89FE6 #121212",
        scrollbarWidth: 'thin',
        marginTop: "1%",
        fontFamily: "Arial, Helvetica, sans-serif",
    },
    playlistsTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    listItem: {
        height: "100%",
        width: "100%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        justifyContent: "left",
        margin: "0",
        "&:hover": {
            backgroundColor: "#2D2032"
        }
    },
    H1:
    {
        margin: "0",
        color: "white"
    },
    h: {
        margin: "0",
    },
    p: {
        margin: "0",
        fontSize: "0.8vw",
    },
    addPlaylisBtn: {
        "color": "#B764DA",
        variant: "outlined",
        borderRadius: "50px",
        borderStyle: "solid",
        borderWidth: "1px",
    },
    dialog: {
        height: "100%",
        width: "100%",
        color: "white",
        backgroundColor: "#424242",
    },
    cancellation: {
        color: "#B764DA",
    },
    createAndName: {
        color: "white",
    }
}));

export default useStyles