import { useState, useCallback } from 'react'

const STORAGE_KEY = 'gv_state_v1'

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch (e) { /* ignore corrupt state */ }
  return { name: '', unlocked: {}, attrs: { vinculo: 0, sabedoria: 0, percepcao: 0, coragem: 0 }, completedAt: null }
}

export function useGameState() {
  const [state, setState] = useState(loadState)
  // stage ids unlocked during this app session, not persisted — drives the map's one-time pop-in
  const [justUnlockedIds, setJustUnlockedIds] = useState([])

  const persist = useCallback((next) => {
    setState(next)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  }, [])

  const setName = useCallback((name) => {
    persist({ ...state, name })
  }, [state, persist])

  // unlock a stage and grant its attribute exactly once; returns whether this call was the first unlock
  const unlockAndGrant = useCallback((stageId, attr) => {
    if (state.unlocked[stageId]) return false
    const next = {
      ...state,
      unlocked: { ...state.unlocked, [stageId]: true },
      attrs: { ...state.attrs, [attr]: (state.attrs[attr] || 0) + 1 }
    }
    persist(next)
    setJustUnlockedIds((prev) => (prev.includes(stageId) ? prev : [...prev, stageId]))
    return true
  }, [state, persist])

  const ackJustUnlocked = useCallback((stageId) => {
    setJustUnlockedIds((prev) => prev.filter((id) => id !== stageId))
  }, [])

  const markCompleted = useCallback(() => {
    persist({ ...state, completedAt: Date.now() })
  }, [state, persist])

  const isUnlocked = useCallback((stageId) => !!state.unlocked[stageId], [state])

  return { state, setName, unlockAndGrant, markCompleted, isUnlocked, justUnlockedIds, ackJustUnlocked }
}
