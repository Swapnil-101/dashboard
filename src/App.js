import './App.css';
import 'antd/dist/antd.css';
import Sidebar from './Component/Sidebar';
import Head from './Component/Head';



function App() {
  return (
    <div className="App" style={{fontFamily: 'Poppins'}}>
      <Head/>
      <Sidebar/>
    </div>
  );
}

export default App;
