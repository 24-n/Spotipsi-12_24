import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
    SongsTable:{
        overflowY:"auto",
        maxHeight:"73vh",
        direction:"rtl",
        scrollbarColor:"#C89FE6 #121212",
        scrollbarWidth:'thin',
        marginTop:"1%"
      
       
    }
}));

export default useStyles