package com.example.server.controller;
import com.example.server.dto.LoginDto;
import com.example.server.dto.UserDto;
import com.example.server.entity.User;
import com.example.server.repo.UserRepo;
import com.example.server.security.JwtUtility;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtility jwtUtility;
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    public AuthController(AuthenticationManager authenticationManager, JwtUtility jwtUtility, UserRepo userRepo, PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.jwtUtility = jwtUtility;
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserDto userDto){
        if(userRepo.findByEmail(userDto.getEmail()).isPresent()){
            return ResponseEntity.badRequest().body("User is already registered");
        }

        System.out.println(userDto.getPassword() + userDto.getUsername());

        User user = new User();
        user.setUsername(userDto.getUsername());

        user.setEmail(userDto.getEmail());

        String encryptedPassword = passwordEncoder.encode(userDto.getPassword());
        user.setPassword(encryptedPassword);

        userRepo.save(user);

        return ResponseEntity.ok().body("User is registered");
    }


    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDto loginDto){
        try{
            System.out.println(loginDto.getEmail() + loginDto.getPassword());
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword()));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(e.getLocalizedMessage());
        }

        String token = jwtUtility.generateToken(loginDto.getEmail());
        return ResponseEntity.ok().body(token);
    }
}
