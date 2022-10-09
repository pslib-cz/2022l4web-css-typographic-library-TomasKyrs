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
  <img class="responsiveimg_scale" src="https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg" alt="#">
  <figcaption></figcaption>
 </figure>
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
