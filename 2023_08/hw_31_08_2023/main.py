import numpy as np
import random

# task1
arr = np.array([[1., 2., 3.], [4., 5., 6.]])
print(arr)
print(arr[:,-1][0]) #вывел 3
print(arr[:, 2][1]) #вывел 6

# task2
arr1 = np.array([[1., 2., 3.], [4., 5., 6.], [7., 8., 9.]])
print(arr1)
a = random.sample(range(0, 2), 2)
b = sum([arr1[x, x] for x in range(len(arr1))])
#
# print(a)
# print()
print('Сумма элементов второй строки по индексам: ', f'{a}\n', 'результат: ', sum(arr1[1][a]), sep='')
print('сумма диогонали матрицы: ', b)