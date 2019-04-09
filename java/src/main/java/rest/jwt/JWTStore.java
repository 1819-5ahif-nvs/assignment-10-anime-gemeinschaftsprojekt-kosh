package rest.jwt;

import entities.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;

import javax.enterprise.context.RequestScoped;
import javax.security.enterprise.credential.Credential;
import javax.security.enterprise.identitystore.CredentialValidationResult;
import javax.security.enterprise.identitystore.IdentityStore;

@RequestScoped
public class JWTStore implements IdentityStore {
    private String privateKey = "5ome very very secure key1";

    @Override
    public CredentialValidationResult validate(Credential credential) {
        try {
            if(credential instanceof JWTCredential) {
                Jws claims = Jwts.parser()
                        .setSigningKey(privateKey)
                        .parseClaimsJws(((JWTCredential) credential).getValue());

                return CredentialValidationResult(((Claims)claims.getBody()).get("name").toString(), ((Claims)claims.getBody()).get("scope").toString());
            }
        } catch (Exception e) {
            return CredentialValidationResult.NOT_VALIDATED_RESULT;
        }
        return CredentialValidationResult.INVALID_RESULT;
    }

    public JWTCredential generateJWT(User user) {
        JWTCredential(Jwts.builder()
        .claim("name", user.getUsername())
        .claim())
    }
}
