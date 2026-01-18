import styled from 'styled-components';

const Title = styled.h1`
  color: #0d6efd;
  margin-top: 40px;
`;

function App() {
  return (
    <div>
      <Title>Mi primera web</Title>
      <p className='lead'>Hecha con React + TypeScript</p>
    </div>
  )
}

export default App
