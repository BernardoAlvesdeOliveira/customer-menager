package com.barbearia.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.barbearia.models.Appointment;
import com.barbearia.repositories.AppointmentsRepository;

@Service
public class AppointmentsServices {

    @Autowired
    private AppointmentsRepository appointmentsRepository;

    public List<Appointment> listAll() {
        return appointmentsRepository.findAll();
    }

    public Appointment createAppointment(Appointment appointment) {
        return appointmentsRepository.save(appointment);
    }

    public boolean deleteAppointment(Long id) {
        Optional<Appointment> appointment = appointmentsRepository.findById(id);
        if (appointment.isPresent()) {
            appointmentsRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Appointment> listByDate(LocalDate datas) {
        return appointmentsRepository.findByData(datas);
    }

    public Object createAppointments(Appointment appointment) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'createAppointments'");
    }
}