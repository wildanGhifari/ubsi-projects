class Product():
    def __init__(self, id, name, desc, category, price, stock) -> None:
        self.id = id
        self.name = name
        self.desc = desc
        self.category = category
        self.price = price
        self.stock = stock

    def is_empty(self):
        print("%s is out of stock" % self.name)