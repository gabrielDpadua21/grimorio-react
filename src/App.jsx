import { Routes, Route } from 'react-router-dom'
import { useGameState } from './useGameState.js'
import { STAGES, QUEST } from './data.js'
import NameGate from './components/NameGate.jsx'
import Sheet from './components/Sheet.jsx'
import StagePage from './components/StagePage.jsx'
import QuestPage from './components/QuestPage.jsx'
import Admin from './components/Admin.jsx'

function Gate({ game, children }) {
  if (!game.state.name) return <NameGate onSubmit={game.setName} />
  return children
}

export default function App() {
  const game = useGameState()

  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route
        path="/"
        element={<Gate game={game}><Sheet game={game} /></Gate>}
      />
      {Object.entries(STAGES).map(([id, data]) => (
        <Route
          key={id}
          path={`/${id}`}
          element={<Gate game={game}><StagePage id={id} data={data} game={game} /></Gate>}
        />
      ))}
      {Object.entries(QUEST).map(([id, data]) => (
        <Route
          key={id}
          path={`/${id}`}
          element={<Gate game={game}><QuestPage id={id} data={data} game={game} /></Gate>}
        />
      ))}
    </Routes>
  )
}
