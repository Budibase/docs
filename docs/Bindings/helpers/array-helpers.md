---
title: Array
excerpt: These helpers are based around manipulating arrays.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: number-helpers
      title: Number helpers
---
## Arrayify

The arrayify function takes a value as input and converts it into an array. It ensures that the given value is casted or transformed into an array data type.

For example, if you use the arrayify function with the value `'foo'`, it will return `['foo']`. This means that the value 'foo' has been transformed into an array with a single element `['foo']`. The arrayify function allows you to ensure that a value is treated as an array, even if it is a single value or a non-array type.

![Arrayify helper function example.](https://files.readme.io/09fe8a5-Screenshot_2023-06-14_at_13.09.21.png)

## Before

The before function takes an array and a count "n" as input. It returns a new array containing all the elements in the original array that come before the specified count.

For example, if you use the before function with the array `[1, 2, 3]` and count `2`, it will return `[1, 2]`. This means that it retrieves all the items in the array before the specified count of 2. In this case, the elements `1` and `2` are returned. The before function allows you to extract the elements of an array up to a specific count and get all the elements that come before that count.

## Each index

The eachIndex function is used for iterating over an array. It takes two arguments: the array to iterate over and an optional set of options.

Within the iteration block, you can access two variables: "item" and "index". "item" represents the current element of the array being iterated, while "index" represents the index of that element.

Here's an example of using the eachIndex function:

```Text handleBars
{{#eachIndex [1, 2, 3] }}  
  {{item}} is {{index}}  
{{/eachIndex}}
```

In this example, the eachIndex function is applied to the array `[1, 2, 3]`. It will iterate over each element of the array. For each iteration, it will output the value of the "item" variable (the current element) followed by "is" and the value of the "index" variable (the index of the current element).

The output of the above example would be:

```Text Output
1 is 0  
2 is 1  
3 is 2
```

This demonstrates how the eachIndex function allows you to iterate over an array and access both the item value and its corresponding index during each iteration.

## Filter

The filter function is a block helper used for filtering an array based on a specific value or condition. It takes three arguments: the array to filter, the value or condition to filter by, and an optional set of options.

Within the block, you can check if each element of the array matches the specified value or condition. If an element matches, the block inside the filter function is rendered. If none of the elements match, the inverse block (specified by the "else" keyword) is rendered.

Here's an example of using the filter function:

```Text handleBars
{{#filter [1, 2, 3] 2 }}
  2 Found
{{else}}
  2 not found
{{/filter}}
```

In this example, the filter function is applied to the array `[1, 2, 3]` with the value `2`. It will iterate over each element of the array and check if the element is equal to `2`. Since the element `2 `is present in the array, the block inside the filter function is rendered, resulting in the output "2 Found".

If we modified the example to use a value that is not present in the array, like `4,` the output would be "2 not found".

The filter function allows you to selectively render different blocks based on whether or not elements in the array match a specified value or condition.

## Is array

The isArray function is used to check if a given value is an ES5 array. It takes one argument, which is the value to be checked.

When the isArray function is applied to a value, it checks if the value is an array. If the value is indeed an array, the function returns true. Otherwise, it returns false.

Here's an example of using the isArray function:

```Text handleBars
{{ isArray [1, 2] }}
```

In this example, the isArray function is applied to the array `[1, 2]`. Since `[1, 2]` is indeed an array, the function will return true.

If we applied the isArray function to a non-array value, such as a string or number, it would return false.

The isArray function is useful when you need to determine if a value is an array before performing any array-specific operations or logic. It provides a simple way to check the type of a value and make decisions based on the result.

## Join

The join function is used to concatenate all the elements of an array into a single string. It takes two arguments: the array to be joined and an optional separator.

When the join function is applied to an array, it combines all the elements of the array into a string. By default, it uses a comma `(",")` as the separator between the elements. However, you can specify a custom separator as the second argument to the function.

Here's an example of using the join function:

```Text handleBars
{{ join [1, 2, 3] }}
```

In this example, the join function is applied to the array `[1, 2, 3]`. Since no custom separator is provided, it uses the default separator of a comma. The resulting string is `"1,2,3"`.

If we wanted to use a different separator, such as a hyphen `("-")`, we can modify the example like this:

```Text handleBars
{{ join [1, 2, 3] "-" }}
```

In this modified example, the join function is still applied to the array `[1, 2, 3]`, but we specify a custom separator of a hyphen `("-")`. The resulting string will be `"1-2-3".`

The join function is useful when you need to convert an array into a string representation, where the elements are concatenated with a specific separator. It allows you to control the formatting and structure of the resulting string.

## Equals length

The equalsLength function is used to compare the length of a value (such as an array or string) with a specified length. It takes three arguments: the value to be compared, the desired length, and optional options.

When the equalsLength function is applied, it checks if the length of the given value is equal to the specified length. If the lengths match, the function returns true. Otherwise, it returns false.

Here's an example of using the equalsLength function:

```Text handleBars
{{ equalsLength '[1,2,3]' 3 }}
```

In this example, the equalsLength function is applied to the value `'[1,2,3]'` (which is an array) and the desired length of `3`. Since the length of the array is indeed 3, the function will return true.

The equalsLength function can be used to validate the length of arrays, strings, or other types of collections. By comparing the length with an expected value, you can determine if the length meets your criteria.

Note that the equalsLength function can be used both as a block helper and an inline helper. As a block helper, you can specify alternative content to be rendered. As an inline helper, the function simply returns the boolean result.

Overall, the equalsLength function provides a convenient way to compare the length of a value with a specified length in a handlebars template.

## Length

The length function returns the number of elements in a string or array. It takes one argument, which can be a string or an array. It returns the length of the string or the number of elements in the array.

Example:

```Text handleBars
{{ length '[1, 2, 3]' }} -> 3
{{ length 'hello' }} -> 5
```

The length function is useful when you need to determine the size or number of elements in a string or array.

## Length equals

The lengthEqual function checks if the length of a given value (string or array) is equal to a specified length. It takes three arguments: the value, the expected length, and optional options. It returns true if the length of the value is equal to the specified length.

Example:

```Text handleBars
{{ lengthEqual '[1, 2, 3]' 3 }} -> true
{{ lengthEqual 'hello' 5 }} -> true
{{ lengthEqual [1, 2, 3] 4 }} -> false
```

The lengthEqual function is useful when you need to compare the length of a string or array with a specific value to check for equality.

## Map

The map function applies a given function to each element of an array and returns a new array containing the results. It takes two arguments: the array to be mapped and the function to apply to each element.

Example:

```Text handleBars
{{ map [1, 2, 3] double }} -> [2, 4, 6]
```

In the above example, the "double" function is applied to each element of the array `[1, 2, 3]`, resulting in a new array `[2, 4, 6]`. The map function is useful when you need to transform each element of an array based on a specific operation or function.

## Pluck

The pluck function allows you to extract a specific property from objects in a collection or array and returns an array of the extracted values. It takes two arguments: the collection or array of objects and the property to extract.

Example:

```Text handleBars
{{ pluck [{ 'name': 'Bob' }] 'name' }} -> ['Bob']
```

In the above example, the pluck function is used to extract the 'name' property from the object `{ 'name': 'Bob' }`. It returns an array containing the extracted value `['Bob']`.

## Reverse

The reverse function allows you to reverse the elements in an array or the characters in a string. It takes one argument, which can be an array or a string.

Example:

```Text handleBars
{{ reverse [1, 2, 3] }} -> [3, 2, 1]
```

In the above example, the reverse function is used to reverse the elements in the array `[1, 2, 3]`. It returns a new array `[3, 2, 1]` with the elements in reverse order.

You can also use the reverse function with a string to reverse the characters:

```Text handleBars
{{ reverse "hello" }} -> "olleh"
```

In this case, the reverse function reverses the characters in the string "hello" and returns the string "olleh".

Note that the reverse function does not modify the original array or string. It creates a new array or string with the reversed elements or characters.

## Some

The "some" function is a block helper that checks if the callback function returns true for some value in the given array. It takes three arguments: the array to iterate over, the callback function, and an optional "provided" value.

Example:

```Text handleBars
{{#some [1, 'b', 3] isString}} string found {{else}} No string found {{/some}} -> string found
```

In the above example, the "some" function is used to check if there is any string value in the array [1, 'b', 3]. The "isString" callback function is applied to each element of the array. If the callback function returns true for any string value in the array, the block "string found" is rendered. Otherwise, the "No string found" block is rendered.

## Sort

The "sort" function is used to sort the elements of an array. It takes two arguments: the array to be sorted and an optional "key" or sorting function.

Example:

```Text handleBars
{{ sort ['b', 'a', 'c'] }} -> ['a', 'b', 'c']
```

In the above example, the "sort" function is applied to the array `['b', 'a', 'c']`, and it returns a new array `['a', 'b', 'c']` with the elements sorted in ascending order.

## Sort by

The "sortBy" function is used to sort an array based on a specific property of the objects within the array. It takes two arguments: the array to be sorted and the property (or properties) to sort on.

Example:

```Text handleBars
{{ sortBy [{a: 'zzz'}, {a: 'aaa'}] 'a' }} -> [{'a':'aaa'}, {'a':'zzz'}]
```

In the above example, the "sortBy" function is applied to the array `[{a: 'zzz'}, {a: 'aaa'}]` and the property 'a'. It returns a new array with the objects sorted in ascending order based on the values of the 'a' property. In this case, the resulting array is `[{'a':'aaa'}, {'a':'zzz'}]`.

```Text Output
1, 2
3, 4
```

## Unique

The "unique" function is a block helper that takes an array as input and returns a new array with all duplicate values removed. It is best used along with an "each" helper to iterate over the unique values.

Example:

```Text handleBars
{{#each (unique ['a', 'a', 'c', 'b', 'e', 'e'])}}
  {{.}}
{{/each}}
```

In the above example, the "unique" function is applied to the array `['a', 'a', 'c', 'b', 'e', 'e']`. It removes the duplicate values from the array, resulting in a new array `['a', 'c', 'b', 'e']`. The "each" helper is then used to iterate over the unique values of the array. Inside the block, the "." refers to each unique value as it is iterated.

The output of the example would be:

```Text Output
a
c
b
e
```