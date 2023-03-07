package com.serveTechIT.ServeTechIt.user.login;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.security.auth.login.LoginException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class UserLoginController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/api")
    public HashMap<String, String> login(HttpServletRequest request, @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.username(),
                        loginRequest.password()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        HttpSession session = request.getSession(true);
        session.setAttribute("SPRING_SECURITY_CONTEXT", SecurityContextHolder.getContext());

//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        HashMap<String,String> creds = new HashMap<>();
        creds.put("principal",authentication.getPrincipal().toString());
        creds.put("authenticated", String.valueOf(authentication.isAuthenticated()));
        creds.put("authority",authentication.getAuthorities().toString());

        return creds;
    }

    @GetMapping
    public void noPage() throws LoginException {

        System.out.println(SecurityContextHolder.getContext().toString());

//        throw new LoginException();

    }
}
