import {Player} from '@/src/store/slices/players'

export const fetchPlayers = async (): Promise<Player[]> => {
  const response = await fetch('/api/players', {method: 'GET'})
  const data = await response.json()
  return data
}

export const addPlayer = async (playerName: string): Promise<boolean> => {
  const response = await fetch('/api/players', {
    method: 'POST',
    body: JSON.stringify({playerName}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.status === 200
}

export const deletePlayer = async (uuidPlayer: string): Promise<boolean> => {
  const response = await fetch('/api/players', {
    method: 'DELETE',
    body: JSON.stringify({uuidPlayer}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.status === 200
}