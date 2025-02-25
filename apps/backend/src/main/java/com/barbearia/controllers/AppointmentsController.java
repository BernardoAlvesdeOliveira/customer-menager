package com.barbearia.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.barbearia.models.Appointment;
import com.barbearia.services.AppointmentsServices;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/agendamentos")
public class AppointmentsController {

    @Autowired
    private AppointmentsServices appointmentsServices;

    @GetMapping
    public ResponseEntity<List<Appointment>> listappointments() {
        return ResponseEntity.ok(appointmentsServices.listAll());
    }

    @PostMapping
    public ResponseEntity<Object> createAppointment(@Valid @RequestBody Appointment appointment) {
        return ResponseEntity.ok(appointmentsServices.createAppointment(appointment));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAppointment(@PathVariable Long id) {
        if (appointmentsServices.deleteAppointment(id)) {
            return ResponseEntity.ok("Agendamento removido com sucesso");
        }
        return ResponseEntity.notFound().build();
    }
}
