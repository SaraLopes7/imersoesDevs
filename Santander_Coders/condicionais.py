# CÓDIGO SOBRE ESTRUTURAS CONDICIONAIS 

idade = int(input('Digite a sua idade: '))

if idade >= 18:
    print('Você é maior de idade! ')
else:
    print('Você é menor de idade! ')

nota1 = float(input('Digite a sua primeira nota: '))
nota2 = float(input('Digite a sua segunda nota: '))

media = (nota1 + nota2) / 2

if media >= 7:
    print('Sua média final é:', media, 'e você está aprovada!')
elif media < 7: 
    print('Sua média final é:', media, 'e você está reprovada!')
else:
    print('Sua média final é:', media, 'e está além das possibilidades!')

