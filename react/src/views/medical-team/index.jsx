// src/views/MedicalTeam.jsx
import React, { useState, useEffect } from 'react';
import DoctorCard from '@/components/DoctorCard';

export default function MedicalTeam() {
  const [doctors, setDoctors] = useState([]);
  const [specialtyFilter, setSpecialtyFilter] = useState('');

  useEffect(() => {
    const loadDoctors = async () => {
      try {
        const response = await fetch('/doctores.json'); 
        if (!response.ok) {
          throw new Error('Error al cargar los doctores');
        }
        const data = await response.json(); // Parseamos la respuesta como JSON
        setDoctors(data); // Actualizamos el estado con los servicios
      } catch (err) {
        setError(err.message); // En caso de error, actualizamos el estado de error
      } finally {
        setLoading(false); // Terminamos de cargar
      }
    };

    loadDoctors();

  }, []);

  const filteredDoctors = specialtyFilter
    ? doctors.filter(doctor => doctor.specialty === specialtyFilter)
    : doctors;

  return (
    <div className="content">
      <h2>Equipo Médico</h2>
      <div>
        <label>Filtrar por especialidad:</label>
        <select onChange={(e) => setSpecialtyFilter(e.target.value)}>
          <option value="">Todos</option>
          <option value="Cardiología">Cardiología</option>
          <option value="Pediatría">Pediatría</option>
        </select>
      </div>
      {filteredDoctors.map((doctor, index) => (
        <DoctorCard
          key={index}
          name={doctor.name}
          specialty={doctor.specialty}
          yearsOfExperience={doctor.yearsOfExperience}
        />
      ))}
    </div>
  );
}
