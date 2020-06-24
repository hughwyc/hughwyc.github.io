---
title: Write Beautiful Python Code With PEP8
copyright: true
visitor: true
comment_count: true
date: 2020-06-24 09:39:28
id: python-code-with-PEP8
notshow:
top:
tags:
categories:
description:“Code is read much more often than it is written.” --Guido van Rossum
---

## Naming Conventions

### Naming Styles

| Type     | Naming Convention                                            | Examples                                      |
| -------- | ------------------------------------------------------------ | --------------------------------------------- |
| Function | Use a lowercase word or words. Separate words by underscores to improve readability. | `function`, `my_function`                     |
| Variable | Use a lowercase single letter, word, or words. Separate words with underscores to improve readability. | `x`, `var`, `my_variable`                     |
| Class    | Start each word with a capital letter. Do not separate words with underscores. This style is called camel case. | `Model`, `MyClass`                            |
| Method   | Use a lowercase word or words. Separate words with underscores to improve readability. | `class_method`, `method`                      |
| Constant | Use an uppercase single letter, word, or words. Separate words with underscores to improve readability. | `CONSTANT`, `MY_CONSTANT`, `MY_LONG_CONSTANT` |
| Module   | Use a short, lowercase word or words. Separate words with underscores to improve readability. | `module.py`, `my_module.py`                   |
| Package  | Use a short, lowercase word or words. Do not separate words with underscores. | `package`, `mypackage`                        |

### How to Choose Names

Always try to use the most concise but descriptive names possible.

```python
>>> # Not recommended
>>> x = 'John Smith'
>>> y, z = x.split()
>>> print(z, y, sep=', ')
'Smith, John'
```

```python
>>> # Recommended
>>> name = 'John Smith'
>>> first_name, last_name = name.split()
>>> print(last_name, first_name, sep=', ')
'Smith, John'
```

```python
# Not recommended
def db(x):
    return x * 2
```

```python
# Recommended
def multiply_by_two(x):
    return x * 2
```

## Code Layout

### Blank Lines

Code that’s bunched up together can be overwhelming and hard to read.

* **Surround top-level functions and classes with two blank lines.**

  ```python
  class MyFirstClass:
      pass
  
  
  class MySecondClass:
      pass
  
  
  def top_level_function():
      return None
  ```

* **Surround method definitions inside classes with a single blank line.**

  ```python
  class MyClass:
      def first_method(self):
          return None
  
      def second_method(self):
          return None
  ```

* **Use blank lines sparingly inside functions to show clear steps.**

  ```python
  def calculate_variance(number_list):
      sum_list = 0
      for number in number_list:
          sum_list = sum_list + number
      mean = sum_list / len(number_list)
  
      sum_squares = 0
      for number in number_list:
          sum_squares = sum_squares + number**2
      mean_squares = sum_squares / len(number_list)
  
      return mean_squares - mean**2
  ```

### Maximum Line Length and Line Breaking

PEP 8 suggests lines should be limited to 79 characters. 

Python will assume line continuation if code is contained within parentheses, brackets, or braces:

```python
def function(arg_one, arg_two,
             arg_three, arg_four):
    return arg_one
```

If it is impossible to use implied continuation, then you can use backslashes to break lines instead:

```python
from mypkg import example1, \
    example2, example3
```

If line breaking needs to occur around binary operators, like `+` and `*`, it should occur before the operator:

```python
# Recommended
total = (first_variable
         + second_variable
         - third_variable)
```

Breaking before binary operators produces more readable code.

## Indentation

### Indentation Following Line Breaks

```python
# Not Recommended
def function(
    arg_one, arg_two,
    arg_three, arg_four):
    return arg_one
```

```python
# Recommended
def function(
        arg_one, arg_two,
        arg_three, arg_four):
    return arg_one
```

### Where to Put the Closing Brace

```python
list_of_numbers = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9
]
```

## Comments

* Limit the line length of comments and docstrings to 72 characters.
* Use complete sentences, starting with a capital letter.
* Make sure to update comments if you change your code.

### Inline Comments

```python
empty_list = []  # Initialize empty list

x = 5
x = x * 5  # Multiply x by 5
```

### Block Comments

```python
for i in range(0, 10):
    # Loop over i ten times and print out the value of i, followed by a
    # new line character
    print(i, '\n')
```

```python
def quadratic(a, b, c, x):
    # Calculate the solution to a quadratic equation using the quadratic
    # formula.
    #
    # There are always two solutions to a quadratic equation, x_1 and x_2.
    x_1 = (- b+(b**2-4*a*c)**(1/2)) / (2*a)
    x_2 = (- b-(b**2-4*a*c)**(1/2)) / (2*a)
    return x_1, x_2
```

### Documentation Strings

```python
def quadratic(a, b, c, x):
    """Solve quadratic equation via the quadratic formula.

    A quadratic equation has the following form:
    ax**2 + bx + c = 0

    There always two solutions to a quadratic equation: x_1 & x_2.
    """
    x_1 = (- b+(b**2-4*a*c)**(1/2)) / (2*a)
    x_2 = (- b-(b**2-4*a*c)**(1/2)) / (2*a)

    return x_1, x_2
```

```python
def quadratic(a, b, c, x):
    """Use the quadratic formula"""
    x_1 = (- b+(b**2-4*a*c)**(1/2)) / (2*a)
    x_2 = (- b-(b**2-4*a*c)**(1/2)) / (2*a)

    return x_1, x_2
```

## Whitespace in Expressions and Statements

### Whitespace Around Binary Operators

Surround the following binary operators with a single space on either side:

* Assignment operators (`=`, `+=`, `-=`, and so forth)
* Comparisons (`==`, `!=`, `>`, `<`. `>=`, `<=`) and (`is`, `is not`, `in`, `not in`)
* Booleans (`and`, `not`, `or`)

**Note**: When `=` is used to assign a default value to a function argument, do not surround it with spaces.

```python
# Recommended
def function(default_parameter=5):
    # ...


# Not recommended
def function(default_parameter = 5):
    # ...
   
```

When there’s more than one operator in a statement, adding a single space before and after each operator can look confusing. Instead, it is better to only add whitespace around the operators with the lowest priority, especially when performing mathematical manipulation：

```python
# Recommended
y = x**2 + 5
z = (x+y) * (x-y)

# Not Recommended
y = x ** 2 + 5
z = (x + y) * (x - y)
```

You can also apply this to `if` statements where there are multiple conditions. The `and` operator has lowest priority. 

```python
# Not recommended
if x > 5 and x % 2 == 0:
    print('x is larger than 5 and divisible by 2!')
    
# Recommended
if x>5 and x%2==0:
    print('x is larger than 5 and divisible by 2!')
```

In slices, colons act as a binary operators:

```python
list[3:4]

# Treat the colon as the operator with lowest priority
list[x+1 : x+2]

# In an extended slice, both colons must be
# surrounded by the same amount of whitespace
list[3:4:5]
list[x+1 : x+2 : x+3]

# The space is omitted if a slice parameter is omitted
list[x+1 : x+2 :]
```

### When to Avoid Adding Whitespace

* Before a comma, semicolon, or colon:

  ```python
x = 5
  y = 6
  
  # Recommended
  print(x, y)
  
  # Not recommended
  print(x , y)
  ```

* Between a trailing comma and a closing parenthesis:

  ```python
  # Recommended
  tuple = (1,)
  
  # Not recommended
  tuple = (1, )
  ```

## Programming Recommendations

* Don’t compare boolean values to `True` or `False` using the equivalence operator.

  ```python
  # Not recommended
  my_bool = 6 > 5
  if my_bool == True:
      return '6 is bigger than 5'
  
  # Recommended
  if my_bool:
      return '6 is bigger than 5'
  ```

* Use the fact that empty sequences are falsy in `if` statements.

  ```python
  # Not recommended
  my_list = []
  if not len(my_list):
      print('List is empty!')
      
  # Recommended
  my_list = []
  if not my_list:
      print('List is empty!')
  ```

* Use `is not` rather than `not ... is` in `if` statements.

  ```python
  # Recommended
  if x is not None:
      return 'x exists!'
  
  # Not recommended
  if not x is None:
      return 'x exists!'
  ```

* Don’t use `if x:` when you mean `if x is not None:`. 

  Sometimes, you may have a function with arguments that are `None` by default. A common mistake when checking if such an argument, `arg`, has been given a different value is to use the following:

  ```python
  # Not Recommended
  if arg:
      # Do something with arg...
  
  # Recommended
  if arg is not None:
      # Do something with arg...
  ```

  > In python, `None`,  `False`, `empty string:""`, `0`, `empty list: []`, `empty dict: {}`, `empty tuple: ()` are equal to `False`：
  >
  >```python
  >not None == not False == not '' == not 0 == not [] == not {} == not ()
  >
  >>>> x = []
  >>>> y = None
  >
  >>>> x is None  # attention
  >False
  >>>> y is None
  >True
  >
  >>>> not x
  >True
  >>>> not y
  >True
  >
  >>>> not x is None
  >True
  >>>> not y is None
  >False
  >
  >```

* Use `.startswith()` and `.endswith()` instead of slicing.

  ```python
  # Not recommended
  if word[:3] == 'cat':
      print('The word starts with "cat"')
      
  # Recommended
  if word.startswith('cat'):
      print('The word starts with "cat"')
  ```

  