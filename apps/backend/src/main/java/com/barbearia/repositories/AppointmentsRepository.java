package com.barbearia.repositories;

import com.barbearia.models.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface AppointmentsRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByData(LocalDate data);
}