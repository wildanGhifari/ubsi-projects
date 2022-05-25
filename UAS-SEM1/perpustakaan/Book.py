class Book():
    def __init__(self, id, title, page, author, stock) -> None:
        self.id = id
        self.title = title
        self.page = page
        self.author = author
        self.stock = stock

    def is_empty(self):
        if int(self.stock) == 0:
            print("Maaf saat ini buku %s tidak tersedia." % self.title)