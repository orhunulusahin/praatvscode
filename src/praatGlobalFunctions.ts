/* eslint-disable @typescript-eslint/naming-convention */

// Praat global function list A
// This file is semi-automatically generated from Praat manuals //
// Contact orhunulusahin before editing (to avoid possibly wasting your own time) //

import { IEntries } from './PraatGlobals';

export const globalfunctions: IEntries = {
    abs: {
        description: 'Absolute value',
        signature: 'abs (x)',
        niceName: 'abs (number)',
        preSnippet: 'abs (${0:number})'
    },
    abs_vector: {
        description: 'Absolute value of each element of vector',
        signature: 'abs_vector (vector)',
        niceName: 'abs (vector)',
        preSnippet: 'abs (${0:vector})'
    },
    abs_matrix: {
        description: 'Absolute value of each cell of matrix',
        signature: 'abs_matrix (matrix)',
        niceName: 'abs (matrix)',
        preSnippet: 'abs (${0:matrix})'
    },
    appendFile: {
        description: 'Write texts, numbers, vectors and so on at the end of an existing file (create such a file if it does not exist yet)',
        signature: 'appendFile (filePath$ , ...)',
        niceName: 'appendFile (string)',
        preSnippet: 'appendFile (${0:string})'
    },
    appendFileLine: {
        description: 'Write texts, numbers, vectors and so on, followed by a newline, at the end of an existing file (create such a file if it does not exist yet)',
        signature: 'appendFileLine (filePath$ , ...)',
        niceName: 'appendFileLine (string)',
        preSnippet: 'appendFileLine (${0:string})'
    },
    arccos: {
        description: 'Inverse cosine',
        signature: 'arccos (x)',
        niceName: 'arccos (number)',
        preSnippet: 'arccos (${0:number})'
    },
    arccos_vector: {
        description: 'Inverse cosine of each element of vector',
        signature: 'arccos_vector (vector)',
        niceName: 'arccos (vector)',
        preSnippet: 'arccos (${0:vector})'
    },
    arccos_matrix: {
        description: 'Inverse cosine of each cell of matrix',
        signature: 'arccos_matrix (matrix)',
        niceName: 'arccos (matrix)',
        preSnippet: 'arccos (${0:matrix})'
    },
    arccosh: {
        description: 'Inverse hyperbolic cosine',
        signature: 'arccosh (x)',
        niceName: 'arccosh (number)',
        preSnippet: 'arccosh (${0:number})'
    },
    arccosh_vector: {
        description: 'Inverse hyperbolic cosine of each element of vector',
        signature: 'arccosh_vector (vector)',
        niceName: 'arccosh (vector)',
        preSnippet: 'arccosh (${0:vector})'
    },
    arccosh_matrix: {
        description: 'Inverse hyperbolic cosine of each cell of matrix',
        signature: 'arccosh_matrix (matrix)',
        niceName: 'arccosh (matrix)',
        preSnippet: 'arccosh (${0:matrix})'
    },
    arcsin: {
        description: 'Inverse sine',
        signature: 'arcsin (x)',
        niceName: 'arcsin (number)',
        preSnippet: 'arcsin (${0:number})'
    },
    arcsin_vector: {
        description: 'Inverse sine of each element of vector',
        signature: 'arcsin_vector (vector)',
        niceName: 'arcsin (vector)',
        preSnippet: 'arcsin (${0:vector})'
    },
    arcsin_matrix: {
        description: 'Inverse sine of each cell of matrix',
        signature: 'arcsin_matrix (matrix)',
        niceName: 'arcsin (matrix)',
        preSnippet: 'arcsin (${0:matrix})'
    },
    arcsinh: {
        description: 'Inverse hyperbolic sine',
        signature: 'arcsinh (x)',
        niceName: 'arcsinh (number)',
        preSnippet: 'arcsinh (${0:number})'
    },
    arcsinh_vector: {
        description: 'Inverse hyperbolic sine of each element of vector',
        signature: 'arcsinh_vector (vector)',
        niceName: 'arcsinh (vector)',
        preSnippet: 'arcsinh (${0:vector})'
    },
    arcsinh_matrix: {
        description: 'Inverse hyperbolic sine of each cell of matrix',
        signature: 'arcsinh_matrix (matrix)',
        niceName: 'arcsinh (matrix)',
        preSnippet: 'arcsinh (${0:matrix})'
    },
    arctan: {
        description: 'Inverse tangent',
        signature: 'arctan (x)',
        niceName: 'arctan (number)',
        preSnippet: 'arctan (${0:number})'
    },
    arctan_vector: {
        description: 'Inverse tangent of each element of vector',
        signature: 'arctan_vector (vector)',
        niceName: 'arctan (vector)',
        preSnippet: 'arctan (${0:vector})'
    },
    arctan_matrix: {
        description: 'Inverse tangent of each cell of matrix',
        signature: 'arctan_matrix (matrix)',
        niceName: 'arctan (matrix)',
        preSnippet: 'arctan (${0:matrix})'
    },
    arctanh: {
        description: 'Inverse hyperbolic tangent',
        signature: 'arctanh (x)',
        niceName: 'arctanh (number)',
        preSnippet: 'arctanh (${0:number})'
    },
    arctanh_vector: {
        description: 'Inverse hyperbolic tangent of each element of vector',
        signature: 'arctanh_vector (vector)',
        niceName: 'arctanh (vector)',
        preSnippet: 'arctanh (${0:vector})'
    },
    arctanh_matrix: {
        description: 'Inverse hyperbolic tangent of each cell of matrix',
        signature: 'arctanh_matrix (matrix)',
        niceName: 'arctanh (matrix)',
        preSnippet: 'arctanh (${0:matrix})'
    },
    backslashTrigraphsToUnicode$: {
        description: 'Convert e.g. bsct to ct',
        signature: 'backslashTrigraphsToUnicode$ (string$)',
        niceName: 'backslashTrigraphsToUnicode$ (string)',
        preSnippet: 'backslashTrigraphsToUnicode$ (${0:string})'
    },
    barkToHertz: {
        description: 'From bark-rate to acoustic frequency',
        signature: 'barkToHertz (x)',
        niceName: 'barkToHertz (number)',
        preSnippet: 'barkToHertz (${0:number})'
    },
    besselI_numberof_special: {
        description: 'Modified bessel function of the first kind, i__n_',
        signature: 'besselI_numberof_special (n, x)',
        niceName: 'besselI_numberof_special',
        preSnippet: 'besselI (${1:x}, ${2:y})'
    },
    besselK_numberof_special: {
        description: 'Modified bessel function of the second kind, k__n_',
        signature: 'besselK_numberof_special (n, x)',
        niceName: 'besselK_numberof_special',
        preSnippet: 'besselK (${1:x}, ${2:y})'
    },
    beta: {
        description: 'Be function',
        signature: 'beta (x, y)',
        niceName: 'beta',
        preSnippet: 'beta ()'
    },
    between_by: {
        description: 'Symmetrically dispersed numbers between low and high, in steps of step',
        signature: 'between_by (low, high, step)',
        niceName: 'between_by',
        preSnippet: 'between_by ()'
    },
    between_count: {
        description: 'N symmetrically dispersed numbers between low and high (bin centres)',
        signature: 'between_count (low, high, n)',
        niceName: 'between_count',
        preSnippet: 'between_count ()'
    },
    binomialP: {
        description: 'Probability of bernoulli event occurring at most k in n times',
        signature: 'binomialP (p, k, n)',
        niceName: 'binomialP',
        preSnippet: 'binomialP ()'
    },
    binomialQ: {
        description: 'Probability of bernoulli event occurring at least k in n times',
        signature: 'binomialQ (p, k, n)',
        niceName: 'binomialQ',
        preSnippet: 'binomialQ ()'
    },
    ceiling: {
        description: 'Round up to integer',
        signature: 'ceiling (x)',
        niceName: 'ceiling (number)',
        preSnippet: 'ceiling (${0:number})'
    },
    ceiling_vector: {
        description: 'Round up each element of vector',
        signature: 'ceiling_vector (vector)',
        niceName: 'ceiling (vector)',
        preSnippet: 'ceiling (${0:vector})'
    },
    ceiling_matrix: {
        description: 'Round up each cell of matrix',
        signature: 'ceiling_matrix (matrix)',
        niceName: 'ceiling (matrix)',
        preSnippet: 'ceiling (${0:matrix})'
    },
    center: {
        description: 'Center (or centre) of gravity',
        signature: 'center (v)',
        niceName: 'center',
        preSnippet: 'center ()'
    },
    chiSquareP: {
        description: 'Area under the ci^2 curve up to chisquare',
        signature: 'chiSquareP (chiSquare, df)',
        niceName: 'chiSquareP',
        preSnippet: 'chiSquareP ()'
    },
    chiSquareQ: {
        description: 'Area under the ci^2 curve after chisquare',
        signature: 'chiSquareQ (chiSquare, df)',
        niceName: 'chiSquareQ',
        preSnippet: 'chiSquareQ ()'
    },
    chooseFolder$: {
        description: 'Pops up a folder selection window',
        signature: 'chooseFolder$ (title$)',
        niceName: 'chooseFolder$ (string)',
        preSnippet: 'chooseFolder$ (${0:string})'
    },
    chooseReadFile$: {
        description: 'Pops up a file selection window for opening (or appending to) an existing file',
        signature: 'chooseReadFile$ (title$)',
        niceName: 'chooseReadFile$ (string)',
        preSnippet: 'chooseReadFile$ (${0:string})'
    },
    chooseWriteFile$: {
        description: 'Pops up a file selection window for saving to a new file',
        signature: 'chooseWriteFile$ (title$ , defaultFilename$)',
        niceName: 'chooseWriteFile$ (string)',
        preSnippet: 'chooseWriteFile$ (${0:string})'
    },
    columnSums_matrix: {
        description: 'Pops up a file selection window for saving to a new file',
        signature: 'columnSums_matrix (matrix)',
        niceName: 'columnSums (matrix)',
        preSnippet: 'columnSums (${0:matrix})'
    },
    cos: {
        description: 'Cosine',
        signature: 'cos (x)',
        niceName: 'cos (number)',
        preSnippet: 'cos (${0:number})'
    },
    cos_vector: {
        description: 'Cosine of each element of vector',
        signature: 'cos_vector (vector)',
        niceName: 'cos (vector)',
        preSnippet: 'cos (${0:vector})'
    },
    cos_matrix: {
        description: 'Cosine of each cell of matrix',
        signature: 'cos_matrix (matrix)',
        niceName: 'cos (matrix)',
        preSnippet: 'cos (${0:matrix})'
    },
    cosh: {
        description: 'Hyperbolic cosine',
        signature: 'cosh (x)',
        niceName: 'cosh (number)',
        preSnippet: 'cosh (${0:number})'
    },
    cosh_vector: {
        description: 'Hyperbolic cosine of each element of vector',
        signature: 'cosh_vector (vector)',
        niceName: 'cosh (vector)',
        preSnippet: 'cosh (${0:vector})'
    },
    cosh_matrix: {
        description: 'Hyperbolic cosine of each cell of matrix',
        signature: 'cosh_matrix (matrix)',
        niceName: 'cosh (matrix)',
        preSnippet: 'cosh (${0:matrix})'
    },
    createFolder: {
        description: 'Create a new folder, or do nothing if it already exists',
        signature: 'createFolder (folderPath$)',
        niceName: 'createFolder (string)',
        preSnippet: 'createFolder (${0:string})'
    },
    date$: {
        description: 'Current local date and time in the form \'mon nov  8 16:32:42 2021\'',
        signature: 'date$ ()',
        niceName: 'date$',
        preSnippet: 'date$ ()'
    },
    date: {
        description: 'Current local date and time in the form { 2021, 11, 8, 16, 32, 42 }',
        signature: 'date ()',
        niceName: 'date',
        preSnippet: 'date ()'
    },
    date_utc$: {
        description: 'Current standard date and time in the form \'mon nov  8 15:32:42 2021\'',
        signature: 'date_utc$ ()',
        niceName: 'date_utc$',
        preSnippet: 'date_utc$ ()'
    },
    date_utc: {
        description: 'Current standard date and time in the form { 2021, 11, 8, 15, 32, 42 }',
        signature: 'date_utc ()',
        niceName: 'date_utc',
        preSnippet: 'date_utc ()'
    },
    deleteFile: {
        description: 'Delete a file, or do nothing if it does not exist',
        signature: 'deleteFile (filePath$)',
        niceName: 'deleteFile (string)',
        preSnippet: 'deleteFile (${0:string})'
    },
    differenceLimensToPhon: {
        description: 'From jnd-scale to perceptual loudness',
        signature: 'differenceLimensToPhon (x)',
        niceName: 'differenceLimensToPhon (number)',
        preSnippet: 'differenceLimensToPhon (${0:number})'
    },
    endsWith: {
        description: 'Determine whether string$  ends in part$',
        signature: 'endsWith (string$ , part$)',
        niceName: 'endsWith (string)',
        preSnippet: 'endsWith (${0:string})'
    },
    erb: {
        description: 'Equivalent rectangular bandwidth for frequency f',
        signature: 'erb (f)',
        niceName: 'erb',
        preSnippet: 'erb ()'
    },
    erbToHertz: {
        description: 'From erb-rate to acoustic frequency',
        signature: 'erbToHertz (x)',
        niceName: 'erbToHertz (number)',
        preSnippet: 'erbToHertz (${0:number})'
    },
    erf: {
        description: 'Error function, the integral of the gaussian',
        signature: 'erf (x)',
        niceName: 'erf (number)',
        preSnippet: 'erf (${0:number})'
    },
    erfc: {
        description: 'Complement of the error function, i.e. 1 - erf (x); this is a separate function because erf (x) can be close to 1',
        signature: 'erfc (x)',
        niceName: 'erfc (number)',
        preSnippet: 'erfc (${0:number})'
    },
    exp: {
        description: 'Exponentiation, i.e. e^x',
        signature: 'exp (x)',
        niceName: 'exp (number)',
        preSnippet: 'exp (${0:number})'
    },
    exp_vector: {
        description: 'Exponentiate each element of vector',
        signature: 'exp_vector (vector)',
        niceName: 'exp (vector)',
        preSnippet: 'exp (${0:vector})'
    },
    exp_matrix: {
        description: 'Exponentiate each cell of matrix',
        signature: 'exp_matrix (matrix)',
        niceName: 'exp (matrix)',
        preSnippet: 'exp (${0:matrix})'
    },
    extractLine$: {
        description: 'Everything that comes after the first occurrence of part$  in string$',
        signature: 'extractLine$ (string$ , part$)',
        niceName: 'extractLine$ (string)',
        preSnippet: 'extractLine$ (${0:string})'
    },
    extractNumber: {
        description: 'The first number after the first occurrence of part$  in string$',
        signature: 'extractNumber (string$ , part$)',
        niceName: 'extractNumber (string)',
        preSnippet: 'extractNumber (${0:string})'
    },
    extractWord$: {
        description: 'The first \'word\' after the first occurrence of part$  in string$',
        signature: 'extractWord$ (string$ , part$)',
        niceName: 'extractWord$ (string)',
        preSnippet: 'extractWord$ (${0:string})'
    },
    fileNames$: {
        description: 'Get the names (not the whole paths) of the files in a folder or that match a pattern with an asterisk',
        signature: 'fileNames$ (folderNameOrPattern$)',
        niceName: 'fileNames$ (string)',
        preSnippet: 'fileNames$ (${0:string})'
    },
    fileReadable: {
        description: '1 if the file exists and can be read, 0 otherwise',
        signature: 'fileReadable (filePath$)',
        niceName: 'fileReadable (string)',
        preSnippet: 'fileReadable (${0:string})'
    },
    fisherP: {
        description: 'Area under the fisher f curve up to f',
        signature: 'fisherP (f, df1, df2)',
        niceName: 'fisherP',
        preSnippet: 'fisherP ()'
    },
    fisherQ: {
        description: 'Area under the fisher f curve after f',
        signature: 'fisherQ (f, df1, df2)',
        niceName: 'fisherQ',
        preSnippet: 'fisherQ ()'
    },
    fixed$: {
        description: 'Format a number as a string, with precision digits after the decimal point',
        signature: 'fixed$ (number, precision)',
        niceName: 'fixed$',
        preSnippet: 'fixed$ ()'
    },
    floor: {
        description: 'Round down to integer',
        signature: 'floor (x)',
        niceName: 'floor (number)',
        preSnippet: 'floor (${0:number})'
    },
    floor_vector: {
        description: 'Round down each element of vector',
        signature: 'floor_vector (vector)',
        niceName: 'floor (vector)',
        preSnippet: 'floor (${0:vector})'
    },
    floor_matrix: {
        description: 'Round down each cell of matrix',
        signature: 'floor_matrix (matrix)',
        niceName: 'floor (matrix)',
        preSnippet: 'floor (${0:matrix})'
    },
    folderNames$: {
        description: 'Get the names (not the whole paths) of the subfolders in a folder or that match a pattern with an asterisk',
        signature: 'folderNames$ (folderNameOrPattern$)',
        niceName: 'folderNames$ (string)',
        preSnippet: 'folderNames$ (${0:string})'
    },
    from_to: {
        description: 'The integers from m through n',
        signature: 'from_to (m, n)',
        niceName: 'from_to',
        preSnippet: 'from_to ()'
    },
    from_to_by_numberof_special: {
        description: 'Numbers from m through n, in steps of step',
        signature: 'from_to_by_numberof_special (m, n, step)',
        niceName: 'from_to_by_numberof_special',
        preSnippet: 'from_to_by (${1:x}, ${2:y})'
    },
    from_to_count: {
        description: 'N numbers from start through end',
        signature: 'from_to_count (start, end, n)',
        niceName: 'from_to_count',
        preSnippet: 'from_to_count ()'
    },
    gaussP: {
        description: 'Area under the normal curve up to z',
        signature: 'gaussP (z)',
        niceName: 'gaussP',
        preSnippet: 'gaussP ()'
    },
    gaussQ: {
        description: 'Area under the normal curve after z',
        signature: 'gaussQ (z)',
        niceName: 'gaussQ',
        preSnippet: 'gaussQ ()'
    },
    hertzToBark: {
        description: 'From acoustic frequency to bark-rate',
        signature: 'hertzToBark (x)',
        niceName: 'hertzToBark (number)',
        preSnippet: 'hertzToBark (${0:number})'
    },
    hertzToErb: {
        description: 'From acoustic frequency to erb-rate',
        signature: 'hertzToErb (x)',
        niceName: 'hertzToErb (number)',
        preSnippet: 'hertzToErb (${0:number})'
    },
    hertzToMel: {
        description: 'From acoustic frequency to mel',
        signature: 'hertzToMel (x)',
        niceName: 'hertzToMel (number)',
        preSnippet: 'hertzToMel (${0:number})'
    },
    hertzToSemitones: {
        description: 'From acoustic frequency to logarithmic scale re 100 hz',
        signature: 'hertzToSemitones (x)',
        niceName: 'hertzToSemitones (number)',
        preSnippet: 'hertzToSemitones (${0:number})'
    },
    imax: {
        description: 'Location of the maximum',
        signature: 'imax (x, ...)',
        niceName: 'imax',
        preSnippet: 'imax ()'
    },
    imin: {
        description: 'Location of the minimum',
        signature: 'imin (x, ...)',
        niceName: 'imin',
        preSnippet: 'imin ()'
    },
    index: {
        description: 'Look up a substring, or 0 if not found',
        signature: 'index (string$ , part$)',
        niceName: 'index (string)',
        preSnippet: 'index (${0:string})'
    },
    index_lookup: {
        description: 'Look up whether and where s$  first occurs in strings$',
        signature: 'index (strings$  , s$)',
        niceName: 'index (string)',
        preSnippet: 'index (${0:string})'
    },
    index_regex: {
        description: 'Determine whether and where string$  first matches regex$',
        signature: 'index_regex (string$ , regex$)',
        niceName: 'index_regex (string)',
        preSnippet: 'index_regex (${0:string})'
    },
    inner: {
        description: 'Inner product',
        signature: 'inner (a , b)',
        niceName: 'inner',
        preSnippet: 'inner ()'
    },
    invBinomialP: {
        description: 'Inverse of binomialp',
        signature: 'invBinomialP (P, k, n)',
        niceName: 'invBinomialP',
        preSnippet: 'invBinomialP ()'
    },
    invBinomialQ: {
        description: 'Inverse of binomialq',
        signature: 'invBinomialQ (Q, k, n)',
        niceName: 'invBinomialQ',
        preSnippet: 'invBinomialQ ()'
    },
    invChiSquareQ: {
        description: 'Inverse of chisquareq',
        signature: 'invChiSquareQ (q, df)',
        niceName: 'invChiSquareQ',
        preSnippet: 'invChiSquareQ ()'
    },
    invFisherQ: {
        description: 'Inverse of fisherq',
        signature: 'invFisherQ (q, df1, df2)',
        niceName: 'invFisherQ',
        preSnippet: 'invFisherQ ()'
    },
    invGaussQ: {
        description: 'Inverse of gaussq',
        signature: 'invGaussQ (z)',
        niceName: 'invGaussQ',
        preSnippet: 'invGaussQ ()'
    },
    invSigmoid: {
        description: 'Inverse sigmoid',
        signature: 'invSigmoid (x)',
        niceName: 'invSigmoid (number)',
        preSnippet: 'invSigmoid (${0:number})'
    },
    invSigmoid_vector: {
        description: 'Inverse sigmoid of each element of vector',
        signature: 'invSigmoid_vector (vector)',
        niceName: 'invSigmoid (vector)',
        preSnippet: 'invSigmoid (${0:vector})'
    },
    invSigmoid_matrix: {
        description: 'Inverse sigmoid of each cell of matrix',
        signature: 'invSigmoid_matrix (matrix)',
        niceName: 'invSigmoid (matrix)',
        preSnippet: 'invSigmoid (${0:matrix})'
    },
    invStudentQ: {
        description: 'Inverse studentq',
        signature: 'invStudentQ (q, df)',
        niceName: 'invStudentQ',
        preSnippet: 'invStudentQ ()'
    },
    left$: {
        description: 'The n first characters in string$',
        signature: 'left$ (string$ , n)',
        niceName: 'left$ (string)',
        preSnippet: 'left$ (${0:string})'
    },
    length: {
        description: 'Number of unicode characters in string$',
        signature: 'length (string$)',
        niceName: 'length (string)',
        preSnippet: 'length (${0:string})'
    },
    ln: {
        description: 'Natural logarithm, base e',
        signature: 'ln (x)',
        niceName: 'ln (number)',
        preSnippet: 'ln (${0:number})'
    },
    ln_vector: {
        description: 'Natural logarithm of each element of vector',
        signature: 'ln_vector (vector)',
        niceName: 'ln (vector)',
        preSnippet: 'ln (${0:vector})'
    },
    ln_matrix: {
        description: 'Natural logarithm of each cell of matrix',
        signature: 'ln_matrix (matrix)',
        niceName: 'ln (matrix)',
        preSnippet: 'ln (${0:matrix})'
    },
    lnGamma: {
        description: 'Logarithm of the ga function',
        signature: 'lnGamma (x)',
        niceName: 'lnGamma (number)',
        preSnippet: 'lnGamma (${0:number})'
    },
    log2: {
        description: 'Logarithm, base 2',
        signature: 'log2 (x)',
        niceName: 'log2 (number)',
        preSnippet: 'log2 (${0:number})'
    },
    log2_vector: {
        description: 'Base-2 logarithm of each element of vector',
        signature: 'log2_vector (vector)',
        niceName: 'log2 (vector)',
        preSnippet: 'log2 (${0:vector})'
    },
    log2_matrix: {
        description: 'Base-2 logarithm of each cell of matrix',
        signature: 'log2_matrix (matrix)',
        niceName: 'log2 (matrix)',
        preSnippet: 'log2 (${0:matrix})'
    },
    log10: {
        description: 'Logarithm, base 10',
        signature: 'log10 (x)',
        niceName: 'log10 (number)',
        preSnippet: 'log10 (${0:number})'
    },
    log10_vector: {
        description: 'Base-10 logarithm of each element of vector',
        signature: 'log10_vector (vector)',
        niceName: 'log10 (vector)',
        preSnippet: 'log10 (${0:vector})'
    },
    log10_matrix: {
        description: 'Base-10 logarithm of each cell of matrix',
        signature: 'log10_matrix (matrix)',
        niceName: 'log10 (matrix)',
        preSnippet: 'log10 (${0:matrix})'
    },
    max: {
        description: 'Maximum',
        signature: 'max (x, ...)',
        niceName: 'max',
        preSnippet: 'max ()'
    },
    mean: {
        description: 'Average of the elements of a vector',
        signature: 'mean (v)',
        niceName: 'mean',
        preSnippet: 'mean ()'
    },
    melToHertz: {
        description: 'From mel to acoustic frequency',
        signature: 'melToHertz (x)',
        niceName: 'melToHertz (number)',
        preSnippet: 'melToHertz (${0:number})'
    },
    mid$: {
        description: 'The n characters in string$  starting at position from',
        signature: 'mid$ (string$ , from, n)',
        niceName: 'mid$ (string)',
        preSnippet: 'mid$ (${0:string})'
    },
    min: {
        description: 'Minimum',
        signature: 'min (x, ...)',
        niceName: 'min',
        preSnippet: 'min ()'
    },
    mul: {
        description: 'Matrix multiplication',
        signature: 'mul (a  , b)',
        niceName: 'mul',
        preSnippet: 'mul ()'
    },
    number: {
        description: 'Interpret a string as a number',
        signature: 'number (a$)',
        niceName: 'number (string)',
        preSnippet: 'number (${0:string})'
    },
    numberOfColumns_matrix: {
        description: 'Interpret a string as a number',
        signature: 'numberOfColumns_matrix (matrix)',
        niceName: 'numberOfColumns (matrix)',
        preSnippet: 'numberOfColumns (${0:matrix})'
    },
    numberOfRows_matrix: {
        description: 'Interpret a string as a number',
        signature: 'numberOfRows_matrix (matrix)',
        niceName: 'numberOfRows (matrix)',
        preSnippet: 'numberOfRows (${0:matrix})'
    },
    outer: {
        description: 'Outer product, i.e. result__ij_ = a__i_b__j_',
        signature: 'outer (a , b)',
        niceName: 'outer',
        preSnippet: 'outer ()'
    },
    percent$: {
        description: 'Format a number as a stringwith a trailing percent sign and precision digits after the decimal point',
        signature: 'percent$ (number, precision)',
        niceName: 'percent$',
        preSnippet: 'percent$ ()'
    },
    phonToDifferenceLimens: {
        description: 'From perceptual loudness to jnd-scale',
        signature: 'phonToDifferenceLimens (x)',
        niceName: 'phonToDifferenceLimens (number)',
        preSnippet: 'phonToDifferenceLimens (${0:number})'
    },
    randomBernoulli: {
        description: 'Bernoulli-distributed random deviate (0 or 1)',
        signature: 'randomBernoulli (p)',
        niceName: 'randomBernoulli',
        preSnippet: 'randomBernoulli ()'
    },
    randomBernoulli_numberof_special: {
        description: 'N independent bernoulli-distributed zeroes and ones',
        signature: 'randomBernoulli_numberof_special (n, p)',
        niceName: 'randomBernoulli_numberof_special',
        preSnippet: 'randomBernoulli (${1:x}, ${2:y})'
    },
    randomGamma: {
        description: 'Gamma-distributed random deviate',
        signature: 'randomGamma (shape, rate)',
        niceName: 'randomGamma',
        preSnippet: 'randomGamma ()'
    },
    randomGamma_numberof_special: {
        description: 'N independent gamma-distributed random numbers',
        signature: 'randomGamma_numberof_special (n, shape, rate)',
        niceName: 'randomGamma_numberof_special',
        preSnippet: 'randomGamma (${1:x}, ${2:y})'
    },
    randomGamma_vector: {
        description: 'Duplicate vector and replace all elements with independent gamma-distributed random numbers',
        signature: 'randomGamma_vector (vector , shape, rate)',
        niceName: 'randomGamma (vector)',
        preSnippet: 'randomGamma (${0:vector})'
    },
    randomGamma_table: {
        description: 'Nrow xx ncol independent gamma-distributed random numbers',
        signature: 'randomGamma_table (nrow, ncol, shape, rate)',
        niceName: 'randomGamma (table)',
        preSnippet: 'randomGamma (${1:row}, ${2:column})'
    },
    randomGamma_matrix: {
        description: 'Duplicate matrix and replace all cells with independent gamma-distributed random numbers',
        signature: 'randomGamma_matrix (matrix  , shape, rate)',
        niceName: 'randomGamma (matrix)',
        preSnippet: 'randomGamma (${0:matrix})'
    },
    randomGauss: {
        description: 'Normally distributed random deviate',
        signature: 'randomGauss (mu, si)',
        niceName: 'randomGauss',
        preSnippet: 'randomGauss ()'
    },
    randomGauss_numberof_special: {
        description: 'N independent normally distributed random numbers',
        signature: 'randomGauss_numberof_special (n, mu, si)',
        niceName: 'randomGauss_numberof_special',
        preSnippet: 'randomGauss (${1:x}, ${2:y})'
    },
    randomGauss_vector: {
        description: 'Duplicate vector and replace all elements with independent normally distributed random numbers',
        signature: 'randomGauss_vector (vector , mu, si)',
        niceName: 'randomGauss (vector)',
        preSnippet: 'randomGauss (${0:vector})'
    },
    randomGauss_table: {
        description: 'Nrow xx ncol independent normally distributed random numbers',
        signature: 'randomGauss_table (nrow, ncol, mu, si)',
        niceName: 'randomGauss (table)',
        preSnippet: 'randomGauss (${1:row}, ${2:column})'
    },
    randomGauss_matrix: {
        description: 'Duplicate matrix and replace all cells with independent normally distributed random numbers',
        signature: 'randomGauss_matrix (matrix  , mu, si)',
        niceName: 'randomGauss (matrix)',
        preSnippet: 'randomGauss (${0:matrix})'
    },
    randomInteger_numberof_numberof: {
        description: 'Uniformly distributed integer random deviate',
        signature: 'randomInteger_numberof_numberof (min, max)',
        niceName: 'randomInteger_numberof',
        preSnippet: 'randomInteger (${1:min}, ${2:max})'
    },
    randomInteger_numberof_range: {
        description: 'N independent uniformly distributed random integers',
        signature: 'randomInteger_numberof_numberof (n, min, max)',
        niceName: 'randomInteger_numberof',
        preSnippet: 'randomInteger (${1:min}, ${2:max})'
    },
    randomInteger_vector_numberof_numberof: {
        description: 'Duplicate vector and replace all elements with independent uniformly distributed random integers',
        signature: 'randomInteger_vector_numberof_numberof (vector , min, max)',
        niceName: 'randomInteger_numberof',
        preSnippet: 'randomInteger (${1:vector}${2:min}, ${3:max})'
    },
    randomInteger_table_numberof_numberof: {
        description: 'Nrow xx ncol independent uniformly distributed random integers',
        signature: 'randomInteger_table_numberof_numberof (nrow, ncol, min, max)',
        niceName: 'randomInteger_numberof',
        preSnippet: 'randomInteger (${1:row}, ${2:column}${3:min}, ${4:max})'
    },
    randomPoisson: {
        description: 'Poisson-distributed random deviate',
        signature: 'randomPoisson (mean)',
        niceName: 'randomPoisson',
        preSnippet: 'randomPoisson ()'
    },
    randomPoisson_numberof_special: {
        description: 'N independent poisson-distributed random numbers',
        signature: 'randomPoisson_numberof_special (n, mean)',
        niceName: 'randomPoisson_numberof_special',
        preSnippet: 'randomPoisson (${1:x}, ${2:y})'
    },
    randomPoisson_vector: {
        description: 'Duplicate vector and replace all elements with independent poisson-distributed random numbers',
        signature: 'randomPoisson_vector (vector , mean)',
        niceName: 'randomPoisson (vector)',
        preSnippet: 'randomPoisson (${0:vector})'
    },
    randomPoisson_table: {
        description: 'Nrow xx ncol independent poisson-distributed random numbers',
        signature: 'randomPoisson_table (nrow, ncol, mean)',
        niceName: 'randomPoisson (table)',
        preSnippet: 'randomPoisson (${1:row}, ${2:column})'
    },
    randomPoisson_matrix: {
        description: 'Duplicate matrix and replace all cells with independent poisson-distributed random numbers',
        signature: 'randomPoisson_matrix (matrix  , mean)',
        niceName: 'randomPoisson (matrix)',
        preSnippet: 'randomPoisson (${0:matrix})'
    },
    randomUniform_numberof_numberof: {
        description: 'Uniformly distributed random deviate',
        signature: 'randomUniform_numberof_numberof (min, max)',
        niceName: 'randomUniform_numberof',
        preSnippet: 'randomUniform (${1:min}, ${2:max})'
    },
    randomUniform_numberof_range: {
        description: 'N independent uniformly distributed random numbers',
        signature: 'randomUniform_numberof_numberof (n, min, max)',
        niceName: 'randomUniform_numberof',
        preSnippet: 'randomUniform (${1:min}, ${2:max})'
    },
    randomUniform_vector_numberof_numberof: {
        description: 'Duplicate vector and replace all elements with independent uniformly distributed random numbers',
        signature: 'randomUniform_vector_numberof_numberof (vector , min, max)',
        niceName: 'randomUniform_numberof',
        preSnippet: 'randomUniform (${1:vector}${2:min}, ${3:max})'
    },
    randomUniform_table_numberof_numberof: {
        description: 'Nrow xx ncol independent uniformly distributed random numbers',
        signature: 'randomUniform_table_numberof_numberof (nrow, ncol, min, max)',
        niceName: 'randomUniform_numberof',
        preSnippet: 'randomUniform (${1:row}, ${2:column}${3:min}, ${4:max})'
    },
    randomUniform_matrix_numberof_numberof: {
        description: 'Duplicate matrix and replace all cells with independent uniformly distributed random numbers',
        signature: 'randomUniform_matrix_numberof_numberof (matrix  , min, max)',
        niceName: 'randomUniform_numberof',
        preSnippet: 'randomUniform (${1:matrix}${2:min}, ${3:max})'
    },
    random_initializeSafelyAndUnpredictably: {
        description: 'Undoes the effects of the following function',
        signature: 'random_initializeSafelyAndUnpredictably ()',
        niceName: 'random_initializeSafelyAndUnpredictably',
        preSnippet: 'random_initializeSafelyAndUnpredictably ()'
    },
    random_initializeWithSeedUnsafelyButPredictably: {
        description: 'Reproducible sequence of random numbers',
        signature: 'random_initializeWithSeedUnsafelyButPredictably (seed)',
        niceName: 'random_initializeWithSeedUnsafelyButPredictably',
        preSnippet: 'random_initializeWithSeedUnsafelyButPredictably ()'
    },
    readFile: {
        description: 'Read a number from a text file',
        signature: 'readFile (filePath$)',
        niceName: 'readFile (string)',
        preSnippet: 'readFile (${0:string})'
    },
    readFile$: {
        description: 'Read a whole text file into a string',
        signature: 'readFile$ (filePath$)',
        niceName: 'readFile$ (string)',
        preSnippet: 'readFile$ (${0:string})'
    },
    readLinesFromFile$: {
        description: 'Read all lines from a text file',
        signature: 'readLinesFromFile$ (filePath$)',
        niceName: 'readLinesFromFile$ (string)',
        preSnippet: 'readLinesFromFile$ (${0:string})'
    },
    rectify: {
        description: 'Set to zero if negative (no change if positive)',
        signature: 'rectify (x)',
        niceName: 'rectify (number)',
        preSnippet: 'rectify (${0:number})'
    },
    rectify_vector: {
        description: 'Rectify each element of vector',
        signature: 'rectify_vector (vector)',
        niceName: 'rectify (vector)',
        preSnippet: 'rectify (${0:vector})'
    },
    rectify_matrix: {
        description: 'Rectify each cell of matrix',
        signature: 'rectify_matrix (matrix)',
        niceName: 'rectify (matrix)',
        preSnippet: 'rectify (${0:matrix})'
    },
    repeat: {
        description: 'Repeat the whole sequence of elements of v  n times',
        signature: 'repeat (v , n)',
        niceName: 'repeat',
        preSnippet: 'repeat ()'
    },
    replace$: {
        description: 'Within a$ , replace the first n occurrences of b$  with c$ , or all if n = 0',
        signature: 'replace$ (a$ , b$ , c$ , n)',
        niceName: 'replace$ (string)',
        preSnippet: 'replace$ (${0:string})'
    },
    replace_regex$: {
        description: 'Within a$ replace the first n matches of regular expression b$  with the regular expression c$ , or all if n = 0',
        signature: 'replace_regex$ (a$ , b$ , c$ , n)',
        niceName: 'replace_regex$ (string)',
        preSnippet: 'replace_regex$ (${0:string})'
    },
    right$: {
        description: 'The n last characters in string$',
        signature: 'right$ (string$ , n)',
        niceName: 'right$ (string)',
        preSnippet: 'right$ (${0:string})'
    },
    rindex: {
        description: 'Look up a substring from the end, or 0 if not found',
        signature: 'rindex (string$ , part$)',
        niceName: 'rindex (string)',
        preSnippet: 'rindex (${0:string})'
    },
    rindex_regex: {
        description: 'Determine whether and where string$  last matches regex$',
        signature: 'rindex_regex (string$ , regex$)',
        niceName: 'rindex_regex (string)',
        preSnippet: 'rindex_regex (${0:string})'
    },
    round: {
        description: 'Nearest integer',
        signature: 'round (x)',
        niceName: 'round (number)',
        preSnippet: 'round (${0:number})'
    },
    round_vector: {
        description: 'Nearest integer of each element of vector',
        signature: 'round_vector (vector)',
        niceName: 'round (vector)',
        preSnippet: 'round (${0:vector})'
    },
    round_matrix: {
        description: 'Nearest integer of each cell of matrix',
        signature: 'round_matrix (matrix)',
        niceName: 'round (matrix)',
        preSnippet: 'round (${0:matrix})'
    },
    rowSums_matrix: {
        description: 'Nearest integer of each cell of matrix',
        signature: 'rowSums_matrix (matrix)',
        niceName: 'rowSums (matrix)',
        preSnippet: 'rowSums (${0:matrix})'
    },
    semitonesToHertz: {
        description: 'From logarithmic scale re 100 hz to acoustic frequency',
        signature: 'semitonesToHertz (x)',
        niceName: 'semitonesToHertz (number)',
        preSnippet: 'semitonesToHertz (${0:number})'
    },
    sigmoid: {
        description: '1 / (1 + e^^-x^)',
        signature: 'sigmoid (x)',
        niceName: 'sigmoid (number)',
        preSnippet: 'sigmoid (${0:number})'
    },
    sigmoid_vector: {
        description: 'Sigmoid of each element of vector',
        signature: 'sigmoid_vector (vector)',
        niceName: 'sigmoid (vector)',
        preSnippet: 'sigmoid (${0:vector})'
    },
    sigmoid_matrix: {
        description: 'Sigmoid of each cell of matrix',
        signature: 'sigmoid_matrix (matrix)',
        niceName: 'sigmoid (matrix)',
        preSnippet: 'sigmoid (${0:matrix})'
    },
    sin: {
        description: 'Sine',
        signature: 'sin (x)',
        niceName: 'sin (number)',
        preSnippet: 'sin (${0:number})'
    },
    sin_vector: {
        description: 'Sine of each element of vector',
        signature: 'sin_vector (vector)',
        niceName: 'sin (vector)',
        preSnippet: 'sin (${0:vector})'
    },
    sin_matrix: {
        description: 'Sine of each cell of matrix',
        signature: 'sin_matrix (matrix)',
        niceName: 'sin (matrix)',
        preSnippet: 'sin (${0:matrix})'
    },
    sinc: {
        description: 'Sinus cardinalis: sin (x) / x',
        signature: 'sinc (x)',
        niceName: 'sinc (number)',
        preSnippet: 'sinc (${0:number})'
    },
    sincpi: {
        description: 'Sin (pix) / (pix)',
        signature: 'sincpi (x)',
        niceName: 'sincpi (number)',
        preSnippet: 'sincpi (${0:number})'
    },
    sinh: {
        description: 'Hyperbolic sine',
        signature: 'sinh (x)',
        niceName: 'sinh (number)',
        preSnippet: 'sinh (${0:number})'
    },
    sinh_vector: {
        description: 'Hyperbolic sine of each element of vector',
        signature: 'sinh_vector (vector)',
        niceName: 'sinh (vector)',
        preSnippet: 'sinh (${0:vector})'
    },
    sinh_matrix: {
        description: 'Hyperbolic sine of each cell of matrix',
        signature: 'sinh_matrix (matrix)',
        niceName: 'sinh (matrix)',
        preSnippet: 'sinh (${0:matrix})'
    },
    size: {
        description: 'Number of elements',
        signature: 'size (v)',
        niceName: 'size',
        preSnippet: 'size ()'
    },
    shuffle_vector: {
        description: 'Randomize order',
        signature: 'shuffle_vector (vector)',
        niceName: 'shuffle (vector)',
        preSnippet: 'shuffle (${0:vector})'
    },
    softmax_vector: {
        description: 'Randomize order',
        signature: 'softmax_vector (vector)',
        niceName: 'softmax (vector)',
        preSnippet: 'softmax (${0:vector})'
    },
    softmaxPerRow_matrix: {
        description: 'Randomize order',
        signature: 'softmaxPerRow_matrix (matrix)',
        niceName: 'softmaxPerRow (matrix)',
        preSnippet: 'softmaxPerRow (${0:matrix})'
    },
    sort_vector: {
        description: 'Reshuffle in increasing order',
        signature: 'sort_vector (vector)',
        niceName: 'sort (vector)',
        preSnippet: 'sort (${0:vector})'
    },
    splitByWhitespace$: {
        description: 'Split a string into inks',
        signature: 'splitByWhitespace$ (string$)',
        niceName: 'splitByWhitespace$ (string)',
        preSnippet: 'splitByWhitespace$ (${0:string})'
    },
    sqrt: {
        description: 'Square root',
        signature: 'sqrt (x)',
        niceName: 'sqrt (number)',
        preSnippet: 'sqrt (${0:number})'
    },
    sqrt_vector: {
        description: 'Square root of each element of vector',
        signature: 'sqrt_vector (vector)',
        niceName: 'sqrt (vector)',
        preSnippet: 'sqrt (${0:vector})'
    },
    sqrt_matrix: {
        description: 'Square root of each cell of matrix',
        signature: 'sqrt_matrix (matrix)',
        niceName: 'sqrt (matrix)',
        preSnippet: 'sqrt (${0:matrix})'
    },
    startsWith: {
        description: 'Determine whether string$  starts with part$',
        signature: 'startsWith (string$ , part$)',
        niceName: 'startsWith (string)',
        preSnippet: 'startsWith (${0:string})'
    },
    stdev: {
        description: 'Standard deviation of the elements of a vector',
        signature: 'stdev (v)',
        niceName: 'stdev',
        preSnippet: 'stdev ()'
    },
    stopwatch: {
        description: 'Give the current value of the timer, which is then immediately reset to zero (note: no parentheses)',
        signature: 'stopwatch (v)',
        niceName: 'stopwatch',
        preSnippet: 'stopwatch ()'
    },
    string$: {
        description: 'Format a number as a string',
        signature: 'string$ (number)',
        niceName: 'string$',
        preSnippet: 'string$ ()'
    },
    studentP: {
        description: 'Area under the student t curve up to t',
        signature: 'studentP (t, df)',
        niceName: 'studentP',
        preSnippet: 'studentP ()'
    },
    studentQ: {
        description: 'Area under the student t curve after t',
        signature: 'studentQ (t, df)',
        niceName: 'studentQ',
        preSnippet: 'studentQ ()'
    },
    sum: {
        description: 'Sum the elements',
        signature: 'sum (v)',
        niceName: 'sum',
        preSnippet: 'sum ()'
    },
    sumOver_numberof_special: {
        description: 'Si',
        signature: 'sumOver_numberof_special (loopVariable to n, numericExpressionOptionallyUsingLoopVariable)',
        niceName: 'sumOver_numberof_special',
        preSnippet: 'sumOver (${1:x}, ${2:y})'
    },
    tan: {
        description: 'Tangent',
        signature: 'tan (x)',
        niceName: 'tan (number)',
        preSnippet: 'tan (${0:number})'
    },
    tan_vector: {
        description: 'Tangent of each element of vector',
        signature: 'tan_vector (vector)',
        niceName: 'tan (vector)',
        preSnippet: 'tan (${0:vector})'
    },
    tan_matrix: {
        description: 'Tangent of each cell of matrix',
        signature: 'tan_matrix (matrix)',
        niceName: 'tan (matrix)',
        preSnippet: 'tan (${0:matrix})'
    },
    tanh: {
        description: 'Hyperbolic tangent',
        signature: 'tanh (x)',
        niceName: 'tanh (number)',
        preSnippet: 'tanh (${0:number})'
    },
    tanh_vector: {
        description: 'Hyperbolic tangent of each element of vector',
        signature: 'tanh_vector (vector)',
        niceName: 'tanh (vector)',
        preSnippet: 'tanh (${0:vector})'
    },
    tanh_matrix: {
        description: 'Hyperbolic tangent of each cell of matrix',
        signature: 'tanh_matrix (matrix)',
        niceName: 'tanh (matrix)',
        preSnippet: 'tanh (${0:matrix})'
    },
    to: {
        description: 'The integers 1 through n',
        signature: 'to (n)',
        niceName: 'to (number)',
        preSnippet: 'to (${0:number})'
    },
    transpose_matrix: {
        description: 'The integers 1 through n',
        signature: 'transpose_matrix (matrix)',
        niceName: 'transpose (matrix)',
        preSnippet: 'transpose (${0:matrix})'
    },
    unicode: {
        description: 'The unicode codepoint number that corresponds to character c$',
        signature: 'unicode (c$)',
        niceName: 'unicode (string)',
        preSnippet: 'unicode (${0:string})'
    },
    unicode$: {
        description: 'The character that corresponds to unicode codepoint n',
        signature: 'unicode$ (n)',
        niceName: 'unicode$ (number)',
        preSnippet: 'unicode$ (${0:number})'
    },
    unicodeToBackslashTrigraphs$: {
        description: 'Convert e.g. ct to bsct',
        signature: 'unicodeToBackslashTrigraphs$ (string$)',
        niceName: 'unicodeToBackslashTrigraphs$ (string)',
        preSnippet: 'unicodeToBackslashTrigraphs$ (${0:string})'
    },
    writeFile: {
        description: 'Create a new text file, and write texts, numbers, vectors and so on into it',
        signature: 'writeFile (filePath$ , ...)',
        niceName: 'writeFile (string)',
        preSnippet: 'writeFile (${0:string})'
    },
    writeFileLine: {
        description: 'Create a new text file, write texts, numbers, vectors and so on into it, followed by a newline',
        signature: 'writeFileLine (filePath$ , ...)',
        niceName: 'writeFileLine (string)',
        preSnippet: 'writeFileLine (${0:string})'
    },
    zero: {
        description: 'Vector with n elements that are all 0',
        signature: 'zero (n)',
        niceName: 'zero (number)',
        preSnippet: 'zero (${0:number})'
    },
    Formula: {
        description: 'Formula for sounds',
        signature: 'Formula...',
        niceName: 'Formula',
        preSnippet: 'Formula... ${0:formula}'
    }
};