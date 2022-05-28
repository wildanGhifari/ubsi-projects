# Start of Import Modules
from Product import Product
from tabulate import tabulate
from datetime import datetime
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
        print("|        Indo-april Cashier App          |")
        print("+----------------------------------------+")
        print("| 1 - Main Transaction                   |")
        print("| 2 - Display Product                    |")
        print("| 3 - Add Product                        |")
        print("| 4 - Update Product                     |")
        print("| 5 - Log out                            |")
        print("+========================================+")

        try:
            menu = int(input("Silahkan pilih menu 1 - 5: "))

            if menu == 1:
                main_transaction()
                back()
            elif menu == 2:
                main_transaction()
                back()
            elif menu == 3:
                main_transaction()
                back()
            elif menu == 4:
                main_transaction()
                back()
            elif menu == 5:
                print("\n")
                print("Terima kasih telah menggunakan sistem Indo-april Cashier App!")
                print("\n")
                break
            else:
                print("\n")
                print("Oops! Menu tidak ditemukan, silahkan pilih menu lagi...")
                print("\n")
                back()
                continue
        except ValueError:
            print("Oops! Terjadi kesalahan!")
            back()
            continue
            # End of welcome() function

def main_transaction():
    print("Main transaction")

def display_product():
    print("Display product")

def add_product():
    print("Add product")

def update_product():
    print("Update product")