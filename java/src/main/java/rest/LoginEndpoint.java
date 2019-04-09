package rest;

import javax.ws.rs.Path;

@Path("login")
public class LoginEndpoint {
    @Inject
    private lateinit var userRepository: UserRepository

    @Inject
    private lateinit var jwtStore: JWTStore

    @POST
    open fun login(credentials: JsonObject): Response {
        val user = userRepository.find(credentials.getString("username"))
        if(user != null && user.password == credentials.getString("password")) {
            val jwt = jwtStore.generateJWT(user)
            return Response.ok().header(HttpHeaders.AUTHORIZATION, "BEARER " + jwt.value).build()
        }
        return Response.status(400).build()
    }
}
