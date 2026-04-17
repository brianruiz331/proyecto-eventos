const URL = 'http://localhost:3001/eventos'

export const obtenerEventos = async () => {
  const res = await fetch(URL)
  return await res.json()
}

export const crearEvento = async (evento) => {
  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(evento)
  })
}

export const eliminarEvento = async (id) => {
  await fetch(`${URL}/${id}`, {
    method: 'DELETE'
  })
}
