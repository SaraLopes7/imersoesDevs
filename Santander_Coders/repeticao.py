# CÓDIGO SOBRE LAÇOS DE REPETIÇÃO

numero_desejado = 13

numero_digitado = int(input('Digite um número entre 1 e 20: '))

while numero_digitado != numero_desejado:
    print('Você errou o número, tente novamente!')
    numero_digitado = int(input('\nDigite um número entre 1 e 20: '))

print('Parabéns! Você acertou o número.')

contador = 0

while contador < 5:
    print(contador)

    contador += 1

print(' ') # só p dar um espaço entre as respostas

for variavel in range(10): # range é uma faixa, um intervalo de valor
    print(variavel)

print(' ')

for variavel in range(0, 13, 3): # imprime até o 12 de 3 em 3
    print(variavel)

print(' ')

soma = 0

for i in range(1, 4):
    nota = float(input(f'Informe a sua nota {i}: ')) # o "f" antes da string é usado qnd queremos concatenar variáveis dentro da própria string

    soma += nota 
print(f'Sua nota final é: {soma}')