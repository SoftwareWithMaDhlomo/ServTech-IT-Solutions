package com.serveTechIT.ServeTechIt.user;

import com.serveTechIT.ServeTechIt.user.enums.AppUserRole;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
@AllArgsConstructor
public class AppUserService implements UserDetailsService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println(username);
//        System.out.println(userRepository.findByUserName(username).get());
        return userRepository.findByUserName(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public HashMap<String, Object> signUpUser(AppUser user){

        if (userRepository.findByUserName(user.getUsername()).isPresent()){
            throw new IllegalStateException("username already taken.");
        }

        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("role",user.getAppUserRole());
        hashMap.put("name",user.getName());
        hashMap.put("email",user.getEmail());
        hashMap.put("username",user.getUsername());

        String encoded = passwordEncoder.encode(user.getPassword());
        user.setPassword(encoded);
        userRepository.save(user);
        return hashMap;
    }
}
