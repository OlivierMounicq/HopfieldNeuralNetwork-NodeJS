var math = require("../app/HopfieldFramework");

describe("TestHopfieldFramework",function(){
    // *****************************************************************
    // Generate the pattern vector from the pattern matrix
    // *****************************************************************
    it("Get pattern vector from pattern matrix", function(){
        var M = [[ 1,  2,  3,  4,  5],
                 [ 6,  7,  8,  9, 10],
                 [11, 12, 13, 14, 15],
                 [16, 17, 18, 19, 20],
                 [21, 22, 23, 24, 25]];
        
        var expectedV = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ,25];
        
        var resultV = math.GenerateConfigRowVector(M);

        expect(resultV).toEqual(expectedV);
    });

    // *****************************************************************
    // Init a matrix
    // *****************************************************************    
    it("Init a matrix", function(){
        var m = 5;
        var n = 4;

        var expectedM =  [[0, 0, 0, 0],
                          [0, 0, 0, 0],
                          [0, 0, 0, 0],
                          [0, 0, 0, 0],
                          [0, 0, 0, 0]];
        
        var resultM = math.InitMatrix(m,n);

        expect(resultM).toEqual(expectedM);
    });

    // *****************************************************************
    // Normalize a Matrix
    // *****************************************************************
    it("Normalize the matrix", function(){
        var M = [[ 1,  -2,  3,  4,  5],
                 [ 6,  7,  8,  -9, 10],
                 [11, 12, 13, 14, 15],
                 [-16, -17, 18, 19, 20],
                 [21, 22, -23, -24, 25]];
        
        var expectedM = [[ 1, -1,  1,  1 ,1],
                         [ 1,  1,  1, -1, 1],
                         [ 1,  1,  1,  1, 1],
                         [-1, -1,  1,  1, 1],
                         [ 1,  1, -1, -1, 1]];
        
        var resultM = math.NormalizeMatrix(M);

        expect(resultM).toEqual(expectedM);
    });    

    // *****************************************************************
    // Set Matrix diagonal to zero
    // *****************************************************************
    it("Set matrix diagonal to zero", function(){  
        var A = [[ 1,  2,  3,  4,  5],
                 [ 6,  7,  8,  9, 10],
                 [11, 12, 13, 14, 15],
                 [16, 17, 18, 19, 20],
                 [21, 22, 23, 24, 25]];
   
        var expectedM = [[ 0,  2,  3,  4,  5],
                         [ 6,  0,  8,  9, 10],
                         [11, 12,  0, 14, 15],
                         [16, 17, 18,  0, 20],
                         [21, 22, 23, 24,  0]];
        
        var resultM = math.SetMatrixDiagonalToZero(A);
       
        expect(resultM).toEqual(expectedM);
    });

    // *****************************************************************
    // Add two matrix
    // *****************************************************************
    it("Add two matrix", function(){  
        var A = [[1, 2],
                [3, 4]];

        var B = [[5, 6],
                [7, 8]];
        
        var C = [[6,  8],
                [10, 12]];        
   
        var expectedM = math.AddMatrix(A,B);
       
        expect(expectedM).toEqual(C);
    });

    // *****************************************************************
    // Multiply two matrix
    // *****************************************************************
    it("Multiply two matrix", function(){
        var A = [[1, 2, 3],
                 [4, 5, 6]];

        var B = [[1, 2],
                 [3, 4],
                 [5, 6]];

        var expectedM = [[22, 28],
                         [49, 64]];

        var resultM = math.MultiplyMatrix(A,B);

        expect(resultM).toEqual(expectedM);

    });
    
    it("Multiply two matrix 2", function(){
        var A = [[1, 2, 3, 4],
                 [4, 3, 2, 1]];

        var B = [[1, 4],
                 [2, 3],
                 [3, 2],
				 [4, 1]];

        var expectedM = [[30, 20],
                         [20, 30]];

        var resultM = MultiplyMatrix(A,B);

        expect(resultM).toEqual(expectedM);

    });	    

    // *****************************************************************
    // Generate a matrix by multiplying a column vector by a row vector
    // *****************************************************************
    it("Generate a matrix by a column vector and a row vector", function(){
        var C = [1, 2, 3, 4];
        var R = [5, 6, 7, 8];

        var expectedM = [[ 5,  6,  7,  8],
                         [10, 12, 14, 16],
                         [15, 18, 21, 24],
                         [20, 24, 28, 32]];

        var resultM = math.GenerateMatrix(C,R);

        expect(resultM).toEqual(expectedM);

    });

    // **********************************
    // Multiply row vector by a matrix
    // **********************************
    it("Multiply row vector by a matrix", function(){
        var M = [[ 1,  2,  3],
                 [ 4,  5,  6],
                 [ 7,  8,  9],
                 [10, 11, 12]];
        
        var R = [1, 2, 3, 4];

        var expectedR = [70, 80, 90];

        var resultR = math.MultiplyRowVectorByMatrix(R,M);

        expect(resultR).toEqual(expectedR);
    });

    // **********************************
    // Multiply matrix by a column vector
    // **********************************
    it("Multiply Matrix By Column Vector", function(){
        var M = [[ 1,  2,  3,  4],
                 [ 5,  6,  7,  8],
                 [ 9, 10, 11, 12]];
        
        var C = [1, 2, 3, 4];

        var expectedV = [30, 70, 110];

        var resultC = math.MultiplyMatrixByColumnVector(M,C);

        expect(resultC).toEqual(expectedV);

    });
    
    // *****************************
    // SCALAR PRODUCT
    // *****************************
    it("The scalar product", function(){
        var A = [1, 2, 3];
        var B = [4, 5, 6];

        var expectedV = 32;

        var resultV = math.GetProductScalar(A,B);

        expect(resultV).toEqual(expectedV);
    });

    it("Random number", function(){
        var min = 0;
        var max = 10;
        var resultN = math.GetRandomInt(min,max);

        var res = false;
        if(resultN >= min && resultN <= max){
            res = true;
        }
    
        expect(res).toEqual(true);
    });

     // *****************************
    // Clone vector
    // *****************************
    it("Clone the vector", function(){
        var V = [1, 2, 3];
        var expectedV = [1, 2, 3];

        resultV = math.CloneVector(V);

        expect(resultV).toEqual(expectedV);
        expect(resultV).not.toBe(expectedV);
    });   
  });
