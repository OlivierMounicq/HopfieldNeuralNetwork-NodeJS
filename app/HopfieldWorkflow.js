function Start(patternHtmlId, patternArray, degradedPattern){

  //Get the pattern list C, A and T
  //patternArray = GetPatternsToSave();

  //Push the pattern inn the memory
  weightMatrix = SetMemory(patternArray);

  DisplayData(weightMatrix, "divWeightMatrix");

  //Set degragred pattern
  //degradedPattern = GetDegradedPatternA();

  //Recover the pattern from a degraged pattern
  iterationMax = 5000;
  RetrievePatternFromMemory(degradedPattern, weightMatrix, iterationMax, DisplayConfiguration, 100, patternHtmlId);
}
