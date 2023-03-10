package com.serveTechIT.ServeTechIt.storeProduct.controllers;


import com.serveTechIT.ServeTechIt.storeProduct.Product;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@AllArgsConstructor
@CrossOrigin
public class ProductController {

    {
        System.out.println("Product Controller initialized");
    }
    private final ProductService productService;

    @GetMapping
    public List<Product> getProducts(){
        return productService.getAllProducts();
    }

    @PostMapping
    public Product addProducts(@RequestBody AddProductRequest productRequest){

        return productService.addProduct(productRequest);
    }
}
