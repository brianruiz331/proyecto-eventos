export default function EventList({ eventos, onDelete }) {
  return (
    <ul>
      {eventos.map((evento) => (
        <li key={evento.id}>
          {evento.nombre} - {evento.fecha}
          <button onClick={() => onDelete(evento.id)}>
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  )
}
