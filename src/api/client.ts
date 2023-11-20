import { Player } from '@/src/store/slices/players'

// export const fetchPlayers = async (): Promise<Player[]> => {
//   const response = await fetch('/api/players', { method: 'GET' })
//   const data = await response.json()
//   return data
// }

export const addClient = async (email: string): Promise<boolean> => {
  const response = await fetch('/api/client', {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.status === 200
}

// export const deletePlayer = async (uuidPlayer: string): Promise<boolean> => {
//   const response = await fetch('/api/players', {
//     method: 'DELETE',
//     body: JSON.stringify({ uuidPlayer }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   return response.status === 200
// }

// export const updatePlayer = async (uuid: string, playerName: string): Promise<boolean> => {
//   const response = await fetch(`/api/players/${uuid}`, {
//     method: 'PUT',
//     body: JSON.stringify({ playerName }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   return response.status === 200
// }

// export const savePlayer = async (player: Player): Promise<boolean> => {
//   const response = await fetch(`/api/players/${player.uuidPlayer}`, {
//     method: 'PUT',
//     body: JSON.stringify(player.playerData),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   return response.status === 200
// }
