package org.example.fronyyyy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class controller {

    @GetMapping("/")
    public String home(Model model) {
        // Pass title to the template
        model.addAttribute("title", "Recipe Generator Chatbot");
        return "index";
    }
}
