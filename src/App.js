import './App.css';
import Naglowek from './Naglowek';

const  naglowek = ['Nr', 'godzina', 'Poniedziałek','Wtorek','Środa','Czwartek','Piątek'];

const plan = [
    {nr: 1, godzina: '8:00-8:45', p: 'PAD 2/2 506', w: 'PAD 2/2 506',
    s: 'PAD 2/2 506', c:'PAD 2/2 506',pt:'PAD 2/2 506'},
    {nr: 2, godzina: '8:50-9:35', nazwa: 'PAD 2/2 506'},
    {nr: 3, godzina: '9:40-10:25', nazwa: 'PAD 2/2 506'},
    {nr: 4, godzina: '10:45-11:30', nazwa: 'PAD 2/2 506'},];

const App = () => (
    <div className="App">
      <h1>Plan lekcji </h1>
        <Naglowek nag={naglowek}/>
        <Lekcja key={plan[0].nr} nazwa={plan[0]}/>
    </div>
);
export default App;