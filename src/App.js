import './App.css';
import Naglowek from './Naglowek';
import Lekcja from "./Lekcja";

const  naglowek = ['Nr', 'godzina', 'Poniedziałek','Wtorek','Środa','Czwartek','Piątek'];

const plan = [
    {nr: 1, godzina: '8:00-8:45', p: 'PAD 2/2 506', w: 'PAD 2/2 506', s: 'PAD 2/2 506', c:'PAD 2/2 506',pt:'PAD 2/2 506'},
    {nr: 2, godzina: '8:50-9:35', p: 'PAD 2/2 506', w: 'PAD 2/2 506', s: 'PAD 2/2 506', c:'PAD 2/2 506',pt:'PAD 2/2 506'},
    {nr: 3, godzina: '9:40-10:25', p: 'PAD 2/2 506', w: 'PAD 2/2 506', s: 'PAD 2/2 506', c:'PAD 2/2 506',pt:'PAD 2/2 506'},
    {nr: 4, godzina: '10:45-11:30', p: 'PAD 2/2 506', w: 'PAD 2/2 506', s: 'PAD 2/2 506', c:'PAD 2/2 506',pt:'PAD 2/2 506'},
    {nr: 5, godzina: '11:35-12:20', p: 'PAD 2/2 506', w: 'PAD 2/2 506', s: 'PAD 2/2 506', c:'PAD 2/2 506',pt:'PAD 2/2 506'},
    {nr: 6, godzina: '12:25-13:10', p: 'PAD 2/2 506', w: 'PAD 2/2 506', s: 'PAD 2/2 506', c:'PAD 2/2 506',pt:'PAD 2/2 506'},
    {nr: 7, godzina: '13:15-14:00', p: 'PAD 2/2 506', w: 'PAD 2/2 506', s: 'PAD 2/2 506', c:'PAD 2/2 506',pt:'PAD 2/2 506'},
    {nr: 8, godzina: '14:05-14:50', p: 'PAD 2/2 506', w: 'PAD 2/2 506', s: 'PAD 2/2 506', c:'PAD 2/2 506',pt:'PAD 2/2 506'},];

const App = () => (
    <div className="App">
      <h1>Plan lekcji </h1>
        <Naglowek nag={naglowek}/>
  {/*<Lekcja key={plan[0].nr} nazwa={plan[0]}/>*/}
        {plan.map((d) =>
            <Lekcja key={d.nr} nazwa={d}/>
        )}
    </div>
);
export default App;