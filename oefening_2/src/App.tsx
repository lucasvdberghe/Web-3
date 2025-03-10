import './App.css'
import HeaderComponent from './components/HeaderComponent';
import PartComponent from './components/PartComponent';
import ListComponent, { Technology } from './components/ListComponent';

function App() {
  const course: string = 'Web 3';
  const part1: string = 'Introduction';
  const exercises: number = 15;

  const part2: string = 'ES Syntax';
  const exercises2: number = 14;

  const technologies: Technology[] = [
    {
      id: 1,
      name: 'Node.js'
    },
    {
      id: 2,
      name: 'JavaScript'
    },
    {
      id: 3,
      name: 'Express'
    },
    {
      id: 4,
      name: 'React'
    }    
  ];

  return (
    <div>
      <HeaderComponent course={ course } />
      <PartComponent part={part1} exercises={exercises} />
      <PartComponent part={part2} exercises={exercises2} />
      <ListComponent technologies={technologies} />
      <p>
        Number of exercises {exercises + exercises2}
      </p>
    </div>
  )
}

export default App
