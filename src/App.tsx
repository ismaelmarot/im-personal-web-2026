import styled from 'styled-components';

const Title = styled.h1`
  color: #0d6efd;
  margin-top: 40px;
`;

function App() {
  return (
    <div className="container text-center">
      <Title>Mi primera web</Title>
      <p className='lead'>
        Hecha con React + TypeScript
      </p>

      <button className="btn btn-primary">
        Botón Bootstrap
      </button>
    </div>
  )
}

export default App
