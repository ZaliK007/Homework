import docx

doc = docx.Document('dz1.docx')

for _ in doc.paragraphs:
    print(_.text)

# with open('dz.docx', encoding='cp1251', newline='') as file:
#     print(file.readline().text)