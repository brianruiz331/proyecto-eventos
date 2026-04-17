import { useEffect, useState } from 'react'
import EventForm from './components/EventForm'
import EventList from './components/EventList'
import { obtenerEventos, crearEvento, eliminarEvento } from './services/api'

export default function App() {
  const [eventos, setEventos] = useState([])
  const [error, setError] = useState('')

  const cargarEventos = async () => {
    try {
      const data = await obtenerEventos()
      setEventos(data)
    } catch {
      setError('Error al cargar datos')
    }
  }

  useEffect(() => {
    cargarEventos()
  }, [])

  const agregarEvento = async (evento) => {
    await crearEvento(evento)
    cargarEventos()
  }

  const borrarEvento = async (id) => {
    await eliminarEvento(id)
    cargarEventos()
  }

  return (
    <div style={{padding:'20px'}}>
      <h1>Gestión de Eventos</h1>
      {error && <p>{error}</p>}
      <EventForm onAdd={agregarEvento} />
      <EventList eventos={eventos} onDelete={borrarEvento} />
    </div>
  )
}
