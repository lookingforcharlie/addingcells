import { useState } from 'react';
import './App.css';

function App() {
  const [myArr, setMyArr] = useState(['a', 'b', 'c ']);

  // modify the single cell value
  // retrieve the index of the target value from onClick event
  const handleInput = (newValue: string, idxForUpdate: number) => {
    // console.log(newValue);
    setMyArr((prev) =>
      prev.map((item, idx) => (idx === idxForUpdate ? (item = newValue) : item))
    );
  };

  // Adding cell in between cells on the screen
  // use slice to add 3 pieces to the array
  const HandleAddingCell = (idx: number) => {
    console.log(idx);
    // slice() method returns a shallow copy of a portion of an array
    // ...prev.slice(0, idx + 1): first piece, '': piece needs to be added, ...prev.slice(idx + 1): the rest piece
    // wrapped by []
    setMyArr((prev) => [...prev.slice(0, idx + 1), '', ...prev.slice(idx + 1)]);
    // Can't use splice here, it will modify the original array, can't do it in React
    // setMyArr((prev) => [...prev.splice(idx + 1, 0, ' ')]);
  };

  return (
    <div className='App'>
      <div className='relative flex flex-wrap'>
        {/* loop through the array to render a series of cells */}
        {myArr.map((item, idx) => {
          return (
            <div
              key={crypto.randomUUID()}
              className='border-2 px-10 py-8 rounded-xl'
            >
              {/* controlled form with value and onChange */}
              <input
                onChange={(e) => handleInput(e.currentTarget.value, idx)}
                value={item}
                className='w-8'
              />
              {idx < myArr.length - 1 && (
                <div
                  onClick={() => HandleAddingCell(idx)}
                  className='relative border -top-6 left-16 hover:cursor-pointer h-full w-2'
                >
                  +
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* exhibit the cell value on the screen */}
      <div className='mt-12 text-2xl'>{myArr.join('')}</div>
    </div>
  );
}

export default App;
