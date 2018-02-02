function Start(patternHtmlId){

  //Get the pattern list C, A and T
  patternList = GetPatternsToSave();

  //Push the pattern inn the memory
  weightMatrix = SetMemory(patternList);

  DisplayData(weightMatrix);

  //Set degragred pattern
  degradedPattern = GetDegradedPatternA();

  //Recover the pattern from a degraged pattern
  iterationMax = 1000;
  RetrievePatternFromMemory(degradedPattern, weightMatrix, iterationMax, DisplayConfiguration, 100, patternHtmlId);
}
