// Plans for this todos aplication

// 1.We want to select the input, add todos, remove todos, and the whole list item
// 2.As soon as we click remove done todos, it should be deleting all the todos marked as checked
// 3.Use of loop inside loop


var uol = document.getElementById('list');
var li;



var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearAllTodo);



function addItem(){
    /* We have a method called insert before in ul which can add a new li at the start that
    is at 0th index of ul */
    // We can also use append. However, it adds at the bottom of the list

    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);

    if (item==='') {
        return false;

        /* Assignment: Add a p tag and assign a value of "Enter your todo"
        Add the setTimeout effect on this p tag and after sometime
        Initially, it should have an opacity of 1 and after 2 or 3 seconds,
        the opacity should become 0*/
        
    }else{

        // 1.Creating li

        li = document.createElement('li');

        // In each list we have two properties input and label 
        // So, first we created li
        // Now, we will create input and then label

        // 2.Creating checkbox

        var checkbox = document.createElement('input');
        // This input should have a type of checkbox and the name of item

        checkbox.type = 'checkbox';
        // This checkbox can be assigned a type by directly assigining a value type

        /* Now, how we can assign an id or class to this checkbox or any kind of tags
        like paragraph or h1 */

        checkbox.setAttribute('id', 'check');
        // setAttribute takes 2 parametres kind of a key-value pair

        // 3.Creating label

        var label = document.createElement('label');
        label.setAttribute('for', 'item'); // optionel

        // Adding these elements on the webpage

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);

        // Now, we will be getting some visual effects

        setTimeout(() => {
            li.className = 'visual';
        }, 5);

        input.value = '';

    }
    
}

function removeItem(){
    li = uol.children;

    // What is there inside this uol.children :We can see by logging
    // console.log(li);
    // It contains all the childrens of list .All of them are arrays as li.mycheck
    // Inside each array, we have several properties
    
    // Now, we can loop through the list elements, as we do not know how many elements will come

    for (let index = 0; index < li.length; index++) {
        const element = li[index];

        // We can see what is inside each element by logging it
        // console.log(element); 
        
        /* Now, we can to use another loop inside to move into each element and check 
        whether they are checked or not */

        while (li[index] && li[index].children[0].checked) {

            // checked property is at the very first of a children 
            // Here, li[index] condition checks whether we are on the first index or not

            uol.removeChild(li[index]);
        }

    }
}

function clearAllTodo(){
    // li=uol.children;
    // ar=Array(li);
    // console.log(ar);
    uol.innerHTML='';

    // for (let index = 0; index < li.length; index++) {
    //     // const element = li[index];
    //     uol.removeChild(li[index]);
    // }
}


