computers cant properly store some floating point numbers
- its best practice to use cents instead of dollars to calculate money

Math.round(2.8)
- it'll round to 3
- 2.5 rounds to the higher number 3

alert("Hello World!);

typeof 
- typeof 2 gives 'number'
- typeof "hello" gives 'string'

'hello' + 3 
- 'hello3'

escape characters
- \'
- \"
- \n

`hello`
- strings created by backtick are called template string
- interpolation: insert value directly in a string, alt. to concatenation
- `Items (${1 + 3})`
- multiline string: backtick is equivalent to ''' in python

HTML 
- newline is considered as 1 space

// comment or /* multiline comment */

VARIABLE
- let: allows changing of values later
- const: doesnt allow changing of value
- var: same as let; but not used in modern JS
- only $, _ special chars allowed
- not start with number
- no reserved keywords
- cannot use '-' symbol. eg, cart-quantity

quantity = quantity + 2
- quantity += 2; 
- quantity++;

OPERATORS
- == is replaced by ===
- != is replaced by !==
- == or != tries to convert the values to same datatype 
- eg, 5 == '5.00' returns true
- while 5 === '5.00' returns false
- lower priority than math

Math.random()
- generates a number such that (0 <= number < 1)

SCOPES
- a scope limits where a variable exists
- if statement creates a scope
- any variable inside {} will only exist inside that {}
- scopes helps avoid naming conflicts
- var doesnt follow the rules of scope