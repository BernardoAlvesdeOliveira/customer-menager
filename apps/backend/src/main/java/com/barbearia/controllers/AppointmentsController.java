package com.barbearia.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.barbearia.dto.AppointmentsDTO;
import com.barbearia.models.Appointment;
import com.barbearia.repositories.AppointmentsRepository;
import com.barbearia.services.AppointmentsServices;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/agendamentos")
public class AppointmentsController {

    @Autowired
    private AppointmentsServices appointmentsServices;

    @Autowired
    private AppointmentsRepository appointmentsRepository;

    @GetMapping
    public ResponseEntity<List<Appointment>> listAppointments() {
        return ResponseEntity.ok(appointmentsServices.listAll());
    }

    @PostMapping
    public ResponseEntity<Appointment> criarAgendamento(@RequestBody AppointmentsDTO agendamentoDTO) {
        Appointment agendamento = new Appointment();
        agendamento.setCliente(agendamentoDTO.getCliente());
        agendamento.setDatas(agendamentoDTO.getDatas());
        agendamento.setHora(agendamentoDTO.getHora());

        Appointment novoAgendamento = appointmentsRepository.save(agendamento);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoAgendamento);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAppointment(@PathVariable Long id) {
        if (appointmentsServices.deleteAppointment(id)) {
            return ResponseEntity.ok("Agendamento removido com sucesso");
        }
        return ResponseEntity.notFound().build();
    }
}
