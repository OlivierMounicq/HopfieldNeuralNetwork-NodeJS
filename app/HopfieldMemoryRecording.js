//SetMemory
//GetPatternSize

function SetMemory(patternList){

  patternDimensions = GetPatternSize(patternList);

  globalWeights = InitMatrix(Math.pow(patternDimensions.rowQuantity,2), Math.pow(patternDimensions.columnQuantity,2));

  weights = [];

  for(cpt = 0; cpt < patternList.length; cpt++){
    pattern = patternList[cpt];

    //Transform the pattern matrix to a row vector
    rowPattern = GenerateConfigRowVector(pattern);

    weights[cpt] = GenerateMatrix(rowPattern, rowPattern);

    globalWeights = AddMatrix(globalWeights,weights[cpt]);
  }

  globalWeights = SetMatrixDiagonalToZero(globalWeights);
  globalWeights = NormalizeMatrix(globalWeights);

  return globalWeights;
}

function GetPatternSize(patternList){
  size = new Object();
  size.rowQuantity = patternList[0].length;
  size.columnQuantity = patternList[0][0].length;
  return size;
}
