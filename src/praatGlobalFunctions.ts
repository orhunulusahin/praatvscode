// Praat global function list A

import { IEntries } from './PraatGlobals';

export const globalfunctions: IEntries = {
    abs: {
        description: 'Absolute value',
        signature: '(x)'
    },
    abs_vector: {
        description: 'Absolute value of each element of vector',
        signature: '(vector)'
    },
    abs_matrix: {
        description: 'Absolute value of each cell of matrix',
        signature: '(matrix)'
    },
    appendFile: {
        description: 'Write texts, numbers, vectors and so on at the end of an existing file (create such a file if it does not exist yet)',
        signature: '(filePath$, ...)'
    },
    appendFileLine: {
        description: 'Write texts, numbers, vectors and so on, followed by a newline, at the end of an existing file (create such a file if it does not exist yet)',
        signature: '(filePath$, ...)'
    },
    arccos: {
        description: 'Inverse cosine',
        signature: '(x)'
    },
    arccos_vector: {
        description: 'Inverse cosine of each element of vector',
        signature: '(vector)'
    },
    arccos_matrix: {
        description: 'Inverse cosine of each cell of matrix',
        signature: '(matrix)'
    },
    arccosh: {
        description: 'Inverse hyperbolic cosine',
        signature: '(x)'
    },
    arccosh_vector: {
        description: 'Inverse hyperbolic cosine of each element of vector',
        signature: '(vector)'
    },
    arccosh_matrix: {
        description: 'Inverse hyperbolic cosine of each cell of matrix',
        signature: '(matrix)'
    },
    arcsin: {
        description: 'Inverse sine',
        signature: '(x)'
    },
    arcsin_vector: {
        description: 'Inverse sine of each element of vector',
        signature: '(vector)'
    },
    arcsin_matrix: {
        description: 'Inverse sine of each cell of matrix',
        signature: '(matrix)'
    },
    arcsinh: {
        description: 'Inverse hyperbolic sine',
        signature: '(x)'
    },
    arcsinh_vector: {
        description: 'Inverse hyperbolic sine of each element of vector',
        signature: '(vector)'
    },
    arcsinh_matrix: {
        description: 'Inverse hyperbolic sine of each cell of matrix',
        signature: '(matrix)'
    },
    arctan: {
        description: 'Inverse tangent',
        signature: '(x)'
    },
    arctan_vector: {
        description: 'Inverse tangent of each element of vector',
        signature: '(vector)'
    },
    arctan_matrix: {
        description: 'Inverse tangent of each cell of matrix',
        signature: '(matrix)'
    },
    arctanh: {
        description: 'Inverse hyperbolic tangent',
        signature: '(x)'
    },
    arctanh_vector: {
        description: 'Inverse hyperbolic tangent of each element of vector',
        signature: '(vector)'
    },
    arctanh_matrix: {
        description: 'Inverse hyperbolic tangent of each cell of matrix',
        signature: '(matrix)'
    },
    backslashTrigraphsToUnicode$: {
        description: 'Convert e.g. bsct to ct',
        signature: '(string$)'
    },
    barkToHertz: {
        description: 'From bark-rate to acoustic frequency',
        signature: '(x)'
    },
    besselI_numberof: {
        description: 'Modified bessel function of the first kind, i__n_',
        signature: '(n, x)'
    },
    besselK_numberof: {
        description: 'Modified bessel function of the second kind, k__n_',
        signature: '(n, x)'
    },
    beta: {
        description: 'Be function',
        signature: '(x, y)'
    },
    between_by: {
        description: 'Symmetrically dispersed numbers between low and high, in steps of step',
        signature: '(low, high, step)'
    },
    between_count: {
        description: 'N symmetrically dispersed numbers between low and high (bin centres)',
        signature: '(low, high, n)'
    },
    binomialP: {
        description: 'Probability of bernoulli event occurring at most k in n times',
        signature: '(p, k, n)'
    },
    binomialQ: {
        description: 'Probability of bernoulli event occurring at least k in n times',
        signature: '(p, k, n)'
    },
    ceiling: {
        description: 'Round up to integer',
        signature: '(x)'
    },
    ceiling_vector: {
        description: 'Round up each element of vector',
        signature: '(vector)'
    },
    ceiling_matrix: {
        description: 'Round up each cell of matrix',
        signature: '(matrix)'
    },
    center: {
        description: 'Center (or centre) of gravity',
        signature: '(v)'
    },
    chiSquareP: {
        description: 'Area under the ci^2 curve up to chisquare',
        signature: '(chiSquare, df)'
    },
    chiSquareQ: {
        description: 'Area under the ci^2 curve after chisquare',
        signature: '(chiSquare, df)'
    },
    chooseFolder$: {
        description: 'Pops up a folder selection window',
        signature: '(title$)'
    },
    chooseReadFile$: {
        description: 'Pops up a file selection window for opening (or appending to) an existing file',
        signature: '(title$)'
    },
    chooseWriteFile$: {
        description: 'Pops up a file selection window for saving to a new file',
        signature: '(title$, defaultFilename$)'
    },
    columnSums_matrix: {
        description: 'Pops up a file selection window for saving to a new file',
        signature: '(matrix)'
    },
    cos: {
        description: 'Cosine',
        signature: '(x)'
    },
    cos_vector: {
        description: 'Cosine of each element of vector',
        signature: '(vector)'
    },
    cos_matrix: {
        description: 'Cosine of each cell of matrix',
        signature: '(matrix)'
    },
    cosh: {
        description: 'Hyperbolic cosine',
        signature: '(x)'
    },
    cosh_vector: {
        description: 'Hyperbolic cosine of each element of vector',
        signature: '(vector)'
    },
    cosh_matrix: {
        description: 'Hyperbolic cosine of each cell of matrix',
        signature: '(matrix)'
    },
    createFolder: {
        description: 'Create a new folder, or do nothing if it already exists',
        signature: '(folderPath$)'
    },
    date$: {
        description: 'Current local date and time in the form \'mon nov  8 16:32:42 2021\'',
        signature: '()'
    },
    date: {
        description: 'Current local date and time in the form { 2021, 11, 8, 16, 32, 42 }',
        signature: '()'
    },
    date_utc$: {
        description: 'Current standard date and time in the form \'mon nov  8 15:32:42 2021\'',
        signature: '()'
    },
    date_utc: {
        description: 'Current standard date and time in the form { 2021, 11, 8, 15, 32, 42 }',
        signature: '()'
    },
    deleteFile: {
        description: 'Delete a file, or do nothing if it does not exist',
        signature: '(filePath$)'
    },
    differenceLimensToPhon: {
        description: 'From jnd-scale to perceptual loudness',
        signature: '(x)'
    },
    endsWith: {
        description: 'Determine whether string$  ends in part$',
        signature: '(string$, part$)'
    },
    erb: {
        description: 'Equivalent rectangular bandwidth for frequency f',
        signature: '(f)'
    },
    erbToHertz: {
        description: 'From erb-rate to acoustic frequency',
        signature: '(x)'
    },
    erf: {
        description: 'Error function, the integral of the gaussian',
        signature: '(x)'
    },
    erfc: {
        description: 'Complement of the error function, i.e. 1 - erf (x); this is a separate function because erf (x) can be close to 1',
        signature: '(x)'
    },
    exp: {
        description: 'Exponentiation, i.e. e^x',
        signature: '(x)'
    },
    exp_vector: {
        description: 'Exponentiate each element of vector',
        signature: '(vector)'
    },
    exp_matrix: {
        description: 'Exponentiate each cell of matrix',
        signature: '(matrix)'
    },
    extractLine$: {
        description: 'Everything that comes after the first occurrence of part$  in string$',
        signature: '(string$, part$)'
    },
    extractNumber: {
        description: 'The first number after the first occurrence of part$  in string$',
        signature: '(string$, part$)'
    },
    extractWord$: {
        description: 'The first \'word\' after the first occurrence of part$  in string$',
        signature: '(string$, part$)'
    },
    fileNames$: {
        description: 'Get the names (not the whole paths) of the files in a folder or that match a pattern with an asterisk',
        signature: '(folderNameOrPattern$)'
    },
    fileReadable: {
        description: '1 if the file exists and can be read, 0 otherwise',
        signature: '(filePath$)'
    },
    fisherP: {
        description: 'Area under the fisher f curve up to f',
        signature: '(f, df1, df2)'
    },
    fisherQ: {
        description: 'Area under the fisher f curve after f',
        signature: '(f, df1, df2)'
    },
    fixed$: {
        description: 'Format a number as a string, with precision digits after the decimal point',
        signature: '(number, precision)'
    },
    floor: {
        description: 'Round down to integer',
        signature: '(x)'
    },
    floor_vector: {
        description: 'Round down each element of vector',
        signature: '(vector)'
    },
    floor_matrix: {
        description: 'Round down each cell of matrix',
        signature: '(matrix)'
    },
    folderNames$: {
        description: 'Get the names (not the whole paths) of the subfolders in a folder or that match a pattern with an asterisk',
        signature: '(folderNameOrPattern$)'
    },
    from_to: {
        description: 'The integers from m through n',
        signature: '(m, n)'
    },
    from_to_by_numberof: {
        description: 'Numbers from m through n, in steps of step',
        signature: '(m, n, step)'
    },
    from_to_count: {
        description: 'N numbers from start through end',
        signature: '(start, end, n)'
    },
    gaussP: {
        description: 'Area under the normal curve up to z',
        signature: '(z)'
    },
    gaussQ: {
        description: 'Area under the normal curve after z',
        signature: '(z)'
    },
    hertzToBark: {
        description: 'From acoustic frequency to bark-rate',
        signature: '(x)'
    },
    hertzToErb: {
        description: 'From acoustic frequency to erb-rate',
        signature: '(x)'
    },
    hertzToMel: {
        description: 'From acoustic frequency to mel',
        signature: '(x)'
    },
    hertzToSemitones: {
        description: 'From acoustic frequency to logarithmic scale re 100 hz',
        signature: '(x)'
    },
    imax: {
        description: 'Location of the maximum',
        signature: '(x, ...)'
    },
    imin: {
        description: 'Location of the minimum',
        signature: '(x, ...)'
    },
    index: {
        description: 'Look up a substring, or 0 if not found',
        signature: '(string$, part$)'
    },
    index_lookup: {
        description: 'Look up whether and where s$  first occurs in strings$',
        signature: '(strings$ , s$)'
    },
    index_regex: {
        description: 'Determine whether and where string$  first matches regex$',
        signature: '(string$, regex$)'
    },
    inner: {
        description: 'Inner product',
        signature: '(a, b)'
    },
    invBinomialP: {
        description: 'Inverse of binomialp',
        signature: '(P, k, n)'
    },
    invBinomialQ: {
        description: 'Inverse of binomialq',
        signature: '(Q, k, n)'
    },
    invChiSquareQ: {
        description: 'Inverse of chisquareq',
        signature: '(q, df)'
    },
    invFisherQ: {
        description: 'Inverse of fisherq',
        signature: '(q, df1, df2)'
    },
    invGaussQ: {
        description: 'Inverse of gaussq',
        signature: '(z)'
    },
    invSigmoid: {
        description: 'Inverse sigmoid',
        signature: '(x)'
    },
    invSigmoid_vector: {
        description: 'Inverse sigmoid of each element of vector',
        signature: '(vector)'
    },
    invSigmoid_matrix: {
        description: 'Inverse sigmoid of each cell of matrix',
        signature: '(matrix)'
    },
    invStudentQ: {
        description: 'Inverse studentq',
        signature: '(q, df)'
    },
    left$: {
        description: 'The n first characters in string$',
        signature: '(string$, n)'
    },
    length: {
        description: 'Number of unicode characters in string$',
        signature: '(string$)'
    },
    ln: {
        description: 'Natural logarithm, base e',
        signature: '(x)'
    },
    ln_vector: {
        description: 'Natural logarithm of each element of vector',
        signature: '(vector)'
    },
    ln_matrix: {
        description: 'Natural logarithm of each cell of matrix',
        signature: '(matrix)'
    },
    lnGamma: {
        description: 'Logarithm of the ga function',
        signature: '(x)'
    },
    log2: {
        description: 'Logarithm, base 2',
        signature: '(x)'
    },
    log2_vector: {
        description: 'Base-2 logarithm of each element of vector',
        signature: '(vector)'
    },
    log2_matrix: {
        description: 'Base-2 logarithm of each cell of matrix',
        signature: '(matrix)'
    },
    log10: {
        description: 'Logarithm, base 10',
        signature: '(x)'
    },
    log10_vector: {
        description: 'Base-10 logarithm of each element of vector',
        signature: '(vector)'
    },
    log10_matrix: {
        description: 'Base-10 logarithm of each cell of matrix',
        signature: '(matrix)'
    },
    max: {
        description: 'Maximum',
        signature: '(x, ...)'
    },
    mean: {
        description: 'Average of the elements of a vector',
        signature: '(v)'
    },
    melToHertz: {
        description: 'From mel to acoustic frequency',
        signature: '(x)'
    },
    mid$: {
        description: 'The n characters in string$  starting at position from',
        signature: '(string$, from, n)'
    },
    min: {
        description: 'Minimum',
        signature: '(x, ...)'
    },
    mul: {
        description: 'Matrix multiplication',
        signature: '(a , b)'
    },
    number: {
        description: 'Interpret a string as a number',
        signature: '(a$)'
    },
    numberOfColumns_matrix: {
        description: 'Interpret a string as a number',
        signature: '(matrix)'
    },
    numberOfRows_matrix: {
        description: 'Interpret a string as a number',
        signature: '(matrix)'
    },
    outer: {
        description: 'Outer product, i.e. result__ij_ = a__i_b__j_',
        signature: '(a, b)'
    },
    percent$: {
        description: 'Format a number as a stringwith a trailing percent sign and precision digits after the decimal point',
        signature: '(number, precision)'
    },
    phonToDifferenceLimens: {
        description: 'From perceptual loudness to jnd-scale',
        signature: '(x)'
    },
    randomBernoulli: {
        description: 'Bernoulli-distributed random deviate (0 or 1)',
        signature: '(p)'
    },
    randomBernoulli_numberof: {
        description: 'N independent bernoulli-distributed zeroes and ones',
        signature: '(n, p)'
    },
    randomGamma: {
        description: 'Gamma-distributed random deviate',
        signature: '(shape, rate)'
    },
    randomGamma_numberof: {
        description: 'N independent gamma-distributed random numbers',
        signature: '(n, shape, rate)'
    },
    randomGamma_vector: {
        description: 'Duplicate vector and replace all elements with independent gamma-distributed random numbers',
        signature: '(vector, shape, rate)'
    },
    randomGamma_table: {
        description: 'Nrow xx ncol independent gamma-distributed random numbers',
        signature: '(nrow, ncol, shape, rate)'
    },
    randomGamma_matrix: {
        description: 'Duplicate matrix and replace all cells with independent gamma-distributed random numbers',
        signature: '(matrix , shape, rate)'
    },
    randomGauss: {
        description: 'Normally distributed random deviate',
        signature: '(mu, si)'
    },
    randomGauss_numberof: {
        description: 'N independent normally distributed random numbers',
        signature: '(n, mu, si)'
    },
    randomGauss_vector: {
        description: 'Duplicate vector and replace all elements with independent normally distributed random numbers',
        signature: '(vector, mu, si)'
    },
    randomGauss_table: {
        description: 'Nrow xx ncol independent normally distributed random numbers',
        signature: '(nrow, ncol, mu, si)'
    },
    randomGauss_matrix: {
        description: 'Duplicate matrix and replace all cells with independent normally distributed random numbers',
        signature: '(matrix , mu, si)'
    },
    randomInteger_range: {
        description: 'Uniformly distributed integer random deviate',
        signature: '(min, max)'
    },
    randomInteger_numberof: {
        description: 'N independent uniformly distributed random integers',
        signature: '(n, min, max)'
    },
    randomInteger_vector_range: {
        description: 'Duplicate vector and replace all elements with independent uniformly distributed random integers',
        signature: '(vector, min, max)'
    },
    randomInteger_table_range: {
        description: 'Nrow xx ncol independent uniformly distributed random integers',
        signature: '(nrow, ncol, min, max)'
    },
    randomPoisson: {
        description: 'Poisson-distributed random deviate',
        signature: '(mean)'
    },
    randomPoisson_numberof: {
        description: 'N independent poisson-distributed random numbers',
        signature: '(n, mean)'
    },
    randomPoisson_vector: {
        description: 'Duplicate vector and replace all elements with independent poisson-distributed random numbers',
        signature: '(vector, mean)'
    },
    randomPoisson_table: {
        description: 'Nrow xx ncol independent poisson-distributed random numbers',
        signature: '(nrow, ncol, mean)'
    },
    randomPoisson_matrix: {
        description: 'Duplicate matrix and replace all cells with independent poisson-distributed random numbers',
        signature: '(matrix , mean)'
    },
    randomUniform_range: {
        description: 'Uniformly distributed random deviate',
        signature: '(min, max)'
    },
    randomUniform_numberof: {
        description: 'N independent uniformly distributed random numbers',
        signature: '(n, min, max)'
    },
    randomUniform_vector_range: {
        description: 'Duplicate vector and replace all elements with independent uniformly distributed random numbers',
        signature: '(vector, min, max)'
    },
    randomUniform_table_range: {
        description: 'Nrow xx ncol independent uniformly distributed random numbers',
        signature: '(nrow, ncol, min, max)'
    },
    randomUniform_matrix_range: {
        description: 'Duplicate matrix and replace all cells with independent uniformly distributed random numbers',
        signature: '(matrix , min, max)'
    },
    random_initializeSafelyAndUnpredictably: {
        description: 'Undoes the effects of the following function',
        signature: '()'
    },
    random_initializeWithSeedUnsafelyButPredictably: {
        description: 'Reproducible sequence of random numbers',
        signature: '(seed)'
    },
    readFile: {
        description: 'Read a number from a text file',
        signature: '(filePath$)'
    },
    readFile$: {
        description: 'Read a whole text file into a string',
        signature: '(filePath$)'
    },
    readLinesFromFile$: {
        description: 'Read all lines from a text file',
        signature: '(filePath$)'
    },
    rectify: {
        description: 'Set to zero if negative (no change if positive)',
        signature: '(x)'
    },
    rectify_vector: {
        description: 'Rectify each element of vector',
        signature: '(vector)'
    },
    rectify_matrix: {
        description: 'Rectify each cell of matrix',
        signature: '(matrix)'
    },
    repeat: {
        description: 'Repeat the whole sequence of elements of v  n times',
        signature: '(v, n)'
    },
    replace$: {
        description: 'Within a$, replace the first n occurrences of b$  with c$, or all if n = 0',
        signature: '(a$, b$, c$, n)'
    },
    replace_regex$: {
        description: 'Within a$ replace the first n matches of regular expression b$  with the regular expression c$, or all if n = 0',
        signature: '(a$, b$, c$, n)'
    },
    right$: {
        description: 'The n last characters in string$',
        signature: '(string$, n)'
    },
    rindex: {
        description: 'Look up a substring from the end, or 0 if not found',
        signature: '(string$, part$)'
    },
    rindex_regex: {
        description: 'Determine whether and where string$  last matches regex$',
        signature: '(string$, regex$)'
    },
    round: {
        description: 'Nearest integer',
        signature: '(x)'
    },
    round_vector: {
        description: 'Nearest integer of each element of vector',
        signature: '(vector)'
    },
    round_matrix: {
        description: 'Nearest integer of each cell of matrix',
        signature: '(matrix)'
    },
    rowSums_matrix: {
        description: 'Nearest integer of each cell of matrix',
        signature: '(matrix)'
    },
    semitonesToHertz: {
        description: 'From logarithmic scale re 100 hz to acoustic frequency',
        signature: '(x)'
    },
    sigmoid: {
        description: '1 / (1 + e^^-x^)',
        signature: '(x)'
    },
    sigmoid_vector: {
        description: 'Sigmoid of each element of vector',
        signature: '(vector)'
    },
    sigmoid_matrix: {
        description: 'Sigmoid of each cell of matrix',
        signature: '(matrix)'
    },
    sin: {
        description: 'Sine',
        signature: '(x)'
    },
    sin_vector: {
        description: 'Sine of each element of vector',
        signature: '(vector)'
    },
    sin_matrix: {
        description: 'Sine of each cell of matrix',
        signature: '(matrix)'
    },
    sinc: {
        description: 'Sinus cardinalis: sin (x) / x',
        signature: '(x)'
    },
    sincpi: {
        description: 'Sin (pix) / (pix)',
        signature: '(x)'
    },
    sinh: {
        description: 'Hyperbolic sine',
        signature: '(x)'
    },
    sinh_vector: {
        description: 'Hyperbolic sine of each element of vector',
        signature: '(vector)'
    },
    sinh_matrix: {
        description: 'Hyperbolic sine of each cell of matrix',
        signature: '(matrix)'
    },
    size: {
        description: 'Number of elements',
        signature: '(v)'
    },
    shuffle_vector: {
        description: 'Randomize order',
        signature: '(vector)'
    },
    softmax_vector: {
        description: 'Randomize order',
        signature: '(vector)'
    },
    softmaxPerRow_matrix: {
        description: 'Randomize order',
        signature: '(matrix)'
    },
    sort_vector: {
        description: 'Reshuffle in increasing order',
        signature: '(vector)'
    },
    splitByWhitespace$: {
        description: 'Split a string into inks',
        signature: '(string$)'
    },
    sqrt: {
        description: 'Square root',
        signature: '(x)'
    },
    sqrt_vector: {
        description: 'Square root of each element of vector',
        signature: '(vector)'
    },
    sqrt_matrix: {
        description: 'Square root of each cell of matrix',
        signature: '(matrix)'
    },
    startsWith: {
        description: 'Determine whether string$  starts with part$',
        signature: '(string$, part$)'
    },
    stdev: {
        description: 'Standard deviation of the elements of a vector',
        signature: '(v)'
    },
    stopwatch: {
        description: 'Give the current value of the timer, which is then immediately reset to zero (note: no parentheses)',
        signature: '(v)'
    },
    string$: {
        description: 'Format a number as a string',
        signature: '(number)'
    },
    studentP: {
        description: 'Area under the student t curve up to t',
        signature: '(t, df)'
    },
    studentQ: {
        description: 'Area under the student t curve after t',
        signature: '(t, df)'
    },
    sum: {
        description: 'Sum the elements',
        signature: '(v)'
    },
    sumOver_numberof: {
        description: 'Si',
        signature: '(loopVariable to n, numericExpressionOptionallyUsingLoopVariable)'
    },
    tan: {
        description: 'Tangent',
        signature: '(x)'
    },
    tan_vector: {
        description: 'Tangent of each element of vector',
        signature: '(vector)'
    },
    tan_matrix: {
        description: 'Tangent of each cell of matrix',
        signature: '(matrix)'
    },
    tanh: {
        description: 'Hyperbolic tangent',
        signature: '(x)'
    },
    tanh_vector: {
        description: 'Hyperbolic tangent of each element of vector',
        signature: '(vector)'
    },
    tanh_matrix: {
        description: 'Hyperbolic tangent of each cell of matrix',
        signature: '(matrix)'
    },
    to: {
        description: 'The integers 1 through n',
        signature: '(n)'
    },
    transpose_matrix: {
        description: 'The integers 1 through n',
        signature: '(matrix)'
    },
    unicode: {
        description: 'The unicode codepoint number that corresponds to character c$',
        signature: '(c$)'
    },
    unicode$: {
        description: 'The character that corresponds to unicode codepoint n',
        signature: '(n)'
    },
    unicodeToBackslashTrigraphs$: {
        description: 'Convert e.g. ct to bsct',
        signature: '(string$)'
    },
    writeFile: {
        description: 'Create a new text file, and write texts, numbers, vectors and so on into it',
        signature: '(filePath$, ...)'
    },
    writeFileLine: {
        description: 'Create a new text file, write texts, numbers, vectors and so on into it, followed by a newline',
        signature: '(filePath$, ...)'
    },
    zero: {
        description: 'Vector with n elements that are all 0',
        signature: '(n)'
    }
}