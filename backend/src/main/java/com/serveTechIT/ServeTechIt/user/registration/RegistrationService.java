package com.serveTechIT.ServeTechIt.user.registration;

import com.serveTechIT.ServeTechIt.user.AppUser;
import com.serveTechIT.ServeTechIt.user.AppUserService;
import com.serveTechIT.ServeTechIt.user.UserRepository;
import com.serveTechIT.ServeTechIt.user.enums.AppUserRole;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service

public class RegistrationService extends AppUserService{

    private final AppUserService appUserService;

    public RegistrationService(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder, AppUserService appUserService) {
        super(userRepository, passwordEncoder);
        this.appUserService = appUserService;
    }

    public HashMap<String, Object> register(RegistrationRequest registrationRequest) {
        AppUser user = new AppUser(registrationRequest.name(), registrationRequest.username(),
                registrationRequest.email(), registrationRequest.password(),
                AppUserRole.USER);


        return appUserService.signUpUser(user);
    }
}
