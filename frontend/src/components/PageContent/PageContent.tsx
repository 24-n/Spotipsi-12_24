import useStyles from "./PageContentStyles";

function PageContent() {
  
  const {classes} = useStyles();
  return(
      <div className={classes.PageContent}>pagecontent</div>
  );
}
export default PageContent
