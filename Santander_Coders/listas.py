# CÓDIGO SOBRE LISTAS 

notas = [7.9, 9.7, 8.2]

lista = []
lista = list()
lista = [19, 'Sara Lopes', 3.14, True]
# lista_de_listas = [10[1, 2, 3]]

lista = [19, 'Sara Lopes', 3.14, True]
print(lista[2])
print(lista[-1]) # printa o último elemento da lista

lista =[10, 50, 30, 40, 25, 60, 5]
print(lista[0:3]) # pegando uma faixa de valores 
print(lista[0:3:2]) # pegando uma faixa de valores pulando de dois em dois

for elemento in lista:
    print(elemento)

print('Comprimento da lista:', len(lista))

for i in range(len(lista)):
    print(lista[i])
