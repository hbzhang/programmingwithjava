---
title: "Syntax"
date: "2019-05-21"
meta_title: "Python Syntax"
meta_description: "This tutorial is used for going through python data structure"
keywords:
    - setup
    - production
    - server
    - ubuntu
---



<a class="sbox" href="https://www.w3schools.com/python/python_try_except.asp" target="_blank" rel="noopener">
    <div class="sbox-image">
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="65.2 173.5 180 180"><style>.st0{fill:#0080ff}</style><g id="XMLID_229_"><g id="XMLID_690_"><g id="XMLID_691_"><g id="XMLID_44_"><g id="XMLID_48_"><path id="XMLID_49_" class="st0" d="M155.2 351.7v-34.2c36.2 0 64.3-35.9 50.4-74-5.1-14.1-16.4-25.4-30.5-30.5-38.1-13.8-74 14.2-74 50.4H67c0-57.7 55.8-102.7 116.3-83.8 26.4 8.3 47.5 29.3 55.7 55.7 18.9 60.6-26 116.4-83.8 116.4z"/></g><path id="XMLID_47_" class="st0" d="M155.3 317.6h-34v-34h34z"/><path id="XMLID_46_" class="st0" d="M121.3 343.8H95.1v-26.2h26.2z"/><path id="XMLID_45_" class="st0" d="M95.1 317.6H73.2v-21.9h21.9v21.9z"/></g></g></g></g></svg>
    </div>
    <div class="sbox-content">
        <h4>Basic C# Tutorial👉</h4>
    </div>
</a>





### python basic syntax print 

```

num = 23
print("Type of num is:", type(num)) 

lst = [1, 2, 4] 
print("Type of lst is:", type(lst)) 
  
name = "Atul"
print("Type of name is:", type(name)) 

x = ("apple", "banana", "cherry")
print(x)

thislist = ["apple", "banana", "cherry"]
print(thislist[1])

thislist = ["apple", "banana", "cherry"]
thislist[1] = "blackcurrant"
print(thislist)

thislist = ["apple", "banana", "cherry"]
thislist.append("orange")
print(thislist)

thistuple = ("apple", "banana", "cherry")
if "apple" in thistuple:
  print("Yes, 'apple' is in the fruits tuple")


thisset = {"apple", "banana", "cherry"}

thisset.remove("banana")

print(thisset)



thisset = {"apple", "banana", "cherry"}

thisset.clear()

print(thisset)



thisset = {"apple", "banana", "cherry"}

del thisset

print(thisset)


thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict)


```


### python string functions

```

a = "Hello, World!"
print(len(a))

a = "HelloJX"

print(a.replace("H","HHHHH"))

a = "Hello, World!"
print(a.split("#"))

```

### python basic syntax if/elif/else 

```
print("A") if a > b else print("=") if a == b else print("B")

if a > b and c > a:
  print("Both conditions are True")



```

### While and for loops

```
i = 1
while i < 6:
  print(i)
  i += 1

for i in range(10):  
 print("i is:", i)
 
for i in range(5,10):  
 print("i is:", i)

```




### Python function and object  (Functions are objects)

```

def myfun():
   print("a")

# default parameter
def myfun1(country="china"):
   print(country)
  
myfun1()  


def myfun2(food):

  for x in food:
    print(x)

food = ["fff","dddd","hhhh","aaaaa"]
myfun2(food)


def myfunc3(value):

  return value%10
  
print(myfunc3(23))

   
    
   
def shout(text): 
    return text.upper() 
  
print shout('Hello') 
  
yell = shout 
  
print yell('Hello') 

```


### functions (lamda)

```

x = lambda a, b : a * b
print(x(5, 6))


```
### Functions can be passed as arguments to other functions:


```
 def shout(text): 
    return text.upper() 
  
def whisper(text): 
    return text.lower() 
  
def greet(func): 
    # storing the function in a variable 
    greeting = func("Hi, I am created by a function passed as an argument.") 
    print greeting  
  
greet(shout) 
greet(whisper) 


```


### Python class

```

class MyClass:
  x = 5
  
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 36)

print(p1.name)
print(p1.age)


class Person:
  
  def __init__(self, name, age):
    self.age = age
    self.name = name
  
  def stroperate(self, name, age):
    return name+" :"+ str(age)
  
  @classmethod
  def classmethodop(cls,name,age):
    return age**3
  
  @staticmethod
  def staticmethodop(name):
    return name + " " + name
  
p = Person("ff", 13)
print(p.name)
print(p.age)
print(p.stroperate(p.name, p.age))
print(Person.classmethodop("ff",13))
print(Person.staticmethodop("FFF"))

```




### Python Class 1

```

class Person:
  
  def __init__(self, name, age):
    self.age = age
    self.name = name
    
  
  
  def stroperate(self):
    if self.age >50:
      self.howold = "middle aged"
    elif self.age >30 and self.age <49:
      self.howold = "young aged"
    elif self.age <20 and self.age >10:
      self.howold = "Teenage"
    return self.howold 
  
  def getpersonname(self):
    return self.name
  
  @classmethod
  def classmethodop(cls,name,age):
    return age**3
  
  @staticmethod
  def staticmethodop(name):
    return name + " " + name
  
p = Person("ff", 13)
print(p.name)
print(p.age)
print(p.stroperate())
print(Person.classmethodop("ff",13))
print(Person.staticmethodop("FFF"))



class Student(Person):
  
  def __init__(self,name,age,tuition):
    self.name = name
    self.age = age
    self.tuition = tuition
  
  
  def getpersonname(self):
    return self.name
  
  def gettuition(self):
    return self.tuition


p = Person('gg', 255)

print(p.getpersonname())

st = Student('asdasd',1233,121231231)
print(st.getpersonname())
print(st.gettuition())

```

### python exception

```
def st():
  try:
    print("fffff")
  except:
    print("something wentwrong")   
  finally:
    print("hhh")

st()

```

### Python iteration

```
mystr = ["banana",'ffff']
myit = iter(mystr)
print(next(myit))


mystr1 = ["ff","eee",'ggg']
for str in mystr1:
   print(str)


class Mynumbers:
  
  def __init__(self):
    self.a = 1
  
  def __iter__(self):
    self.a = 1
    return self
  
  def __next__(self):
    if(self.a < 20):
      self.a+=1
      return self.a
    else:
      raise StopIteration
    
    
number = Mynumbers()

it = iter(number)

for ita in it:
    print(ita)






```

### Python Method

#### three online tutorial reference to:

https://www.geeksforgeeks.org/first-class-functions-python/


```
#simple method : defined outside of a class. This function can access class attributes by feeding instance arg.

def outside_foo():

#instance method: defined inside class
def foo(self,)
instance.foo(args...)

#class method : if we need to use class attributes

@classmethod
def cfoo(cls,) 

class.cfoo(instance, args...)


#static method : do not have any info about the class

@staticmethod
def sfoo() 

```...




### Python Class method and static method

```
# Python program to demonstrate  
# use of class method and static method. 
from datetime import date 
  
class Person: 
    def __init__(self, name, age): 
        self.name = name 
        self.age = age 
      
    # a class method to create a Person object by birth year. 
    @classmethod
    def fromBirthYear(cls, name, year): 
        return cls(name, date.today().year - year) 
      
    # a static method to check if a Person is adult or not. 
    @staticmethod
    def isAdult(age): 
        return age > 18
  
person1 = Person('mayank', 21) 
person2 = Person.fromBirthYear('mayank', 1996) 
  
print person1.age 
print person2.age 
  
# print the result 
print Person.isAdult(22) 

```

### Python Class variable versus instance variable

```
class CSStudent: 
    stream = 'cse'                  # Class Variable 
    def __init__(self,name,roll): 
        self.name = name            # Instance Variable 
        self.roll = roll            # Instance Variable 
  
# Objects of CSStudent class 
a = CSStudent('Geek', 1) 
b = CSStudent('Nerd', 2) 
  
print(a.stream)  # prints "cse" 
print(b.stream)  # prints "cse" 
print(a.name)    # prints "Geek" 
print(b.name)    # prints "Nerd" 
print(a.roll)    # prints "1" 
print(b.roll)    # prints "2" 
  
# Class variables can be accessed using class 
# name also 
print(CSStudent.stream) # prints "cse" 


```


### Python Class variable versus instance variable

```

edit
play_arrow

brightness_4
# Class for Computer Science Student 
class CSStudent: 
    stream = 'cse'     # Class Variable  
    def __init__(self, name, roll): 
        self.name = name  
        self.roll = roll 
  
# Driver program to test the functionality 
# Creating objects of CSStudent class 
a = CSStudent("Geek", 1) 
b = CSStudent("Nerd", 2) 
  
print "Initially"
print "a.stream =", a.stream 
print "b.stream =", b.stream  
  
# This thing doesn't change class(static) variable 
# Instead creates instance variable for the object 
# 'a' that shadows class member. 
a.stream = "ece"
  
print "\nAfter changing a.stream"
print "a.stream =", a.stream 
print "b.stream =", b.stream 


```
