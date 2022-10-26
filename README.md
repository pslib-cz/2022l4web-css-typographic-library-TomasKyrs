# Typography CSS library
**Author:** *Tomáš Kyrš*
## Demo site
Link to **[demo](http://pslib-cz.github.io/2022l4web-css-typographic-library-TomasKyrs)** site for preview.
## Dependecies
...
## Implementation

Add file inside your project folder

Link style.css file to every HTML page using syntax:
```
<link href="./style.css" rel="stylesheet">
```   
## Usage     
...
## Header
```
<header>
        <h1>First level heading</h1>
        <h2>Secondary heading level</h2>
</header>
```

## Text box
```
<div>
     <h2>Header of text paragraph</h2>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi, 
     qui unde asperiores delectus nobis tempore omnis at quibusdam.</p>
</div>
```
## Image

Static image and scaling image

### Static image

```
<figure>
        <img src="#" alt="#">
        <figcaption>Image 1</figcaption>
</figure>
```

### Scaling image
```
<figure class="scaled_image">
  <img class="responsiveimg_scale" src="#" alt="#">
  <figcaption></figcaption>
 </figure>
```

### Flex Gallery
```
   <div class="flex_gallery">
              <figure>
                   <img src="#" alt="#">
                  <figcaption></figcaption>
              </figure>
              <figure>
                  <img src="#" alt="#">
                <figcaption></figcaption>
            </figure>
            <figure>
                  <img src="#" alt="#">
                <figcaption></figcaption>
            </figure>
            <figure>
                  <img src="#" alt="#">
                <figcaption></figcaption>
            </figure>
        </div>
```

## Lists
Ordered lists and unordered lists are currently being used

### Unordered list
```
<ul>
     <li>Product 1</li>
     <li>Product 2
         <ul>
            <li>Variation of product 2</li>
            <li>Variation of product 2</li>
        </ul>
    </li>
</ul>
```

### Ordered list
```
<ol>
      <li>First product</li>
      <li>Second product
         <ol>
            <li>First Variation of second product</li>
           <li>Second Variation of second product</li>
        </ol>
    </li>
</ol>
```

## Alert buttons
```
<div class="alert alert--middle">
 <span class="alert__close" onclick="this.parentElement.style.display='none';">x</span>
 <p>This is a warning alert box that will disappear when you click on X button.</p>
</div>
```
## Table
```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Points</th>
      <th>Rank</th>
      <th>Role</th>
    </tr>
 </thead>
<tbody>
    <tr>
       <td>Dom</td>
       <td>4000</td>
       <td>#3</td>
       <td>Support</td>
    </tr>
     <tr>
       <td>Alice</td>
       <td>6000</td>
       <td>#2</td>
       <td>Defense</td>
     </tr>
     <tr class="active-row">
        <td>Melissa</td>
        <td>6150</td>
        <td>#1</td>
        <td>Leader</td>
     </tr>
</tbody>
        </table>
```

## Pre tag
Indicates a preformatted text
```
<pre>
 Text in a pre element
  is displayed in a fixed-width
    font, and it preserves
     both       spaces and
      line breaks </pre>
```

## Text customization

### p tag
Normal paragraph - ```<p>Normal paragraph</p>```
 
### u tag
<u>underlined</u> - ```<u>underlined</u>```

### b tag
<b>bold</b> - ```<b>bold</b>```

### strike tag
<s>striked</s> - ```<s>striked</s>```

### mark tag
<mark>highlited</mark> - ```<mark>highlited</mark>```

### italic tag
Tag defines a part of text in an alternate voice or mood, often used to indicate a technical term, a phrase from another language, a thought, a ship name, etc. 

<i>italic</i> - ```<i>italic</i>```

### a tag
<a "href="#">clickable</a> - ```<a "href="#">clickable</a>```

### small tag
<small>small</small> - ```<small>small</small>```


## Footer
```
<footer>
    <img src="#" alt="#">
    <p>Author: <strong>Name</strong></p>
    <a href="#website">Website</a>
 </footer>
 ```

## Components
### First
### Second
