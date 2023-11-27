import { Player } from '@/store/slices/players'

// export const fetchPlayers = async (): Promise<Player[]> => {
//   const response = await fetch('/api/players', { method: 'GET' })
//   const data = await response.json()
//   return data
// }

export const registerUser = async (user: object): Promise<boolean> => {
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ user }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.status === 200
}

export const authUser = async (user: object): Promise<boolean> => {
  const response = await fetch('/api/auth', {
    method: 'POST',
    body: JSON.stringify({ user }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  console.log(data)
  localStorage.setItem('jwt', data.token)
  return response.status === 200
}

export const me = async (): Promise<boolean> => {
  const token = localStorage.getItem('jwt')
  const response = await fetch('/api/auth', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  const data = await response.json()
  console.log(data)
  return response.status === 200
}

me()


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
