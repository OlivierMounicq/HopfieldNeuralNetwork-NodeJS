//This file contains the UI implementation

function DisplayConfiguration(configurationVector, htmlId, rowQuantity, columnQuantity){

  configuration = GetConfigurationAsObject(configurationVector, rowQuantity, columnQuantity);

  for(var neuron in configuration){
    neuronValue = configuration[neuron];
    neuronHtmlId = "#" + htmlId + "_" + neuron;

    //cellId = htmlId + "_" + neuron;
    cellId = htmlId + neuron;

    if(neuronValue == -1){
      //$(neuronHtmlId).css("background-color", "#FFFFFF");

      document.getElementById(cellId).style.backgroundColor = "#FFFFFF";
    }
    else{
      //$(neuronHtmlId).css("background-color", "#000000");
      document.getElementById(cellId).style.backgroundColor = "#000000";
    }
  }
}

//rowVector : a configuration
function GetConfigurationAsObject(rowVector, rowQuantity, columnQuantity){

  config = new Object();

  for(i = 0; i < rowQuantity; i++){
    for(j = 0; j < columnQuantity; j++){
      idx = (i * rowQuantity)   + j;
      idxString = i.toString() + "," + j.toString();
      config[idxString] = rowVector[idx];
    }
  }

  return config;
}

//https://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript
//Usage : eventFire(document.getElementById('mytest1'), 'click');
function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}


function DisplayData(matrix, htmlId){
  all = "The weight matrix : <br/><br/>";
  all += "<table>";

  for(rowIdx = 0; rowIdx < matrix.length; rowIdx++){
    all += "<tr>";
    for(colIdx = 0; colIdx < matrix[0].length; colIdx++){
      all += "<td align='right'>" + matrix[rowIdx][colIdx] + "</td>";
    }
    all += "</tr>";
  }

  all += "</table>";
  htmlId = "#" + htmlId;
  $(htmlId).html(all);
}
