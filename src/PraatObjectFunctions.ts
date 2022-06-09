/* eslint-disable @typescript-eslint/naming-convention */
// Praat object function list A

import { classes } from "./praatGlobals";

// Create string array of Praat Classes
const classList:string[] = [];
for (let praatClass in classes) {
    if (praatClass !== "all") {
        classList.push(praatClass);
    }
}
const enum OperatorType {
    None = 0,
    Colon = 1,
    Ellipsis = 2
}

export interface ObjectMethod {
    name: string, // Name of this function
    class: string[], // Which class(es) implement this method
    arguments: {argIndex:number, argName:string} | {}, // List of arguments for method
    argCount?: number, // How many arguments does this method take?
    preSnippet: string, // What will be provided to the completion item provider that will create a snippet
    operator?: OperatorType, // What operator the method requires
    argSeparator?: string[], // What character(s) separates these arguments
    description?: string, // What the user will see in documentation
    signature?: string, // What the hover window will display for the "formula" of this method
    inputType?: string[], // What input types are allowed?
    outputType?: string, // What type is the output of this method?
    outputName?: string, // Name of the variable of object the method writes to
    selectOutput?: boolean // Whether the output is selected after the method runs
}

export interface MethodList {
    [methodName:string]: ObjectMethod
}
export interface PraatClass {
    praatMethods:MethodList
    methodCount: number,
    methods: { methodIndex:number, methodName:string} | {}
}
export interface ClassList { 
    [name:string]: PraatClass
 }


// The list below is automatically generated from Praat Manuals
// Please contact the developer for proposed changes or additional functionality
// Generated on 08/06/2022

export const praatMethods: ClassList = {
    "Cepstrum": {
        praatMethods: {},
        methodCount: 0,
        methods: {}
    },
    "ChebyshevSeries": {
        praatMethods: {
            "ChebyshevSeries: To Polynomial": {
                name: "To Polynomial",
                class: ["ChebyshevSeries"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Polynomial"
            }
        },
        methodCount: 1,
        methods: {
            0: "To Polynomial"
        }
    },
    "ClassificationTable": {
        praatMethods: {
            "ClassificationTable: To Confusion...": {
                name: "To Confusion...",
                class: ["ClassificationTable"],
                arguments: {
                    0: "Only class labels"
                },
                argCount: 1,
                preSnippet: "To Confusion... ${0:Only class labels}"
            }
        },
        methodCount: 1,
        methods: {
            0: "To Confusion..."
        }
    },
    "Cochleagram": {
        praatMethods: {
            "Cochleagram: Formula...": {
                name: "Formula...",
                class: ["Cochleagram"],
                arguments: {},
                argCount: 0,
                preSnippet: "Formula..."
            }
        },
        methodCount: 1,
        methods: {
            0: "Formula..."
        }
    },
    "Configuration": {
        praatMethods: {
            "Configuration & AffineTransform: To Configuration": {
                name: "To Configuration",
                class: ["Configuration", "AffineTransform"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Configuration"
            },
            "Configuration & Configuration: To Procrustes...": {
                name: "To Procrustes...",
                class: ["Configuration", "Configuration"],
                arguments: {
                    0: "Orthogonal transform"
                },
                argCount: 1,
                preSnippet: "To Procrustes... ${0:Orthogonal transform}"
            },
            "Configuration & Procrustes: To Configuration": {
                name: "To Configuration",
                class: ["Configuration", "Procrustes"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Configuration"
            },
            "Configuration: Centralize": {
                name: "Centralize",
                class: ["Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "Centralize"
            },
            "Configuration: Draw...": {
                name: "Draw...",
                class: ["Configuration"],
                arguments: {
                    0: "X-coordinate",
                    1: "xmin",
                    2: "Garnish"
                },
                argCount: 3,
                preSnippet: "Draw... ${1:X-coordinate} ${2:xmin} ${3:Garnish}"
            },
            "Configuration: Invert dimension...": {
                name: "Invert dimension...",
                class: ["Configuration"],
                arguments: {
                    0: "Dimension"
                },
                argCount: 1,
                preSnippet: "Invert dimension... ${0:Dimension}"
            },
            "Configuration: Normalize...": {
                name: "Normalize...",
                class: ["Configuration"],
                arguments: {
                    0: "Sum of squares",
                    1: "Each dimension separately"
                },
                argCount: 2,
                preSnippet: "Normalize... ${1:Sum of squares} ${2:Each dimension separately}"
            },
            "Configuration: Randomize": {
                name: "Randomize",
                class: ["Configuration"],
                arguments: {
                    0: "<i>x</i>"
                },
                argCount: 1,
                preSnippet: "Randomize ${0:<i>x</i>}"
            },
            "Configuration: Rotate (pc)": {
                name: "Rotate (pc)",
                class: ["Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "Rotate (pc)"
            },
            "Configuration: Rotate...": {
                name: "Rotate...",
                class: ["Configuration"],
                arguments: {
                    0: "Dimension 1",
                    1: "Angle"
                },
                argCount: 2,
                preSnippet: "Rotate... ${1:Dimension 1} ${2:Angle}"
            },
            "Configuration: To Configuration (procrustes)": {
                name: "To Configuration (procrustes)",
                class: ["Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Configuration (procrustes)"
            },
            "Configuration: To Configuration (varimax)...": {
                name: "To Configuration (varimax)...",
                class: ["Configuration"],
                arguments: {
                    0: "Normalize rows",
                    1: "Quartimax",
                    2: "Maximum number of iterations",
                    3: "Tolerance"
                },
                argCount: 4,
                preSnippet: "To Configuration (varimax)... ${1:Normalize rows} ${2:Quartimax} ${3:Maximum number of iterations} ${4:Tolerance}"
            },
            "Configuration: To Distance": {
                name: "To Distance",
                class: ["Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Distance"
            },
            "Configuration: To Similarity (cc)": {
                name: "To Similarity (cc)",
                class: ["Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Similarity (cc)"
            },
            "Configurations: To AffineTransform (congruence)...": {
                name: "To AffineTransform (congruence)...",
                class: ["Configurations"],
                arguments: {
                    0: "Maximum number of iterations",
                    1: "Tolerance",
                    2: "T"
                },
                argCount: 3,
                preSnippet: "To AffineTransform (congruence)... ${1:Maximum number of iterations} ${2:Tolerance} ${3:T}"
            }
        },
        methodCount: 15,
        methods: {
            0: "To Configuration",
            1: "To Procrustes...",
            2: "To Configuration",
            3: "Centralize",
            4: "Draw...",
            5: "Invert dimension...",
            6: "Normalize...",
            7: "Randomize",
            8: "Rotate (pc)",
            9: "Rotate...",
            10: "To Configuration (procrustes)",
            11: "To Configuration (varimax)...",
            12: "To Distance",
            13: "To Similarity (cc)",
            14: "To AffineTransform (congruence)...",
        }
    },
    "Confusion": {
        praatMethods: {
            "Confusion & ClassificationTable: Increase confusion count": {
                name: "Increase confusion count",
                class: ["Confusion", "ClassificationTable"],
                arguments: {
                    0: "response label"
                },
                argCount: 1,
                preSnippet: "Increase confusion count ${0:response label}"
            },
            "Confusion: Condense...": {
                name: "Condense...",
                class: ["Confusion"],
                arguments: {
                    0: "Search",
                    1: "Replace",
                    2: "Replace limit",
                    3: "Search and replace are"
                },
                argCount: 4,
                preSnippet: "Condense... ${1:Search} ${2:Replace} ${3:Replace limit} ${4:Search and replace are}"
            },
            "Confusion: Get fraction correct": {
                name: "Get fraction correct",
                class: ["Confusion"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get fraction correct"
            },
            "Confusion: Get response sum...": {
                name: "Get response sum...",
                class: ["Confusion"],
                arguments: {
                    0: "Get response sum: 'a'"
                },
                argCount: 1,
                preSnippet: "Get response sum... ${0:Get response sum: 'a'}"
            },
            "Confusion: Get stimulus sum...": {
                name: "Get stimulus sum...",
                class: ["Confusion"],
                arguments: {
                    0: "Get stimulus sum: 'a'"
                },
                argCount: 1,
                preSnippet: "Get stimulus sum... ${0:Get stimulus sum: 'a'}"
            },
            "Confusion: Group responses...": {
                name: "Group responses...",
                class: ["Confusion"],
                arguments: {
                    0: "Responses",
                    1: "New label",
                    2: "New label position",
                    3: "Group responses: 'a i', 'front', 1"
                },
                argCount: 4,
                preSnippet: "Group responses... ${1:Responses} ${2:New label} ${3:New label position} ${4:Group responses: 'a i', 'front', 1}"
            },
            "Confusion: Group stimuli...": {
                name: "Group stimuli...",
                class: ["Confusion"],
                arguments: {
                    0: "Stimuli",
                    1: "New label",
                    2: "New label position",
                    3: "Group stimuli: 'u i', 'high', 1"
                },
                argCount: 4,
                preSnippet: "Group stimuli... ${1:Stimuli} ${2:New label} ${3:New label position} ${4:Group stimuli: 'u i', 'high', 1}"
            },
            "Confusion: Group...": {
                name: "Group...",
                class: ["Confusion"],
                arguments: {
                    0: "Stimuli &amp; Responses",
                    1: "New label",
                    2: "New label position",
                    3: "Group stimuli: 'u i', 'high', 0",
                    4: "Group stimuli: 'u i', 'high', 2"
                },
                argCount: 5,
                preSnippet: "Group... ${1:Stimuli &amp; Responses} ${2:New label} ${3:New label position} ${4:Group stimuli: 'u i', 'high', 0} ${5:Group stimuli: 'u i', 'high', 2}"
            },
            "Confusion: Increase...": {
                name: "Increase...",
                class: ["Confusion"],
                arguments: {
                    0: "Stimulus",
                    1: "Increase: 'u', 'i'"
                },
                argCount: 2,
                preSnippet: "Increase... ${1:Stimulus} ${2:Increase: 'u', 'i'}"
            },
            "Confusion: To Dissimilarity (pdf)...": {
                name: "To Dissimilarity (pdf)...",
                class: ["Confusion"],
                arguments: {
                    0: "Symmetrize first",
                    1: "Maximum dissimilarity (units of sigma)"
                },
                argCount: 2,
                preSnippet: "To Dissimilarity (pdf)... ${1:Symmetrize first} ${2:Maximum dissimilarity (units of sigma)}"
            },
            "Confusion: To Dissimilarity...": {
                name: "To Dissimilarity...",
                class: ["Confusion"],
                arguments: {
                    0: "Normalize",
                    1: "No symmetrization",
                    2: "Maximum dissimilarity"
                },
                argCount: 3,
                preSnippet: "To Dissimilarity... ${1:Normalize} ${2:No symmetrization} ${3:Maximum dissimilarity}"
            },
            "Confusion: To Similarity...": {
                name: "To Similarity...",
                class: ["Confusion"],
                arguments: {
                    0: "Normalize",
                    1: "No symmetrization"
                },
                argCount: 2,
                preSnippet: "To Similarity... ${1:Normalize} ${2:No symmetrization}"
            },
            "Confusion: To TableOfReal (marginals)": {
                name: "To TableOfReal (marginals)",
                class: ["Confusion"],
                arguments: {},
                argCount: 0,
                preSnippet: "To TableOfReal (marginals)"
            }
        },
        methodCount: 13,
        methods: {
            0: "Increase confusion count",
            1: "Condense...",
            2: "Get fraction correct",
            3: "Get response sum...",
            4: "Get stimulus sum...",
            5: "Group responses...",
            6: "Group stimuli...",
            7: "Group...",
            8: "Increase...",
            9: "To Dissimilarity (pdf)...",
            10: "To Dissimilarity...",
            11: "To Similarity...",
            12: "To TableOfReal (marginals)",
        }
    },
    "ContingencyTable": {
        praatMethods: {
            "ContingencyTable: To Configuration (ca)...": {
                name: "To Configuration (ca)...",
                class: ["ContingencyTable"],
                arguments: {
                    0: "Number of dimensions",
                    1: "Scaling of the final configuration"
                },
                argCount: 2,
                preSnippet: "To Configuration (ca)... ${1:Number of dimensions} ${2:Scaling of the final configuration}"
            }
        },
        methodCount: 1,
        methods: {
            0: "To Configuration (ca)..."
        }
    },
    "Correlation": {
        praatMethods: {
            "Correlation: Confidence intervals...": {
                name: "Confidence intervals...",
                class: ["Correlation"],
                arguments: {
                    0: "Confidence level",
                    1: "Number of tests",
                    2: "Approximation"
                },
                argCount: 3,
                preSnippet: "Confidence intervals... ${1:Confidence level} ${2:Number of tests} ${3:Approximation}"
            }
        },
        methodCount: 1,
        methods: {
            0: "Confidence intervals..."
        }
    },
    "Covariance": {
        praatMethods: {
            "Covariance & TableOfReal: Extract quantile range...": {
                name: "Extract quantile range...",
                class: ["Covariance", "TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "Extract quantile range..."
            },
            "Covariance & TableOfReal: To TableOfReal (mahalanobis)...": {
                name: "To TableOfReal (mahalanobis)...",
                class: ["Covariance", "TableOfReal"],
                arguments: {
                    0: "Use table centroid"
                },
                argCount: 1,
                preSnippet: "To TableOfReal (mahalanobis)... ${0:Use table centroid}"
            },
            "Covariance: Difference": {
                name: "Difference",
                class: ["Covariance"],
                arguments: {
                    0: "<i>M</i>",
                    1: "<i>M</i>"
                },
                argCount: 2,
                preSnippet: "Difference ${1:<i>M</i>} ${2:<i>M</i>}"
            },
            "Covariance: Get fraction variance...": {
                name: "Get fraction variance...",
                class: ["Covariance"],
                arguments: {
                    0: "From dimension",
                    1: "C"
                },
                argCount: 2,
                preSnippet: "Get fraction variance... ${1:From dimension} ${2:C}"
            },
            "Covariance: Get significance of means difference...": {
                name: "Get significance of means difference...",
                class: ["Covariance"],
                arguments: {
                    0: "Index1",
                    1: "Value",
                    2: "Paired",
                    3: "Equal variances"
                },
                argCount: 4,
                preSnippet: "Get significance of means difference... ${1:Index1} ${2:Value} ${3:Paired} ${4:Equal variances}"
            },
            "Covariance: Get significance of one mean...": {
                name: "Get significance of one mean...",
                class: ["Covariance"],
                arguments: {
                    0: "Index",
                    1: "Value"
                },
                argCount: 2,
                preSnippet: "Get significance of one mean... ${1:Index} ${2:Value}"
            },
            "Covariance: Get significance of one variance...": {
                name: "Get significance of one variance...",
                class: ["Covariance"],
                arguments: {
                    0: "Index",
                    1: "Value"
                },
                argCount: 2,
                preSnippet: "Get significance of one variance... ${1:Index} ${2:Value}"
            },
            "Covariance: Get significance of variance ratio...": {
                name: "Get significance of variance ratio...",
                class: ["Covariance"],
                arguments: {
                    0: "Index1",
                    1: "Hypothesized ratio"
                },
                argCount: 2,
                preSnippet: "Get significance of variance ratio... ${1:Index1} ${2:Hypothesized ratio}"
            },
            "Covariance: Set value...": {
                name: "Set value...",
                class: ["Covariance"],
                arguments: {},
                argCount: 0,
                preSnippet: "Set value..."
            },
            "Covariance: To TableOfReal (random sampling)...": {
                name: "To TableOfReal (random sampling)...",
                class: ["Covariance"],
                arguments: {
                    0: "Number of data points",
                    1: "e</i>",
                    2: "x",
                    3: "y",
                    4: "y"
                },
                argCount: 5,
                preSnippet: "To TableOfReal (random sampling)... ${1:Number of data points} ${2:e</i>} ${3:x} ${4:y} ${5:y}"
            },
            "Covariances: Report equality": {
                name: "Report equality",
                class: ["Covariances"],
                arguments: {},
                argCount: 0,
                preSnippet: "Report equality"
            },
            "Covariances: Report multivariate mean difference...": {
                name: "Report multivariate mean difference...",
                class: ["Covariances"],
                arguments: {
                    0: "Covariances are equal"
                },
                argCount: 1,
                preSnippet: "Report multivariate mean difference... ${0:Covariances are equal}"
            }
        },
        methodCount: 12,
        methods: {
            0: "Extract quantile range...",
            1: "To TableOfReal (mahalanobis)...",
            2: "Difference",
            3: "Get fraction variance...",
            4: "Get significance of means difference...",
            5: "Get significance of one mean...",
            6: "Get significance of one variance...",
            7: "Get significance of variance ratio...",
            8: "Set value...",
            9: "To TableOfReal (random sampling)...",
            10: "Report equality",
            11: "Report multivariate mean difference...",
        }
    },
    "Discriminant": {
        praatMethods: {
            "Discriminant & PatternList: To Categories...": {
                name: "To Categories...",
                class: ["Discriminant", "PatternList"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Categories..."
            },
            "Discriminant & SSCP: Project": {
                name: "Project",
                class: ["Discriminant", "SSCP"],
                arguments: {},
                argCount: 0,
                preSnippet: "Project"
            },
            "Discriminant & TableOfReal: To ClassificationTable...": {
                name: "To ClassificationTable...",
                class: ["Discriminant", "TableOfReal"],
                arguments: {
                    0: "Pool covariance matrices",
                    1: "x",
                    2: "<i>x</i>",
                    3: "<i>x</i>",
                    4: "",
                    5: "<i>x</i>",
                    6: ""
                },
                argCount: 7,
                preSnippet: "To ClassificationTable... ${1:Pool covariance matrices} ${2:x} ${3:<i>x</i>} ${4:<i>x</i>} ${5:} ${6:<i>x</i>} ${7:}"
            },
            "Discriminant & TableOfReal: To Configuration...": {
                name: "To Configuration...",
                class: ["Discriminant", "TableOfReal"],
                arguments: {
                    0: "Number of dimensions"
                },
                argCount: 1,
                preSnippet: "To Configuration... ${0:Number of dimensions}"
            },
            "Discriminant & TableOfReal: To TableOfReal (mahalanobis)...": {
                name: "To TableOfReal (mahalanobis)...",
                class: ["Discriminant", "TableOfReal"],
                arguments: {
                    0: "Group label",
                    1: "Pool covariance matrices"
                },
                argCount: 2,
                preSnippet: "To TableOfReal (mahalanobis)... ${1:Group label} ${2:Pool covariance matrices}"
            },
            "Discriminant analysis": {
                name: "",
                class: ["Discriminant analysis"],
                arguments: {
                    0: "jackknife"
                },
                argCount: 1,
                preSnippet: " ${0:jackknife}"
            },
            "Discriminant: Draw sigma ellipses...": {
                name: "Draw sigma ellipses...",
                class: ["Discriminant"],
                arguments: {
                    0: "Number of sigmas",
                    1: "Discriminant plane",
                    2: "Xmin",
                    3: "Label size"
                },
                argCount: 4,
                preSnippet: "Draw sigma ellipses... ${1:Number of sigmas} ${2:Discriminant plane} ${3:Xmin} ${4:Label size}"
            },
            "Discriminant: Extract pooled within-groups SSCP": {
                name: "Extract pooled within-groups SSCP",
                class: ["Discriminant"],
                arguments: {},
                argCount: 0,
                preSnippet: "Extract pooled within-groups SSCP"
            },
            "Discriminant: Extract within-group SSCP...": {
                name: "Extract within-group SSCP...",
                class: ["Discriminant"],
                arguments: {},
                argCount: 0,
                preSnippet: "Extract within-group SSCP..."
            },
            "Discriminant: Get concentration ellipse area...": {
                name: "Get concentration ellipse area...",
                class: ["Discriminant"],
                arguments: {
                    0: "Number of sigmas",
                    1: "Discriminant plane"
                },
                argCount: 2,
                preSnippet: "Get concentration ellipse area... ${1:Number of sigmas} ${2:Discriminant plane}"
            },
            "Discriminant: Get confidence ellipse area...": {
                name: "Get confidence ellipse area...",
                class: ["Discriminant"],
                arguments: {
                    0: "Discriminant plane"
                },
                argCount: 1,
                preSnippet: "Get confidence ellipse area... ${0:Discriminant plane}"
            },
            "Discriminant: Get contribution of component...": {
                name: "Get contribution of component...",
                class: ["Discriminant"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get contribution of component..."
            },
            "Discriminant: Get partial discrimination probability...": {
                name: "Get partial discrimination probability...",
                class: ["Discriminant"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get partial discrimination probability..."
            },
            "Discriminant: Get Wilks' lambda...": {
                name: "Get Wilks' lambda...",
                class: ["Discriminant"],
                arguments: {
                    0: "From"
                },
                argCount: 1,
                preSnippet: "Get Wilks' lambda... ${0:From}"
            }
        },
        methodCount: 14,
        methods: {
            0: "To Categories...",
            1: "Project",
            2: "To ClassificationTable...",
            3: "To Configuration...",
            4: "To TableOfReal (mahalanobis)...",
            5: "",
            6: "Draw sigma ellipses...",
            7: "Extract pooled within-groups SSCP",
            8: "Extract within-group SSCP...",
            9: "Get concentration ellipse area...",
            10: "Get confidence ellipse area...",
            11: "Get contribution of component...",
            12: "Get partial discrimination probability...",
            13: "Get Wilks' lambda...",
        }
    },
    "Dissimilarity": {
        praatMethods: {
            "Dissimilarity & Configuration & Weight: Get stress...": {
                name: "Get stress...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get stress..."
            },
            "Dissimilarity & Configuration & Weight: To Configuration...": {
                name: "To Configuration...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Configuration..."
            },
            "Dissimilarity & Configuration: Draw regression (absolute mds)...": {
                name: "Draw regression (absolute mds)...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {
                    0: "Minimum proximity",
                    1: "Minimum distance",
                    2: "Mark size (mm)",
                    3: "Garnish"
                },
                argCount: 4,
                preSnippet: "Draw regression (absolute mds)... ${1:Minimum proximity} ${2:Minimum distance} ${3:Mark size (mm)} ${4:Garnish}"
            },
            "Dissimilarity & Configuration: Draw regression (i-spline mds)...": {
                name: "Draw regression (i-spline mds)...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {
                    0: "Number of interior knots",
                    1: "Order of I-spline",
                    2: "Minimum proximity",
                    3: "Minimum distance",
                    4: "Mark size (mm)",
                    5: "Garnish"
                },
                argCount: 6,
                preSnippet: "Draw regression (i-spline mds)... ${1:Number of interior knots} ${2:Order of I-spline} ${3:Minimum proximity} ${4:Minimum distance} ${5:Mark size (mm)} ${6:Garnish}"
            },
            "Dissimilarity & Configuration: Draw regression (interval mds)...": {
                name: "Draw regression (interval mds)...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {
                    0: "Minimum proximity",
                    1: "Minimum distance",
                    2: "Mark size (mm)",
                    3: "Garnish"
                },
                argCount: 4,
                preSnippet: "Draw regression (interval mds)... ${1:Minimum proximity} ${2:Minimum distance} ${3:Mark size (mm)} ${4:Garnish}"
            },
            "Dissimilarity & Configuration: Draw regression (monotone mds)...": {
                name: "Draw regression (monotone mds)...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {
                    0: "Handling of ties",
                    1: "Minimum proximity",
                    2: "Minimum distance",
                    3: "Mark size (mm)",
                    4: "Garnish"
                },
                argCount: 5,
                preSnippet: "Draw regression (monotone mds)... ${1:Handling of ties} ${2:Minimum proximity} ${3:Minimum distance} ${4:Mark size (mm)} ${5:Garnish}"
            },
            "Dissimilarity & Configuration: Draw regression (ratio mds)...": {
                name: "Draw regression (ratio mds)...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {
                    0: "Minimum proximity",
                    1: "Minimum distance",
                    2: "Mark size (mm)",
                    3: "Garnish"
                },
                argCount: 4,
                preSnippet: "Draw regression (ratio mds)... ${1:Minimum proximity} ${2:Minimum distance} ${3:Mark size (mm)} ${4:Garnish}"
            },
            "Dissimilarity & Configuration: Draw Shepard diagram...": {
                name: "Draw Shepard diagram...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {
                    0: "Minimum proximity",
                    1: "Minimum distance",
                    2: "Mark size (mm)",
                    3: "Garnish"
                },
                argCount: 4,
                preSnippet: "Draw Shepard diagram... ${1:Minimum proximity} ${2:Minimum distance} ${3:Mark size (mm)} ${4:Garnish}"
            },
            "Dissimilarity & Configuration: Get stress (absolute mds)...": {
                name: "Get stress (absolute mds)...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {
                    0: "dependent"
                },
                argCount: 1,
                preSnippet: "Get stress (absolute mds)... ${0:dependent}"
            },
            "Dissimilarity & Configuration: Get stress (i-spline mds)...": {
                name: "Get stress (i-spline mds)...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get stress (i-spline mds)..."
            },
            "Dissimilarity & Configuration: Get stress (interval mds)...": {
                name: "Get stress (interval mds)...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get stress (interval mds)..."
            },
            "Dissimilarity & Configuration: Get stress (monotone mds)...": {
                name: "Get stress (monotone mds)...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get stress (monotone mds)..."
            },
            "Dissimilarity & Configuration: Get stress (ratio mds)...": {
                name: "Get stress (ratio mds)...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get stress (ratio mds)..."
            },
            "Dissimilarity & Configuration: To Configuration (absolute mds)...": {
                name: "To Configuration (absolute mds)...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Configuration (absolute mds)..."
            },
            "Dissimilarity & Configuration: To Configuration (i-spline mds)...": {
                name: "To Configuration (i-spline mds)...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Configuration (i-spline mds)..."
            },
            "Dissimilarity & Configuration: To Configuration (interval mds)...": {
                name: "To Configuration (interval mds)...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Configuration (interval mds)..."
            },
            "Dissimilarity & Configuration: To Configuration (kruskal)...": {
                name: "To Configuration (kruskal)...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Configuration (kruskal)..."
            },
            "Dissimilarity & Configuration: To Configuration (monotone mds)...": {
                name: "To Configuration (monotone mds)...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Configuration (monotone mds)..."
            },
            "Dissimilarity & Configuration: To Configuration (ratio mds)...": {
                name: "To Configuration (ratio mds)...",
                class: ["Dissimilarity", "Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Configuration (ratio mds)..."
            },
            "Dissimilarity & Weight: To Configuration...": {
                name: "To Configuration...",
                class: ["Dissimilarity", "Weight"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Configuration..."
            },
            "Dissimilarity: Get additive constant": {
                name: "Get additive constant",
                class: ["Dissimilarity"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get additive constant"
            },
            "Dissimilarity: To Configuration (absolute mds)...": {
                name: "To Configuration (absolute mds)...",
                class: ["Dissimilarity"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Configuration (absolute mds)..."
            },
            "Dissimilarity: To Configuration (i-spline mds)...": {
                name: "To Configuration (i-spline mds)...",
                class: ["Dissimilarity"],
                arguments: {
                    0: "Number of dimensions",
                    1: "Number of interior knots",
                    2: "Order of I-spline",
                    3: "Tolerance",
                    4: "Tolerance",
                    5: "Maximum number of iterations",
                    6: "Number of repetitions"
                },
                argCount: 7,
                preSnippet: "To Configuration (i-spline mds)... ${1:Number of dimensions} ${2:Number of interior knots} ${3:Order of I-spline} ${4:Tolerance} ${5:Tolerance} ${6:Maximum number of iterations} ${7:Number of repetitions}"
            },
            "Dissimilarity: To Configuration (interval mds)...": {
                name: "To Configuration (interval mds)...",
                class: ["Dissimilarity"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Configuration (interval mds)..."
            },
            "Dissimilarity: To Configuration (kruskal)...": {
                name: "To Configuration (kruskal)...",
                class: ["Dissimilarity"],
                arguments: {
                    0: "Number of dimensions",
                    1: "Distance metric<i></i> (standard value: 2, i.e. Euclidean)",
                    2: "x",
                    3: "Handling of ties",
                    4: "Kruskal's stress-1 (Formula1, the default)",
                    5: "Kruskal's stress-2 (Formula2)",
                    6: "Tolerance",
                    7: "Maximum number of iterations",
                    8: "Number of repetitions",
                    9: "Configuration"
                },
                argCount: 10,
                preSnippet: "To Configuration (kruskal)... ${1:Number of dimensions} ${2:Distance metric<i></i> (standard value: 2, i.e. Euclidean)} ${3:x} ${4:Handling of ties} ${5:Kruskal's stress-1 (Formula1, the default)} ${6:Kruskal's stress-2 (Formula2)} ${7:Tolerance} ${8:Maximum number of iterations} ${9:Number of repetitions} ${10:Configuration}"
            },
            "Dissimilarity: To Configuration (monotone mds)...": {
                name: "To Configuration (monotone mds)...",
                class: ["Dissimilarity"],
                arguments: {
                    0: "Number of dimensions",
                    1: "Handling of ties",
                    2: "Tolerance",
                    3: "Maximum number of iterations",
                    4: "Number of repetitions"
                },
                argCount: 5,
                preSnippet: "To Configuration (monotone mds)... ${1:Number of dimensions} ${2:Handling of ties} ${3:Tolerance} ${4:Maximum number of iterations} ${5:Number of repetitions}"
            },
            "Dissimilarity: To Configuration (ratio mds)...": {
                name: "To Configuration (ratio mds)...",
                class: ["Dissimilarity"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Configuration (ratio mds)..."
            },
            "Dissimilarity: To Distance...": {
                name: "To Distance...",
                class: ["Dissimilarity"],
                arguments: {
                    0: "Scale"
                },
                argCount: 1,
                preSnippet: "To Distance... ${0:Scale}"
            },
            "Dissimilarity: To Weight": {
                name: "To Weight",
                class: ["Dissimilarity"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Weight"
            }
        },
        methodCount: 29,
        methods: {
            0: "Get stress...",
            1: "To Configuration...",
            2: "Draw regression (absolute mds)...",
            3: "Draw regression (i-spline mds)...",
            4: "Draw regression (interval mds)...",
            5: "Draw regression (monotone mds)...",
            6: "Draw regression (ratio mds)...",
            7: "Draw Shepard diagram...",
            8: "Get stress (absolute mds)...",
            9: "Get stress (i-spline mds)...",
            10: "Get stress (interval mds)...",
            11: "Get stress (monotone mds)...",
            12: "Get stress (ratio mds)...",
            13: "To Configuration (absolute mds)...",
            14: "To Configuration (i-spline mds)...",
            15: "To Configuration (interval mds)...",
            16: "To Configuration (kruskal)...",
            17: "To Configuration (monotone mds)...",
            18: "To Configuration (ratio mds)...",
            19: "To Configuration...",
            20: "Get additive constant",
            21: "To Configuration (absolute mds)...",
            22: "To Configuration (i-spline mds)...",
            23: "To Configuration (interval mds)...",
            24: "To Configuration (kruskal)...",
            25: "To Configuration (monotone mds)...",
            26: "To Configuration (ratio mds)...",
            27: "To Distance...",
            28: "To Weight",
        }
    },
    "Distance": {
        praatMethods: {
            "Distance & Configuration & Salience: Get VAF...": {
                name: "Get VAF...",
                class: ["Distance", "Configuration"],
                arguments: {
                    0: "Salience"
                },
                argCount: 1,
                preSnippet: "Get VAF... ${0:Salience}"
            },
            "Distance & Configuration & Salience: To Configuration (indscal)...": {
                name: "To Configuration (indscal)...",
                class: ["Distance", "Configuration"],
                arguments: {
                    0: "Salience"
                },
                argCount: 1,
                preSnippet: "To Configuration (indscal)... ${0:Salience}"
            },
            "Distance & Configuration: Draw scatter diagram...": {
                name: "Draw scatter diagram...",
                class: ["Distance", "Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "Draw scatter diagram..."
            },
            "Distance & Configuration: Get VAF...": {
                name: "Get VAF...",
                class: ["Distance", "Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get VAF..."
            },
            "Distance & Configuration: To Configuration (indscal)...": {
                name: "To Configuration (indscal)...",
                class: ["Distance", "Configuration"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Configuration (indscal)..."
            },
            "Distance: To Configuration (indscal)...": {
                name: "To Configuration (indscal)...",
                class: ["Distance"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Configuration (indscal)..."
            },
            "Distance: To Configuration (ytl)...": {
                name: "To Configuration (ytl)...",
                class: ["Distance"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Configuration (ytl)..."
            },
            "Distance: To ScalarProduct...": {
                name: "To ScalarProduct...",
                class: ["Distance"],
                arguments: {
                    0: "Make sum of squares equal 1.0"
                },
                argCount: 1,
                preSnippet: "To ScalarProduct... ${0:Make sum of squares equal 1.0}"
            }
        },
        methodCount: 8,
        methods: {
            0: "Get VAF...",
            1: "To Configuration (indscal)...",
            2: "Draw scatter diagram...",
            3: "Get VAF...",
            4: "To Configuration (indscal)...",
            5: "To Configuration (indscal)...",
            6: "To Configuration (ytl)...",
            7: "To ScalarProduct...",
        }
    },
    "Distributions": {
        praatMethods: {
            "Distributions: To Strings...": {
                name: "To Strings...",
                class: ["Distributions"],
                arguments: {
                    0: "Column number",
                    1: "Distributions",
                    2: "Number of strings",
                    3: "Strings",
                    4: "Example</i>"
                },
                argCount: 5,
                preSnippet: "To Strings... ${1:Column number} ${2:Distributions} ${3:Number of strings} ${4:Strings} ${5:Example</i>}"
            }
        },
        methodCount: 1,
        methods: {
            0: "To Strings..."
        }
    },
    "DTW": {
        praatMethods: {
            "DTW & Sounds: Draw warp (x)...": {
                name: "Draw warp (x)...",
                class: ["DTW", "Sounds"],
                arguments: {},
                argCount: 0,
                preSnippet: "Draw warp (x)..."
            },
            "DTW & Sounds: Draw...": {
                name: "Draw...",
                class: ["DTW", "Sounds"],
                arguments: {},
                argCount: 0,
                preSnippet: "Draw..."
            },
            "DTW & TextGrid: To TextGrid (warp times)": {
                name: "To TextGrid (warp times)",
                class: ["DTW", "TextGrid"],
                arguments: {},
                argCount: 0,
                preSnippet: "To TextGrid (warp times)"
            },
            "DTW: Draw warp (x)...": {
                name: "Draw warp (x)...",
                class: ["DTW"],
                arguments: {},
                argCount: 0,
                preSnippet: "Draw warp (x)..."
            },
            "DTW: Find path (band & slope)...": {
                name: "Find path (band & slope)...",
                class: ["DTW"],
                arguments: {
                    0: "Sakoe-Chiba band (s)",
                    1: "Slope constraint"
                },
                argCount: 2,
                preSnippet: "Find path (band & slope)... ${1:Sakoe-Chiba band (s)} ${2:Slope constraint}"
            },
            "DTW: Get distance (weighted)": {
                name: "Get distance (weighted)",
                class: ["DTW"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get distance (weighted)"
            },
            "DTW: Get maximum consecutive steps...": {
                name: "Get maximum consecutive steps...",
                class: ["DTW"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get maximum consecutive steps..."
            },
            "DTW: Get time along path...": {
                name: "Get time along path...",
                class: ["DTW"],
                arguments: {
                    0: "Time (s)"
                },
                argCount: 1,
                preSnippet: "Get time along path... ${0:Time (s)}"
            },
            "DTW: Get x time from y time...": {
                name: "Get x time from y time...",
                class: ["DTW"],
                arguments: {
                    0: "Time (s)"
                },
                argCount: 1,
                preSnippet: "Get x time from y time... ${0:Time (s)}"
            },
            "DTW: Get y time from x time...": {
                name: "Get y time from x time...",
                class: ["DTW"],
                arguments: {
                    0: "Time (s)"
                },
                argCount: 1,
                preSnippet: "Get y time from x time... ${0:Time (s)}"
            },
            "DTW: Swap axes": {
                name: "Swap axes",
                class: ["DTW"],
                arguments: {},
                argCount: 0,
                preSnippet: "Swap axes"
            },
            "DTW: To Polygon...": {
                name: "To Polygon...",
                class: ["DTW"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Polygon..."
            }
        },
        methodCount: 12,
        methods: {
            0: "Draw warp (x)...",
            1: "Draw...",
            2: "To TextGrid (warp times)",
            3: "Draw warp (x)...",
            4: "Find path (band & slope)...",
            5: "Get distance (weighted)",
            6: "Get maximum consecutive steps...",
            7: "Get time along path...",
            8: "Get x time from y time...",
            9: "Get y time from x time...",
            10: "Swap axes",
            11: "To Polygon...",
        }
    },
    "DurationTier": {
        praatMethods: {
            "DurationTier: Add point...": {
                name: "Add point...",
                class: ["DurationTier"],
                arguments: {
                    0: "Time (s)",
                    1: "Relative duration"
                },
                argCount: 2,
                preSnippet: "Add point... ${1:Time (s)} ${2:Relative duration}"
            },
            "DurationTier: Get target duration...": {
                name: "Get target duration...",
                class: ["DurationTier"],
                arguments: {
                    0: "From time (s)",
                    1: "To time (s)"
                },
                argCount: 2,
                preSnippet: "Get target duration... ${1:From time (s)} ${2:To time (s)}"
            },
            "DurationTierEditor": {
                name: "",
                class: ["DurationTierEditor"],
                arguments: {
                    0: "View &amp; Edit"
                },
                argCount: 1,
                preSnippet: " ${0:View &amp; Edit}"
            }
        },
        methodCount: 3,
        methods: {
            0: "Add point...",
            1: "Get target duration...",
            2: "",
        }
    },
    "Eigen": {
        praatMethods: {
            "Eigen & Matrix: To Matrix (project columns)...": {
                name: "To Matrix (project columns)...",
                class: ["Eigen", "Matrix"],
                arguments: {
                    0: "Number of dimensions"
                },
                argCount: 1,
                preSnippet: "To Matrix (project columns)... ${0:Number of dimensions}"
            },
            "Eigen & Matrix: To Matrix (project rows)...": {
                name: "To Matrix (project rows)...",
                class: ["Eigen", "Matrix"],
                arguments: {
                    0: "Number of dimensions"
                },
                argCount: 1,
                preSnippet: "To Matrix (project rows)... ${0:Number of dimensions}"
            },
            "Eigen & SSCP: Project": {
                name: "Project",
                class: ["Eigen", "SSCP"],
                arguments: {
                    0: "<i>S</i>",
                    1: "<i>E</i>"
                },
                argCount: 2,
                preSnippet: "Project ${1:<i>S</i>} ${2:<i>E</i>}"
            },
            "Eigen & TableOfReal: Project...": {
                name: "Project...",
                class: ["Eigen", "TableOfReal"],
                arguments: {
                    0: "Number of dimensions"
                },
                argCount: 1,
                preSnippet: "Project... ${0:Number of dimensions}"
            },
            "Eigen: Draw eigenvalues...": {
                name: "Draw eigenvalues...",
                class: ["Eigen"],
                arguments: {
                    0: "Fraction of eigenvalues summed",
                    1: "Cumulative"
                },
                argCount: 2,
                preSnippet: "Draw eigenvalues... ${1:Fraction of eigenvalues summed} ${2:Cumulative}"
            },
            "Eigen: Draw eigenvector...": {
                name: "Draw eigenvector...",
                class: ["Eigen"],
                arguments: {
                    0: "Eigenvector number",
                    1: "Element range",
                    2: "Minimum",
                    3: "Maximum",
                    4: "Mark size",
                    5: "Garnish"
                },
                argCount: 6,
                preSnippet: "Draw eigenvector... ${1:Eigenvector number} ${2:Element range} ${3:Minimum} ${4:Maximum} ${5:Mark size} ${6:Garnish}"
            },
            "Eigen: Extract eigenvector...": {
                name: "Extract eigenvector...",
                class: ["Eigen"],
                arguments: {
                    0: "Eigenvector number",
                    1: "Number of rows",
                    2: "numberOfColumns",
                    3: "Number of columns",
                    4: "numberOfRows",
                    5: "Number of rows"
                },
                argCount: 6,
                preSnippet: "Extract eigenvector... ${1:Eigenvector number} ${2:Number of rows} ${3:numberOfColumns} ${4:Number of columns} ${5:numberOfRows} ${6:Number of rows}"
            },
            "Eigen: Get contribution of component...": {
                name: "Get contribution of component...",
                class: ["Eigen"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get contribution of component..."
            },
            "Eigen: Get cumulative contribution of components...": {
                name: "Get cumulative contribution of components...",
                class: ["Eigen"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get cumulative contribution of components..."
            },
            "Eigen: Get eigenvalue...": {
                name: "Get eigenvalue...",
                class: ["Eigen"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get eigenvalue..."
            },
            "Eigen: Get eigenvector element...": {
                name: "Get eigenvector element...",
                class: ["Eigen"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get eigenvector element..."
            }
        },
        methodCount: 11,
        methods: {
            0: "To Matrix (project columns)...",
            1: "To Matrix (project rows)...",
            2: "Project",
            3: "Project...",
            4: "Draw eigenvalues...",
            5: "Draw eigenvector...",
            6: "Extract eigenvector...",
            7: "Get contribution of component...",
            8: "Get cumulative contribution of components...",
            9: "Get eigenvalue...",
            10: "Get eigenvector element...",
        }
    },
    "Electroglottogram": {
        praatMethods: {
            "Electroglottogram: Derivative...": {
                name: "Derivative...",
                class: ["Electroglottogram"],
                arguments: {
                    0: "Low-pass frequency (Hz)",
                    1: "Smoothing (Hz)",
                    2: "Scale absolute peak at 0.99"
                },
                argCount: 3,
                preSnippet: "Derivative... ${1:Low-pass frequency (Hz)} ${2:Smoothing (Hz)} ${3:Scale absolute peak at 0.99}"
            },
            "Electroglottogram: First central difference...": {
                name: "First central difference...",
                class: ["Electroglottogram"],
                arguments: {
                    0: "Scale absolute peak at 0.99"
                },
                argCount: 1,
                preSnippet: "First central difference... ${0:Scale absolute peak at 0.99}"
            },
            "Electroglottogram: Get closed glottis intervals...": {
                name: "Get closed glottis intervals...",
                class: ["Electroglottogram"],
                arguments: {
                    0: "Pitch floor (Hz)",
                    1: "Pitch ceiling (Hz)",
                    2: "Closing threshold",
                    3: "Peak threshold"
                },
                argCount: 4,
                preSnippet: "Get closed glottis intervals... ${1:Pitch floor (Hz)} ${2:Pitch ceiling (Hz)} ${3:Closing threshold} ${4:Peak threshold}"
            },
            "Electroglottogram: High-pass filter...": {
                name: "High-pass filter...",
                class: ["Electroglottogram"],
                arguments: {
                    0: "From frequency (Hz)",
                    1: "Smoothing (Hz)"
                },
                argCount: 2,
                preSnippet: "High-pass filter... ${1:From frequency (Hz)} ${2:Smoothing (Hz)}"
            },
            "Electroglottogram: To AmplitudeTier (levels)...": {
                name: "To AmplitudeTier (levels)...",
                class: ["Electroglottogram"],
                arguments: {
                    0: "Pitch floor (Hz)",
                    1: "Pitch ceiling (Hz)",
                    2: "Closing threshold (0-1)"
                },
                argCount: 3,
                preSnippet: "To AmplitudeTier (levels)... ${1:Pitch floor (Hz)} ${2:Pitch ceiling (Hz)} ${3:Closing threshold (0-1)}"
            }
        },
        methodCount: 5,
        methods: {
            0: "Derivative...",
            1: "First central difference...",
            2: "Get closed glottis intervals...",
            3: "High-pass filter...",
            4: "To AmplitudeTier (levels)...",
        }
    },
    "Excitation": {
        praatMethods: {
            "Excitation: Formula...": {
                name: "Formula...",
                class: ["Excitation"],
                arguments: {},
                argCount: 0,
                preSnippet: "Formula..."
            },
            "Excitation: Get loudness": {
                name: "Get loudness",
                class: ["Excitation"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get loudness"
            },
            "Excitation_barkToHertz": {
                name: "",
                class: ["Excitation_barkToHertz"],
                arguments: {
                    0: "double Excitation_barkToHertz (double "
                },
                argCount: 1,
                preSnippet: " ${0:double Excitation_barkToHertz (double }"
            },
            "Excitation_hertzToBark": {
                name: "",
                class: ["Excitation_hertzToBark"],
                arguments: {
                    0: "double Excitation_hertzToBark (double "
                },
                argCount: 1,
                preSnippet: " ${0:double Excitation_hertzToBark (double }"
            },
            "Excitations": {
                name: "",
                class: ["Excitations"],
                arguments: {
                    0: "Excitations"
                },
                argCount: 1,
                preSnippet: " ${0:Excitations}"
            },
            "Excitations: Append": {
                name: "Append",
                class: ["Excitations"],
                arguments: {},
                argCount: 0,
                preSnippet: "Append"
            },
            "Excitations: To PatternList...": {
                name: "To PatternList...",
                class: ["Excitations"],
                arguments: {
                    0: "Join",
                    1: "Excitation"
                },
                argCount: 2,
                preSnippet: "To PatternList... ${1:Join} ${2:Excitation}"
            }
        },
        methodCount: 7,
        methods: {
            0: "Formula...",
            1: "Get loudness",
            2: "",
            3: "",
            4: "",
            5: "Append",
            6: "To PatternList...",
        }
    },
    "Excitations": {
        praatMethods: {
            "Excitations: Append": {
                name: "Append",
                class: ["Excitations"],
                arguments: {},
                argCount: 0,
                preSnippet: "Append"
            },
            "Excitations: To PatternList...": {
                name: "To PatternList...",
                class: ["Excitations"],
                arguments: {
                    0: "Join",
                    1: "Excitation"
                },
                argCount: 2,
                preSnippet: "To PatternList... ${1:Join} ${2:Excitation}"
            }
        },
        methodCount: 2,
        methods: {
            0: "Append",
            1: "To PatternList...",
        }
    },
    "FFNet": {
        praatMethods: {
            "FFNet & PatternList & ActivationList: Get average costs...": {
                name: "Get average costs...",
                class: ["FFNet", "PatternList"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get average costs..."
            },
            "FFNet & PatternList & ActivationList: Get total costs...": {
                name: "Get total costs...",
                class: ["FFNet", "PatternList"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get total costs..."
            },
            "FFNet & PatternList & Categories: Get average costs...": {
                name: "Get average costs...",
                class: ["FFNet", "PatternList"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get average costs..."
            },
            "FFNet & PatternList & Categories: Get total costs...": {
                name: "Get total costs...",
                class: ["FFNet", "PatternList"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get total costs..."
            },
            "FFNet & PatternList & Categories: Learn slow...": {
                name: "Learn slow...",
                class: ["FFNet", "PatternList"],
                arguments: {
                    0: "PatternList",
                    1: "PatternList",
                    2: "Categories"
                },
                argCount: 3,
                preSnippet: "Learn slow... ${1:PatternList} ${2:PatternList} ${3:Categories}"
            },
            "FFNet & PatternList & Categories: Learn...": {
                name: "Learn...",
                class: ["FFNet", "PatternList"],
                arguments: {
                    0: "Maximum number of epochs",
                    1: "PatternList",
                    2: "Tolerance of minimizer",
                    3: "Cost function"
                },
                argCount: 4,
                preSnippet: "Learn... ${1:Maximum number of epochs} ${2:PatternList} ${3:Tolerance of minimizer} ${4:Cost function}"
            },
            "FFNet & PatternList: To Categories...": {
                name: "To Categories...",
                class: ["FFNet", "PatternList"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Categories..."
            },
            "FFNet: Categories": {
                name: "Categories",
                class: ["FFNet"],
                arguments: {
                    0: "PatternList"
                },
                argCount: 1,
                preSnippet: "Categories ${0:PatternList}"
            },
            "FFNet: Draw cost history...": {
                name: "Draw cost history...",
                class: ["FFNet"],
                arguments: {
                    0: "Iteration range",
                    1: "Cost range",
                    2: "Garnish"
                },
                argCount: 3,
                preSnippet: "Draw cost history... ${1:Iteration range} ${2:Cost range} ${3:Garnish}"
            },
            "FFNet: Draw topology": {
                name: "Draw topology",
                class: ["FFNet"],
                arguments: {},
                argCount: 0,
                preSnippet: "Draw topology"
            },
            "FFNet: Draw weights...": {
                name: "Draw weights...",
                class: ["FFNet"],
                arguments: {
                    0: "Layer number",
                    1: "Garnish"
                },
                argCount: 2,
                preSnippet: "Draw weights... ${1:Layer number} ${2:Garnish}"
            },
            "FFNet: Extract weights...": {
                name: "Extract weights...",
                class: ["FFNet"],
                arguments: {
                    0: "Layer number"
                },
                argCount: 1,
                preSnippet: "Extract weights... ${0:Layer number}"
            },
            "FFNet: Get number of hidden units...": {
                name: "Get number of hidden units...",
                class: ["FFNet"],
                arguments: {
                    0: "Hidden layer number"
                },
                argCount: 1,
                preSnippet: "Get number of hidden units... ${0:Hidden layer number}"
            },
            "FFNet: Get number of hidden weights...": {
                name: "Get number of hidden weights...",
                class: ["FFNet"],
                arguments: {
                    0: "Hidden layer number"
                },
                argCount: 1,
                preSnippet: "Get number of hidden weights... ${0:Hidden layer number}"
            },
            "FFNet: Get number of inputs": {
                name: "Get number of inputs",
                class: ["FFNet"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get number of inputs"
            },
            "FFNet: Get number of outputs": {
                name: "Get number of outputs",
                class: ["FFNet"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get number of outputs"
            },
            "FFNet: Principal components": {
                name: "Principal components",
                class: ["FFNet"],
                arguments: {},
                argCount: 0,
                preSnippet: "Principal components"
            },
            "FFNet: Reset...": {
                name: "Reset...",
                class: ["FFNet"],
                arguments: {
                    0: "Range"
                },
                argCount: 1,
                preSnippet: "Reset... ${0:Range}"
            },
            "FFNet: Select biases...": {
                name: "Select biases...",
                class: ["FFNet"],
                arguments: {
                    0: "Layer number"
                },
                argCount: 1,
                preSnippet: "Select biases... ${0:Layer number}"
            }
        },
        methodCount: 19,
        methods: {
            0: "Get average costs...",
            1: "Get total costs...",
            2: "Get average costs...",
            3: "Get total costs...",
            4: "Learn slow...",
            5: "Learn...",
            6: "To Categories...",
            7: "Categories",
            8: "Draw cost history...",
            9: "Draw topology",
            10: "Draw weights...",
            11: "Extract weights...",
            12: "Get number of hidden units...",
            13: "Get number of hidden weights...",
            14: "Get number of inputs",
            15: "Get number of outputs",
            16: "Principal components",
            17: "Reset...",
            18: "Select biases...",
        }
    },
    "Formant": {
        praatMethods: {
            "Formant & Spectrogram: To IntensityTier...": {
                name: "To IntensityTier...",
                class: ["Formant", "Spectrogram"],
                arguments: {},
                argCount: 0,
                preSnippet: "To IntensityTier..."
            },
            "Formant: Down to FormantGrid": {
                name: "Down to FormantGrid",
                class: ["Formant"],
                arguments: {},
                argCount: 0,
                preSnippet: "Down to FormantGrid"
            },
            "Formant: Draw tracks...": {
                name: "Draw tracks...",
                class: ["Formant"],
                arguments: {
                    0: "From time (s)",
                    1: "To time (s)",
                    2: "To time",
                    3: "Maximum frequency (Hz)",
                    4: "Garnish"
                },
                argCount: 5,
                preSnippet: "Draw tracks... ${1:From time (s)} ${2:To time (s)} ${3:To time} ${4:Maximum frequency (Hz)} ${5:Garnish}"
            },
            "Formant: Formula (bandwidths)...": {
                name: "Formula (bandwidths)...",
                class: ["Formant"],
                arguments: {},
                argCount: 0,
                preSnippet: "Formula (bandwidths)..."
            },
            "Formant: Formula (frequencies)...": {
                name: "Formula (frequencies)...",
                class: ["Formant"],
                arguments: {},
                argCount: 0,
                preSnippet: "Formula (frequencies)..."
            },
            "Formant: Get bandwidth at time...": {
                name: "Get bandwidth at time...",
                class: ["Formant"],
                arguments: {
                    0: "Formant number",
                    1: "Time (s)",
                    2: "Units",
                    3: "hertz"
                },
                argCount: 4,
                preSnippet: "Get bandwidth at time... ${1:Formant number} ${2:Time (s)} ${3:Units} ${4:hertz}"
            },
            "Formant: Get maximum...": {
                name: "Get maximum...",
                class: ["Formant"],
                arguments: {
                    0: "Formant number",
                    1: "From time (s)",
                    2: "To time (s)",
                    3: "To time",
                    4: "Units",
                    5: "Hertz",
                    6: "Interpolation",
                    7: "None"
                },
                argCount: 8,
                preSnippet: "Get maximum... ${1:Formant number} ${2:From time (s)} ${3:To time (s)} ${4:To time} ${5:Units} ${6:Hertz} ${7:Interpolation} ${8:None}"
            },
            "Formant: Get mean...": {
                name: "Get mean...",
                class: ["Formant"],
                arguments: {
                    0: "Formant number",
                    1: "From time (s)",
                    2: "To time (s)",
                    3: "To time",
                    4: "Units",
                    5: "Hertz"
                },
                argCount: 6,
                preSnippet: "Get mean... ${1:Formant number} ${2:From time (s)} ${3:To time (s)} ${4:To time} ${5:Units} ${6:Hertz}"
            },
            "Formant: Get minimum...": {
                name: "Get minimum...",
                class: ["Formant"],
                arguments: {
                    0: "Formant number",
                    1: "From time (s)",
                    2: "To time (s)",
                    3: "To time",
                    4: "Units",
                    5: "Hertz",
                    6: "Interpolation",
                    7: "None"
                },
                argCount: 8,
                preSnippet: "Get minimum... ${1:Formant number} ${2:From time (s)} ${3:To time (s)} ${4:To time} ${5:Units} ${6:Hertz} ${7:Interpolation} ${8:None}"
            },
            "Formant: Get number of formants": {
                name: "Get number of formants",
                class: ["Formant"],
                arguments: {
                    0: "Frame number"
                },
                argCount: 1,
                preSnippet: "Get number of formants ${0:Frame number}"
            },
            "Formant: Get quantile...": {
                name: "Get quantile...",
                class: ["Formant"],
                arguments: {
                    0: "Formant number",
                    1: "From time (s)",
                    2: "To time (s)",
                    3: "To time",
                    4: "Units",
                    5: "Hertz",
                    6: "Quantile",
                    7: "Quantile"
                },
                argCount: 8,
                preSnippet: "Get quantile... ${1:Formant number} ${2:From time (s)} ${3:To time (s)} ${4:To time} ${5:Units} ${6:Hertz} ${7:Quantile} ${8:Quantile}"
            },
            "Formant: Get standard deviation": {
                name: "Get standard deviation",
                class: ["Formant"],
                arguments: {
                    0: "Formant number",
                    1: "From time (s)",
                    2: "To time (s)",
                    3: "To time",
                    4: "Units",
                    5: "Hertz"
                },
                argCount: 6,
                preSnippet: "Get standard deviation ${1:Formant number} ${2:From time (s)} ${3:To time (s)} ${4:To time} ${5:Units} ${6:Hertz}"
            },
            "Formant: Get time of maximum...": {
                name: "Get time of maximum...",
                class: ["Formant"],
                arguments: {
                    0: "Formant number",
                    1: "From time (s)",
                    2: "To time (s)",
                    3: "To time",
                    4: "Units",
                    5: "Hertz",
                    6: "Interpolation",
                    7: "None"
                },
                argCount: 8,
                preSnippet: "Get time of maximum... ${1:Formant number} ${2:From time (s)} ${3:To time (s)} ${4:To time} ${5:Units} ${6:Hertz} ${7:Interpolation} ${8:None}"
            },
            "Formant: Get time of minimum...": {
                name: "Get time of minimum...",
                class: ["Formant"],
                arguments: {
                    0: "Formant number",
                    1: "From time (s)",
                    2: "To time (s)",
                    3: "To time",
                    4: "Units",
                    5: "Hertz",
                    6: "Interpolation",
                    7: "None"
                },
                argCount: 8,
                preSnippet: "Get time of minimum... ${1:Formant number} ${2:From time (s)} ${3:To time (s)} ${4:To time} ${5:Units} ${6:Hertz} ${7:Interpolation} ${8:None}"
            },
            "Formant: Get value at time...": {
                name: "Get value at time...",
                class: ["Formant"],
                arguments: {
                    0: "Formant number",
                    1: "Time (s)",
                    2: "Units)",
                    3: "Hertz",
                    4: "Interpolation",
                    5: "Time"
                },
                argCount: 6,
                preSnippet: "Get value at time... ${1:Formant number} ${2:Time (s)} ${3:Units)} ${4:Hertz} ${5:Interpolation} ${6:Time}"
            },
            "Formant: List formant slope...": {
                name: "List formant slope...",
                class: ["Formant"],
                arguments: {
                    0: "Query",
                    1: "Formant number",
                    2: "Time range (s)",
                    3: "Slope curve",
                    4: "Exponential plus constant",
                    5: "exponential plus constant",
                    6: "1. Average slope (Hz / s)",
                    7: "2. <i>R</i><sup>2</sup>",
                    8: "3. <i>F</i><sub>start</sub>",
                    9: "4. <i>F</i><sub>end</sub>",
                    10: "5. <i>a</i>",
                    11: "6. <i>b</i>",
                    12: "7. <i>c</i>",
                    13: "8. <i>d</i>"
                },
                argCount: 14,
                preSnippet: "List formant slope... ${1:Query} ${2:Formant number} ${3:Time range (s)} ${4:Slope curve} ${5:Exponential plus constant} ${6:exponential plus constant} ${7:1. Average slope (Hz / s)} ${8:2. <i>R</i><sup>2</sup>} ${9:3. <i>F</i><sub>start</sub>} ${10:4. <i>F</i><sub>end</sub>} ${11:5. <i>a</i>} ${12:6. <i>b</i>} ${13:7. <i>c</i>} ${14:8. <i>d</i>}"
            },
            "Formant: Speckle...": {
                name: "Speckle...",
                class: ["Formant"],
                arguments: {
                    0: "From time (s)",
                    1: "To time (s)",
                    2: "To time",
                    3: "Maximum frequency (Hz)",
                    4: "Dynamic range (dB)",
                    5: "Garnish"
                },
                argCount: 6,
                preSnippet: "Speckle... ${1:From time (s)} ${2:To time (s)} ${3:To time} ${4:Maximum frequency (Hz)} ${5:Dynamic range (dB)} ${6:Garnish}"
            },
            "Formant: Track...": {
                name: "Track...",
                class: ["Formant"],
                arguments: {
                    0: "Number of tracks",
                    1: "Reference F1 (Hz)",
                    2: "Reference F2 (Hz)",
                    3: "Reference F3 (Hz)",
                    4: "Reference F4 (Hz)",
                    5: "Reference F5 (Hz)",
                    6: "Frequency cost (per kiloHertz)",
                    7: "Frequency cost",
                    8: "Bandwidth cost",
                    9: "Bandwidth cost",
                    10: "Transition cost (per octave)",
                    11: "Transition cost"
                },
                argCount: 12,
                preSnippet: "Track... ${1:Number of tracks} ${2:Reference F1 (Hz)} ${3:Reference F2 (Hz)} ${4:Reference F3 (Hz)} ${5:Reference F4 (Hz)} ${6:Reference F5 (Hz)} ${7:Frequency cost (per kiloHertz)} ${8:Frequency cost} ${9:Bandwidth cost} ${10:Bandwidth cost} ${11:Transition cost (per octave)} ${12:Transition cost}"
            },
            "FormantFilter": {
                name: "",
                class: ["FormantFilter"],
                arguments: {
                    0: "deprecated"
                },
                argCount: 1,
                preSnippet: " ${0:deprecated}"
            },
            "FormantGrid": {
                name: "",
                class: ["FormantGrid"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "FormantGrid: Add bandwidth point...": {
                name: "Add bandwidth point...",
                class: ["FormantGrid"],
                arguments: {
                    0: "Formant number",
                    1: "Time (s)",
                    2: "Bandwidth (Hz)",
                    3: "Formant number"
                },
                argCount: 4,
                preSnippet: "Add bandwidth point... ${1:Formant number} ${2:Time (s)} ${3:Bandwidth (Hz)} ${4:Formant number}"
            },
            "FormantGrid: Add formant point...": {
                name: "Add formant point...",
                class: ["FormantGrid"],
                arguments: {
                    0: "Formant number",
                    1: "Time (s)",
                    2: "Frequency (Hz)",
                    3: "Formant number"
                },
                argCount: 4,
                preSnippet: "Add formant point... ${1:Formant number} ${2:Time (s)} ${3:Frequency (Hz)} ${4:Formant number}"
            },
            "FormantGrid: Remove bandwidth points between...": {
                name: "Remove bandwidth points between...",
                class: ["FormantGrid"],
                arguments: {
                    0: "Formant number",
                    1: "From time (s))",
                    2: "To time (s)",
                    3: "Formant number"
                },
                argCount: 4,
                preSnippet: "Remove bandwidth points between... ${1:Formant number} ${2:From time (s))} ${3:To time (s)} ${4:Formant number}"
            },
            "FormantGrid: Remove formant points between...": {
                name: "Remove formant points between...",
                class: ["FormantGrid"],
                arguments: {
                    0: "From time (s))",
                    1: "To time (s)",
                    2: "Formant number"
                },
                argCount: 3,
                preSnippet: "Remove formant points between... ${1:From time (s))} ${2:To time (s)} ${3:Formant number}"
            },
            "FormantPath": {
                name: "",
                class: ["FormantPath"],
                arguments: {
                    0: "FormantPath",
                    1: "same"
                },
                argCount: 2,
                preSnippet: " ${1:FormantPath} ${2:same}"
            },
            "FormantModeler: Get residual sum of squares...": {
                name: "Get residual sum of squares...",
                class: ["FormantModeler"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get residual sum of squares..."
            },
            "FormantPath: Down to Table (optimal interval)...": {
                name: "Down to Table (optimal interval)...",
                class: ["FormantPath"],
                arguments: {},
                argCount: 0,
                preSnippet: "Down to Table (optimal interval)..."
            },
            "FormantPath: Down to Table (stresses)...": {
                name: "Down to Table (stresses)...",
                class: ["FormantPath"],
                arguments: {},
                argCount: 0,
                preSnippet: "Down to Table (stresses)..."
            },
            "FormantPathEditor": {
                name: "",
                class: ["FormantPathEditor"],
                arguments: {
                    0: "View &amp; Edit"
                },
                argCount: 1,
                preSnippet: " ${0:View &amp; Edit}"
            },
            "Formants & LPC menu": {
                name: "",
                class: ["Formants", "LPC menu"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "Formants: Extract smoothest part (constrained)...": {
                name: "Extract smoothest part (constrained)...",
                class: ["Formants"],
                arguments: {
                    0: "Minimum F1 (Hz)",
                    1: "Maximum F1 (Hz)",
                    2: "Minimum F2 (Hz)",
                    3: "Maximum F2 (Hz)",
                    4: "Minimum F3 (Hz)"
                },
                argCount: 5,
                preSnippet: "Extract smoothest part (constrained)... ${1:Minimum F1 (Hz)} ${2:Maximum F1 (Hz)} ${3:Minimum F2 (Hz)} ${4:Maximum F2 (Hz)} ${5:Minimum F3 (Hz)}"
            },
            "Formants: Extract smoothest part...": {
                name: "Extract smoothest part...",
                class: ["Formants"],
                arguments: {
                    0: "Time range (s)",
                    1: "Fitter formant range",
                    2: "Order of polynomials",
                    3: "Use bandwidths to model formant tracks",
                    4: "Bandwidths for stress test"
                },
                argCount: 5,
                preSnippet: "Extract smoothest part... ${1:Time range (s)} ${2:Fitter formant range} ${3:Order of polynomials} ${4:Use bandwidths to model formant tracks} ${5:Bandwidths for stress test}"
            }
        },
        methodCount: 32,
        methods: {
            0: "To IntensityTier...",
            1: "Down to FormantGrid",
            2: "Draw tracks...",
            3: "Formula (bandwidths)...",
            4: "Formula (frequencies)...",
            5: "Get bandwidth at time...",
            6: "Get maximum...",
            7: "Get mean...",
            8: "Get minimum...",
            9: "Get number of formants",
            10: "Get quantile...",
            11: "Get standard deviation",
            12: "Get time of maximum...",
            13: "Get time of minimum...",
            14: "Get value at time...",
            15: "List formant slope...",
            16: "Speckle...",
            17: "Track...",
            18: "",
            19: "",
            20: "Add bandwidth point...",
            21: "Add formant point...",
            22: "Remove bandwidth points between...",
            23: "Remove formant points between...",
            24: "",
            25: "Get residual sum of squares...",
            26: "Down to Table (optimal interval)...",
            27: "Down to Table (stresses)...",
            28: "",
            29: "",
            30: "Extract smoothest part (constrained)...",
            31: "Extract smoothest part...",
        }
    },
    "FormantGrid": {
        praatMethods: {
            "FormantGrid: Add bandwidth point...": {
                name: "Add bandwidth point...",
                class: ["FormantGrid"],
                arguments: {
                    0: "Formant number",
                    1: "Time (s)",
                    2: "Bandwidth (Hz)",
                    3: "Formant number"
                },
                argCount: 4,
                preSnippet: "Add bandwidth point... ${1:Formant number} ${2:Time (s)} ${3:Bandwidth (Hz)} ${4:Formant number}"
            },
            "FormantGrid: Add formant point...": {
                name: "Add formant point...",
                class: ["FormantGrid"],
                arguments: {
                    0: "Formant number",
                    1: "Time (s)",
                    2: "Frequency (Hz)",
                    3: "Formant number"
                },
                argCount: 4,
                preSnippet: "Add formant point... ${1:Formant number} ${2:Time (s)} ${3:Frequency (Hz)} ${4:Formant number}"
            },
            "FormantGrid: Remove bandwidth points between...": {
                name: "Remove bandwidth points between...",
                class: ["FormantGrid"],
                arguments: {
                    0: "Formant number",
                    1: "From time (s))",
                    2: "To time (s)",
                    3: "Formant number"
                },
                argCount: 4,
                preSnippet: "Remove bandwidth points between... ${1:Formant number} ${2:From time (s))} ${3:To time (s)} ${4:Formant number}"
            },
            "FormantGrid: Remove formant points between...": {
                name: "Remove formant points between...",
                class: ["FormantGrid"],
                arguments: {
                    0: "From time (s))",
                    1: "To time (s)",
                    2: "Formant number"
                },
                argCount: 3,
                preSnippet: "Remove formant points between... ${1:From time (s))} ${2:To time (s)} ${3:Formant number}"
            }
        },
        methodCount: 4,
        methods: {
            0: "Add bandwidth point...",
            1: "Add formant point...",
            2: "Remove bandwidth points between...",
            3: "Remove formant points between...",
        }
    },
    "Harmonicity": {
        praatMethods: {
            "Harmonicity: Formula...": {
                name: "Formula...",
                class: ["Harmonicity"],
                arguments: {},
                argCount: 0,
                preSnippet: "Formula..."
            },
            "Harmonicity: Get maximum...": {
                name: "Get maximum...",
                class: ["Harmonicity"],
                arguments: {
                    0: "From time (s)",
                    1: "To time (s)",
                    2: "To time",
                    3: "Interpolation",
                    4: "none"
                },
                argCount: 5,
                preSnippet: "Get maximum... ${1:From time (s)} ${2:To time (s)} ${3:To time} ${4:Interpolation} ${5:none}"
            },
            "Harmonicity: Get mean...": {
                name: "Get mean...",
                class: ["Harmonicity"],
                arguments: {
                    0: "Time range (s)"
                },
                argCount: 1,
                preSnippet: "Get mean... ${0:Time range (s)}"
            },
            "Harmonicity: Get minimum...": {
                name: "Get minimum...",
                class: ["Harmonicity"],
                arguments: {
                    0: "Time range (s)",
                    1: "Interpolation",
                    2: "none"
                },
                argCount: 3,
                preSnippet: "Get minimum... ${1:Time range (s)} ${2:Interpolation} ${3:none}"
            },
            "Harmonicity: Get standard deviation...": {
                name: "Get standard deviation...",
                class: ["Harmonicity"],
                arguments: {
                    0: "Time range (s)"
                },
                argCount: 1,
                preSnippet: "Get standard deviation... ${0:Time range (s)}"
            },
            "Harmonicity: Get time of maximum...": {
                name: "Get time of maximum...",
                class: ["Harmonicity"],
                arguments: {
                    0: "Time range (s)",
                    1: "Interpolation",
                    2: "none"
                },
                argCount: 3,
                preSnippet: "Get time of maximum... ${1:Time range (s)} ${2:Interpolation} ${3:none}"
            },
            "Harmonicity: Get time of minimum...": {
                name: "Get time of minimum...",
                class: ["Harmonicity"],
                arguments: {
                    0: "Time range (s)",
                    1: "Interpolation",
                    2: "none"
                },
                argCount: 3,
                preSnippet: "Get time of minimum... ${1:Time range (s)} ${2:Interpolation} ${3:none}"
            },
            "Harmonicity: Get value at time...": {
                name: "Get value at time...",
                class: ["Harmonicity"],
                arguments: {
                    0: "Time (s)",
                    1: "Interpolation"
                },
                argCount: 2,
                preSnippet: "Get value at time... ${1:Time (s)} ${2:Interpolation}"
            },
            "Harmonicity: Get value in frame...": {
                name: "Get value in frame...",
                class: ["Harmonicity"],
                arguments: {
                    0: "Frame number"
                },
                argCount: 1,
                preSnippet: "Get value in frame... ${0:Frame number}"
            }
        },
        methodCount: 9,
        methods: {
            0: "Formula...",
            1: "Get maximum...",
            2: "Get mean...",
            3: "Get minimum...",
            4: "Get standard deviation...",
            5: "Get time of maximum...",
            6: "Get time of minimum...",
            7: "Get value at time...",
            8: "Get value in frame...",
        }
    },
    "Intensity": {
        praatMethods: {
            "Intensity & PointProcess: To IntensityTier...": {
                name: "To IntensityTier...",
                class: ["Intensity", "PointProcess"],
                arguments: {},
                argCount: 0,
                preSnippet: "To IntensityTier..."
            },
            "Intensity: Get maximum...": {
                name: "Get maximum...",
                class: ["Intensity"],
                arguments: {
                    0: "Time range (s)",
                    1: "none"
                },
                argCount: 2,
                preSnippet: "Get maximum... ${1:Time range (s)} ${2:none}"
            },
            "Intensity: Get mean...": {
                name: "Get mean...",
                class: ["Intensity"],
                arguments: {
                    0: "Time range (s)",
                    1: "Averaging method",
                    2: "energy"
                },
                argCount: 3,
                preSnippet: "Get mean... ${1:Time range (s)} ${2:Averaging method} ${3:energy}"
            },
            "Intensity: Get minimum...": {
                name: "Get minimum...",
                class: ["Intensity"],
                arguments: {
                    0: "Time range (s)",
                    1: "Interpolation",
                    2: "none"
                },
                argCount: 3,
                preSnippet: "Get minimum... ${1:Time range (s)} ${2:Interpolation} ${3:none}"
            },
            "Intensity: Get standard deviation...": {
                name: "Get standard deviation...",
                class: ["Intensity"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get standard deviation..."
            },
            "Intensity: Get time of maximum...": {
                name: "Get time of maximum...",
                class: ["Intensity"],
                arguments: {
                    0: "none"
                },
                argCount: 1,
                preSnippet: "Get time of maximum... ${0:none}"
            },
            "Intensity: Get time of minimum...": {
                name: "Get time of minimum...",
                class: ["Intensity"],
                arguments: {
                    0: "Time range (s)",
                    1: "Interpolation",
                    2: "none"
                },
                argCount: 3,
                preSnippet: "Get time of minimum... ${1:Time range (s)} ${2:Interpolation} ${3:none}"
            },
            "Intensity: Get value at time...": {
                name: "Get value at time...",
                class: ["Intensity"],
                arguments: {
                    0: "Time (s)",
                    1: "Interpolation"
                },
                argCount: 2,
                preSnippet: "Get value at time... ${1:Time (s)} ${2:Interpolation}"
            },
            "Intensity: Get value in frame...": {
                name: "Get value in frame...",
                class: ["Intensity"],
                arguments: {
                    0: "Frame number"
                },
                argCount: 1,
                preSnippet: "Get value in frame... ${0:Frame number}"
            },
            "Intensity: To IntensityTier": {
                name: "To IntensityTier",
                class: ["Intensity"],
                arguments: {},
                argCount: 0,
                preSnippet: "To IntensityTier"
            },
            "Intensity: To TextGrid (silences)...": {
                name: "To TextGrid (silences)...",
                class: ["Intensity"],
                arguments: {
                    0: "Silence threshold (dB)",
                    1: "Minimum silent interval (s)",
                    2: "Minimum sounding interval (s)",
                    3: "not",
                    4: "Silent interval label",
                    5: "Sounding interval label"
                },
                argCount: 6,
                preSnippet: "To TextGrid (silences)... ${1:Silence threshold (dB)} ${2:Minimum silent interval (s)} ${3:Minimum sounding interval (s)} ${4:not} ${5:Silent interval label} ${6:Sounding interval label}"
            },
            "IntensityTier": {
                name: "",
                class: ["IntensityTier"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "IntensityTier: Add point...": {
                name: "Add point...",
                class: ["IntensityTier"],
                arguments: {
                    0: "Time (s)",
                    1: "Intensity (dB)"
                },
                argCount: 2,
                preSnippet: "Add point... ${1:Time (s)} ${2:Intensity (dB)}"
            },
            "IntensityTier: Down to PointProcess": {
                name: "Down to PointProcess",
                class: ["IntensityTier"],
                arguments: {},
                argCount: 0,
                preSnippet: "Down to PointProcess"
            },
            "IntensityTierEditor": {
                name: "",
                class: ["IntensityTierEditor"],
                arguments: {
                    0: "View &amp; Edit"
                },
                argCount: 1,
                preSnippet: " ${0:View &amp; Edit}"
            }
        },
        methodCount: 15,
        methods: {
            0: "To IntensityTier...",
            1: "Get maximum...",
            2: "Get mean...",
            3: "Get minimum...",
            4: "Get standard deviation...",
            5: "Get time of maximum...",
            6: "Get time of minimum...",
            7: "Get value at time...",
            8: "Get value in frame...",
            9: "To IntensityTier",
            10: "To TextGrid (silences)...",
            11: "",
            12: "Add point...",
            13: "Down to PointProcess",
            14: "",
        }
    },
    "IntensityTier": {
        praatMethods: {
            "IntensityTier: Add point...": {
                name: "Add point...",
                class: ["IntensityTier"],
                arguments: {
                    0: "Time (s)",
                    1: "Intensity (dB)"
                },
                argCount: 2,
                preSnippet: "Add point... ${1:Time (s)} ${2:Intensity (dB)}"
            },
            "IntensityTier: Down to PointProcess": {
                name: "Down to PointProcess",
                class: ["IntensityTier"],
                arguments: {},
                argCount: 0,
                preSnippet: "Down to PointProcess"
            },
            "IntensityTierEditor": {
                name: "",
                class: ["IntensityTierEditor"],
                arguments: {
                    0: "View &amp; Edit"
                },
                argCount: 1,
                preSnippet: " ${0:View &amp; Edit}"
            }
        },
        methodCount: 3,
        methods: {
            0: "Add point...",
            1: "Down to PointProcess",
            2: "",
        }
    },
    "LegendreSeries": {
        praatMethods: {
            "LegendreSeries: To Polynomial": {
                name: "To Polynomial",
                class: ["LegendreSeries"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Polynomial"
            }
        },
        methodCount: 1,
        methods: {
            0: "To Polynomial"
        }
    },
    "LongSound": {
        praatMethods: {
            "LongSound: To TextGrid...": {
                name: "To TextGrid...",
                class: ["LongSound"],
                arguments: {},
                argCount: 0,
                preSnippet: "To TextGrid..."
            },
            "LongSound: View": {
                name: "View",
                class: ["LongSound"],
                arguments: {},
                argCount: 0,
                preSnippet: "View"
            },
            "LongSoundEditor": {
                name: "",
                class: ["LongSoundEditor"],
                arguments: {
                    0: "LongSound prefs"
                },
                argCount: 1,
                preSnippet: " ${0:LongSound prefs}"
            }
        },
        methodCount: 3,
        methods: {
            0: "To TextGrid...",
            1: "View",
            2: "",
        }
    },
    "LPC": {
        praatMethods: {
            "LPC & Sound: Filter (inverse)": {
                name: "Filter (inverse)",
                class: ["LPC", "Sound"],
                arguments: {
                    0: "E"
                },
                argCount: 1,
                preSnippet: "Filter (inverse) ${0:E}"
            },
            "LPC & Sound: Filter (inverse) with filter at time...": {
                name: "Filter (inverse) with filter at time...",
                class: ["LPC", "Sound"],
                arguments: {
                    0: "Channel",
                    1: "Use filter at time (s)"
                },
                argCount: 2,
                preSnippet: "Filter (inverse) with filter at time... ${1:Channel} ${2:Use filter at time (s)}"
            },
            "LPC & Sound: Filter with filter at time...": {
                name: "Filter with filter at time...",
                class: ["LPC", "Sound"],
                arguments: {
                    0: "Channel",
                    1: "Use filter at time (s)"
                },
                argCount: 2,
                preSnippet: "Filter with filter at time... ${1:Channel} ${2:Use filter at time (s)}"
            },
            "LPC & Sound: Filter...": {
                name: "Filter...",
                class: ["LPC", "Sound"],
                arguments: {
                    0: "Use LPC gain",
                    1: "Z"
                },
                argCount: 2,
                preSnippet: "Filter... ${1:Use LPC gain} ${2:Z}"
            },
            "LPC: Draw gain...": {
                name: "Draw gain...",
                class: ["LPC"],
                arguments: {
                    0: "From time (s)",
                    1: "Minimum gain",
                    2: "Garnish"
                },
                argCount: 3,
                preSnippet: "Draw gain... ${1:From time (s)} ${2:Minimum gain} ${3:Garnish}"
            },
            "LPC: Draw poles...": {
                name: "Draw poles...",
                class: ["LPC"],
                arguments: {
                    0: "Time (s)"
                },
                argCount: 1,
                preSnippet: "Draw poles... ${0:Time (s)}"
            },
            "LPC: To Formant": {
                name: "To Formant",
                class: ["LPC"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Formant"
            },
            "LPC: To LFCC...": {
                name: "To LFCC...",
                class: ["LPC"],
                arguments: {},
                argCount: 0,
                preSnippet: "To LFCC..."
            },
            "LPC: To Matrix": {
                name: "To Matrix",
                class: ["LPC"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Matrix"
            },
            "LPC: To Polynomial (slice)...": {
                name: "To Polynomial (slice)...",
                class: ["LPC"],
                arguments: {
                    0: "Time (s)"
                },
                argCount: 1,
                preSnippet: "To Polynomial (slice)... ${0:Time (s)}"
            },
            "LPC: To Spectrogram...": {
                name: "To Spectrogram...",
                class: ["LPC"],
                arguments: {
                    0: "Minimum frequency resolution (Hz)",
                    1: "Bandwidth reduction (Hz)",
                    2: "De-emphasis frequency (Hz)"
                },
                argCount: 3,
                preSnippet: "To Spectrogram... ${1:Minimum frequency resolution (Hz)} ${2:Bandwidth reduction (Hz)} ${3:De-emphasis frequency (Hz)}"
            },
            "LPC: To Spectrum (slice)...": {
                name: "To Spectrum (slice)...",
                class: ["LPC"],
                arguments: {
                    0: "Time (s)",
                    1: "Minimum frequency resolution (Hz)",
                    2: "Bandwidth reduction (Hz)",
                    3: "De-emphasis frequency (Hz)"
                },
                argCount: 4,
                preSnippet: "To Spectrum (slice)... ${1:Time (s)} ${2:Minimum frequency resolution (Hz)} ${3:Bandwidth reduction (Hz)} ${4:De-emphasis frequency (Hz)}"
            },
            "LPC: To VocalTract (slice)...": {
                name: "To VocalTract (slice)...",
                class: ["LPC"],
                arguments: {
                    0: "Time (s)",
                    1: "Length (m)"
                },
                argCount: 2,
                preSnippet: "To VocalTract (slice)... ${1:Time (s)} ${2:Length (m)}"
            }
        },
        methodCount: 13,
        methods: {
            0: "Filter (inverse)",
            1: "Filter (inverse) with filter at time...",
            2: "Filter with filter at time...",
            3: "Filter...",
            4: "Draw gain...",
            5: "Draw poles...",
            6: "To Formant",
            7: "To LFCC...",
            8: "To Matrix",
            9: "To Polynomial (slice)...",
            10: "To Spectrogram...",
            11: "To Spectrum (slice)...",
            12: "To VocalTract (slice)...",
        }
    },
    "Ltas": {
        praatMethods: {
            "Ltas: Get bin number from frequency...": {
                name: "Get bin number from frequency...",
                class: ["Ltas"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get bin number from frequency..."
            },
            "Ltas: Get bin width": {
                name: "Get bin width",
                class: ["Ltas"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get bin width"
            },
            "Ltas: Get frequency from bin number...": {
                name: "Get frequency from bin number...",
                class: ["Ltas"],
                arguments: {
                    0: "Bin number"
                },
                argCount: 1,
                preSnippet: "Get frequency from bin number... ${0:Bin number}"
            },
            "Ltas: Get frequency of maximum...": {
                name: "Get frequency of maximum...",
                class: ["Ltas"],
                arguments: {
                    0: "From frequency (Hz)",
                    1: "To frequency (Hz)",
                    2: "To frequency",
                    3: "Interpolation",
                    4: "none"
                },
                argCount: 5,
                preSnippet: "Get frequency of maximum... ${1:From frequency (Hz)} ${2:To frequency (Hz)} ${3:To frequency} ${4:Interpolation} ${5:none}"
            },
            "Ltas: Get frequency of minimum...": {
                name: "Get frequency of minimum...",
                class: ["Ltas"],
                arguments: {
                    0: "Time range (s)",
                    1: "none"
                },
                argCount: 2,
                preSnippet: "Get frequency of minimum... ${1:Time range (s)} ${2:none}"
            },
            "Ltas: Get highest frequency": {
                name: "Get highest frequency",
                class: ["Ltas"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get highest frequency"
            },
            "Ltas: Get lowest frequency": {
                name: "Get lowest frequency",
                class: ["Ltas"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get lowest frequency"
            },
            "Ltas: Get maximum...": {
                name: "Get maximum...",
                class: ["Ltas"],
                arguments: {
                    0: "From frequency (Hz))",
                    1: "To frequency (Hz)",
                    2: "none"
                },
                argCount: 3,
                preSnippet: "Get maximum... ${1:From frequency (Hz))} ${2:To frequency (Hz)} ${3:none}"
            },
            "Ltas: Get mean...": {
                name: "Get mean...",
                class: ["Ltas"],
                arguments: {
                    0: "From frequency (Hz))",
                    1: "To frequency (Hz)",
                    2: "To frequency"
                },
                argCount: 3,
                preSnippet: "Get mean... ${1:From frequency (Hz))} ${2:To frequency (Hz)} ${3:To frequency}"
            },
            "Ltas: Get minimum...": {
                name: "Get minimum...",
                class: ["Ltas"],
                arguments: {
                    0: "From frequency (Hz))",
                    1: "To frequency (Hz)",
                    2: "To frequency",
                    3: "none"
                },
                argCount: 4,
                preSnippet: "Get minimum... ${1:From frequency (Hz))} ${2:To frequency (Hz)} ${3:To frequency} ${4:none}"
            },
            "Ltas: Get number of bins": {
                name: "Get number of bins",
                class: ["Ltas"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get number of bins"
            },
            "Ltas: Get standard deviation...": {
                name: "Get standard deviation...",
                class: ["Ltas"],
                arguments: {
                    0: "From frequency (Hz))",
                    1: "To frequency (Hz)",
                    2: "To frequency"
                },
                argCount: 3,
                preSnippet: "Get standard deviation... ${1:From frequency (Hz))} ${2:To frequency (Hz)} ${3:To frequency}"
            },
            "Ltas: Get value at frequency...": {
                name: "Get value at frequency...",
                class: ["Ltas"],
                arguments: {
                    0: "Frequency (Hz)",
                    1: "None"
                },
                argCount: 2,
                preSnippet: "Get value at frequency... ${1:Frequency (Hz)} ${2:None}"
            },
            "Ltas: Get value in bin...": {
                name: "Get value in bin...",
                class: ["Ltas"],
                arguments: {
                    0: "Bin number"
                },
                argCount: 1,
                preSnippet: "Get value in bin... ${0:Bin number}"
            }
        },
        methodCount: 14,
        methods: {
            0: "Get bin number from frequency...",
            1: "Get bin width",
            2: "Get frequency from bin number...",
            3: "Get frequency of maximum...",
            4: "Get frequency of minimum...",
            5: "Get highest frequency",
            6: "Get lowest frequency",
            7: "Get maximum...",
            8: "Get mean...",
            9: "Get minimum...",
            10: "Get number of bins",
            11: "Get standard deviation...",
            12: "Get value at frequency...",
            13: "Get value in bin...",
        }
    },
    "Manipulation": {
        praatMethods: {
            "Manipulation: Extract duration tier": {
                name: "Extract duration tier",
                class: ["Manipulation"],
                arguments: {},
                argCount: 0,
                preSnippet: "Extract duration tier"
            },
            "Manipulation: Extract original sound": {
                name: "Extract original sound",
                class: ["Manipulation"],
                arguments: {},
                argCount: 0,
                preSnippet: "Extract original sound"
            },
            "Manipulation: Extract pitch tier": {
                name: "Extract pitch tier",
                class: ["Manipulation"],
                arguments: {},
                argCount: 0,
                preSnippet: "Extract pitch tier"
            },
            "Manipulation: Extract pulses": {
                name: "Extract pulses",
                class: ["Manipulation"],
                arguments: {},
                argCount: 0,
                preSnippet: "Extract pulses"
            },
            "Manipulation: Get resynthesis (overlap-add)": {
                name: "Get resynthesis (overlap-add)",
                class: ["Manipulation"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get resynthesis (overlap-add)"
            },
            "Manipulation: Play (overlap-add)": {
                name: "Play (overlap-add)",
                class: ["Manipulation"],
                arguments: {},
                argCount: 0,
                preSnippet: "Play (overlap-add)"
            },
            "Manipulation: Replace duration tier": {
                name: "Replace duration tier",
                class: ["Manipulation"],
                arguments: {
                    0: "Replace duration tier"
                },
                argCount: 1,
                preSnippet: "Replace duration tier ${0:Replace duration tier}"
            },
            "Manipulation: Replace original sound": {
                name: "Replace original sound",
                class: ["Manipulation"],
                arguments: {},
                argCount: 0,
                preSnippet: "Replace original sound"
            },
            "Manipulation: Replace pitch tier": {
                name: "Replace pitch tier",
                class: ["Manipulation"],
                arguments: {
                    0: "Replace pitch tier"
                },
                argCount: 1,
                preSnippet: "Replace pitch tier ${0:Replace pitch tier}"
            },
            "Manipulation: Replace pulses": {
                name: "Replace pulses",
                class: ["Manipulation"],
                arguments: {},
                argCount: 0,
                preSnippet: "Replace pulses"
            },
            "ManipulationEditor": {
                name: "",
                class: ["ManipulationEditor"],
                arguments: {
                    0: "Synth",
                    1: "Shift-click",
                    2: "click",
                    3: "Remove pulse(s)",
                    4: "click",
                    5: "click",
                    6: "Remove pitch point(s)",
                    7: "Shift-drag",
                    8: "Only vertical",
                    9: "Stylize"
                },
                argCount: 10,
                preSnippet: " ${1:Synth} ${2:Shift-click} ${3:click} ${4:Remove pulse(s)} ${5:click} ${6:click} ${7:Remove pitch point(s)} ${8:Shift-drag} ${9:Only vertical} ${10:Stylize}"
            }
        },
        methodCount: 11,
        methods: {
            0: "Extract duration tier",
            1: "Extract original sound",
            2: "Extract pitch tier",
            3: "Extract pulses",
            4: "Get resynthesis (overlap-add)",
            5: "Play (overlap-add)",
            6: "Replace duration tier",
            7: "Replace original sound",
            8: "Replace pitch tier",
            9: "Replace pulses",
            10: "",
        }
    },
    "Matrix": {
        praatMethods: {
            "Matrix: Draw as squares...": {
                name: "Draw as squares...",
                class: ["Matrix"],
                arguments: {
                    0: "Xmin",
                    1: "Xmax",
                    2: "Ymin",
                    3: "Ymax",
                    4: "Garnish"
                },
                argCount: 5,
                preSnippet: "Draw as squares... ${1:Xmin} ${2:Xmax} ${3:Ymin} ${4:Ymax} ${5:Garnish}"
            },
            "Matrix: Draw distribution...": {
                name: "Draw distribution...",
                class: ["Matrix"],
                arguments: {
                    0: "Horizontal range",
                    1: "Minimum value",
                    2: "Number of bins",
                    3: "Minimum frequency"
                },
                argCount: 4,
                preSnippet: "Draw distribution... ${1:Horizontal range} ${2:Minimum value} ${3:Number of bins} ${4:Minimum frequency}"
            },
            "Matrix: Formula...": {
                name: "Formula...",
                class: ["Matrix"],
                arguments: {},
                argCount: 0,
                preSnippet: "Formula..."
            },
            "Matrix: Paint cells...": {
                name: "Paint cells...",
                class: ["Matrix"],
                arguments: {},
                argCount: 0,
                preSnippet: "Paint cells..."
            },
            "Matrix: Set value...": {
                name: "Set value...",
                class: ["Matrix"],
                arguments: {
                    0: "Row number",
                    1: "Column number",
                    2: "New value"
                },
                argCount: 3,
                preSnippet: "Set value... ${1:Row number} ${2:Column number} ${3:New value}"
            },
            "Matrix: Solve equation...": {
                name: "Solve equation...",
                class: ["Matrix"],
                arguments: {
                    0: "A",
                    1: "A"
                },
                argCount: 2,
                preSnippet: "Solve equation... ${1:A} ${2:A}"
            },
            "Matrix: To NMF (ALS)...": {
                name: "To NMF (ALS)...",
                class: ["Matrix"],
                arguments: {},
                argCount: 0,
                preSnippet: "To NMF (ALS)..."
            },
            "Matrix: To NMF (IS)...": {
                name: "To NMF (IS)...",
                class: ["Matrix"],
                arguments: {},
                argCount: 0,
                preSnippet: "To NMF (IS)..."
            },
            "Matrix: To NMF (m.u.)...": {
                name: "To NMF (m.u.)...",
                class: ["Matrix"],
                arguments: {},
                argCount: 0,
                preSnippet: "To NMF (m.u.)..."
            },
            "Matrix: To TableOfReal": {
                name: "To TableOfReal",
                class: ["Matrix"],
                arguments: {
                    0: "Cast"
                },
                argCount: 1,
                preSnippet: "To TableOfReal ${0:Cast}"
            }
        },
        methodCount: 10,
        methods: {
            0: "Draw as squares...",
            1: "Draw distribution...",
            2: "Formula...",
            3: "Paint cells...",
            4: "Set value...",
            5: "Solve equation...",
            6: "To NMF (ALS)...",
            7: "To NMF (IS)...",
            8: "To NMF (m.u.)...",
            9: "To TableOfReal",
        }
    },
    "OT": {
        praatMethods: {
            "OT learning": {
                name: "",
                class: ["OT learning"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "OT learning 1. Kinds of grammars": {
                name: "",
                class: ["OT learning 1. Kinds of grammars"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "OT learning 2. The grammar": {
                name: "",
                class: ["OT learning 2. The grammar"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "OT learning 2.1. Viewing a grammar": {
                name: "",
                class: ["OT learning 2.1. Viewing a grammar"],
                arguments: {
                    0: "Create NoCoda grammar",
                    1: "disharmony</i>"
                },
                argCount: 2,
                preSnippet: " ${1:Create NoCoda grammar} ${2:disharmony</i>}"
            },
            "OT learning 2.2. Inside the grammar": {
                name: "",
                class: ["OT learning 2.2. Inside the grammar"],
                arguments: {
                    0: "Save",
                    1: "Inspect",
                    2: "Open"
                },
                argCount: 3,
                preSnippet: " ${1:Save} ${2:Inspect} ${3:Open}"
            },
            "OT learning 2.3. Defining your own grammar": {
                name: "",
                class: ["OT learning 2.3. Defining your own grammar"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "OT learning 2.4. Evaluation": {
                name: "",
                class: ["OT learning 2.4. Evaluation"],
                arguments: {
                    0: "evaluation</i>",
                    1: "Evaluate (zero noise)",
                    2: "Evaluate (noise 2.0)",
                    3: "Evaluate..."
                },
                argCount: 4,
                preSnippet: " ${1:evaluation</i>} ${2:Evaluate (zero noise)} ${3:Evaluate (noise 2.0)} ${4:Evaluate...}"
            },
            "OT learning 2.5. Editing a grammar": {
                name: "",
                class: ["OT learning 2.5. Editing a grammar"],
                arguments: {
                    0: "Edit ranking...",
                    1: "Evaluate (noise 2.0)"
                },
                argCount: 2,
                preSnippet: " ${1:Edit ranking...} ${2:Evaluate (noise 2.0)}"
            },
            "OT learning 2.6. Variable output": {
                name: "",
                class: ["OT learning 2.6. Variable output"],
                arguments: {
                    0: "Evaluate (noise 2.0)",
                    1: "Create place assimilation grammar"
                },
                argCount: 2,
                preSnippet: " ${1:Evaluate (noise 2.0)} ${2:Create place assimilation grammar}"
            },
            "OT learning 2.7. Tableau pictures": {
                name: "",
                class: ["OT learning 2.7. Tableau pictures"],
                arguments: {
                    0: "Draw tableau..."
                },
                argCount: 1,
                preSnippet: " ${0:Draw tableau...}"
            },
            "OT learning 2.8. Asking for one output": {
                name: "",
                class: ["OT learning 2.8. Asking for one output"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "OT learning 2.9. Output distributions": {
                name: "",
                class: ["OT learning 2.9. Output distributions"],
                arguments: {
                    0: "Input to outputs...",
                    1: "Draw as numbers...",
                    2: "Draw"
                },
                argCount: 3,
                preSnippet: " ${1:Input to outputs...} ${2:Draw as numbers...} ${3:Draw}"
            },
            "OT learning 3. Generating language data": {
                name: "",
                class: ["OT learning 3. Generating language data"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "OT learning 3.1. Data from a pair distribution": {
                name: "",
                class: ["OT learning 3.1. Data from a pair distribution"],
                arguments: {
                    0: "Create place assimilation distribution"
                },
                argCount: 1,
                preSnippet: " ${0:Create place assimilation distribution}"
            },
            "OT learning 3.2. Data from another grammar": {
                name: "",
                class: ["OT learning 3.2. Data from another grammar"],
                arguments: {
                    0: "View &amp; Edit",
                    1: "richness of the base</i>"
                },
                argCount: 2,
                preSnippet: " ${1:View &amp; Edit} ${2:richness of the base</i>}"
            },
            "OT learning 4. Learning an ordinal grammar": {
                name: "",
                class: ["OT learning 4. Learning an ordinal grammar"],
                arguments: {
                    0: "plasticity</i>"
                },
                argCount: 1,
                preSnippet: " ${0:plasticity</i>}"
            },
            "OT learning 5. Learning a stochastic grammar": {
                name: "",
                class: ["OT learning 5. Learning a stochastic grammar"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "OT learning 6. Shortcut to grammar learning": {
                name: "",
                class: ["OT learning 6. Shortcut to grammar learning"],
                arguments: {
                    0: "Learn..."
                },
                argCount: 1,
                preSnippet: " ${0:Learn...}"
            },
            "OT learning 7. Learning from overt forms": {
                name: "",
                class: ["OT learning 7. Learning from overt forms"],
                arguments: {
                    0: "<i>overt forms</i>",
                    1: "Create metrics grammar...",
                    2: "Learn from one partial output...",
                    3: "Learn from partial outputs..."
                },
                argCount: 4,
                preSnippet: " ${1:<i>overt forms</i>} ${2:Create metrics grammar...} ${3:Learn from one partial output...} ${4:Learn from partial outputs...}"
            },
            "OTGrammar": {
                name: "",
                class: ["OTGrammar"],
                arguments: {
                    0: "OTGrammar",
                    1: "OTGrammar",
                    2: "OTGrammar"
                },
                argCount: 3,
                preSnippet: " ${1:OTGrammar} ${2:OTGrammar} ${3:OTGrammar}"
            },
            "OTGrammar & 2 Strings: Learn...": {
                name: "Learn...",
                class: ["OTGrammar", "2 Strings"],
                arguments: {},
                argCount: 0,
                preSnippet: "Learn..."
            },
            "OTGrammar & PairDistribution: Find positive weights...": {
                name: "Find positive weights...",
                class: ["OTGrammar", "PairDistribution"],
                arguments: {
                    0: "Weight floor",
                    1: "Margin of separation"
                },
                argCount: 2,
                preSnippet: "Find positive weights... ${1:Weight floor} ${2:Margin of separation}"
            },
            "OTGrammar & Strings: Inputs to outputs...": {
                name: "Inputs to outputs...",
                class: ["OTGrammar", "Strings"],
                arguments: {
                    0: "Noise"
                },
                argCount: 1,
                preSnippet: "Inputs to outputs... ${0:Noise}"
            },
            "OTGrammar: Generate inputs...": {
                name: "Generate inputs...",
                class: ["OTGrammar"],
                arguments: {
                    0: "Number of trials"
                },
                argCount: 1,
                preSnippet: "Generate inputs... ${0:Number of trials}"
            },
            "OTGrammar: Input to output...": {
                name: "Input to output...",
                class: ["OTGrammar"],
                arguments: {
                    0: "Input form",
                    1: "Noise"
                },
                argCount: 2,
                preSnippet: "Input to output... ${1:Input form} ${2:Noise}"
            },
            "OTGrammar: Input to outputs...": {
                name: "Input to outputs...",
                class: ["OTGrammar"],
                arguments: {
                    0: "Trials",
                    1: "Noise",
                    2: "Input form"
                },
                argCount: 3,
                preSnippet: "Input to outputs... ${1:Trials} ${2:Noise} ${3:Input form}"
            },
            "OTGrammar: Learn one...": {
                name: "Learn one...",
                class: ["OTGrammar"],
                arguments: {},
                argCount: 0,
                preSnippet: "Learn one..."
            },
            "OTGrammar: To output Distributions...": {
                name: "To output Distributions...",
                class: ["OTGrammar"],
                arguments: {},
                argCount: 0,
                preSnippet: "To output Distributions..."
            },
            "OTGrammarEditor": {
                name: "",
                class: ["OTGrammarEditor"],
                arguments: {
                    0: "Evaluate (noise 2.0)",
                    1: "disharmonies</i>"
                },
                argCount: 2,
                preSnippet: " ${1:Evaluate (noise 2.0)} ${2:disharmonies</i>}"
            }
        },
        methodCount: 29,
        methods: {
            0: "",
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
            6: "",
            7: "",
            8: "",
            9: "",
            10: "",
            11: "",
            12: "",
            13: "",
            14: "",
            15: "",
            16: "",
            17: "",
            18: "",
            19: "",
            20: "Learn...",
            21: "Find positive weights...",
            22: "Inputs to outputs...",
            23: "Generate inputs...",
            24: "Input to output...",
            25: "Input to outputs...",
            26: "Learn one...",
            27: "To output Distributions...",
            28: "",
        }
    },
    "OTGrammar": {
        praatMethods: {
            "OTGrammar & 2 Strings: Learn...": {
                name: "Learn...",
                class: ["OTGrammar", "2 Strings"],
                arguments: {},
                argCount: 0,
                preSnippet: "Learn..."
            },
            "OTGrammar & PairDistribution: Find positive weights...": {
                name: "Find positive weights...",
                class: ["OTGrammar", "PairDistribution"],
                arguments: {
                    0: "Weight floor",
                    1: "Margin of separation"
                },
                argCount: 2,
                preSnippet: "Find positive weights... ${1:Weight floor} ${2:Margin of separation}"
            },
            "OTGrammar & Strings: Inputs to outputs...": {
                name: "Inputs to outputs...",
                class: ["OTGrammar", "Strings"],
                arguments: {
                    0: "Noise"
                },
                argCount: 1,
                preSnippet: "Inputs to outputs... ${0:Noise}"
            },
            "OTGrammar: Generate inputs...": {
                name: "Generate inputs...",
                class: ["OTGrammar"],
                arguments: {
                    0: "Number of trials"
                },
                argCount: 1,
                preSnippet: "Generate inputs... ${0:Number of trials}"
            },
            "OTGrammar: Input to output...": {
                name: "Input to output...",
                class: ["OTGrammar"],
                arguments: {
                    0: "Input form",
                    1: "Noise"
                },
                argCount: 2,
                preSnippet: "Input to output... ${1:Input form} ${2:Noise}"
            },
            "OTGrammar: Input to outputs...": {
                name: "Input to outputs...",
                class: ["OTGrammar"],
                arguments: {
                    0: "Trials",
                    1: "Noise",
                    2: "Input form"
                },
                argCount: 3,
                preSnippet: "Input to outputs... ${1:Trials} ${2:Noise} ${3:Input form}"
            },
            "OTGrammar: Learn one...": {
                name: "Learn one...",
                class: ["OTGrammar"],
                arguments: {},
                argCount: 0,
                preSnippet: "Learn one..."
            },
            "OTGrammar: To output Distributions...": {
                name: "To output Distributions...",
                class: ["OTGrammar"],
                arguments: {},
                argCount: 0,
                preSnippet: "To output Distributions..."
            },
            "OTGrammarEditor": {
                name: "",
                class: ["OTGrammarEditor"],
                arguments: {
                    0: "Evaluate (noise 2.0)",
                    1: "disharmonies</i>"
                },
                argCount: 2,
                preSnippet: " ${1:Evaluate (noise 2.0)} ${2:disharmonies</i>}"
            }
        },
        methodCount: 9,
        methods: {
            0: "Learn...",
            1: "Find positive weights...",
            2: "Inputs to outputs...",
            3: "Generate inputs...",
            4: "Input to output...",
            5: "Input to outputs...",
            6: "Learn one...",
            7: "To output Distributions...",
            8: "",
        }
    },
    "PairDistribution": {
        praatMethods: {
            "PairDistribution: To Stringses...": {
                name: "To Stringses...",
                class: ["PairDistribution"],
                arguments: {
                    0: "Number",
                    1: "Name of first Strings",
                    2: "Name of second Strings"
                },
                argCount: 3,
                preSnippet: "To Stringses... ${1:Number} ${2:Name of first Strings} ${3:Name of second Strings}"
            }
        },
        methodCount: 1,
        methods: {
            0: "To Stringses..."
        }
    },
    "ParamCurve": {
        praatMethods: {},
        methodCount: 0,
        methods: {}
    },
    "PatternList": {
        praatMethods: {
            "PatternList & Categories: To FFNet...": {
                name: "To FFNet...",
                class: ["PatternList", "Categories"],
                arguments: {
                    0: "Number of units in hidden layer 1"
                },
                argCount: 1,
                preSnippet: "To FFNet... ${0:Number of units in hidden layer 1}"
            }
        },
        methodCount: 1,
        methods: {
            0: "To FFNet..."
        }
    },
    "PCA": {
        praatMethods: {
            "PCA & Configuration: To TableOfReal (reconstruct)": {
                name: "To TableOfReal (reconstruct)",
                class: ["PCA", "Configuration"],
                arguments: {
                    0: "t</i>",
                    1: "t</i>"
                },
                argCount: 2,
                preSnippet: "To TableOfReal (reconstruct) ${1:t</i>} ${2:t</i>}"
            },
            "PCA & Covariance: Project": {
                name: "Project",
                class: ["PCA", "Covariance"],
                arguments: {},
                argCount: 0,
                preSnippet: "Project"
            },
            "PCA & PCA: Get angle between pc1-pc2 planes": {
                name: "Get angle between pc1-pc2 planes",
                class: ["PCA", "PCA"],
                arguments: {
                    0: "C",
                    1: "C",
                    2: "E",
                    3: "C",
                    4: "C"
                },
                argCount: 5,
                preSnippet: "Get angle between pc1-pc2 planes ${1:C} ${2:C} ${3:E} ${4:C} ${5:C}"
            },
            "PCA & PCA: To Procrustes...": {
                name: "To Procrustes...",
                class: ["PCA", "PCA"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Procrustes..."
            },
            "PCA & SSCP: Project": {
                name: "Project",
                class: ["PCA", "SSCP"],
                arguments: {},
                argCount: 0,
                preSnippet: "Project"
            },
            "PCA & TableOfReal: Get fraction variance...": {
                name: "Get fraction variance...",
                class: ["PCA", "TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get fraction variance..."
            },
            "PCA & TableOfReal: To Configuration...": {
                name: "To Configuration...",
                class: ["PCA", "TableOfReal"],
                arguments: {
                    0: "Number of dimensions",
                    1: "only be centered"
                },
                argCount: 2,
                preSnippet: "To Configuration... ${1:Number of dimensions} ${2:only be centered}"
            },
            "PCA & TableOfReal: To TableOfReal (z-scores)...": {
                name: "To TableOfReal (z-scores)...",
                class: ["PCA", "TableOfReal"],
                arguments: {
                    0: "Number of dimensions",
                    1: "eigenvector",
                    2: "z"
                },
                argCount: 3,
                preSnippet: "To TableOfReal (z-scores)... ${1:Number of dimensions} ${2:eigenvector} ${3:z}"
            },
            "PCA: Get eigenvalue...": {
                name: "Get eigenvalue...",
                class: ["PCA"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get eigenvalue..."
            },
            "PCA: Get eigenvector element...": {
                name: "Get eigenvector element...",
                class: ["PCA"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get eigenvector element..."
            },
            "PCA: Get equality of eigenvalues...": {
                name: "Get equality of eigenvalues...",
                class: ["PCA"],
                arguments: {
                    0: "Eigenvalue range",
                    1: "Conservative test"
                },
                argCount: 2,
                preSnippet: "Get equality of eigenvalues... ${1:Eigenvalue range} ${2:Conservative test}"
            },
            "PCA: Get fraction variance accounted for...": {
                name: "Get fraction variance accounted for...",
                class: ["PCA"],
                arguments: {
                    0: "Principal component range"
                },
                argCount: 1,
                preSnippet: "Get fraction variance accounted for... ${0:Principal component range}"
            },
            "PCA: Get number of components (VAF)...": {
                name: "Get number of components (VAF)...",
                class: ["PCA"],
                arguments: {
                    0: "Variance accounted for (fraction)"
                },
                argCount: 1,
                preSnippet: "Get number of components (VAF)... ${0:Variance accounted for (fraction)}"
            },
            "PCA: To TableOfReal (reconstruct 1)...": {
                name: "To TableOfReal (reconstruct 1)...",
                class: ["PCA"],
                arguments: {
                    0: "Coefficients"
                },
                argCount: 1,
                preSnippet: "To TableOfReal (reconstruct 1)... ${0:Coefficients}"
            }
        },
        methodCount: 14,
        methods: {
            0: "To TableOfReal (reconstruct)",
            1: "Project",
            2: "Get angle between pc1-pc2 planes",
            3: "To Procrustes...",
            4: "Project",
            5: "Get fraction variance...",
            6: "To Configuration...",
            7: "To TableOfReal (z-scores)...",
            8: "Get eigenvalue...",
            9: "Get eigenvector element...",
            10: "Get equality of eigenvalues...",
            11: "Get fraction variance accounted for...",
            12: "Get number of components (VAF)...",
            13: "To TableOfReal (reconstruct 1)...",
        }
    },
    "Permutation": {
        praatMethods: {
            "Permutation: Get index...": {
                name: "Get index...",
                class: ["Permutation"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get index..."
            },
            "Permutation: Get value...": {
                name: "Get value...",
                class: ["Permutation"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get value..."
            },
            "Permutation: Interleave...": {
                name: "Interleave...",
                class: ["Permutation"],
                arguments: {
                    0: "Index range",
                    1: "Block size",
                    2: "Index range",
                    3: "Offset"
                },
                argCount: 4,
                preSnippet: "Interleave... ${1:Index range} ${2:Block size} ${3:Index range} ${4:Offset}"
            },
            "Permutation: Invert": {
                name: "Invert",
                class: ["Permutation"],
                arguments: {},
                argCount: 0,
                preSnippet: "Invert"
            },
            "Permutation: Next": {
                name: "Next",
                class: ["Permutation"],
                arguments: {
                    0: "Next"
                },
                argCount: 1,
                preSnippet: "Next ${0:Next}"
            },
            "Permutation: Permute randomly (blocks)...": {
                name: "Permute randomly (blocks)...",
                class: ["Permutation"],
                arguments: {
                    0: "Index range",
                    1: "Block size",
                    2: "Permute within blocks",
                    3: "No doublets",
                    4: "Permute within blocks"
                },
                argCount: 5,
                preSnippet: "Permute randomly (blocks)... ${1:Index range} ${2:Block size} ${3:Permute within blocks} ${4:No doublets} ${5:Permute within blocks}"
            },
            "Permutation: Permute randomly...": {
                name: "Permute randomly...",
                class: ["Permutation"],
                arguments: {
                    0: "Index range",
                    1: "Index range"
                },
                argCount: 2,
                preSnippet: "Permute randomly... ${1:Index range} ${2:Index range}"
            },
            "Permutation: Previous": {
                name: "Previous",
                class: ["Permutation"],
                arguments: {
                    0: "Previous"
                },
                argCount: 1,
                preSnippet: "Previous ${0:Previous}"
            },
            "Permutation: Reverse...": {
                name: "Reverse...",
                class: ["Permutation"],
                arguments: {
                    0: "Index range",
                    1: "Index range",
                    2: "Index range"
                },
                argCount: 3,
                preSnippet: "Reverse... ${1:Index range} ${2:Index range} ${3:Index range}"
            },
            "Permutation: Rotate...": {
                name: "Rotate...",
                class: ["Permutation"],
                arguments: {
                    0: "Index range",
                    1: "Step size"
                },
                argCount: 2,
                preSnippet: "Rotate... ${1:Index range} ${2:Step size}"
            },
            "Permutation: Sort": {
                name: "Sort",
                class: ["Permutation"],
                arguments: {},
                argCount: 0,
                preSnippet: "Sort"
            },
            "Permutation: Swap blocks...": {
                name: "Swap blocks...",
                class: ["Permutation"],
                arguments: {
                    0: "From index",
                    1: "Block size",
                    2: "Block size"
                },
                argCount: 3,
                preSnippet: "Swap blocks... ${1:From index} ${2:Block size} ${3:Block size}"
            },
            "Permutation: Swap numbers...": {
                name: "Swap numbers...",
                class: ["Permutation"],
                arguments: {
                    0: "First number",
                    1: "First number"
                },
                argCount: 2,
                preSnippet: "Swap numbers... ${1:First number} ${2:First number}"
            },
            "Permutation: Swap one from range...": {
                name: "Swap one from range...",
                class: ["Permutation"],
                arguments: {
                    0: "Index range",
                    1: "Index",
                    2: "Forbid same"
                },
                argCount: 3,
                preSnippet: "Swap one from range... ${1:Index range} ${2:Index} ${3:Forbid same}"
            },
            "Permutation: Swap positions...": {
                name: "Swap positions...",
                class: ["Permutation"],
                arguments: {
                    0: "First index",
                    1: "First index"
                },
                argCount: 2,
                preSnippet: "Swap positions... ${1:First index} ${2:First index}"
            },
            "Permutation: Table jump...": {
                name: "Table jump...",
                class: ["Permutation"],
                arguments: {
                    0: "Jump size",
                    1: "First",
                    2: "Table jump: 4, 1",
                    3: "Table jump: 4, 2",
                    4: "Table jump: 4, 5",
                    5: "Table jump: 4, 12",
                    6: "Table jump: 7, 1"
                },
                argCount: 7,
                preSnippet: "Table jump... ${1:Jump size} ${2:First} ${3:Table jump: 4, 1} ${4:Table jump: 4, 2} ${5:Table jump: 4, 5} ${6:Table jump: 4, 12} ${7:Table jump: 7, 1}"
            },
            "Permutations: Multiply": {
                name: "Multiply",
                class: ["Permutations"],
                arguments: {},
                argCount: 0,
                preSnippet: "Multiply"
            }
        },
        methodCount: 17,
        methods: {
            0: "Get index...",
            1: "Get value...",
            2: "Interleave...",
            3: "Invert",
            4: "Next",
            5: "Permute randomly (blocks)...",
            6: "Permute randomly...",
            7: "Previous",
            8: "Reverse...",
            9: "Rotate...",
            10: "Sort",
            11: "Swap blocks...",
            12: "Swap numbers...",
            13: "Swap one from range...",
            14: "Swap positions...",
            15: "Table jump...",
            16: "Multiply",
        }
    },
    "Pitch": {
        praatMethods: {
            "Pitch & PointProcess: To PitchTier...": {
                name: "To PitchTier...",
                class: ["Pitch", "PointProcess"],
                arguments: {
                    0: "Check voicing"
                },
                argCount: 1,
                preSnippet: "To PitchTier... ${0:Check voicing}"
            },
            "Pitch settings...": {
                name: "",
                class: ["Pitch settings..."],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "Pitch: Draw...": {
                name: "Draw...",
                class: ["Pitch"],
                arguments: {
                    0: "From time (s)",
                    1: "To time (seconds)",
                    2: "Pitch",
                    3: "Minimum frequency (Hz)",
                    4: "Maximum frequency (Hz)",
                    5: "Maximum frequency"
                },
                argCount: 6,
                preSnippet: "Draw... ${1:From time (s)} ${2:To time (seconds)} ${3:Pitch} ${4:Minimum frequency (Hz)} ${5:Maximum frequency (Hz)} ${6:Maximum frequency}"
            },
            "Pitch: Interpolate": {
                name: "Interpolate",
                class: ["Pitch"],
                arguments: {},
                argCount: 0,
                preSnippet: "Interpolate"
            },
            "Pitch: Smooth...": {
                name: "Smooth...",
                class: ["Pitch"],
                arguments: {},
                argCount: 0,
                preSnippet: "Smooth..."
            },
            "Pitch: To PitchTier": {
                name: "To PitchTier",
                class: ["Pitch"],
                arguments: {
                    0: "PitchTier",
                    1: "Pitch"
                },
                argCount: 2,
                preSnippet: "To PitchTier ${1:PitchTier} ${2:Pitch}"
            },
            "Pitch: To PointProcess": {
                name: "To PointProcess",
                class: ["Pitch"],
                arguments: {},
                argCount: 0,
                preSnippet: "To PointProcess"
            },
            "PitchEditor": {
                name: "",
                class: ["PitchEditor"],
                arguments: {
                    0: "candidates</i>",
                    1: "path</i>",
                    2: "voicelessness bar</i>",
                    3: "Path finder...",
                    4: "Play",
                    5: "Change ceiling..."
                },
                argCount: 6,
                preSnippet: " ${1:candidates</i>} ${2:path</i>} ${3:voicelessness bar</i>} ${4:Path finder...} ${5:Play} ${6:Change ceiling...}"
            },
            "PitchTier": {
                name: "",
                class: ["PitchTier"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "PitchTier: Add point...": {
                name: "Add point...",
                class: ["PitchTier"],
                arguments: {
                    0: "Time (s)",
                    1: "Pitch (Hz)"
                },
                argCount: 2,
                preSnippet: "Add point... ${1:Time (s)} ${2:Pitch (Hz)}"
            },
            "PitchTier: Down to PointProcess": {
                name: "Down to PointProcess",
                class: ["PitchTier"],
                arguments: {},
                argCount: 0,
                preSnippet: "Down to PointProcess"
            },
            "PitchTier: Get mean (curve)...": {
                name: "Get mean (curve)...",
                class: ["PitchTier"],
                arguments: {
                    0: "From time (s)",
                    1: "To time (s)",
                    2: "To time"
                },
                argCount: 3,
                preSnippet: "Get mean (curve)... ${1:From time (s)} ${2:To time (s)} ${3:To time}"
            },
            "PitchTier: Get mean (points)...": {
                name: "Get mean (points)...",
                class: ["PitchTier"],
                arguments: {
                    0: "From time (s)",
                    1: "To time (s)",
                    2: "To time"
                },
                argCount: 3,
                preSnippet: "Get mean (points)... ${1:From time (s)} ${2:To time (s)} ${3:To time}"
            },
            "PitchTier: Get standard deviation (curve)...": {
                name: "Get standard deviation (curve)...",
                class: ["PitchTier"],
                arguments: {
                    0: "From time (s)",
                    1: "To time (s)",
                    2: "To time"
                },
                argCount: 3,
                preSnippet: "Get standard deviation (curve)... ${1:From time (s)} ${2:To time (s)} ${3:To time}"
            },
            "PitchTier: Get standard deviation (points)...": {
                name: "Get standard deviation (points)...",
                class: ["PitchTier"],
                arguments: {
                    0: "From time (s)",
                    1: "To time (s)",
                    2: "To time",
                    3: "Get standard deviation...."
                },
                argCount: 4,
                preSnippet: "Get standard deviation (points)... ${1:From time (s)} ${2:To time (s)} ${3:To time} ${4:Get standard deviation....}"
            },
            "PitchTier: Modify interval (tone levels)...": {
                name: "Modify interval (tone levels)...",
                class: ["PitchTier"],
                arguments: {
                    0: "Time range (s)",
                    1: "Pitch range (Hz)",
                    2: "Number of tone levels",
                    3: "Relative times",
                    4: "Tone levels"
                },
                argCount: 5,
                preSnippet: "Modify interval (tone levels)... ${1:Time range (s)} ${2:Pitch range (Hz)} ${3:Number of tone levels} ${4:Relative times} ${5:Tone levels}"
            },
            "PitchTier: Modify interval...": {
                name: "Modify interval...",
                class: ["PitchTier"],
                arguments: {
                    0: "Time range (s)",
                    1: "Relative times",
                    2: "...are...",
                    3: "The 'pitch' values",
                    4: "...are...",
                    5: "...which is the...",
                    6: "Pitch frequency unit"
                },
                argCount: 7,
                preSnippet: "Modify interval... ${1:Time range (s)} ${2:Relative times} ${3:...are...} ${4:The 'pitch' values} ${5:...are...} ${6:...which is the...} ${7:Pitch frequency unit}"
            },
            "PitchTier: Stylize...": {
                name: "Stylize...",
                class: ["PitchTier"],
                arguments: {
                    0: "Frequency resolution"
                },
                argCount: 1,
                preSnippet: "Stylize... ${0:Frequency resolution}"
            },
            "PitchTier: To Pitch...": {
                name: "To Pitch...",
                class: ["PitchTier"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Pitch..."
            },
            "PitchTier: To PointProcess": {
                name: "To PointProcess",
                class: ["PitchTier"],
                arguments: {
                    0: "PitchTier"
                },
                argCount: 1,
                preSnippet: "To PointProcess ${0:PitchTier}"
            },
            "PitchTierEditor": {
                name: "",
                class: ["PitchTierEditor"],
                arguments: {
                    0: "View &amp; Edit",
                    1: "Add point at cursor",
                    2: "Remove point(s)"
                },
                argCount: 3,
                preSnippet: " ${1:View &amp; Edit} ${2:Add point at cursor} ${3:Remove point(s)}"
            }
        },
        methodCount: 21,
        methods: {
            0: "To PitchTier...",
            1: "",
            2: "Draw...",
            3: "Interpolate",
            4: "Smooth...",
            5: "To PitchTier",
            6: "To PointProcess",
            7: "",
            8: "",
            9: "Add point...",
            10: "Down to PointProcess",
            11: "Get mean (curve)...",
            12: "Get mean (points)...",
            13: "Get standard deviation (curve)...",
            14: "Get standard deviation (points)...",
            15: "Modify interval (tone levels)...",
            16: "Modify interval...",
            17: "Stylize...",
            18: "To Pitch...",
            19: "To PointProcess",
            20: "",
        }
    },
    "PitchTier": {
        praatMethods: {
            "PitchTier: Add point...": {
                name: "Add point...",
                class: ["PitchTier"],
                arguments: {
                    0: "Time (s)",
                    1: "Pitch (Hz)"
                },
                argCount: 2,
                preSnippet: "Add point... ${1:Time (s)} ${2:Pitch (Hz)}"
            },
            "PitchTier: Down to PointProcess": {
                name: "Down to PointProcess",
                class: ["PitchTier"],
                arguments: {},
                argCount: 0,
                preSnippet: "Down to PointProcess"
            },
            "PitchTier: Get mean (curve)...": {
                name: "Get mean (curve)...",
                class: ["PitchTier"],
                arguments: {
                    0: "From time (s)",
                    1: "To time (s)",
                    2: "To time"
                },
                argCount: 3,
                preSnippet: "Get mean (curve)... ${1:From time (s)} ${2:To time (s)} ${3:To time}"
            },
            "PitchTier: Get mean (points)...": {
                name: "Get mean (points)...",
                class: ["PitchTier"],
                arguments: {
                    0: "From time (s)",
                    1: "To time (s)",
                    2: "To time"
                },
                argCount: 3,
                preSnippet: "Get mean (points)... ${1:From time (s)} ${2:To time (s)} ${3:To time}"
            },
            "PitchTier: Get standard deviation (curve)...": {
                name: "Get standard deviation (curve)...",
                class: ["PitchTier"],
                arguments: {
                    0: "From time (s)",
                    1: "To time (s)",
                    2: "To time"
                },
                argCount: 3,
                preSnippet: "Get standard deviation (curve)... ${1:From time (s)} ${2:To time (s)} ${3:To time}"
            },
            "PitchTier: Get standard deviation (points)...": {
                name: "Get standard deviation (points)...",
                class: ["PitchTier"],
                arguments: {
                    0: "From time (s)",
                    1: "To time (s)",
                    2: "To time",
                    3: "Get standard deviation...."
                },
                argCount: 4,
                preSnippet: "Get standard deviation (points)... ${1:From time (s)} ${2:To time (s)} ${3:To time} ${4:Get standard deviation....}"
            },
            "PitchTier: Modify interval (tone levels)...": {
                name: "Modify interval (tone levels)...",
                class: ["PitchTier"],
                arguments: {
                    0: "Time range (s)",
                    1: "Pitch range (Hz)",
                    2: "Number of tone levels",
                    3: "Relative times",
                    4: "Tone levels"
                },
                argCount: 5,
                preSnippet: "Modify interval (tone levels)... ${1:Time range (s)} ${2:Pitch range (Hz)} ${3:Number of tone levels} ${4:Relative times} ${5:Tone levels}"
            },
            "PitchTier: Modify interval...": {
                name: "Modify interval...",
                class: ["PitchTier"],
                arguments: {
                    0: "Time range (s)",
                    1: "Relative times",
                    2: "...are...",
                    3: "The 'pitch' values",
                    4: "...are...",
                    5: "...which is the...",
                    6: "Pitch frequency unit"
                },
                argCount: 7,
                preSnippet: "Modify interval... ${1:Time range (s)} ${2:Relative times} ${3:...are...} ${4:The 'pitch' values} ${5:...are...} ${6:...which is the...} ${7:Pitch frequency unit}"
            },
            "PitchTier: Stylize...": {
                name: "Stylize...",
                class: ["PitchTier"],
                arguments: {
                    0: "Frequency resolution"
                },
                argCount: 1,
                preSnippet: "Stylize... ${0:Frequency resolution}"
            },
            "PitchTier: To Pitch...": {
                name: "To Pitch...",
                class: ["PitchTier"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Pitch..."
            },
            "PitchTier: To PointProcess": {
                name: "To PointProcess",
                class: ["PitchTier"],
                arguments: {
                    0: "PitchTier"
                },
                argCount: 1,
                preSnippet: "To PointProcess ${0:PitchTier}"
            },
            "PitchTierEditor": {
                name: "",
                class: ["PitchTierEditor"],
                arguments: {
                    0: "View &amp; Edit",
                    1: "Add point at cursor",
                    2: "Remove point(s)"
                },
                argCount: 3,
                preSnippet: " ${1:View &amp; Edit} ${2:Add point at cursor} ${3:Remove point(s)}"
            }
        },
        methodCount: 12,
        methods: {
            0: "Add point...",
            1: "Down to PointProcess",
            2: "Get mean (curve)...",
            3: "Get mean (points)...",
            4: "Get standard deviation (curve)...",
            5: "Get standard deviation (points)...",
            6: "Modify interval (tone levels)...",
            7: "Modify interval...",
            8: "Stylize...",
            9: "To Pitch...",
            10: "To PointProcess",
            11: "",
        }
    },
    "PointProcess": {
        praatMethods: {
            "PointProcess: Add point...": {
                name: "Add point...",
                class: ["PointProcess"],
                arguments: {
                    0: "Time (s)"
                },
                argCount: 1,
                preSnippet: "Add point... ${0:Time (s)}"
            },
            "PointProcess: Draw...": {
                name: "Draw...",
                class: ["PointProcess"],
                arguments: {},
                argCount: 0,
                preSnippet: "Draw..."
            },
            "PointProcess: Get high index...": {
                name: "Get high index...",
                class: ["PointProcess"],
                arguments: {
                    0: "Time (s)"
                },
                argCount: 1,
                preSnippet: "Get high index... ${0:Time (s)}"
            },
            "PointProcess: Get interval...": {
                name: "Get interval...",
                class: ["PointProcess"],
                arguments: {
                    0: "Time (s)"
                },
                argCount: 1,
                preSnippet: "Get interval... ${0:Time (s)}"
            },
            "PointProcess: Get jitter (ddp)...": {
                name: "Get jitter (ddp)...",
                class: ["PointProcess"],
                arguments: {
                    0: "Query",
                    1: "Time range (s)",
                    2: "Period floor (s)",
                    3: "Period ceiling (s)",
                    4: "Maximum period factor",
                    5: "",
                    6: "Period floor"
                },
                argCount: 7,
                preSnippet: "Get jitter (ddp)... ${1:Query} ${2:Time range (s)} ${3:Period floor (s)} ${4:Period ceiling (s)} ${5:Maximum period factor} ${6:} ${7:Period floor}"
            },
            "PointProcess: Get jitter (local)...": {
                name: "Get jitter (local)...",
                class: ["PointProcess"],
                arguments: {
                    0: "Query",
                    1: "Time range (s)",
                    2: "Period floor (s)",
                    3: "Period ceiling (s)",
                    4: "Maximum period factor",
                    5: "Period floor",
                    6: "Period floor"
                },
                argCount: 7,
                preSnippet: "Get jitter (local)... ${1:Query} ${2:Time range (s)} ${3:Period floor (s)} ${4:Period ceiling (s)} ${5:Maximum period factor} ${6:Period floor} ${7:Period floor}"
            },
            "PointProcess: Get jitter (local, absolute)...": {
                name: "Get jitter (local, absolute)...",
                class: ["PointProcess"],
                arguments: {
                    0: "Query",
                    1: "Time range (s)",
                    2: "Period floor (s)",
                    3: "Period ceiling (s)",
                    4: "Maximum period factor",
                    5: "Period floor"
                },
                argCount: 6,
                preSnippet: "Get jitter (local, absolute)... ${1:Query} ${2:Time range (s)} ${3:Period floor (s)} ${4:Period ceiling (s)} ${5:Maximum period factor} ${6:Period floor}"
            },
            "PointProcess: Get jitter (ppq5)...": {
                name: "Get jitter (ppq5)...",
                class: ["PointProcess"],
                arguments: {
                    0: "Query",
                    1: "Time range (s)",
                    2: "Period floor (s)",
                    3: "Period ceiling (s)",
                    4: "Maximum period factor",
                    5: "Period floor",
                    6: "Period floor"
                },
                argCount: 7,
                preSnippet: "Get jitter (ppq5)... ${1:Query} ${2:Time range (s)} ${3:Period floor (s)} ${4:Period ceiling (s)} ${5:Maximum period factor} ${6:Period floor} ${7:Period floor}"
            },
            "PointProcess: Get jitter (rap)...": {
                name: "Get jitter (rap)...",
                class: ["PointProcess"],
                arguments: {
                    0: "Query",
                    1: "Time range (s)",
                    2: "Period floor (s)",
                    3: "Period ceiling (s)",
                    4: "Maximum period factor",
                    5: "Period floor",
                    6: "Period floor"
                },
                argCount: 7,
                preSnippet: "Get jitter (rap)... ${1:Query} ${2:Time range (s)} ${3:Period floor (s)} ${4:Period ceiling (s)} ${5:Maximum period factor} ${6:Period floor} ${7:Period floor}"
            },
            "PointProcess: Get low index...": {
                name: "Get low index...",
                class: ["PointProcess"],
                arguments: {
                    0: "Time (s)"
                },
                argCount: 1,
                preSnippet: "Get low index... ${0:Time (s)}"
            },
            "PointProcess: Get nearest index...": {
                name: "Get nearest index...",
                class: ["PointProcess"],
                arguments: {
                    0: "Time (s)"
                },
                argCount: 1,
                preSnippet: "Get nearest index... ${0:Time (s)}"
            },
            "PointProcess: Hum": {
                name: "Hum",
                class: ["PointProcess"],
                arguments: {},
                argCount: 0,
                preSnippet: "Hum"
            },
            "PointProcess: Play": {
                name: "Play",
                class: ["PointProcess"],
                arguments: {},
                argCount: 0,
                preSnippet: "Play"
            },
            "PointProcess: Remove point near...": {
                name: "Remove point near...",
                class: ["PointProcess"],
                arguments: {
                    0: "Time (s)"
                },
                argCount: 1,
                preSnippet: "Remove point near... ${0:Time (s)}"
            },
            "PointProcess: Remove point...": {
                name: "Remove point...",
                class: ["PointProcess"],
                arguments: {
                    0: "Index"
                },
                argCount: 1,
                preSnippet: "Remove point... ${0:Index}"
            },
            "PointProcess: Remove points between...": {
                name: "Remove points between...",
                class: ["PointProcess"],
                arguments: {
                    0: "From time (s)",
                    1: "To time (s)"
                },
                argCount: 2,
                preSnippet: "Remove points between... ${1:From time (s)} ${2:To time (s)}"
            },
            "PointProcess: Remove points...": {
                name: "Remove points...",
                class: ["PointProcess"],
                arguments: {
                    0: "From index (&#8805; 1)",
                    1: "To index"
                },
                argCount: 2,
                preSnippet: "Remove points... ${1:From index (&#8805; 1)} ${2:To index}"
            },
            "PointProcess: To PitchTier...": {
                name: "To PitchTier...",
                class: ["PointProcess"],
                arguments: {
                    0: "Maximum interval (s)",
                    1: "PointProcess"
                },
                argCount: 2,
                preSnippet: "To PitchTier... ${1:Maximum interval (s)} ${2:PointProcess}"
            },
            "PointProcess: To Sound (hum)...": {
                name: "To Sound (hum)...",
                class: ["PointProcess"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Sound (hum)..."
            },
            "PointProcess: To Sound (phonation)...": {
                name: "To Sound (phonation)...",
                class: ["PointProcess"],
                arguments: {
                    0: "Sampling frequency (Hz)",
                    1: "Adaptation factor",
                    2: "Maximum period",
                    3: "Maximum period (s)",
                    4: "Adaptation factor"
                },
                argCount: 5,
                preSnippet: "To Sound (phonation)... ${1:Sampling frequency (Hz)} ${2:Adaptation factor} ${3:Maximum period} ${4:Maximum period (s)} ${5:Adaptation factor}"
            },
            "PointProcess: To Sound (pulse train)...": {
                name: "To Sound (pulse train)...",
                class: ["PointProcess"],
                arguments: {
                    0: "Sound",
                    1: "Sampling frequency (Hz)",
                    2: "Adaptation factor",
                    3: "Adaptation time",
                    4: "Adaptation time (s)",
                    5: "Interpolation depth",
                    6: "Adaptation factor"
                },
                argCount: 7,
                preSnippet: "To Sound (pulse train)... ${1:Sound} ${2:Sampling frequency (Hz)} ${3:Adaptation factor} ${4:Adaptation time} ${5:Adaptation time (s)} ${6:Interpolation depth} ${7:Adaptation factor}"
            },
            "PointProcess: To TextGrid (vuv)...": {
                name: "To TextGrid (vuv)...",
                class: ["PointProcess"],
                arguments: {
                    0: "Maximum period (s)",
                    1: "Mean period (s)",
                    2: "Mean period",
                    3: "Maximum period"
                },
                argCount: 4,
                preSnippet: "To TextGrid (vuv)... ${1:Maximum period (s)} ${2:Mean period (s)} ${3:Mean period} ${4:Maximum period}"
            },
            "PointProcess: To TextGrid...": {
                name: "To TextGrid...",
                class: ["PointProcess"],
                arguments: {
                    0: "Tier names",
                    1: "Point tiers",
                    2: "Tier names"
                },
                argCount: 3,
                preSnippet: "To TextGrid... ${1:Tier names} ${2:Point tiers} ${3:Tier names}"
            },
            "PointProcess: Up to IntensityTier...": {
                name: "Up to IntensityTier...",
                class: ["PointProcess"],
                arguments: {
                    0: "Intensity (dB)"
                },
                argCount: 1,
                preSnippet: "Up to IntensityTier... ${0:Intensity (dB)}"
            },
            "PointProcess: Up to PitchTier...": {
                name: "Up to PitchTier...",
                class: ["PointProcess"],
                arguments: {
                    0: "Frequency (Hz)"
                },
                argCount: 1,
                preSnippet: "Up to PitchTier... ${0:Frequency (Hz)}"
            },
            "PointProcess: Up to TextGrid...": {
                name: "Up to TextGrid...",
                class: ["PointProcess"],
                arguments: {
                    0: "Text"
                },
                argCount: 1,
                preSnippet: "Up to TextGrid... ${0:Text}"
            },
            "PointProcesses: Difference": {
                name: "Difference",
                class: ["PointProcesses"],
                arguments: {
                    0: "PointProcess"
                },
                argCount: 1,
                preSnippet: "Difference ${0:PointProcess}"
            },
            "PointProcesses: Intersection": {
                name: "Intersection",
                class: ["PointProcesses"],
                arguments: {
                    0: "PointProcess"
                },
                argCount: 1,
                preSnippet: "Intersection ${0:PointProcess}"
            },
            "PointProcesses: Union": {
                name: "Union",
                class: ["PointProcesses"],
                arguments: {
                    0: "PointProcess"
                },
                argCount: 1,
                preSnippet: "Union ${0:PointProcess}"
            }
        },
        methodCount: 29,
        methods: {
            0: "Add point...",
            1: "Draw...",
            2: "Get high index...",
            3: "Get interval...",
            4: "Get jitter (ddp)...",
            5: "Get jitter (local)...",
            6: "Get jitter (local, absolute)...",
            7: "Get jitter (ppq5)...",
            8: "Get jitter (rap)...",
            9: "Get low index...",
            10: "Get nearest index...",
            11: "Hum",
            12: "Play",
            13: "Remove point near...",
            14: "Remove point...",
            15: "Remove points between...",
            16: "Remove points...",
            17: "To PitchTier...",
            18: "To Sound (hum)...",
            19: "To Sound (phonation)...",
            20: "To Sound (pulse train)...",
            21: "To TextGrid (vuv)...",
            22: "To TextGrid...",
            23: "Up to IntensityTier...",
            24: "Up to PitchTier...",
            25: "Up to TextGrid...",
            26: "Difference",
            27: "Intersection",
            28: "Union",
        }
    },
    "Polygon": {
        praatMethods: {
            "Polygon: Get location of point...": {
                name: "Get location of point...",
                class: ["Polygon"],
                arguments: {
                    0: "I"
                },
                argCount: 1,
                preSnippet: "Get location of point... ${0:I}"
            },
            "Polygon: Rotate...": {
                name: "Rotate...",
                class: ["Polygon"],
                arguments: {},
                argCount: 0,
                preSnippet: "Rotate..."
            },
            "Polygon: Simplify": {
                name: "Simplify",
                class: ["Polygon"],
                arguments: {},
                argCount: 0,
                preSnippet: "Simplify"
            },
            "Polygon: Translate...": {
                name: "Translate...",
                class: ["Polygon"],
                arguments: {},
                argCount: 0,
                preSnippet: "Translate..."
            }
        },
        methodCount: 4,
        methods: {
            0: "Get location of point...",
            1: "Rotate...",
            2: "Simplify",
            3: "Translate...",
        }
    },
    "Polynomial": {
        praatMethods: {
            "Polynomial: Get area...": {
                name: "Get area...",
                class: ["Polynomial"],
                arguments: {
                    0: "Xmin"
                },
                argCount: 1,
                preSnippet: "Get area... ${0:Xmin}"
            },
            "Polynomial: Get function value...": {
                name: "Get function value...",
                class: ["Polynomial"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get function value..."
            },
            "Polynomial: Get maximum...": {
                name: "Get maximum...",
                class: ["Polynomial"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get maximum..."
            },
            "Polynomial: Get minimum...": {
                name: "Get minimum...",
                class: ["Polynomial"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get minimum..."
            },
            "Polynomial: Get x of maximum...": {
                name: "Get x of maximum...",
                class: ["Polynomial"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get x of maximum..."
            },
            "Polynomial: Get x of minimum...": {
                name: "Get x of minimum...",
                class: ["Polynomial"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get x of minimum..."
            },
            "Polynomial: Scale x...": {
                name: "Scale x...",
                class: ["Polynomial"],
                arguments: {
                    0: "Xmin"
                },
                argCount: 1,
                preSnippet: "Scale x... ${0:Xmin}"
            },
            "Polynomial: To Polynomial (derivative)": {
                name: "To Polynomial (derivative)",
                class: ["Polynomial"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Polynomial (derivative)"
            },
            "Polynomial: To Polynomial (primitive)": {
                name: "To Polynomial (primitive)",
                class: ["Polynomial"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Polynomial (primitive)"
            },
            "Polynomial: To Roots": {
                name: "To Roots",
                class: ["Polynomial"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Roots"
            },
            "Polynomial: To Spectrum...": {
                name: "To Spectrum...",
                class: ["Polynomial"],
                arguments: {
                    0: "Nyquist frequency (Hz)",
                    1: "Number of frequencies"
                },
                argCount: 2,
                preSnippet: "To Spectrum... ${1:Nyquist frequency (Hz)} ${2:Number of frequencies}"
            },
            "Polynomials: Multiply": {
                name: "Multiply",
                class: ["Polynomials"],
                arguments: {},
                argCount: 0,
                preSnippet: "Multiply"
            }
        },
        methodCount: 12,
        methods: {
            0: "Get area...",
            1: "Get function value...",
            2: "Get maximum...",
            3: "Get minimum...",
            4: "Get x of maximum...",
            5: "Get x of minimum...",
            6: "Scale x...",
            7: "To Polynomial (derivative)",
            8: "To Polynomial (primitive)",
            9: "To Roots",
            10: "To Spectrum...",
            11: "Multiply",
        }
    },
    "Roots": {
        praatMethods: {},
        methodCount: 0,
        methods: {}
    },
    "ScalarProduct": {
        praatMethods: {},
        methodCount: 0,
        methods: {}
    },
    "Similarity": {
        praatMethods: {
            "Similarity: To Dissimilarity...": {
                name: "To Dissimilarity...",
                class: ["Similarity"],
                arguments: {
                    0: "Maximum dissimilarity"
                },
                argCount: 1,
                preSnippet: "To Dissimilarity... ${0:Maximum dissimilarity}"
            }
        },
        methodCount: 1,
        methods: {
            0: "To Dissimilarity..."
        }
    },
    "Sound": {
        praatMethods: {
            "Sound & Formant: Filter": {
                name: "Filter",
                class: ["Sound", "Formant"],
                arguments: {},
                argCount: 0,
                preSnippet: "Filter"
            },
            "Sound & Formant: Filter (no scale)": {
                name: "Filter (no scale)",
                class: ["Sound", "Formant"],
                arguments: {},
                argCount: 0,
                preSnippet: "Filter (no scale)"
            },
            "Sound & FormantGrid: Filter": {
                name: "Filter",
                class: ["Sound", "FormantGrid"],
                arguments: {},
                argCount: 0,
                preSnippet: "Filter"
            },
            "Sound & FormantGrid: Filter (no scale)": {
                name: "Filter (no scale)",
                class: ["Sound", "FormantGrid"],
                arguments: {},
                argCount: 0,
                preSnippet: "Filter (no scale)"
            },
            "Sound & IntensityTier: Multiply": {
                name: "Multiply",
                class: ["Sound", "IntensityTier"],
                arguments: {},
                argCount: 0,
                preSnippet: "Multiply"
            },
            "Sound & KlattGrid: Filter by vocal tract...": {
                name: "Filter by vocal tract...",
                class: ["Sound", "KlattGrid"],
                arguments: {},
                argCount: 0,
                preSnippet: "Filter by vocal tract..."
            },
            "Sound & Pitch: Change gender...": {
                name: "Change gender...",
                class: ["Sound", "Pitch"],
                arguments: {},
                argCount: 0,
                preSnippet: "Change gender..."
            },
            "Sound & Pitch: Change speaker...": {
                name: "Change speaker...",
                class: ["Sound", "Pitch"],
                arguments: {},
                argCount: 0,
                preSnippet: "Change speaker..."
            },
            "Sound & Pitch: To PointProcess (cc)": {
                name: "To PointProcess (cc)",
                class: ["Sound", "Pitch"],
                arguments: {
                    0: "Sound",
                    1: "Pitch"
                },
                argCount: 2,
                preSnippet: "To PointProcess (cc) ${1:Sound} ${2:Pitch}"
            },
            "Sound & Pitch: To PointProcess (peaks)...": {
                name: "To PointProcess (peaks)...",
                class: ["Sound", "Pitch"],
                arguments: {
                    0: "Sound"
                },
                argCount: 1,
                preSnippet: "To PointProcess (peaks)... ${0:Sound}"
            },
            "Sound & Pitch: To Spectrogram...": {
                name: "To Spectrogram...",
                class: ["Sound", "Pitch"],
                arguments: {
                    0: "H</i>"
                },
                argCount: 1,
                preSnippet: "To Spectrogram... ${0:H</i>}"
            },
            "Sound files": {
                name: "",
                class: ["Sound files"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "Sound files 1. General structure": {
                name: "",
                class: ["Sound files 1. General structure"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "Sound files 1.1. Sampling": {
                name: "",
                class: ["Sound files 1.1. Sampling"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "Sound files 1.2. Quantization": {
                name: "",
                class: ["Sound files 1.2. Quantization"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "Sound files 1.3. Channels": {
                name: "",
                class: ["Sound files 1.3. Channels"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "Sound files 1.4. The header": {
                name: "",
                class: ["Sound files 1.4. The header"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "Sound files 1.5. Size": {
                name: "",
                class: ["Sound files 1.5. Size"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "Sound files 1.6. Compression": {
                name: "",
                class: ["Sound files 1.6. Compression"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "Sound files 2. File types": {
                name: "",
                class: ["Sound files 2. File types"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "Sound files 2.1. WAV files": {
                name: "",
                class: ["Sound files 2.1. WAV files"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "Sound files 2.2. AIFF files": {
                name: "",
                class: ["Sound files 2.2. AIFF files"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "Sound files 2.3. AIFC files": {
                name: "",
                class: ["Sound files 2.3. AIFC files"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "Sound files 2.4. NeXT/Sun (.au) files": {
                name: "",
                class: ["Sound files 2.4. NeXT/Sun (.au) files"],
                arguments: {
                    0: "Sound"
                },
                argCount: 1,
                preSnippet: " ${0:Sound}"
            },
            "Sound files 2.5. NIST files": {
                name: "",
                class: ["Sound files 2.5. NIST files"],
                arguments: {
                    0: "shorten"
                },
                argCount: 1,
                preSnippet: " ${0:shorten}"
            },
            "Sound files 2.6. FLAC files": {
                name: "",
                class: ["Sound files 2.6. FLAC files"],
                arguments: {
                    0: "http://flac.sourceforge.net"
                },
                argCount: 1,
                preSnippet: " ${0:http://flac.sourceforge.net}"
            },
            "Sound files 2.7. MP3 files": {
                name: "",
                class: ["Sound files 2.7. MP3 files"],
                arguments: {
                    0: "http://www.underbit.com/products/mad/"
                },
                argCount: 1,
                preSnippet: " ${0:http://www.underbit.com/products/mad/}"
            },
            "Sound files 2.8. Ogg Vorbis files": {
                name: "",
                class: ["Sound files 2.8. Ogg Vorbis files"],
                arguments: {
                    0: "https://xiph.org/downloads/"
                },
                argCount: 1,
                preSnippet: " ${0:https://xiph.org/downloads/}"
            },
            "Sound files 2.9. Ogg Opus files": {
                name: "",
                class: ["Sound files 2.9. Ogg Opus files"],
                arguments: {
                    0: "https://opus-codec.org/downloads/"
                },
                argCount: 1,
                preSnippet: " ${0:https://opus-codec.org/downloads/}"
            },
            "Sound files 3. Files that Praat can read": {
                name: "",
                class: ["Sound files 3. Files that Praat can read"],
                arguments: {
                    0: "View"
                },
                argCount: 1,
                preSnippet: " ${0:View}"
            },
            "Sound files 4. Files that Praat can write": {
                name: "",
                class: ["Sound files 4. Files that Praat can write"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "Sound: Autocorrelate...": {
                name: "Autocorrelate...",
                class: ["Sound"],
                arguments: {
                    0: "Periodicity",
                    1: "Amplitude scaling",
                    2: "integral",
                    3: "Signal outside time domain is...",
                    4: "zero",
                    5: "integral",
                    6: "sum",
                    7: "zero",
                    8: "similar",
                    9: "similar",
                    10: "similar",
                    11: "normalize"
                },
                argCount: 12,
                preSnippet: "Autocorrelate... ${1:Periodicity} ${2:Amplitude scaling} ${3:integral} ${4:Signal outside time domain is...} ${5:zero} ${6:integral} ${7:sum} ${8:zero} ${9:similar} ${10:similar} ${11:similar} ${12:normalize}"
            },
            "Sound: Change gender...": {
                name: "Change gender...",
                class: ["Sound"],
                arguments: {
                    0: "Minimum pitch (Hz)",
                    1: "Maximum pitch (Hz)",
                    2: "Formant shift ratio",
                    3: "New pitch median (Hz)",
                    4: "Pitch range factor",
                    5: "Duration factor"
                },
                argCount: 6,
                preSnippet: "Change gender... ${1:Minimum pitch (Hz)} ${2:Maximum pitch (Hz)} ${3:Formant shift ratio} ${4:New pitch median (Hz)} ${5:Pitch range factor} ${6:Duration factor}"
            },
            "Sound: Change speaker...": {
                name: "Change speaker...",
                class: ["Sound"],
                arguments: {
                    0: "Pitch floor (Hz)",
                    1: "Pitch ceiling (Hz)",
                    2: "Multiply formants by",
                    3: "Multiply pitch by",
                    4: "Multiply pitch range by",
                    5: "Multiply duration by"
                },
                argCount: 6,
                preSnippet: "Change speaker... ${1:Pitch floor (Hz)} ${2:Pitch ceiling (Hz)} ${3:Multiply formants by} ${4:Multiply pitch by} ${5:Multiply pitch range by} ${6:Multiply duration by}"
            },
            "Sound: De-emphasize (in-place)...": {
                name: "De-emphasize (in-place)...",
                class: ["Sound"],
                arguments: {
                    0: "From frequency (Hz)"
                },
                argCount: 1,
                preSnippet: "De-emphasize (in-place)... ${0:From frequency (Hz)}"
            },
            "Sound: Deepen band modulation...": {
                name: "Deepen band modulation...",
                class: ["Sound"],
                arguments: {
                    0: "Enhancement (dB)",
                    1: "From frequency (Hz)",
                    2: "To frequency (Hz)",
                    3: "Slow modulation (Hz)",
                    4: "Fast modulation (Hz)",
                    5: "Band smoothing (Hz)"
                },
                argCount: 6,
                preSnippet: "Deepen band modulation... ${1:Enhancement (dB)} ${2:From frequency (Hz)} ${3:To frequency (Hz)} ${4:Slow modulation (Hz)} ${5:Fast modulation (Hz)} ${6:Band smoothing (Hz)}"
            },
            "Sound: Draw where...": {
                name: "Draw where...",
                class: ["Sound"],
                arguments: {
                    0: "Time range (s)",
                    1: "Vertical range",
                    2: "Draw only those parts where the following condition holds",
                    3: "not"
                },
                argCount: 4,
                preSnippet: "Draw where... ${1:Time range (s)} ${2:Vertical range} ${3:Draw only those parts where the following condition holds} ${4:not}"
            },
            "Sound: Extract Electroglottogram...": {
                name: "Extract Electroglottogram...",
                class: ["Sound"],
                arguments: {
                    0: "Channel number",
                    1: "Invert"
                },
                argCount: 2,
                preSnippet: "Extract Electroglottogram... ${1:Channel number} ${2:Invert}"
            },
            "Sound: Fade in...": {
                name: "Fade in...",
                class: ["Sound"],
                arguments: {
                    0: "Channel",
                    1: "Time (s)",
                    2: "Fade time (s)",
                    3: "Silent from start"
                },
                argCount: 4,
                preSnippet: "Fade in... ${1:Channel} ${2:Time (s)} ${3:Fade time (s)} ${4:Silent from start}"
            },
            "Sound: Fade out...": {
                name: "Fade out...",
                class: ["Sound"],
                arguments: {
                    0: "Channel",
                    1: "Time (s)",
                    2: "Fade time (s)",
                    3: "Silent to end"
                },
                argCount: 4,
                preSnippet: "Fade out... ${1:Channel} ${2:Time (s)} ${3:Fade time (s)} ${4:Silent to end}"
            },
            "Sound: Filter (de-emphasis)...": {
                name: "Filter (de-emphasis)...",
                class: ["Sound"],
                arguments: {
                    0: "From frequency (Hz)"
                },
                argCount: 1,
                preSnippet: "Filter (de-emphasis)... ${0:From frequency (Hz)}"
            },
            "Sound: Filter (formula)...": {
                name: "Filter (formula)...",
                class: ["Sound"],
                arguments: {
                    0: "ringing</i>"
                },
                argCount: 1,
                preSnippet: "Filter (formula)... ${0:ringing</i>}"
            },
            "Sound: Filter (gammatone)...": {
                name: "Filter (gammatone)...",
                class: ["Sound"],
                arguments: {
                    0: "Centre frequency (Hz)"
                },
                argCount: 1,
                preSnippet: "Filter (gammatone)... ${0:Centre frequency (Hz)}"
            },
            "Sound: Filter (one formant)...": {
                name: "Filter (one formant)...",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "Filter (one formant)..."
            },
            "Sound: Filter (pass Hann band)...": {
                name: "Filter (pass Hann band)...",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "Filter (pass Hann band)..."
            },
            "Sound: Filter (pre-emphasis)...": {
                name: "Filter (pre-emphasis)...",
                class: ["Sound"],
                arguments: {
                    0: "From frequency (Hz)"
                },
                argCount: 1,
                preSnippet: "Filter (pre-emphasis)... ${0:From frequency (Hz)}"
            },
            "Sound: Filter (stop Hann band)...": {
                name: "Filter (stop Hann band)...",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "Filter (stop Hann band)..."
            },
            "Sound: Filter with one formant (in-place)...": {
                name: "Filter with one formant (in-place)...",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "Filter with one formant (in-place)..."
            },
            "Sound: Formula...": {
                name: "Formula...",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "Formula..."
            },
            "Sound: Get absolute extremum...": {
                name: "Get absolute extremum...",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get absolute extremum..."
            },
            "Sound: Get energy in air": {
                name: "Get energy in air",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get energy in air"
            },
            "Sound: Get energy...": {
                name: "Get energy...",
                class: ["Sound"],
                arguments: {
                    0: "Time range (s)"
                },
                argCount: 1,
                preSnippet: "Get energy... ${0:Time range (s)}"
            },
            "Sound: Get intensity (dB)": {
                name: "Get intensity (dB)",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get intensity (dB)"
            },
            "Sound: Get maximum...": {
                name: "Get maximum...",
                class: ["Sound"],
                arguments: {
                    0: "Query",
                    1: "Time range (s)",
                    2: "Interpolation",
                    3: "none"
                },
                argCount: 4,
                preSnippet: "Get maximum... ${1:Query} ${2:Time range (s)} ${3:Interpolation} ${4:none}"
            },
            "Sound: Get mean...": {
                name: "Get mean...",
                class: ["Sound"],
                arguments: {
                    0: "Query",
                    1: "Time range (s)"
                },
                argCount: 2,
                preSnippet: "Get mean... ${1:Query} ${2:Time range (s)}"
            },
            "Sound: Get minimum...": {
                name: "Get minimum...",
                class: ["Sound"],
                arguments: {
                    0: "Query",
                    1: "Time range (s)",
                    2: "none"
                },
                argCount: 3,
                preSnippet: "Get minimum... ${1:Query} ${2:Time range (s)} ${3:none}"
            },
            "Sound: Get nearest zero crossing...": {
                name: "Get nearest zero crossing...",
                class: ["Sound"],
                arguments: {
                    0: "Query",
                    1: "Time (s)"
                },
                argCount: 2,
                preSnippet: "Get nearest zero crossing... ${1:Query} ${2:Time (s)}"
            },
            "Sound: Get power in air": {
                name: "Get power in air",
                class: ["Sound"],
                arguments: {
                    0: "Query"
                },
                argCount: 1,
                preSnippet: "Get power in air ${0:Query}"
            },
            "Sound: Get power...": {
                name: "Get power...",
                class: ["Sound"],
                arguments: {
                    0: "Query",
                    1: "Time range (s)"
                },
                argCount: 2,
                preSnippet: "Get power... ${1:Query} ${2:Time range (s)}"
            },
            "Sound: Get root-mean-square...": {
                name: "Get root-mean-square...",
                class: ["Sound"],
                arguments: {
                    0: "Query",
                    1: "Time range (s)"
                },
                argCount: 2,
                preSnippet: "Get root-mean-square... ${1:Query} ${2:Time range (s)}"
            },
            "Sound: Get standard deviation...": {
                name: "Get standard deviation...",
                class: ["Sound"],
                arguments: {
                    0: "Query",
                    1: "Time range (s)"
                },
                argCount: 2,
                preSnippet: "Get standard deviation... ${1:Query} ${2:Time range (s)}"
            },
            "Sound: Get time of maximum...": {
                name: "Get time of maximum...",
                class: ["Sound"],
                arguments: {
                    0: "Query",
                    1: "Time range (s)",
                    2: "Interpolation",
                    3: "none"
                },
                argCount: 4,
                preSnippet: "Get time of maximum... ${1:Query} ${2:Time range (s)} ${3:Interpolation} ${4:none}"
            },
            "Sound: Get time of minimum...": {
                name: "Get time of minimum...",
                class: ["Sound"],
                arguments: {
                    0: "Query",
                    1: "Time range (s)",
                    2: "Interpolation",
                    3: "none"
                },
                argCount: 4,
                preSnippet: "Get time of minimum... ${1:Query} ${2:Time range (s)} ${3:Interpolation} ${4:none}"
            },
            "Sound: Get value at sample number...": {
                name: "Get value at sample number...",
                class: ["Sound"],
                arguments: {
                    0: "Query",
                    1: "Sample number"
                },
                argCount: 2,
                preSnippet: "Get value at sample number... ${1:Query} ${2:Sample number}"
            },
            "Sound: Get value at time...": {
                name: "Get value at time...",
                class: ["Sound"],
                arguments: {
                    0: "Query",
                    1: "Time (s)",
                    2: "Interpolation"
                },
                argCount: 3,
                preSnippet: "Get value at time... ${1:Query} ${2:Time (s)} ${3:Interpolation}"
            },
            "Sound: Lengthen (overlap-add)...": {
                name: "Lengthen (overlap-add)...",
                class: ["Sound"],
                arguments: {
                    0: "Minimum frequency (Hz)",
                    1: "Maximum frequency (Hz)",
                    2: "Factor"
                },
                argCount: 3,
                preSnippet: "Lengthen (overlap-add)... ${1:Minimum frequency (Hz)} ${2:Maximum frequency (Hz)} ${3:Factor}"
            },
            "Sound: LPC analysis": {
                name: "LPC analysis",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "LPC analysis"
            },
            "Sound: Play": {
                name: "Play",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "Play"
            },
            "Sound: Paint where...": {
                name: "Paint where...",
                class: ["Sound"],
                arguments: {
                    0: "Colour",
                    1: "Time range (s)",
                    2: "Vertical range",
                    3: "Fill from level",
                    4: "Formula",
                    5: "not"
                },
                argCount: 6,
                preSnippet: "Paint where... ${1:Colour} ${2:Time range (s)} ${3:Vertical range} ${4:Fill from level} ${5:Formula} ${6:not}"
            },
            "Sound: Play as frequency shifted...": {
                name: "Play as frequency shifted...",
                class: ["Sound"],
                arguments: {
                    0: "Shift by (Hz)",
                    1: "Example"
                },
                argCount: 2,
                preSnippet: "Play as frequency shifted... ${1:Shift by (Hz)} ${2:Example}"
            },
            "Sound: Pre-emphasize (in-place)...": {
                name: "Pre-emphasize (in-place)...",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "Pre-emphasize (in-place)..."
            },
            "Sound: Remove noise...": {
                name: "Remove noise...",
                class: ["Sound"],
                arguments: {
                    0: "Noise time range (s)",
                    1: "Window length (s)",
                    2: "Filter frequency range (Hz)",
                    3: "Noise reduction method"
                },
                argCount: 4,
                preSnippet: "Remove noise... ${1:Noise time range (s)} ${2:Window length (s)} ${3:Filter frequency range (Hz)} ${4:Noise reduction method}"
            },
            "Sound: Resample...": {
                name: "Resample...",
                class: ["Sound"],
                arguments: {
                    0: "Sampling frequency (Hz)",
                    1: "Precision"
                },
                argCount: 2,
                preSnippet: "Resample... ${1:Sampling frequency (Hz)} ${2:Precision}"
            },
            "Sound: Scale intensity...": {
                name: "Scale intensity...",
                class: ["Sound"],
                arguments: {
                    0: "Modify",
                    1: "New average intensity (dB SPL)"
                },
                argCount: 2,
                preSnippet: "Scale intensity... ${1:Modify} ${2:New average intensity (dB SPL)}"
            },
            "Sound: Scale peak...": {
                name: "Scale peak...",
                class: ["Sound"],
                arguments: {
                    0: "Modify",
                    1: "New absolute peak"
                },
                argCount: 2,
                preSnippet: "Scale peak... ${1:Modify} ${2:New absolute peak}"
            },
            "Sound: Set value at sample number...": {
                name: "Set value at sample number...",
                class: ["Sound"],
                arguments: {
                    0: "Sample number",
                    1: "New value"
                },
                argCount: 2,
                preSnippet: "Set value at sample number... ${1:Sample number} ${2:New value}"
            },
            "Sound: To BarkSpectrogram...": {
                name: "To BarkSpectrogram...",
                class: ["Sound"],
                arguments: {
                    0: "H</i>"
                },
                argCount: 1,
                preSnippet: "To BarkSpectrogram... ${0:H</i>}"
            },
            "Sound: To ConstantQLogFSpectrogram...": {
                name: "To ConstantQLogFSpectrogram...",
                class: ["Sound"],
                arguments: {
                    0: "Lowest frequency (Hz)",
                    1: "Maximum frequency (Hz)",
                    2: "Number of frequecy bins / octave",
                    3: "Frequency resolution (bins)",
                    4: "Time oversampling factor"
                },
                argCount: 5,
                preSnippet: "To ConstantQLogFSpectrogram... ${1:Lowest frequency (Hz)} ${2:Maximum frequency (Hz)} ${3:Number of frequecy bins / octave} ${4:Frequency resolution (bins)} ${5:Time oversampling factor}"
            },
            "Sound: To Covariance (channels)...": {
                name: "To Covariance (channels)...",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Covariance (channels)..."
            },
            "Sound: To CrossCorrelationTable...": {
                name: "To CrossCorrelationTable...",
                class: ["Sound"],
                arguments: {
                    0: "Time range (s)",
                    1: "Lag time (s)"
                },
                argCount: 2,
                preSnippet: "To CrossCorrelationTable... ${1:Time range (s)} ${2:Lag time (s)}"
            },
            "Sound: To Formant (burg)...": {
                name: "To Formant (burg)...",
                class: ["Sound"],
                arguments: {
                    0: "Time step (s)",
                    1: "Maximum number of formants",
                    2: "Formant ceiling",
                    3: "Formant ceiling (Hz)",
                    4: "Window length (s)",
                    5: "Window length",
                    6: "Pre-emphasis from (Hz)"
                },
                argCount: 7,
                preSnippet: "To Formant (burg)... ${1:Time step (s)} ${2:Maximum number of formants} ${3:Formant ceiling} ${4:Formant ceiling (Hz)} ${5:Window length (s)} ${6:Window length} ${7:Pre-emphasis from (Hz)}"
            },
            "Sound: To Formant (keep all)...": {
                name: "To Formant (keep all)...",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Formant (keep all)..."
            },
            "Sound: To Formant (robust)...": {
                name: "To Formant (robust)...",
                class: ["Sound"],
                arguments: {
                    0: "Time step (s)"
                },
                argCount: 1,
                preSnippet: "To Formant (robust)... ${0:Time step (s)}"
            },
            "Sound: To Formant (sl)...": {
                name: "To Formant (sl)...",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Formant (sl)..."
            },
            "Sound: To FormantFilter...": {
                name: "To FormantFilter...",
                class: ["Sound"],
                arguments: {
                    0: "deprecated"
                },
                argCount: 1,
                preSnippet: "To FormantFilter... ${0:deprecated}"
            },
            "Sound: To FormantPath (burg)...": {
                name: "To FormantPath (burg)...",
                class: ["Sound"],
                arguments: {
                    0: "Settings",
                    1: "Time step (s)",
                    2: "Middle formant ceiling (Hz)",
                    3: "Formant ceiling (Hz)",
                    4: "Ceiling step size",
                    5: "Number of steps up / down"
                },
                argCount: 6,
                preSnippet: "To FormantPath (burg)... ${1:Settings} ${2:Time step (s)} ${3:Middle formant ceiling (Hz)} ${4:Formant ceiling (Hz)} ${5:Ceiling step size} ${6:Number of steps up / down}"
            },
            "Sound: To Harmonicity (ac)...": {
                name: "To Harmonicity (ac)...",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Harmonicity (ac)..."
            },
            "Sound: To Harmonicity (cc)...": {
                name: "To Harmonicity (cc)...",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Harmonicity (cc)..."
            },
            "Sound: To Intensity...": {
                name: "To Intensity...",
                class: ["Sound"],
                arguments: {
                    0: "Minimum pitch (Hz)",
                    1: "Time step (s)",
                    2: "Subtract mean"
                },
                argCount: 3,
                preSnippet: "To Intensity... ${1:Minimum pitch (Hz)} ${2:Time step (s)} ${3:Subtract mean}"
            },
            "Sound: To KlattGrid (simple)...": {
                name: "To KlattGrid (simple)...",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "To KlattGrid (simple)..."
            },
            "Sound: To LPC (autocorrelation)...": {
                name: "To LPC (autocorrelation)...",
                class: ["Sound"],
                arguments: {
                    0: "Sound: To Formant (burg)...",
                    1: "Prediction order",
                    2: "Analysis window duration (s)",
                    3: "Time step (s)",
                    4: "Pre-emphasis frequency (Hz)"
                },
                argCount: 5,
                preSnippet: "To LPC (autocorrelation)... ${1:Sound: To Formant (burg)...} ${2:Prediction order} ${3:Analysis window duration (s)} ${4:Time step (s)} ${5:Pre-emphasis frequency (Hz)}"
            },
            "Sound: To LPC (burg)...": {
                name: "To LPC (burg)...",
                class: ["Sound"],
                arguments: {
                    0: "Sound: To Formant (burg)...",
                    1: "Prediction order",
                    2: "Analysis window duration (s)",
                    3: "Time step (s)",
                    4: "Pre-emphasis frequency (Hz)"
                },
                argCount: 5,
                preSnippet: "To LPC (burg)... ${1:Sound: To Formant (burg)...} ${2:Prediction order} ${3:Analysis window duration (s)} ${4:Time step (s)} ${5:Pre-emphasis frequency (Hz)}"
            },
            "Sound: To LPC (covariance)...": {
                name: "To LPC (covariance)...",
                class: ["Sound"],
                arguments: {
                    0: "Sound: To Formant (burg)...",
                    1: "Prediction order",
                    2: "Analysis window duration (s)",
                    3: "Time step (s)",
                    4: "Pre-emphasis frequency (Hz)"
                },
                argCount: 5,
                preSnippet: "To LPC (covariance)... ${1:Sound: To Formant (burg)...} ${2:Prediction order} ${3:Analysis window duration (s)} ${4:Time step (s)} ${5:Pre-emphasis frequency (Hz)}"
            },
            "Sound: To LPC (marple)...": {
                name: "To LPC (marple)...",
                class: ["Sound"],
                arguments: {
                    0: "Sound: To Formant (burg)...",
                    1: "Prediction order",
                    2: "Analysis window duration (s)",
                    3: "Time step (s)",
                    4: "Pre-emphasis frequency (Hz)",
                    5: "Tolerance 1",
                    6: "Tolerance 2"
                },
                argCount: 7,
                preSnippet: "To LPC (marple)... ${1:Sound: To Formant (burg)...} ${2:Prediction order} ${3:Analysis window duration (s)} ${4:Time step (s)} ${5:Pre-emphasis frequency (Hz)} ${6:Tolerance 1} ${7:Tolerance 2}"
            },
            "Sound: To Ltas (pitch-corrected)...": {
                name: "To Ltas (pitch-corrected)...",
                class: ["Sound"],
                arguments: {
                    0: "Spectrum"
                },
                argCount: 1,
                preSnippet: "To Ltas (pitch-corrected)... ${0:Spectrum}"
            },
            "Sound: To MelFilter...": {
                name: "To MelFilter...",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "To MelFilter..."
            },
            "Sound: To MelSpectrogram...": {
                name: "To MelSpectrogram...",
                class: ["Sound"],
                arguments: {
                    0: "H</i>",
                    1: "H</i>",
                    2: "H</i>"
                },
                argCount: 3,
                preSnippet: "To MelSpectrogram... ${1:H</i>} ${2:H</i>} ${3:H</i>}"
            },
            "Sound: To MFCC...": {
                name: "To MFCC...",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "To MFCC..."
            },
            "Sound: To Pitch (ac)...": {
                name: "To Pitch (ac)...",
                class: ["Sound"],
                arguments: {
                    0: "Time step (s)",
                    1: "Pitch floor (Hz)",
                    2: "Very accurate",
                    3: "Pitch ceiling (Hz)",
                    4: "Silence threshold",
                    5: "Voicing threshold",
                    6: "Octave cost",
                    7: "Octave-jump cost",
                    8: "Voiced / unvoiced cost"
                },
                argCount: 9,
                preSnippet: "To Pitch (ac)... ${1:Time step (s)} ${2:Pitch floor (Hz)} ${3:Very accurate} ${4:Pitch ceiling (Hz)} ${5:Silence threshold} ${6:Voicing threshold} ${7:Octave cost} ${8:Octave-jump cost} ${9:Voiced / unvoiced cost}"
            },
            "Sound: To Pitch (cc)...": {
                name: "To Pitch (cc)...",
                class: ["Sound"],
                arguments: {
                    0: "Time step (s)",
                    1: "Pitch floor (Hz)"
                },
                argCount: 2,
                preSnippet: "To Pitch (cc)... ${1:Time step (s)} ${2:Pitch floor (Hz)}"
            },
            "Sound: To Pitch (shs)...": {
                name: "To Pitch (shs)...",
                class: ["Sound"],
                arguments: {
                    0: "Time step (s)",
                    1: "Minimum pitch (Hz)",
                    2: "Max. number of candidates",
                    3: "Maximum frequency (Hz)",
                    4: "Max. number of subharmonics",
                    5: "Compression factor",
                    6: "Number of points per octave",
                    7: "Ceiling (Hz)"
                },
                argCount: 8,
                preSnippet: "To Pitch (shs)... ${1:Time step (s)} ${2:Minimum pitch (Hz)} ${3:Max. number of candidates} ${4:Maximum frequency (Hz)} ${5:Max. number of subharmonics} ${6:Compression factor} ${7:Number of points per octave} ${8:Ceiling (Hz)}"
            },
            "Sound: To Pitch...": {
                name: "To Pitch...",
                class: ["Sound"],
                arguments: {
                    0: "Time step (s)",
                    1: "Pitch floor (Hz)",
                    2: "Pitch ceiling (Hz)"
                },
                argCount: 3,
                preSnippet: "To Pitch... ${1:Time step (s)} ${2:Pitch floor (Hz)} ${3:Pitch ceiling (Hz)}"
            },
            "Sound: To PointProcess (periodic, cc)...": {
                name: "To PointProcess (periodic, cc)...",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "To PointProcess (periodic, cc)..."
            },
            "Sound: To PointProcess (periodic, peaks)...": {
                name: "To PointProcess (periodic, peaks)...",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "To PointProcess (periodic, peaks)..."
            },
            "Sound: To Polygon...": {
                name: "To Polygon...",
                class: ["Sound"],
                arguments: {
                    0: "Channel",
                    1: "Time range (s)",
                    2: "Vertical range",
                    3: "Connection y-value"
                },
                argCount: 4,
                preSnippet: "To Polygon... ${1:Channel} ${2:Time range (s)} ${3:Vertical range} ${4:Connection y-value}"
            },
            "Sound: To PowerCepstrogram...": {
                name: "To PowerCepstrogram...",
                class: ["Sound"],
                arguments: {
                    0: "Pitch floor (Hz)",
                    1: "Time step (s)",
                    2: "Maximum frequency (Hz)",
                    3: "Pre-emphasis from (Hz)"
                },
                argCount: 4,
                preSnippet: "To PowerCepstrogram... ${1:Pitch floor (Hz)} ${2:Time step (s)} ${3:Maximum frequency (Hz)} ${4:Pre-emphasis from (Hz)}"
            },
            "Sound: To Sound (blind source separation)...": {
                name: "To Sound (blind source separation)...",
                class: ["Sound"],
                arguments: {
                    0: "Time range (s)",
                    1: "CrossCorrelationTable",
                    2: "Number of cross-correlations",
                    3: "CrossCorrelationTable",
                    4: "Lag times",
                    5: "CrossCorrelationTable",
                    6: "Maximum number of iterations",
                    7: "Tolerance",
                    8: "Diagonalization method"
                },
                argCount: 9,
                preSnippet: "To Sound (blind source separation)... ${1:Time range (s)} ${2:CrossCorrelationTable} ${3:Number of cross-correlations} ${4:CrossCorrelationTable} ${5:Lag times} ${6:CrossCorrelationTable} ${7:Maximum number of iterations} ${8:Tolerance} ${9:Diagonalization method}"
            },
            "Sound: To Sound (whiten channels)...": {
                name: "To Sound (whiten channels)...",
                class: ["Sound"],
                arguments: {
                    0: "Variance fraction to keep"
                },
                argCount: 1,
                preSnippet: "To Sound (whiten channels)... ${0:Variance fraction to keep}"
            },
            "Sound: To Spectrogram (pitch-dependent)...": {
                name: "To Spectrogram (pitch-dependent)...",
                class: ["Sound"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Spectrogram (pitch-dependent)..."
            },
            "Sound: To Spectrogram...": {
                name: "To Spectrogram...",
                class: ["Sound"],
                arguments: {
                    0: "Window length (s)",
                    1: "Maximum frequency (Hz)",
                    2: "Time step (s)",
                    3: "Frequency step (Hz)",
                    4: "Window shape",
                    5: "Gaussian"
                },
                argCount: 6,
                preSnippet: "To Spectrogram... ${1:Window length (s)} ${2:Maximum frequency (Hz)} ${3:Time step (s)} ${4:Frequency step (Hz)} ${5:Window shape} ${6:Gaussian}"
            },
            "Sound: To Spectrum (resampled)...": {
                name: "To Spectrum (resampled)...",
                class: ["Sound"],
                arguments: {
                    0: "To Spectrum...",
                    1: "Precision"
                },
                argCount: 2,
                preSnippet: "To Spectrum (resampled)... ${1:To Spectrum...} ${2:Precision}"
            },
            "Sound: To Spectrum...": {
                name: "To Spectrum...",
                class: ["Sound"],
                arguments: {
                    0: "Spectrum",
                    1: "Fast"
                },
                argCount: 2,
                preSnippet: "To Spectrum... ${1:Spectrum} ${2:Fast}"
            },
            "Sound: To TextGrid (silences)...": {
                name: "To TextGrid (silences)...",
                class: ["Sound"],
                arguments: {
                    0: "Silence threshold (dB)",
                    1: "Minimum silent interval (s)",
                    2: "Minimum sounding interval (s)",
                    3: "not",
                    4: "Silent interval label",
                    5: "Sounding interval label"
                },
                argCount: 6,
                preSnippet: "To TextGrid (silences)... ${1:Silence threshold (dB)} ${2:Minimum silent interval (s)} ${3:Minimum sounding interval (s)} ${4:not} ${5:Silent interval label} ${6:Sounding interval label}"
            },
            "Sound: To TextGrid (voice activity)...": {
                name: "To TextGrid (voice activity)...",
                class: ["Sound"],
                arguments: {
                    0: "Time step (s)",
                    1: "Long term window (s)",
                    2: "Ma &amp; Nishihara (2013)",
                    3: "Short term window (s)",
                    4: "Ma &amp; Nishihara (2013)",
                    5: "Frequency range (Hz)",
                    6: "Flatness threshold",
                    7: "Silence threshold (dB)",
                    8: "Minimum silence interval duration (s)",
                    9: "Minimum sounding interval (s)",
                    10: "not",
                    11: "Silent / Sounding interval label"
                },
                argCount: 12,
                preSnippet: "To TextGrid (voice activity)... ${1:Time step (s)} ${2:Long term window (s)} ${3:Ma &amp; Nishihara (2013)} ${4:Short term window (s)} ${5:Ma &amp; Nishihara (2013)} ${6:Frequency range (Hz)} ${7:Flatness threshold} ${8:Silence threshold (dB)} ${9:Minimum silence interval duration (s)} ${10:Minimum sounding interval (s)} ${11:not} ${12:Silent / Sounding interval label}"
            },
            "Sound: To TextGrid...": {
                name: "To TextGrid...",
                class: ["Sound"],
                arguments: {
                    0: "Tier names"
                },
                argCount: 1,
                preSnippet: "To TextGrid... ${0:Tier names}"
            },
            "Sound: Trim silences...": {
                name: "Trim silences...",
                class: ["Sound"],
                arguments: {
                    0: "Trim duration (s)",
                    1: "Minimum pitch (Hz)",
                    2: "Silence threshold (dB)",
                    3: "Save trimming info as TextGrid",
                    4: "Trim label"
                },
                argCount: 5,
                preSnippet: "Trim silences... ${1:Trim duration (s)} ${2:Minimum pitch (Hz)} ${3:Silence threshold (dB)} ${4:Save trimming info as TextGrid} ${5:Trim label}"
            },
            "SoundEditor": {
                name: "",
                class: ["SoundEditor"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "SoundRecorder": {
                name: "",
                class: ["SoundRecorder"],
                arguments: {
                    0: "Save to list",
                    1: "Sound input prefs...",
                    2: "Open Sound settings"
                },
                argCount: 3,
                preSnippet: " ${1:Save to list} ${2:Sound input prefs...} ${3:Open Sound settings}"
            },
            "Sounds: Concatenate": {
                name: "Concatenate",
                class: ["Sounds"],
                arguments: {},
                argCount: 0,
                preSnippet: "Concatenate"
            },
            "Sounds: Concatenate with overlap...": {
                name: "Concatenate with overlap...",
                class: ["Sounds"],
                arguments: {
                    0: "Overlap time (s)"
                },
                argCount: 1,
                preSnippet: "Concatenate with overlap... ${0:Overlap time (s)}"
            },
            "Sounds: Convolve...": {
                name: "Convolve...",
                class: ["Sounds"],
                arguments: {
                    0: "Combine",
                    1: "Amplitude scaling",
                    2: "integral",
                    3: "Signal outside time domain is...",
                    4: "zero",
                    5: "integral",
                    6: "sum",
                    7: "<a href='Create_Sound_from_formula___.html'>Create Sound from formula...</a> peaks mono 0 0.6 1000 x*(col mod 100 = 0)",
                    8: "<a href='Create_Sound_from_formula___.html'>Create Sound from formula...</a> leak mono 0 1 1000 exp(-x/0.1)",
                    9: "zero",
                    10: "similar",
                    11: "similar",
                    12: "similar",
                    13: "normalize"
                },
                argCount: 14,
                preSnippet: "Convolve... ${1:Combine} ${2:Amplitude scaling} ${3:integral} ${4:Signal outside time domain is...} ${5:zero} ${6:integral} ${7:sum} ${8:<a href='Create_Sound_from_formula___.html'>Create Sound from formula...</a> peaks mono 0 0.6 1000 x*(col mod 100 = 0)} ${9:<a href='Create_Sound_from_formula___.html'>Create Sound from formula...</a> leak mono 0 1 1000 exp(-x/0.1)} ${10:zero} ${11:similar} ${12:similar} ${13:similar} ${14:normalize}"
            },
            "Sounds: Cross-correlate...": {
                name: "Cross-correlate...",
                class: ["Sounds"],
                arguments: {
                    0: "Combine",
                    1: "Amplitude scaling",
                    2: "integral",
                    3: "Signal outside time domain is...",
                    4: "zero",
                    5: "integral",
                    6: "sum",
                    7: "zero",
                    8: "similar",
                    9: "similar",
                    10: "similar",
                    11: "normalize"
                },
                argCount: 12,
                preSnippet: "Cross-correlate... ${1:Combine} ${2:Amplitude scaling} ${3:integral} ${4:Signal outside time domain is...} ${5:zero} ${6:integral} ${7:sum} ${8:zero} ${9:similar} ${10:similar} ${11:similar} ${12:normalize}"
            },
            "Sounds: Paint enclosed...": {
                name: "Paint enclosed...",
                class: ["Sounds"],
                arguments: {
                    0: "Colour",
                    1: "Time range (s)",
                    2: "Vertical range"
                },
                argCount: 3,
                preSnippet: "Paint enclosed... ${1:Colour} ${2:Time range (s)} ${3:Vertical range}"
            }
        },
        methodCount: 123,
        methods: {
            0: "Filter",
            1: "Filter (no scale)",
            2: "Filter",
            3: "Filter (no scale)",
            4: "Multiply",
            5: "Filter by vocal tract...",
            6: "Change gender...",
            7: "Change speaker...",
            8: "To PointProcess (cc)",
            9: "To PointProcess (peaks)...",
            10: "To Spectrogram...",
            11: "",
            12: "",
            13: "",
            14: "",
            15: "",
            16: "",
            17: "",
            18: "",
            19: "",
            20: "",
            21: "",
            22: "",
            23: "",
            24: "",
            25: "",
            26: "",
            27: "",
            28: "",
            29: "",
            30: "",
            31: "Autocorrelate...",
            32: "Change gender...",
            33: "Change speaker...",
            34: "De-emphasize (in-place)...",
            35: "Deepen band modulation...",
            36: "Draw where...",
            37: "Extract Electroglottogram...",
            38: "Fade in...",
            39: "Fade out...",
            40: "Filter (de-emphasis)...",
            41: "Filter (formula)...",
            42: "Filter (gammatone)...",
            43: "Filter (one formant)...",
            44: "Filter (pass Hann band)...",
            45: "Filter (pre-emphasis)...",
            46: "Filter (stop Hann band)...",
            47: "Filter with one formant (in-place)...",
            48: "Formula...",
            49: "Get absolute extremum...",
            50: "Get energy in air",
            51: "Get energy...",
            52: "Get intensity (dB)",
            53: "Get maximum...",
            54: "Get mean...",
            55: "Get minimum...",
            56: "Get nearest zero crossing...",
            57: "Get power in air",
            58: "Get power...",
            59: "Get root-mean-square...",
            60: "Get standard deviation...",
            61: "Get time of maximum...",
            62: "Get time of minimum...",
            63: "Get value at sample number...",
            64: "Get value at time...",
            65: "Lengthen (overlap-add)...",
            66: "LPC analysis",
            67: "Play",
            68: "Paint where...",
            69: "Play as frequency shifted...",
            70: "Pre-emphasize (in-place)...",
            71: "Remove noise...",
            72: "Resample...",
            73: "Scale intensity...",
            74: "Scale peak...",
            75: "Set value at sample number...",
            76: "To BarkSpectrogram...",
            77: "To ConstantQLogFSpectrogram...",
            78: "To Covariance (channels)...",
            79: "To CrossCorrelationTable...",
            80: "To Formant (burg)...",
            81: "To Formant (keep all)...",
            82: "To Formant (robust)...",
            83: "To Formant (sl)...",
            84: "To FormantFilter...",
            85: "To FormantPath (burg)...",
            86: "To Harmonicity (ac)...",
            87: "To Harmonicity (cc)...",
            88: "To Intensity...",
            89: "To KlattGrid (simple)...",
            90: "To LPC (autocorrelation)...",
            91: "To LPC (burg)...",
            92: "To LPC (covariance)...",
            93: "To LPC (marple)...",
            94: "To Ltas (pitch-corrected)...",
            95: "To MelFilter...",
            96: "To MelSpectrogram...",
            97: "To MFCC...",
            98: "To Pitch (ac)...",
            99: "To Pitch (cc)...",
            100: "To Pitch (shs)...",
            101: "To Pitch...",
            102: "To PointProcess (periodic, cc)...",
            103: "To PointProcess (periodic, peaks)...",
            104: "To Polygon...",
            105: "To PowerCepstrogram...",
            106: "To Sound (blind source separation)...",
            107: "To Sound (whiten channels)...",
            108: "To Spectrogram (pitch-dependent)...",
            109: "To Spectrogram...",
            110: "To Spectrum (resampled)...",
            111: "To Spectrum...",
            112: "To TextGrid (silences)...",
            113: "To TextGrid (voice activity)...",
            114: "To TextGrid...",
            115: "Trim silences...",
            116: "",
            117: "",
            118: "Concatenate",
            119: "Concatenate with overlap...",
            120: "Convolve...",
            121: "Cross-correlate...",
            122: "Paint enclosed...",
        }
    },
    "Speaker": {
        praatMethods: {},
        methodCount: 0,
        methods: {}
    },
    "Spectrum": {
        praatMethods: {
            "Spectrum: Conjugate": {
                name: "Conjugate",
                class: ["Spectrum"],
                arguments: {},
                argCount: 0,
                preSnippet: "Conjugate"
            },
            "Spectrum: Filter (pass Hann band)...": {
                name: "Filter (pass Hann band)...",
                class: ["Spectrum"],
                arguments: {
                    0: "Spectrum",
                    1: "From frequency (Hz)",
                    2: "To frequency (Hz)",
                    3: "Smoothing (Hz)"
                },
                argCount: 4,
                preSnippet: "Filter (pass Hann band)... ${1:Spectrum} ${2:From frequency (Hz)} ${3:To frequency (Hz)} ${4:Smoothing (Hz)}"
            },
            "Spectrum: Filter (stop Hann band)...": {
                name: "Filter (stop Hann band)...",
                class: ["Spectrum"],
                arguments: {
                    0: "Spectrum",
                    1: "From frequency (Hz)",
                    2: "To frequency (Hz)",
                    3: "Smoothing (Hz)"
                },
                argCount: 4,
                preSnippet: "Filter (stop Hann band)... ${1:Spectrum} ${2:From frequency (Hz)} ${3:To frequency (Hz)} ${4:Smoothing (Hz)}"
            },
            "Spectrum: Formula...": {
                name: "Formula...",
                class: ["Spectrum"],
                arguments: {},
                argCount: 0,
                preSnippet: "Formula..."
            },
            "Spectrum: Get central moment...": {
                name: "Get central moment...",
                class: ["Spectrum"],
                arguments: {
                    0: "Moment",
                    1: "Power"
                },
                argCount: 2,
                preSnippet: "Get central moment... ${1:Moment} ${2:Power}"
            },
            "Spectrum: Get centre of gravity...": {
                name: "Get centre of gravity...",
                class: ["Spectrum"],
                arguments: {
                    0: "Power"
                },
                argCount: 1,
                preSnippet: "Get centre of gravity... ${0:Power}"
            },
            "Spectrum: Get kurtosis...": {
                name: "Get kurtosis...",
                class: ["Spectrum"],
                arguments: {
                    0: "Power"
                },
                argCount: 1,
                preSnippet: "Get kurtosis... ${0:Power}"
            },
            "Spectrum: Get skewness...": {
                name: "Get skewness...",
                class: ["Spectrum"],
                arguments: {
                    0: "Power"
                },
                argCount: 1,
                preSnippet: "Get skewness... ${0:Power}"
            },
            "Spectrum: Get standard deviation...": {
                name: "Get standard deviation...",
                class: ["Spectrum"],
                arguments: {
                    0: "Power"
                },
                argCount: 1,
                preSnippet: "Get standard deviation... ${0:Power}"
            },
            "Spectrum: Shift frequencies...": {
                name: "Shift frequencies...",
                class: ["Spectrum"],
                arguments: {
                    0: "Shift by (Hz)",
                    1: "New maximum frequency (Hz)",
                    2: "Precision"
                },
                argCount: 3,
                preSnippet: "Shift frequencies... ${1:Shift by (Hz)} ${2:New maximum frequency (Hz)} ${3:Precision}"
            },
            "Spectrum: To Ltas (1-to-1)": {
                name: "To Ltas (1-to-1)",
                class: ["Spectrum"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Ltas (1-to-1)"
            },
            "Spectrum: To PowerCepstrum": {
                name: "To PowerCepstrum",
                class: ["Spectrum"],
                arguments: {
                    0: "PowerCepstrum"
                },
                argCount: 1,
                preSnippet: "To PowerCepstrum ${0:PowerCepstrum}"
            },
            "Spectrum: To Sound": {
                name: "To Sound",
                class: ["Spectrum"],
                arguments: {
                    0: "Sound: To Spectrum..."
                },
                argCount: 1,
                preSnippet: "To Sound ${0:Sound: To Spectrum...}"
            },
            "Spectrum: To Sound (resampled)...": {
                name: "To Sound (resampled)...",
                class: ["Spectrum"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Sound (resampled)..."
            },
            "Spectrum: To Spectrogram": {
                name: "To Spectrogram",
                class: ["Spectrum"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Spectrogram"
            },
            "SpectrumEditor": {
                name: "",
                class: ["SpectrumEditor"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            }
        },
        methodCount: 16,
        methods: {
            0: "Conjugate",
            1: "Filter (pass Hann band)...",
            2: "Filter (stop Hann band)...",
            3: "Formula...",
            4: "Get central moment...",
            5: "Get centre of gravity...",
            6: "Get kurtosis...",
            7: "Get skewness...",
            8: "Get standard deviation...",
            9: "Shift frequencies...",
            10: "To Ltas (1-to-1)",
            11: "To PowerCepstrum",
            12: "To Sound",
            13: "To Sound (resampled)...",
            14: "To Spectrogram",
            15: "",
        }
    },
    "SpellingChecker": {
        praatMethods: {},
        methodCount: 0,
        methods: {}
    },
    "SSCP": {
        praatMethods: {
            "SSCP & TableOfReal: Extract quantile range...": {
                name: "Extract quantile range...",
                class: ["SSCP", "TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "Extract quantile range..."
            },
            "SSCP: Draw sigma ellipse...": {
                name: "Draw sigma ellipse...",
                class: ["SSCP"],
                arguments: {
                    0: "Number of sigmas"
                },
                argCount: 1,
                preSnippet: "Draw sigma ellipse... ${0:Number of sigmas}"
            },
            "SSCP: Get confidence ellipse area...": {
                name: "Get confidence ellipse area...",
                class: ["SSCP"],
                arguments: {
                    0: "<i>S</i>",
                    1: "<i>S</i>"
                },
                argCount: 2,
                preSnippet: "Get confidence ellipse area... ${1:<i>S</i>} ${2:<i>S</i>}"
            },
            "SSCP: Get diagonality (bartlett)...": {
                name: "Get diagonality (bartlett)...",
                class: ["SSCP"],
                arguments: {
                    0: "Number of constraints",
                    1: "R",
                    2: "R"
                },
                argCount: 3,
                preSnippet: "Get diagonality (bartlett)... ${1:Number of constraints} ${2:R} ${3:R}"
            },
            "SSCP: Get fraction variation...": {
                name: "Get fraction variation...",
                class: ["SSCP"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get fraction variation..."
            },
            "SSCP: Get sigma ellipse area...": {
                name: "Get sigma ellipse area...",
                class: ["SSCP"],
                arguments: {
                    0: "<i>S</i>",
                    1: "<i>S</i>"
                },
                argCount: 2,
                preSnippet: "Get sigma ellipse area... ${1:<i>S</i>} ${2:<i>S</i>}"
            },
            "SSCP: To CCA...": {
                name: "To CCA...",
                class: ["SSCP"],
                arguments: {
                    0: "Dimension of dependent variate (ny)",
                    1: "S",
                    2: "S",
                    3: "S",
                    4: "x",
                    5: "S",
                    6: "S",
                    7: "S",
                    8: "U",
                    9: "S",
                    10: "K",
                    11: "A",
                    12: "S",
                    13: "S",
                    14: "S",
                    15: "S",
                    16: "x",
                    17: "x"
                },
                argCount: 18,
                preSnippet: "To CCA... ${1:Dimension of dependent variate (ny)} ${2:S} ${3:S} ${4:S} ${5:x} ${6:S} ${7:S} ${8:S} ${9:U} ${10:S} ${11:K} ${12:A} ${13:S} ${14:S} ${15:S} ${16:S} ${17:x} ${18:x}"
            },
            "SSCP: To Covariance...": {
                name: "To Covariance...",
                class: ["SSCP"],
                arguments: {
                    0: "Number of constraints"
                },
                argCount: 1,
                preSnippet: "To Covariance... ${0:Number of constraints}"
            }
        },
        methodCount: 8,
        methods: {
            0: "Extract quantile range...",
            1: "Draw sigma ellipse...",
            2: "Get confidence ellipse area...",
            3: "Get diagonality (bartlett)...",
            4: "Get fraction variation...",
            5: "Get sigma ellipse area...",
            6: "To CCA...",
            7: "To Covariance...",
        }
    },
    "Strings": {
        praatMethods: {
            "Strings & Permutation: Permute strings": {
                name: "Permute strings",
                class: ["Strings", "Permutation"],
                arguments: {
                    0: "Strings",
                    1: "<a href='Permutation__Permute_randomly__blocks____.html'>Permute randomly (blocks):</a> 0, 0, 4, 'yes', 'yes'",
                    2: "Permute strings"
                },
                argCount: 3,
                preSnippet: "Permute strings ${1:Strings} ${2:<a href='Permutation__Permute_randomly__blocks____.html'>Permute randomly (blocks):</a> 0, 0, 4, 'yes', 'yes'} ${3:Permute strings}"
            },
            "Strings: To Distributions": {
                name: "To Distributions",
                class: ["Strings"],
                arguments: {
                    0: "Distributions",
                    1: "Strings",
                    2: "Distributions"
                },
                argCount: 3,
                preSnippet: "To Distributions ${1:Distributions} ${2:Strings} ${3:Distributions}"
            },
            "Strings: To Index": {
                name: "To Index",
                class: ["Strings"],
                arguments: {
                    0: "Strings",
                    1: "Index"
                },
                argCount: 2,
                preSnippet: "To Index ${1:Strings} ${2:Index}"
            },
            "Strings: To Permutation...": {
                name: "To Permutation...",
                class: ["Strings"],
                arguments: {
                    0: "Sort"
                },
                argCount: 1,
                preSnippet: "To Permutation... ${0:Sort}"
            }
        },
        methodCount: 4,
        methods: {
            0: "Permute strings",
            1: "To Distributions",
            2: "To Index",
            3: "To Permutation...",
        }
    },
    "Table": {
        praatMethods: {
            "Table: Bar plot where...": {
                name: "Bar plot where...",
                class: ["Table"],
                arguments: {
                    0: "Vertical column(s)",
                    1: "Vertical range",
                    2: "Column with labels",
                    3: "Distance of first bar from border",
                    4: "Distance between bar groups",
                    5: "Distance between bars within group",
                    6: "Colours",
                    7: "Label text angle (degrees)",
                    8: "Formula:"
                },
                argCount: 9,
                preSnippet: "Bar plot where... ${1:Vertical column(s)} ${2:Vertical range} ${3:Column with labels} ${4:Distance of first bar from border} ${5:Distance between bar groups} ${6:Distance between bars within group} ${7:Colours} ${8:Label text angle (degrees)} ${9:Formula:}"
            },
            "Table: Box plots where...": {
                name: "Box plots where...",
                class: ["Table"],
                arguments: {},
                argCount: 0,
                preSnippet: "Box plots where..."
            },
            "Table: Get median absolute deviation...": {
                name: "Get median absolute deviation...",
                class: ["Table"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get median absolute deviation..."
            },
            "Table: Horizontal error bars plot where...": {
                name: "Horizontal error bars plot where...",
                class: ["Table"],
                arguments: {},
                argCount: 0,
                preSnippet: "Horizontal error bars plot where..."
            },
            "Table: Horizontal error bars plot...": {
                name: "Horizontal error bars plot...",
                class: ["Table"],
                arguments: {},
                argCount: 0,
                preSnippet: "Horizontal error bars plot..."
            },
            "Table: Line graph where...": {
                name: "Line graph where...",
                class: ["Table"],
                arguments: {
                    0: "Vertical column",
                    1: "Vertical range",
                    2: "Horizontal column",
                    3: "Horizontal range",
                    4: "Text",
                    5: "Label text angle (degrees)",
                    6: "Formula"
                },
                argCount: 7,
                preSnippet: "Line graph where... ${1:Vertical column} ${2:Vertical range} ${3:Horizontal column} ${4:Horizontal range} ${5:Text} ${6:Label text angle (degrees)} ${7:Formula}"
            },
            "Table: Normal probability plot...": {
                name: "Normal probability plot...",
                class: ["Table"],
                arguments: {
                    0: "Number of quantiles",
                    1: "Number of sigmas"
                },
                argCount: 2,
                preSnippet: "Normal probability plot... ${1:Number of quantiles} ${2:Number of sigmas}"
            },
            "Table: Quantile-quantile plot...": {
                name: "Quantile-quantile plot...",
                class: ["Table"],
                arguments: {},
                argCount: 0,
                preSnippet: "Quantile-quantile plot..."
            },
            "Table: Report one-way anova...": {
                name: "Report one-way anova...",
                class: ["Table"],
                arguments: {
                    0: "Column with data",
                    1: "Factor",
                    2: "Table with means",
                    3: "Table with differences between means",
                    4: "Table with Tukey's post-hoc test"
                },
                argCount: 5,
                preSnippet: "Report one-way anova... ${1:Column with data} ${2:Factor} ${3:Table with means} ${4:Table with differences between means} ${5:Table with Tukey's post-hoc test}"
            },
            "Table: Report one-way Kruskal-Wallis...": {
                name: "Report one-way Kruskal-Wallis...",
                class: ["Table"],
                arguments: {
                    0: "Column with data",
                    1: "Factor"
                },
                argCount: 2,
                preSnippet: "Report one-way Kruskal-Wallis... ${1:Column with data} ${2:Factor}"
            },
            "Table: Report two-way anova...": {
                name: "Report two-way anova...",
                class: ["Table"],
                arguments: {
                    0: "Column with data",
                    1: "First factor",
                    2: "Second factor",
                    3: "Table with means"
                },
                argCount: 4,
                preSnippet: "Report two-way anova... ${1:Column with data} ${2:First factor} ${3:Second factor} ${4:Table with means}"
            },
            "Table: Vertical error bars plot where...": {
                name: "Vertical error bars plot where...",
                class: ["Table"],
                arguments: {
                    0: "Horizontal column",
                    1: "Horizontal range",
                    2: "Vertical column",
                    3: "Vertical range",
                    4: "Lower error value column",
                    5: "Bar size (mm)",
                    6: "Garnish",
                    7: "Formula"
                },
                argCount: 8,
                preSnippet: "Vertical error bars plot where... ${1:Horizontal column} ${2:Horizontal range} ${3:Vertical column} ${4:Vertical range} ${5:Lower error value column} ${6:Bar size (mm)} ${7:Garnish} ${8:Formula}"
            },
            "Table: Vertical error bars plot...": {
                name: "Vertical error bars plot...",
                class: ["Table"],
                arguments: {},
                argCount: 0,
                preSnippet: "Vertical error bars plot..."
            },
            "TableOfReal": {
                name: "",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            },
            "TableOfReal & Permutation: Permute rows": {
                name: "Permute rows",
                class: ["TableOfReal", "Permutation"],
                arguments: {},
                argCount: 0,
                preSnippet: "Permute rows"
            },
            "TableOfReal: Centre columns": {
                name: "Centre columns",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "Centre columns"
            },
            "TableOfReal: Centre rows": {
                name: "Centre rows",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "Centre rows"
            },
            "TableOfReal: Change column labels...": {
                name: "Change column labels...",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "Change column labels..."
            },
            "TableOfReal: Change row labels...": {
                name: "Change row labels...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Replace limit"
                },
                argCount: 1,
                preSnippet: "Change row labels... ${0:Replace limit}"
            },
            "TableOfReal: Draw as scalable squares...": {
                name: "Draw as scalable squares...",
                class: ["TableOfReal"],
                arguments: {
                    0: "From row",
                    1: "From column",
                    2: "Origin",
                    3: "Cell area scale factor",
                    4: "Filling order"
                },
                argCount: 5,
                preSnippet: "Draw as scalable squares... ${1:From row} ${2:From column} ${3:Origin} ${4:Cell area scale factor} ${5:Filling order}"
            },
            "TableOfReal: Draw biplot...": {
                name: "Draw biplot...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Xmin",
                    1: "Split factor",
                    2: "U"
                },
                argCount: 3,
                preSnippet: "Draw biplot... ${1:Xmin} ${2:Split factor} ${3:U}"
            },
            "TableOfReal: Draw box plots...": {
                name: "Draw box plots...",
                class: ["TableOfReal"],
                arguments: {
                    0: "From row"
                },
                argCount: 1,
                preSnippet: "Draw box plots... ${0:From row}"
            },
            "TableOfReal: Draw rows as histogram...": {
                name: "Draw rows as histogram...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Row numbers",
                    1: "Ymin",
                    2: "Horizontal offset",
                    3: "Distance between bar groups",
                    4: "Distance between bars",
                    5: "Grey values"
                },
                argCount: 6,
                preSnippet: "Draw rows as histogram... ${1:Row numbers} ${2:Ymin} ${3:Horizontal offset} ${4:Distance between bar groups} ${5:Distance between bars} ${6:Grey values}"
            },
            "TableOfReal: Get table norm": {
                name: "Get table norm",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get table norm"
            },
            "TableOfReal: Normalize columns...": {
                name: "Normalize columns...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Norm"
                },
                argCount: 1,
                preSnippet: "Normalize columns... ${0:Norm}"
            },
            "TableOfReal: Normalize rows...": {
                name: "Normalize rows...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Norm"
                },
                argCount: 1,
                preSnippet: "Normalize rows... ${0:Norm}"
            },
            "TableOfReal: Normalize table...": {
                name: "Normalize table...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Norm"
                },
                argCount: 1,
                preSnippet: "Normalize table... ${0:Norm}"
            },
            "TableOfReal: Report multivariate normality (BHEP)...": {
                name: "Report multivariate normality (BHEP)...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Smoothing parameter"
                },
                argCount: 1,
                preSnippet: "Report multivariate normality (BHEP)... ${0:Smoothing parameter}"
            },
            "TableOfReal: Select columns where row...": {
                name: "Select columns where row...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Columns",
                    1: "Row condition"
                },
                argCount: 2,
                preSnippet: "Select columns where row... ${1:Columns} ${2:Row condition}"
            },
            "TableOfReal: Set value...": {
                name: "Set value...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Row number",
                    1: "Column number",
                    2: "New value"
                },
                argCount: 3,
                preSnippet: "Set value... ${1:Row number} ${2:Column number} ${3:New value}"
            },
            "TableOfReal: Standardize columns": {
                name: "Standardize columns",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "Standardize columns"
            },
            "TableOfReal: To CCA...": {
                name: "To CCA...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Dimension of dependent variate (ny)"
                },
                argCount: 1,
                preSnippet: "To CCA... ${0:Dimension of dependent variate (ny)}"
            },
            "TableOfReal: To Configuration (lda)...": {
                name: "To Configuration (lda)...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Number of dimensions"
                },
                argCount: 1,
                preSnippet: "To Configuration (lda)... ${0:Number of dimensions}"
            },
            "TableOfReal: To Configuration (pca)...": {
                name: "To Configuration (pca)...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Number of dimensions",
                    1: "C",
                    2: "M"
                },
                argCount: 3,
                preSnippet: "To Configuration (pca)... ${1:Number of dimensions} ${2:C} ${3:M}"
            },
            "TableOfReal: To Correlation": {
                name: "To Correlation",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Correlation"
            },
            "TableOfReal: To Correlation (rank)": {
                name: "To Correlation (rank)",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Correlation (rank)"
            },
            "TableOfReal: To Covariance": {
                name: "To Covariance",
                class: ["TableOfReal"],
                arguments: {
                    0: "U",
                    1: "S",
                    2: "S"
                },
                argCount: 3,
                preSnippet: "To Covariance ${1:U} ${2:S} ${3:S}"
            },
            "TableOfReal: To Discriminant": {
                name: "To Discriminant",
                class: ["TableOfReal"],
                arguments: {
                    0: "x",
                    1: "<i>B</i>",
                    2: "<i>B</i>",
                    3: "<i>B</i>"
                },
                argCount: 4,
                preSnippet: "To Discriminant ${1:x} ${2:<i>B</i>} ${3:<i>B</i>} ${4:<i>B</i>}"
            },
            "TableOfReal: To GaussianMixture (row labels)...": {
                name: "To GaussianMixture (row labels)...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Covariance matrices are"
                },
                argCount: 1,
                preSnippet: "To GaussianMixture (row labels)... ${0:Covariance matrices are}"
            },
            "TableOfReal: To GaussianMixture...": {
                name: "To GaussianMixture...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Number of components",
                    1: "Tolerance of minimizer",
                    2: "Maximum number of iterations",
                    3: "Stability coefficient lambda",
                    4: "Covariance matrices are",
                    5: "Criterion based on"
                },
                argCount: 6,
                preSnippet: "To GaussianMixture... ${1:Number of components} ${2:Tolerance of minimizer} ${3:Maximum number of iterations} ${4:Stability coefficient lambda} ${5:Covariance matrices are} ${6:Criterion based on}"
            },
            "TableOfReal: To PCA": {
                name: "To PCA",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "To PCA"
            },
            "TableOfReal: To PatternList and Categories...": {
                name: "To PatternList and Categories...",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "To PatternList and Categories..."
            },
            "TableOfReal: To SSCP...": {
                name: "To SSCP...",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "To SSCP..."
            },
            "TableOfReal: To TableOfReal (means by row labels)...": {
                name: "To TableOfReal (means by row labels)...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Multivariate statistics",
                    1: "Expand"
                },
                argCount: 2,
                preSnippet: "To TableOfReal (means by row labels)... ${1:Multivariate statistics} ${2:Expand}"
            }
        },
        methodCount: 44,
        methods: {
            0: "Bar plot where...",
            1: "Box plots where...",
            2: "Get median absolute deviation...",
            3: "Horizontal error bars plot where...",
            4: "Horizontal error bars plot...",
            5: "Line graph where...",
            6: "Normal probability plot...",
            7: "Quantile-quantile plot...",
            8: "Report one-way anova...",
            9: "Report one-way Kruskal-Wallis...",
            10: "Report two-way anova...",
            11: "Vertical error bars plot where...",
            12: "Vertical error bars plot...",
            13: "",
            14: "Permute rows",
            15: "Centre columns",
            16: "Centre rows",
            17: "Change column labels...",
            18: "Change row labels...",
            19: "Draw as scalable squares...",
            20: "Draw biplot...",
            21: "Draw box plots...",
            22: "Draw rows as histogram...",
            23: "Get table norm",
            24: "Normalize columns...",
            25: "Normalize rows...",
            26: "Normalize table...",
            27: "Report multivariate normality (BHEP)...",
            28: "Select columns where row...",
            29: "Set value...",
            30: "Standardize columns",
            31: "To CCA...",
            32: "To Configuration (lda)...",
            33: "To Configuration (pca)...",
            34: "To Correlation",
            35: "To Correlation (rank)",
            36: "To Covariance",
            37: "To Discriminant",
            38: "To GaussianMixture (row labels)...",
            39: "To GaussianMixture...",
            40: "To PCA",
            41: "To PatternList and Categories...",
            42: "To SSCP...",
            43: "To TableOfReal (means by row labels)...",
        }
    },
    "TableOfReal": {
        praatMethods: {
            "TableOfReal & Permutation: Permute rows": {
                name: "Permute rows",
                class: ["TableOfReal", "Permutation"],
                arguments: {},
                argCount: 0,
                preSnippet: "Permute rows"
            },
            "TableOfReal: Centre columns": {
                name: "Centre columns",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "Centre columns"
            },
            "TableOfReal: Centre rows": {
                name: "Centre rows",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "Centre rows"
            },
            "TableOfReal: Change column labels...": {
                name: "Change column labels...",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "Change column labels..."
            },
            "TableOfReal: Change row labels...": {
                name: "Change row labels...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Replace limit"
                },
                argCount: 1,
                preSnippet: "Change row labels... ${0:Replace limit}"
            },
            "TableOfReal: Draw as scalable squares...": {
                name: "Draw as scalable squares...",
                class: ["TableOfReal"],
                arguments: {
                    0: "From row",
                    1: "From column",
                    2: "Origin",
                    3: "Cell area scale factor",
                    4: "Filling order"
                },
                argCount: 5,
                preSnippet: "Draw as scalable squares... ${1:From row} ${2:From column} ${3:Origin} ${4:Cell area scale factor} ${5:Filling order}"
            },
            "TableOfReal: Draw biplot...": {
                name: "Draw biplot...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Xmin",
                    1: "Split factor",
                    2: "U"
                },
                argCount: 3,
                preSnippet: "Draw biplot... ${1:Xmin} ${2:Split factor} ${3:U}"
            },
            "TableOfReal: Draw box plots...": {
                name: "Draw box plots...",
                class: ["TableOfReal"],
                arguments: {
                    0: "From row"
                },
                argCount: 1,
                preSnippet: "Draw box plots... ${0:From row}"
            },
            "TableOfReal: Draw rows as histogram...": {
                name: "Draw rows as histogram...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Row numbers",
                    1: "Ymin",
                    2: "Horizontal offset",
                    3: "Distance between bar groups",
                    4: "Distance between bars",
                    5: "Grey values"
                },
                argCount: 6,
                preSnippet: "Draw rows as histogram... ${1:Row numbers} ${2:Ymin} ${3:Horizontal offset} ${4:Distance between bar groups} ${5:Distance between bars} ${6:Grey values}"
            },
            "TableOfReal: Get table norm": {
                name: "Get table norm",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "Get table norm"
            },
            "TableOfReal: Normalize columns...": {
                name: "Normalize columns...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Norm"
                },
                argCount: 1,
                preSnippet: "Normalize columns... ${0:Norm}"
            },
            "TableOfReal: Normalize rows...": {
                name: "Normalize rows...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Norm"
                },
                argCount: 1,
                preSnippet: "Normalize rows... ${0:Norm}"
            },
            "TableOfReal: Normalize table...": {
                name: "Normalize table...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Norm"
                },
                argCount: 1,
                preSnippet: "Normalize table... ${0:Norm}"
            },
            "TableOfReal: Report multivariate normality (BHEP)...": {
                name: "Report multivariate normality (BHEP)...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Smoothing parameter"
                },
                argCount: 1,
                preSnippet: "Report multivariate normality (BHEP)... ${0:Smoothing parameter}"
            },
            "TableOfReal: Select columns where row...": {
                name: "Select columns where row...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Columns",
                    1: "Row condition"
                },
                argCount: 2,
                preSnippet: "Select columns where row... ${1:Columns} ${2:Row condition}"
            },
            "TableOfReal: Set value...": {
                name: "Set value...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Row number",
                    1: "Column number",
                    2: "New value"
                },
                argCount: 3,
                preSnippet: "Set value... ${1:Row number} ${2:Column number} ${3:New value}"
            },
            "TableOfReal: Standardize columns": {
                name: "Standardize columns",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "Standardize columns"
            },
            "TableOfReal: To CCA...": {
                name: "To CCA...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Dimension of dependent variate (ny)"
                },
                argCount: 1,
                preSnippet: "To CCA... ${0:Dimension of dependent variate (ny)}"
            },
            "TableOfReal: To Configuration (lda)...": {
                name: "To Configuration (lda)...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Number of dimensions"
                },
                argCount: 1,
                preSnippet: "To Configuration (lda)... ${0:Number of dimensions}"
            },
            "TableOfReal: To Configuration (pca)...": {
                name: "To Configuration (pca)...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Number of dimensions",
                    1: "C",
                    2: "M"
                },
                argCount: 3,
                preSnippet: "To Configuration (pca)... ${1:Number of dimensions} ${2:C} ${3:M}"
            },
            "TableOfReal: To Correlation": {
                name: "To Correlation",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Correlation"
            },
            "TableOfReal: To Correlation (rank)": {
                name: "To Correlation (rank)",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "To Correlation (rank)"
            },
            "TableOfReal: To Covariance": {
                name: "To Covariance",
                class: ["TableOfReal"],
                arguments: {
                    0: "U",
                    1: "S",
                    2: "S"
                },
                argCount: 3,
                preSnippet: "To Covariance ${1:U} ${2:S} ${3:S}"
            },
            "TableOfReal: To Discriminant": {
                name: "To Discriminant",
                class: ["TableOfReal"],
                arguments: {
                    0: "x",
                    1: "<i>B</i>",
                    2: "<i>B</i>",
                    3: "<i>B</i>"
                },
                argCount: 4,
                preSnippet: "To Discriminant ${1:x} ${2:<i>B</i>} ${3:<i>B</i>} ${4:<i>B</i>}"
            },
            "TableOfReal: To GaussianMixture (row labels)...": {
                name: "To GaussianMixture (row labels)...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Covariance matrices are"
                },
                argCount: 1,
                preSnippet: "To GaussianMixture (row labels)... ${0:Covariance matrices are}"
            },
            "TableOfReal: To GaussianMixture...": {
                name: "To GaussianMixture...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Number of components",
                    1: "Tolerance of minimizer",
                    2: "Maximum number of iterations",
                    3: "Stability coefficient lambda",
                    4: "Covariance matrices are",
                    5: "Criterion based on"
                },
                argCount: 6,
                preSnippet: "To GaussianMixture... ${1:Number of components} ${2:Tolerance of minimizer} ${3:Maximum number of iterations} ${4:Stability coefficient lambda} ${5:Covariance matrices are} ${6:Criterion based on}"
            },
            "TableOfReal: To PCA": {
                name: "To PCA",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "To PCA"
            },
            "TableOfReal: To PatternList and Categories...": {
                name: "To PatternList and Categories...",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "To PatternList and Categories..."
            },
            "TableOfReal: To SSCP...": {
                name: "To SSCP...",
                class: ["TableOfReal"],
                arguments: {},
                argCount: 0,
                preSnippet: "To SSCP..."
            },
            "TableOfReal: To TableOfReal (means by row labels)...": {
                name: "To TableOfReal (means by row labels)...",
                class: ["TableOfReal"],
                arguments: {
                    0: "Multivariate statistics",
                    1: "Expand"
                },
                argCount: 2,
                preSnippet: "To TableOfReal (means by row labels)... ${1:Multivariate statistics} ${2:Expand}"
            }
        },
        methodCount: 30,
        methods: {
            0: "Permute rows",
            1: "Centre columns",
            2: "Centre rows",
            3: "Change column labels...",
            4: "Change row labels...",
            5: "Draw as scalable squares...",
            6: "Draw biplot...",
            7: "Draw box plots...",
            8: "Draw rows as histogram...",
            9: "Get table norm",
            10: "Normalize columns...",
            11: "Normalize rows...",
            12: "Normalize table...",
            13: "Report multivariate normality (BHEP)...",
            14: "Select columns where row...",
            15: "Set value...",
            16: "Standardize columns",
            17: "To CCA...",
            18: "To Configuration (lda)...",
            19: "To Configuration (pca)...",
            20: "To Correlation",
            21: "To Correlation (rank)",
            22: "To Covariance",
            23: "To Discriminant",
            24: "To GaussianMixture (row labels)...",
            25: "To GaussianMixture...",
            26: "To PCA",
            27: "To PatternList and Categories...",
            28: "To SSCP...",
            29: "To TableOfReal (means by row labels)...",
        }
    },
    "TextGrid": {
        praatMethods: {
            "TextGrid & DurationTier: To TextGrid (scale times)": {
                name: "To TextGrid (scale times)",
                class: ["TextGrid", "DurationTier"],
                arguments: {},
                argCount: 0,
                preSnippet: "To TextGrid (scale times)"
            },
            "TextGrid file formats": {
                name: "",
                class: ["TextGrid file formats"],
                arguments: {
                    0: "To TextGrid...",
                    1: "New",
                    2: "Convert to Unicode"
                },
                argCount: 3,
                preSnippet: " ${1:To TextGrid...} ${2:New} ${3:Convert to Unicode}"
            },
            "TextGrid: Count labels...": {
                name: "Count labels...",
                class: ["TextGrid"],
                arguments: {
                    0: "Tier number",
                    1: "Label text"
                },
                argCount: 2,
                preSnippet: "Count labels... ${1:Tier number} ${2:Label text}"
            },
            "TextGrid: Extend time...": {
                name: "Extend time...",
                class: ["TextGrid"],
                arguments: {
                    0: "Extend domain by",
                    1: "At"
                },
                argCount: 2,
                preSnippet: "Extend time... ${1:Extend domain by} ${2:At}"
            },
            "TextGrid: To DurationTier...": {
                name: "To DurationTier...",
                class: ["TextGrid"],
                arguments: {
                    0: "Tier number",
                    1: "Time scale factor",
                    2: "Left transition duration",
                    3: "Right transition duration",
                    4: "Scale intervals whose labels",
                    5: "...the text"
                },
                argCount: 6,
                preSnippet: "To DurationTier... ${1:Tier number} ${2:Time scale factor} ${3:Left transition duration} ${4:Right transition duration} ${5:Scale intervals whose labels} ${6:...the text}"
            },
            "TextGrid: To TextGridNavigator...": {
                name: "To TextGridNavigator...",
                class: ["TextGrid"],
                arguments: {
                    0: "Tier number",
                    1: "Match domain",
                    2: "Topic start to Topic end"
                },
                argCount: 3,
                preSnippet: "To TextGridNavigator... ${1:Tier number} ${2:Match domain} ${3:Topic start to Topic end}"
            },
            "TextGridEditor": {
                name: "",
                class: ["TextGridEditor"],
                arguments: {
                    0: "View &amp; Edit",
                    1: "Sound",
                    2: "Add interval tier",
                    3: "boundary",
                    4: "point",
                    5: "tier",
                    6: "Extract sound selection",
                    7: "Save TextGrid as text file...",
                    8: "Find",
                    9: "View &amp; Edit"
                },
                argCount: 10,
                preSnippet: " ${1:View &amp; Edit} ${2:Sound} ${3:Add interval tier} ${4:boundary} ${5:point} ${6:tier} ${7:Extract sound selection} ${8:Save TextGrid as text file...} ${9:Find} ${10:View &amp; Edit}"
            },
            "TextGridNavigator": {
                name: "",
                class: ["TextGridNavigator"],
                arguments: {
                    0: "TextGridNavigator",
                    1: "NavigationContext",
                    2: "Find first",
                    3: "Before or After, not both",
                    4: "Example 2"
                },
                argCount: 5,
                preSnippet: " ${1:TextGridNavigator} ${2:NavigationContext} ${3:Find first} ${4:Before or After, not both} ${5:Example 2}"
            },
            "TextGridNavigator & TextGrid: Add search tier...": {
                name: "Add search tier...",
                class: ["TextGridNavigator", "TextGrid"],
                arguments: {
                    0: "Tier number",
                    1: "Match domain",
                    2: "Topic start to Topic end",
                    3: "Match domain alignment",
                    4: "overlaps before and after"
                },
                argCount: 5,
                preSnippet: "Add search tier... ${1:Tier number} ${2:Match domain} ${3:Topic start to Topic end} ${4:Match domain alignment} ${5:overlaps before and after}"
            },
            "TextGridNavigator & TextGrid: Replace search tiers": {
                name: "Replace search tiers",
                class: ["TextGridNavigator", "TextGrid"],
                arguments: {},
                argCount: 0,
                preSnippet: "Replace search tiers"
            },
            "TextGrids: Merge": {
                name: "Merge",
                class: ["TextGrids"],
                arguments: {},
                argCount: 0,
                preSnippet: "Merge"
            }
        },
        methodCount: 11,
        methods: {
            0: "To TextGrid (scale times)",
            1: "",
            2: "Count labels...",
            3: "Extend time...",
            4: "To DurationTier...",
            5: "To TextGridNavigator...",
            6: "",
            7: "",
            8: "Add search tier...",
            9: "Replace search tiers",
            10: "Merge",
        }
    },
    "VocalTract": {
        praatMethods: {
            "VocalTract: Formula...": {
                name: "Formula...",
                class: ["VocalTract"],
                arguments: {},
                argCount: 0,
                preSnippet: "Formula..."
            },
            "VocalTractTier": {
                name: "",
                class: ["VocalTractTier"],
                arguments: {},
                argCount: 0,
                preSnippet: ""
            }
        },
        methodCount: 2,
        methods: {
            0: "Formula...",
            1: "",
        }
    },
    "WordList": {
        praatMethods: {},
        methodCount: 0,
        methods: {}
    }
};