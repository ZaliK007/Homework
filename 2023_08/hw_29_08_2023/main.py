# task1
import numpy as np
from random import randint

a = [randint(0, 10) for x in range(len(np.arange(0, 10)))]
print(a)
print(max(a))
b = [n for n in range(len(a)) if a[n] == max(a)]
print(b)


# task2
c = [[x for x in np.arange(-10, 10) for _ in range(1)] for _ in range(1)]
sequence = [el for line in c for el in line if el > 0 and el % 2 == 0]
print(c)
print(sequence)