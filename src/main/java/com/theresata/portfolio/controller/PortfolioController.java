package com.theresata.portfolio.controller;

//controller is a java class responsible for recieving HTTP incoming requests and decide what to do next (GET, POST, PUT, DELETE)
//React = customer request info. Springboot controller = person recieving request. backend = where info & app logic live

import org.springframework.web.bind.annotation.GetMapping;// when use @, its called "annotations" that combines 2 other annotation in one shortcut -> next
import org.springframework.web.bind.annotation.RestController;//it does 1. @Controller(mark class as web request handler/handle web links) 2. @ResponseBody(automatically serializes return value in JSON/XML in HTTP response body. aka turn java data into text data (JSON) so app/website can easily read
//@Controller: handle request by returning webpages(view) vs @RestController: return responses directly, such as text/JSON. but restcontroller combines controller & responsebody.
//next line (@RestController): specific type controller for REST APIs -> spring boot REST controller: job to handle request from endpoints/website and return data directly in HTTP response
@RestController //this handle web request & its method can return response directly to client
public class PortfolioController {

    @GetMapping("/api/hello")
    public String hello(){
        return "Hello! Welcome to my portfolio.";
        //this annoation (@GetMapping): when someone sends GET request to /api/hello, runs method associated with it.
        //when u create an annotation, an endpoint is also created. (the specific api address/route u have to put to access.
        //for exmaple, this one is localhost:8080/api/hello. /api/hello can be any name convention but must start with "/"
        //pathway of how this works --> http: //localhost:8080/api/hello --> browser request /api/hello --> spring boot find matching endpoint --> java method executes hello() --> response "Hello! Welcome to my portfolio"
        //controller pathways: @RestController: establish that this class return response data directly, @GetMapping: define URL path & type of request is handles (the endpoints), -> response.
    }
}
