import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
    Header: {
        height: "100%",
        backgroundColor: "#313131",
        textAlign: "end",
        alignContent: "center"
    },
    title: {
        color: "#B764DA",
        fontSize: "1.2vw",
        fontFamily: "Arial, Helvetica, sans-serif",
        margin: "0",
        padding: "0 1% 0 0"
    },
    icon: {
        fontSize: "1.2vw",
    }
}));

export default useStyles