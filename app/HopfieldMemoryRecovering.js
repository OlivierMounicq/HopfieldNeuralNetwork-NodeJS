//Recover a pattern from the memory by using a degraded pattern

//degradedPattern : matrix
//weightMatrix
//iterationMax
//displayFunction
//timeLaps
//htmlId

function RetrievePatternFromMemory(degradedPattern, weightMatrix, iterationMax, displayFunction, timeLaps, htmlId){

  rowQuantity = degradedPattern.length;
  colQuantity = degradedPattern[0].length;

  degradedConfiguration = GenerateConfigRowVector(degradedPattern);

  displayFunction(degradedConfiguration,htmlId, rowQuantity, colQuantity);

  E = GetEnergy(weightMatrix, degradedConfiguration);

  referencedConfiguration = CloneVector(degradedConfiguration);

  for(iteration = 0; iteration < iterationMax; iteration++){

    neuronIdx = GetRandom(degradedConfiguration.length-1);

    tmpConfig = CloneVector(referencedConfiguration);

    if(tmpConfig[neuronIdx] == 1){
      tmpConfig[neuronIdx] = -1;
    }
    else{
      tmpConfig[neuronIdx] = 1;
    }

    tmpE = GetEnergy(weightMatrix, tmpConfig);

    if(tmpE < E){
      E = tmpE;
      referencedConfiguration = CloneVector(tmpConfig);
    }

    console.log(tmpE);
  }

  displayFunction(referencedConfiguration,htmlId, rowQuantity, colQuantity);

  return referencedConfiguration;
}
