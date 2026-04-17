import { useState } from 'react'

export default function EventForm({ onAdd }) {
  const [nombre, setNombre] = useState('')
  const [fecha, setFecha] = useState('')

  const enviar = (e) => {
    e.preventDefault()

    onAdd({
      nombre,
      fecha
    })

    setNombre('')
    setFecha('')
  }

  return (
    <form onSubmit={enviar}>
      <input
        placeholder="Nombre del evento"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <button type="submit">Guardar</button>
    </form>
  )
}
