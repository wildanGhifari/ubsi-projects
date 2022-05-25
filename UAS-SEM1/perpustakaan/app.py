# Start of Import Modules
from Student import Student
from Book import Book
from tabulate import tabulate
from datetime import datetime, timedelta
import os
# End of Import Modules

# Start of Variable Declaration
daftar_buku = []
data_pinjam = []

today = datetime.today()
# End of Variable Declaration

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
                print("\n")
                break
            else:
                print("\n")
                print("Oops! Menu tidak ditemukan, silahkan pilih menu lagi...")
                print("\n")
                kembali()
                continue
        except ValueError:
            print("Oops! Terjadi kesalahan!")
            kembali()
            continue
            # End of welcome() function


# Start of tampilkan_buku()
def tampilkan_buku():
    print("\n")
    print("Daftar buku di perpustakaan Kelompok 1")
    daftar_buku.clear()

    # Membuat table untuk keperluan menggunakan "tabulate",
    # data dibawah ini dijadikan sebagai header.
    table_buku = [
        ["ID", "Judul Buku", "Pengarang", "Jmlh. Halaman", "Stok buku"]
    ]

    with open("UAS-SEM1/perpustakaan/Data-buku.txt", "r+") as f:
        books = f.readlines()
        books = [x.strip('\n') for x in books]

        for i in range(len(books)):
            index  = 0
            
            for j in books[i].split(", "):
                if index == 0:
                    judul = j
                elif index == 1:
                    halaman = j
                elif index == 2:
                    pengarang = j
                elif index == 3:
                    stok = j

                index += 1
            
            # Menyiapkan data buku sesuai class/objek Buku yang sudah ditentukan
            daftar_buku.append(Book(i, judul, pengarang, halaman, stok))

        for buku in daftar_buku:
            table_buku.append([buku.id, buku.title, buku.author, buku.page, buku.stock])

        print(tabulate(table_buku, headers="firstrow", tablefmt="psql"))
        # End of tampilkan_buku()

# Start of tambah_buku()
def tambah_buku():
    with open("UAS-SEM1/perpustakaan/Data-buku.txt", "a+") as f:
        while True:
            print("\n")
            print("Isi data buku yang ingin ditambahkan.")

            title = input("Judul buku: ")
            if title != "":
                page = input("Halaman buku: ")
                if page != "":
                    author = input("Pengarang: ")
                    if author != "":
                        stock = input("Jumlah stock: ")
                        if stock != "":
                            
                            f.write(title + ", " + page + ", " + author + ", " + stock + "\n")
                            print("\n")
                            print("Terima kasih, buku %s berhasil ditambahkan!" % title)
                            print("\n")

                            question = input('Tekan "Y" untuk menambahkan buku lagi... ')
                            if question.lower() == "y":
                                clear_screen()
                                continue
                            else:
                                break
                        else:
                            print("Gagal, Stock tidak boleh kosong!")
                    else:
                        print("Gagal, Pengarang tidak boleh kosong!")
                        break
                else:
                    print("Gagal, Halaman buku tidak boleh kosong!")
                    break
            else:
                print("Gagal, Judul buku tidak boleh kosong!")
                break
    
    tampilkan_buku()
    # End of tambah_buku()

# Start of pinjam_buku()
def pinjam_buku():
    # Panggil function display_buku terlebih dahulu
    # untuk menampilkan daftar buku yang tersedia
    tampilkan_buku()

    # Membuat table untuk keperluan menggunakan "tabulate",
    # data dibawah ini dijadikan sebagai header.
    table_pinjam = [
        ["ID", "Judul Buku", "Nama Mahasiswa", "Email", "Tgl. Dipinjam", "Status"]
    ]

    print("\n")
    print("Isi data peminjam buku")
    name = input("Masukkan nama: ")
    email = input("Masukkan email: ")
    id_pilihan = int(input("Masukkan ID Buku yang ingin dipinjam: "))

    # Looping untuk mendapatkan data buku
    for buku in daftar_buku: 

        # Pastikan buku yang dipilih ada didalam daftar
        # dan stoknya tersedia
        if int(buku.id) == id_pilihan: 
            if int(buku.stock) != 0: 

                # Masukkan data peminjam
                data_pinjam.append(Student(str(buku.id), buku.title, name, email, today.strftime("%d/%m/%Y"), "Belum dikembalikan"))

                update_stock = []

                # Buka file Data-buku untuk update stok buku yang dipinjam
                with open("UAS-SEM1/perpustakaan/Data-buku.txt", "r+") as f:
                    books = f.readlines()
                    books = [x.strip("\n") for x in books]

                    for i in range(len(books)):
                        title = books[i].split(", ")[0]
                        page = books[i].split(", ")[1]
                        author = books[i].split(", ")[2]
                        stock = books[i].split(", ")[3]

                        if title == buku.title:
                            stock = int(stock) - 1

                        update_stock.append(title + ", " + page + ", " + author + ", " + str(stock))
                
                with open("UAS-SEM1/perpustakaan/Data-buku.txt", "w+") as f:
                    for stock in update_stock:
                        f.write(stock + "\n")
                
                for i in data_pinjam:
                    table_pinjam.append([str(i.book_id), i.book_title, i.name, i.email, i.date, i.status])

                    with open("UAS-SEM1/perpustakaan/Data-pinjaman.txt", "a+") as f:
                        f.write(str(i.book_id) + ", " + i.book_title + ", " + i.name + ", " + i.email + ", " + i.date + ", " + i.status + "\n")

                print("\n")
                print("Buku berhasil dipinjam. Selamat membaca!")
                print(tabulate(table_pinjam, headers="firstrow", tablefmt="psql"))
                data_pinjam.clear()
            else:
                buku.is_empty()
        # End of pinjam_buku()

# Start of kembalikan_buku()
def kembalikan_buku():
    print("Mengembalikan buku!")


# Panggil function welcome()
# Disinalah titik awal aplikasi berjalan
welcome()