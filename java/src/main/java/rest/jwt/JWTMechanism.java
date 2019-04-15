package rest.jwt;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.security.enterprise.AuthenticationException;
import javax.security.enterprise.AuthenticationStatus;
import javax.security.enterprise.authentication.mechanism.http.HttpAuthenticationMechanism;
import javax.security.enterprise.authentication.mechanism.http.HttpMessageContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.HttpHeaders;

@ApplicationScoped
public class JWTMechanism implements HttpAuthenticationMechanism {

    @Inject
    private JWTStore store;

    @Override
    public AuthenticationStatus validateRequest(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, HttpMessageContext httpMessageContext) throws AuthenticationException {
        String authHeader = httpServletRequest.getHeader(HttpHeaders.AUTHORIZATION);
        if(authHeader != null){
            String token = authHeader.split(" ")[1];
            JWTCredential jwt = new JWTCredential(token);
            return httpMessageContext.notifyContainerAboutLogin(store.validate(jwt));
        }
        else
            return AuthenticationStatus.NOT_DONE;
    }
}
