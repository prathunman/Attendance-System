package com.example.server.security;

import com.example.server.entity.User;
import com.example.server.repo.UserRepo;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.Optional;

@Component
public class JwtUtility {

    private static final SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS512);

    private final int jwtExpire = 8640000;

    private UserRepo userRepo;

    public JwtUtility(UserRepo userRepo){
        this.userRepo = userRepo;
    }

    public String generateToken(String email){
        Optional<User> user = userRepo.findByEmail(email);
        return Jwts.builder().setSubject(email).setIssuedAt(new Date()).setExpiration(new Date(new Date().getTime() + jwtExpire)).signWith(secretKey).compact();
    }

    public String extractEmail(String token){
        return Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJwt(token).getBody().getSubject();
    }

    public boolean isTokenValid(String token){
        try {
            Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJwt(token);
            return true;
        } catch (JwtException | IllegalArgumentException e ){
            return false;
        }
    }

}
