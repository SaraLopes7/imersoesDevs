# CÓDIGO SOBRE MÉTODOS DE LISTAS 

lista = [1, 3, 12, 8, 2]
print('Antes do append: ', lista)

lista.append(3)
print('Depois do append: ', lista)

lista.insert(2, 10) # insere na posição de ínidice 2 o número 10 
print('Depois do insert: ', lista)

lista2 = [1, 2, 3]

lista.extend(lista2) # insere os elementos da lista2 no final da lista1 
print('Depois do extend: ', lista)

lista.pop() # remove o ultimo elemento da lista caso o indíce não seja especificado
print('Depois do pop: ', lista)

lista.pop(0)
print('Depois do pop específico: ', lista)

lista.remove(3) # remove o elemento dentro do parenteses 
print('Depois do remove: ', lista)

print('Quantidade de 2 na lista:', lista.count(2))

print('Índice do elemento 12:', lista.index(12))

lista.sort() # ordena a lista 
print('Depois do sort: ', lista)

print(len(lista))

print(sum(lista))

print(max(lista))

print(min(lista))
