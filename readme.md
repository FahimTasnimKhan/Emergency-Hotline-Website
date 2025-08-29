1. getElementById will select one element with said id whereas getElementsByClassName will select all elements with said elements. Query Selector will select the first element with the give query but querySelectorAll will select all elements with same elements

2. To create an element we type **document.createElement("tag")** and to insert this into any tag or parent container we type document.appendChild("element name")

3. When an event is clicked the event first runs on it and then goes up to its parent element then grandparent element and so on is called Event Bubbling

4. Instead of adding events to several parents we add event to one parent for our desired effect is called Event Delegation

5. preventDefault prevents the default behavior of a selected element and stopPropagation prevents the event from Event Bubbling
