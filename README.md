# interpolate
a simple interpolation script/web page, made to help out with a project

Given 2 numbers, this script will give you a list of evenly spaced numbers in between, based on how many steps you want to take between the first and second number.

If given `0` and `12`, with `2` steps in between, this is the mental model you should have of how the script works:
```
       1st step     2nd step
|-----------v-----------v
0           6          12

Output: 0, 6, 12
```

If you ask for `3` steps between `0` and `12` the following will happen:
```
          1st         2nd        3rd
|----------v-----------v----------v
0          4           8         12

Output: 0, 4, 8, 12
```

The script will work with floating point numbers as well as integers and will output the numbers based on the order that the extremes were put in.
If you ask for `3` steps between `12.5` and `2` the following will happen:
```
            1st         2nd        3rd
  |----------v-----------v----------v
12.5         9          5.5         2

Output: 12.5, 9, 5.5, 2
```
