import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    console.clear();
feature-add
    console.log("МЕНЮ");
    console.log("МЕНЮ-");
 final
    console.log("1. Ввести два числа");
    console.log("2. Выполнить сложение");
    console.log("3. Выполнить вычитание");
    console.log("4. Выполнить деление");
    console.log("5. Возвести число в степень");

    const num1 = 10;
    const num2 = 5;
feature-add

    console.log(`Введенные числа: ${num1} и ${num2}`);
 final
    console.log(`Сложение: ${num1 + num2}`);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;