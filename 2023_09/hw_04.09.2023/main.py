import pymorphy3

morph = pymorphy3.MorphAnalyzer()

with open('slovar.txt', 'r', encoding='utf-8') as f:
    a = ''.join(f.readlines()).replace('\n', ' ').replace(',', '').replace('.', '').split(' ')
    result = [morph.parse(a[i])[0].methods_stack[0] for i in range(len(a)) if i < 20]
    print(*result, sep='\n') # Словарный анализатор для первых 20 слов
    print()

    a1 = a[::-1]
    result = [morph.parse(a1[i])[0].methods_stack[0] for i in range(len(a1)) if i < 10]
    print(*result, sep='\n')  # Словарный анализатор для последних 10 слов
    print()

    a2 = ['бойцовский', 'клуб', 'игры', 'сваты', 'физика']
    result = [morph.parse(a2[i])[0].methods_stack[0] for i in range(len(a2))]
    print(*result, sep='\n')  # Словарный анализатор для указаных слов
    print()

    result = [morph.parse(a[i])[0].normal_form for i in range(len(a)) if i < 20]
    print(*result, sep='\n')  # Словарный анализатор для первых 20 слов
    print()