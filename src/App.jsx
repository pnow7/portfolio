import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import './App.css';

function App() {
    return (
        <ThemeProvider>
            <Layout />
        </ThemeProvider>
    );
}

export default App;
