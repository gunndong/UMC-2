import './App.css';
import { useState } from 'react';
import Input from './components/Input';  // Input 컴포넌트 임포트
import Button from './components/Button'; // Button 컴포넌트 임포트

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' },
    { id: 2, task: '희연 혜원 혜윤 건 찬민' },
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    const newId = todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;  // 새로운 ID 생성
  
    setTodos((prev) => [
      ...prev,
      { id: newId, task: text },
    ]);
    setText('');  // 입력 필드 초기화
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="todo-list">
        <Input value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={addTodo}>
          할 일 등록
        </Button>
      </form>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            {editingId !== todo.id ? (
              <>
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </>
            ) : (
              <>
                <p>{todo.id}.</p>
                <Input value={editText} onChange={(e) => setEditText(e.target.value)} />
              </>
            )}
            <Button onClick={() => deleteTodo(todo.id)}>
              삭제하기
            </Button>
            {editingId === todo.id ? (
              <Button onClick={() => updateTodo(editingId, editText)}>
                수정 완료
              </Button>
            ) : (
              <Button onClick={() => setEditingId(todo.id)}>
                수정 진행
              </Button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
