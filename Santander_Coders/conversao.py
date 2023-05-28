# CÓDIGO SOBRE CONVERSÃO DE TIPOS 

idade = '19'
numero1 = '10' 
numero2 = '20'

print(numero1 + numero2) # ele concatena, não soma

print(idade, type(idade))

idade_inteira = int(idade)
print(idade_inteira, type(idade_inteira))

altura = float(input('Informe sua altura: ')) # o input por default armazena o valor como string
print(altura, type(altura))