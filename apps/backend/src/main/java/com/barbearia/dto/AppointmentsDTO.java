package com.barbearia.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AppointmentsDTO {
    private String cliente;
    private LocalDate datas;
    private LocalTime hora;
}
