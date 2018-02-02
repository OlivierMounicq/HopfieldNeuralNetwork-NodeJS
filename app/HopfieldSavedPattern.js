function GetPatternsToSave(){
  patterns = [];
  patterns[0] = GetPatternC();
  patterns[1] = GetPatternA();
  patterns[2] = GetPatternT();

return patterns;
}


function GetPatternA(){
  patternA = [,];
  
  patternA[0] = [1,  1,  1,  1, 1];
  patternA[1] = [1, -1, -1, -1, 1];
  patternA[2] = [1,  1,  1,  1, 1];
  patternA[3] = [1, -1, -1, -1, 1];
  patternA[4] = [1, -1, -1, -1, 1];

  return patternA;
}

function GetPatternT(){
  patternT = [,];
  
  patternT[0] = [ 1,  1,  1,  1,  1];
  patternT[1] = [-1, -1,  1, -1, -1];
  patternT[2] = [-1, -1,  1, -1, -1];
  patternT[3] = [-1, -1,  1, -1, -1];
  patternT[4] = [-1, -1,  1, -1, -1];

  return patternT;
}


function GetPatternC(){
  patternC = [,];
  
  patternC[0] = [1,  1,  1,  1,  1];
  patternC[1] = [1, -1, -1, -1, -1];
  patternC[2] = [1, -1, -1, -1, -1];
  patternC[3] = [1, -1, -1, -1, -1];
  patternC[4] = [1,  1,  1,  1,  1];

  return patternC;
}

