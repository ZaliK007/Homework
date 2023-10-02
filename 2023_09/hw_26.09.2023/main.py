import docx

doc = docx.Document('dz1.docx')

for _ in doc.paragraphs:
    print(_.text)