# Start of Import Modules
from Student import Student
from Book import Book
from tabulate import tabulate
from datetime import datetime, timedelta
import os
# End of Import Modules

# Start of utility functions
# Function utility ini berguna untuk membersihkan terminal 
# ketika function kembali() dipanggil dimana didalam function
# tersebut memanggil function clear_screen().
def clear_screen():
    os.system("cls" if os.name == "nt" else "clear")

def kembali():
    print("\n")
    input("Tekan tombol apa saja untuk kembali ke menu awal... ")
    clear_screen()
# End of utility functions

# Start of welcome() function
def welcome():
    while True:
        print("\n")
        print("+====================================================+")
        print("|    SELAMAT DATANG DI PERPUSTAKAAN KELOMPOK 1       |")
        print("+----------------------------------------------------+")
        print("| 1 - Untuk menampilkan daftar buku                  |")
        print("| 2 - Untuk menambahkan buku                         |")
        print("| 3 - Untuk meminjam buku                            |")
        print("| 4 - Untuk mengembalikan buku                       |")
        print("| 5 - Untuk keluar                                   |")
        print("+====================================================+")

        try:
            menu = int(input("Silahkan pilih menu 1 - 5: "))
            
            if menu == 1:
                tampilkan_buku()
                kembali()
            elif menu == 2:
                tambah_buku()
                kembali()
            elif menu == 3:
                pinjam_buku()
                kembali()
            elif menu == 4:
                kembalikan_buku()
                kembali()
            elif menu == 5:
                print("\n")
                print("Terima kasih telah menggunakan sistem perpustakaan kami!")
                break
            else:
                print("\n")
                print("Oops! Menu tidak ditemukan, silahkan pilih menu lagi...")
                kembali()
                continue
        except ValueError:
            print("Oops! Terjadi kesalahan!")
            kembali()
            continue
            # End of welcome() function


# Start of tampilkan_buku()
def tampilkan_buku():
    print("Function ini akan menampilkan daftart buku.")

# Start of tambah_buku()
def tambah_buku():
    print("Function ini akan menambahkan buku ke daftar buku.")

# Start of pinjam_buku()
def pinjam_buku():
    print("Pinjam buku!")

# Start of kembalikan_buku()
def kembalikan_buku():
    print("Mengembalikan buku!")


# Panggil function welcome()
# Disinalah titik awal aplikasi berjalan
welcome()