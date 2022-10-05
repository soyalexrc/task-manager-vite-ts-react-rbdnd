import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
import ScrollToTop from "./shared/components/ScrollToTop";
import Router from "./routes";
import {SnackbarProvider} from 'notistack'

function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <ScrollToTop />
      <SnackbarProvider preventDuplicate maxSnack={4}  autoHideDuration={2000} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
        <Router />
      </SnackbarProvider>
    </ThemeConfig>
  );
}

export default App;
