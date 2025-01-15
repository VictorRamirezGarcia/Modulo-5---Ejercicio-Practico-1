import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ServiceList({ onClickService, reload }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);  // Estado para manejar la carga
  const [error, setError] = useState(null);  // Estado para manejar errores

  // Función para cargar los servicios
  const loadServices = async () => {
    try {
      setLoading(true);  // Empezamos a cargar
      const response = await fetch('/servicios.json'); 
      if (!response.ok) {
        throw new Error('Error al cargar los servicios');
      }
      const data = await response.json(); 
      setServices(data); 
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    if (reload) {
      loadServices();  
    }
  }, [reload]);  

  if (loading) {
    return <p>Cargando servicios...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <React.Fragment>
      <h2>Servicios Médicos</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id} onClick={() => onClickService(service)} style={{ cursor: 'pointer' }}>
            {service.name}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

ServiceList.propTypes = {
  onClickService: PropTypes.func.isRequired,
  reload: PropTypes.bool.isRequired,  // Propiedad de recarga
};

export default ServiceList;
