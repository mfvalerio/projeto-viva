package com.projeto.viva.exceptions;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


@ControllerAdvice
@Data
public class ProjetoVivaExceptionHandler extends ResponseEntityExceptionHandler {

    @Autowired
    private MessageSource messageSource;

    @ExceptionHandler({EmptyResultDataAccessException.class})
    protected ResponseEntity<Object> handleEmptyResultDataAccessException(
            EmptyResultDataAccessException ex,
            WebRequest request) {

        String messageUser =
                messageSource.getMessage("recurso.nao-encontrado", null,
                        LocaleContextHolder.getLocale());
        String messageDeveloper = ex.toString();

        return handleExceptionInternal(ex,
                new Erro(messageUser, messageDeveloper),
                new HttpHeaders(),
                HttpStatus.BAD_REQUEST, request);
    }

    public static class Erro{
        public Erro(String messageUser, String messageDeveloper) {
            super();
        }

    }

}
