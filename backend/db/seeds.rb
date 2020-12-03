

Laptop.create(name: "Apple MacBook Pro", specs: "Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Silver")
Laptop.create(name: "Lenovo Ideapad S145 15", specs: "15.6 FHD Display I AMD Ryzen 3 3200U(> i5-7200U) I 8GB 256GB PCIe SSD I WiFi Webcam Dolby Audio 4-in-1 Card Reader Win 10 + Delca 16GB Micro SD Card")
Laptop.create(name: "HP Spectre x360", specs: "13.3 4K UHD Touchscreen Intel Quad-Core i5-1035G4 (Beats i7-7500U) 8GB DDR4 256GB")


Rental.create(request_date: DateTime.now(), name: "test1", email: "test1@test.com", laptop_id: 1)
