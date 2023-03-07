package com.serveTechIT.ServeTechIt.user.registration;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/api/registration")
@AllArgsConstructor
@CrossOrigin
public class UserRegistrationController {

    private final RegistrationService registrationService;

    @PostMapping
    public HashMap<String, Object> registerUser(@RequestBody RegistrationRequest registrationRequest){

        return registrationService.register(registrationRequest);

    }
}