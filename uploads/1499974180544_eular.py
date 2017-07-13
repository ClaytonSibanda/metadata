def answer():
  num=0;
  sm=0;
  while num<1000:
    if num%3==0 or num%5==0:
      sm+=num
    num+=1
  return sm
  



def fib(a,b):
  fibArr=[a,b]
  #print(fibArr)
  num=1
  total=0
  while fibArr[1]<4000000:
    temp=fibArr[0]
    if fibArr[1]%2==0:
      total+=fibArr[1]
    print(fibArr)
	
    fibArr[0]=fibArr[1]
    fibArr[1]=temp+fibArr[1]
    num=num+1
  return total

#print(answer())
#print(fib(1,2))


# //largest prime

def largestPrime():
  num=3
  largest=2
  while num <600851475143 :
    if(isPrime(num)) and 600851475143 %num==0:
      
      if num>largest:
        largest=num
    num+=1
  return largest
      
  
def isPrime(n):
  a=2
  while a<n:
    if n%a==0:
      return False
    a+=1
  return True



print(largestPrime())





