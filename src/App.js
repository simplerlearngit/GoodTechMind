import './App.css';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation'
import Map from './Map';
import Philosophy from'./Philosophy';
import Product from './Product'
import Counter from './Counter'
function App() {
  return (
    <div className="App">
      <Philosophy/>
      <ContactForm/>
      <ContactInformation/>
      <Map/>
      <Counter/>
      <Product/>
    </div>
  );
}

export default App;
