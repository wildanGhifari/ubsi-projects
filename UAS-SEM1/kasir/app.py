# Start of Import Modules
from Product import Product
from tabulate import tabulate
from datetime import datetime
import random
import os
# End of Import Modules

# Start of utility functions
# Function utility ini berguna untuk membersihkan terminal 
# ketika function back() dipanggil dimana didalam function
# tersebut memanggil function clear_screen().
def clear_screen():
    os.system("cls" if os.name == "nt" else "clear")

def back():
    print("\n")
    input("Tekan tombol apa saja untuk kembali ke menu awal... ")
    clear_screen()
# End of utility functions

def welcome():
    while True:
        print("\n")
        print("+========================================+")
        print("| Kelompok 1 - Gadget Store Cashier App  |")
        print("+----------------------------------------+")
        print("| 1 - Main Transaction                   |")
        print("| 2 - Display Product                    |")
        print("| 3 - Add Product                        |")
        print("| 4 - Update Product                     |")
        print("| 5 - Log out                            |")
        print("+========================================+")
        print("\n")

        try:
            menu = int(input("Silahkan pilih menu 1 - 5: "))

            if menu == 1:
                main_transaction()
                back()
            elif menu == 2:
                display_product()
                back()
            elif menu == 3:
                add_product()
                back()
            elif menu == 4:
                update_product()
                back()
            elif menu == 5:
                print("\n")
                print("Terima kasih telah menggunakan sistem Cashier App kami!")
                print("\n")
                break
            else:
                print("\n")
                print("Oops! Menu tidak ditemukan, silahkan pilih menu lagi...")
                print("\n")
                back()
                continue
        except ValueError:
            print("Oops! Terjadi kesalahan.")
            back()
            continue
            # End of welcome() function

def main_transaction():
    print("Main transaction")

def display_product():
    print("Display product")

def add_product():
    
    clear_screen()
    
    products = []
    
    with open("UAS-SEM1/kasir/Data-product.txt", "a+") as file_produk:
        while True:
            print("\n")
            print("Isi data produk yang ingin ditambahkan.")
            print("\n")

            p_name = input("Masukkan nama produk: ")

            if p_name != "":
                p_desc = input("Masukkan deskripsi produk: ")

                if p_desc != "":
                    id = ""
                    p_category = input("Masukkan kategori produk [SP, SW, TB, LP, PC]: ")

                    if str(p_category).upper() == "SP":
                        p_category = "Smartphone"
                        id = "1" + str(random.randint(10, 100))
                    elif str(p_category).upper() == "SW":
                        p_category = "Smartwatch"
                        id = "2" + str(random.randint(10, 100))
                    elif str(p_category).upper() == "TB":
                        p_category = "Tablet"
                        id = "3" + str(random.randint(10, 100))
                    elif str(p_category).upper() == "LP":
                        p_category = "Laptop"
                        id = "4" + str(random.randint(10, 100))
                    elif str(p_category).upper() == "PC":
                        p_category = "Personal Computer"
                        id = "5" + str(random.randint(10, 100))
                    else:
                        id = "0"

                    if id != "0":
                        p_price = input("Masukkan harga produk: ")

                        if p_price != "":
                            p_stock = input("Masukkan jumlah stock produk: ")

                            if p_stock != "":
                                products.append(Product(id, p_name, p_desc, p_category, p_price, p_stock))

                                print("\n")
                                question = input('Tekan "Y" untuk menambahkan produk lain... ')
                                print("\n")

                                if question.lower() == "y":
                                    clear_screen()
                                    continue
                                else:
                                    clear_screen()
                                    for p in products:
                                        file_produk.write(str(int(p.id) + 1) + ", " + p.name + ", " + p.desc + ", " + p.category + ", " + p.price + ", " + p.stock + "\n")

                                        print("%s berhasil ditambahkan!" % p.name)
                                        display_product()
                                    break
                            else:
                                print("Gagal, Stok produk tidak boleh kosong!")
                                back()
                                continue
                        else:
                            print("Gagal, Harga produk tidak boleh kosong!")
                            back()
                            continue
                    else:
                        print("Gagal, Kategori produk salah/tidak boleh kosong!")
                        back()
                        continue
                else:
                    print("Gagal, Deskripsi produk tidak boleh kosong!")
                    back()
                    continue
            else:
                print("Gagal, Nama produk tidak boleh kosong!")
                back()
                continue


def update_product():
    print("Update product")


# Panggil function welcome()
# Disinalah titik awal aplikasi berjalan
welcome()