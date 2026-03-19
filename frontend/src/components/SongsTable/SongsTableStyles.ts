import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
    SongsTable:{
        overflowY:"auto",
        maxHeight:"73vh",
        minHeight:"73vh",
        direction:"rtl",
        scrollbarColor:"#C89FE6 #121212",
        scrollbarWidth:'thin',
        marginTop:"1%",
    },

    whiteBorderIcon: {
        color: "white"
    },

    PinkIcon: {
        color: "#B764DA"
    },

    IconBtn: {
        padding:"0px"
    },

    ListItm: {
        borderBottom: '1px solid rgba(150,150,150,0.2)',
        gap: "1%",
    
    },

    ListItmTxt: {
        fontSize:"1rem"
    }
}));

export default useStyles