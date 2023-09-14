import random


class Main():
    def __init__(self):
        self.integer = int(input('Введите только цифры: '))
        self.find = None


class Subsidiary(Main):
    def __init__(self):
        self.number = random.randint(1, 1000)
        super().__init__()

    def __str__(self):
        return f'Integer :"{self.integer}" from Main class\nNumber: {self.number} from Subsidiary class'


a = Subsidiary()
print(a)