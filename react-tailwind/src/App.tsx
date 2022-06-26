import './App.css';
import AuthButtons from './components/AuthButtons/Index';
import Header from './components/Header/Index';
import Nav from './components/Nav/Index';
import Trending from './components/Trending/Index';

function App() {
    return (
        <div className='grid md:grid-cols-5'>
            <Nav />
            <main className='px-12 py-6 md:col-span-4 bg-cyan-50'>
                <AuthButtons />
                <Header />
                <Trending />
            </main>
        </div>
    );
}

export default App;
