package rest.jwt;

import javax.security.enterprise.credential.Credential;

public class JWTCredential implements Credential {
    String value;

    public JWTCredential(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
