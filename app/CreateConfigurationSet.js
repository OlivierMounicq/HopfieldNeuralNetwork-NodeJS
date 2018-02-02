var counter = 0;

function CreateConfigurationSet(){
  root0 = new Item(0, -1);
  root1 = new Item(0, 1);
  
  list0 = [];
  list0.push(-1);
  
  list1 = [];
  list1.push(1);
  
  CreateConfigurationTree(0, 8, root0, list0);
  CreateConfigurationTree(0, 8, root1, list1);
}

function CreateConfigurationTree(deepth, max, parentItem, values){
  if(deepth < max){
    item0 = new Item(parentItem.Value, -1);
    item1 = new Item(parentItem.Value, 1);
    parentItem.Children.push(item0);
    parentItem.Children.push(item1);
    deepth = deepth + 1;
    var list0 = [];
    var list1 = [];
    for(cpt = 0; cpt < values.length; cpt++)
    {
      list0.push(values[cpt]);
      list1.push(values[cpt]);
    }
    list0.push(item0.Value);
    list1.push(item1.Value);
    CreateConfigurationTree(deepth, max, item0, list0);
    CreateConfigurationTree(deepth, max, item1, list1);
  }
  else{
    counter++;
    var config = [];
    str = "";
    for(cpt=0; cpt < values.length; cpt++)
    {
      config.push(values[cpt]);
      str = str + " | " + values[cpt];
    }
    document.getElementById("res").innerHTML += "<br />" + "(" + counter +  ")" + str;
  }
}

//Object
function Item(parentValue, value){
  this.ParentValue = parentValue;
  this.Value = value;
  this.Children = [];
}
