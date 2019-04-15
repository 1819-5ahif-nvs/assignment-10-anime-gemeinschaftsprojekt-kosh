package rest;


import javax.inject.Inject;
import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebFilter("/*")
public class AccessTokenFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig){

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse,
                         FilterChain filterChain) throws IOException, ServletException {

        System.out.println("--- AccessTokenFilter ---");
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;


        //Add CORS Headers
        /*((HttpServletResponse) servletResponse).addHeader("Access-Control-Allow-Origin", "*");
        ((HttpServletResponse) servletResponse).addHeader("Access-Control-Allow-Methods","GET, OPTIONS, HEAD, PUT, POST,DELETE");*/
        ((HttpServletResponse) servletResponse).addHeader("Access-Control-Allow-Headers", "Authorization");
        filterChain.doFilter(request, response); // continues HTTP request
    }

    @Override
    public void destroy() {

    }
}