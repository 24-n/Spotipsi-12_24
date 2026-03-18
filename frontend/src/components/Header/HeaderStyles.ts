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
        fontFamily: "Arial, Helvetica, sans-serif",
        margin: "0",
        padding: "0 12px 0 0"
    }
}));

export default useStyles