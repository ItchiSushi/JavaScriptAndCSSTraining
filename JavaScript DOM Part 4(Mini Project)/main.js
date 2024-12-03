var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit',addItem);

// Delete Item Event

itemList.addEventListener('click', deleteItem);


// Filter Item Event

filter.addEventListener('keyup', filterItems);

// Add Item

function addItem(e){
    e.preventDefault();
    console.log(1)
    
    // Get input item
    var newItem = document.getElementById('item').value;

    // Create new ally element

    var li = document.createElement('li');

    // Add Class

    li.className = 'list-group-item';

    // Add text node with input value

    li.appendChild(document.createTextNode(newItem));

    itemList.appendChild(li);

    // Create delete button

    var btnDelete = document.createElement('button');

    // Add classes to del button
    
    btnDelete.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    
    btnDelete.appendChild(document.createTextNode('X'));

    // Append del button to li
    
    li.appendChild(btnDelete);

    // Append li to list
    itemList.appendChild(li);
}

// Remove Item

function deleteItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you want to delete?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}

// Filter Item
function filterItems(e){

    // Convert to lowercase

    var text = e.target.value.toLowerCase();
    console.log(items);

    // Get List 
    var items = itemList.getElementsByTagName('li');

    // Convert to an array

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
    
}