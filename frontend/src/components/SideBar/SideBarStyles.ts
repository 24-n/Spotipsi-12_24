import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
    SideBar: {
        backgroundColor: "#121212",
        height: "100%",
        textAlign: "right",
        alignContent: "top",
    },
    sidebtn: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "1vw",
        margin: "0",
        padding: "5% 0 5% 0",
        cursor: "pointer",
        "&:active,&:hover": {
            backgroundColor: "#2D2032",
        }
    },
    icon: {
        color: "#B3B3B3",
        margin: "0 6% 0 12%"
    }
}));

export default useStyles
