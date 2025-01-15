import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ServiceList from '@/components/ServiceList';
import ServiceModal from '@/components/ServiceModal';
import Information from '../../components/information';

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);  
  const [reloadServices, setReloadServices] = useState(false);  // Estado para manejar la recarga de servicios
  const navigate = useNavigate();  

  const informationSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);

  const handleReloadServices = () => {
    setReloadServices((prev) => !prev);  // Cambia el estado para forzar la recarga
    setSelectedService(null); // Asegúrate de cerrar el modal si está abierto
  };

  const scrollToInformation = () => {
    informationSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    servicesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const goToDoctors = () => {
    navigate('/medical-team');
  };

  return (
    <React.Fragment>
      <div>
        <button onClick={goToDoctors}>Ir a Doctores</button>
      </div>

      {/* Botón para recargar los servicios */}
      <div>
        <button onClick={handleReloadServices}>Recargar Servicios</button>
      </div>

      <div ref={informationSectionRef}>
        <Information />
      </div>

      <div ref={servicesSectionRef}>
        {/* Le pasamos el estado reloadServices para indicar cuando recargar */}
        <ServiceList onClickService={handleServiceClick} reload={reloadServices} />
      </div>

      {/* Modal del servicio seleccionado */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={handleCloseModal}
        />
      )}
    </React.Fragment>
  );
}
