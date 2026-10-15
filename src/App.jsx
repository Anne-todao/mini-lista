import { useState } from 'react';

export default function App() {
 
  const [inputTexto, setInputTexto] = useState('');
  const [tarefas, setTarefas] = useState([]);


  const adicionarTarefa = (e) => {
    e.preventDefault();
    if (!inputTexto.trim()) return; 

    setTarefas([...tarefas, inputTexto]);
    setInputTexto(''); 
  };

  const removerTarefa = (indexParaRemover) => {
    const novasTarefas = tarefas.filter((_, index) => index !== indexParaRemover);
    setTarefas(novasTarefas);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>Mini Lista de Tarefas</h2>

    
      <form onSubmit={adicionarTarefa} style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <input
          type="text"
          value={inputTexto}
          onChange={(e) => setInputTexto(e.target.value)}
          placeholder="Digite uma tarefa..."
          style={{ flex: 1, padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Adicionar
        </button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tarefas.map((tarefa, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          >
            <span>{tarefa}</span>
            <button
              onClick={() => removerTarefa(index)}
              style={{ backgroundColor: '#ff4d4d', color: '#fff', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}