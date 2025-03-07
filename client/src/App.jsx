import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserLIst from './components/UserList';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <UserLIst />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
