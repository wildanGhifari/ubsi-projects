class Book():
    def __init__(self, id, title, author, page, stock) -> None:
        self.id = id
        self.title = title
        self.author = author
        self.page = page
        self.stock = stock

    def is_empty(self):
        if int(self.stock) == 0:
            print("Maaf saat ini buku %s tidak tersedia." % self.title)