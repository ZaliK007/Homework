import docx

doc = docx.Document('dz2.docx')

for _ in doc.paragraphs:
    print(_.text)