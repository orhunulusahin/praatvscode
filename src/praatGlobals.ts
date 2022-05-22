export interface IEntry { description?: string; signature?: string }
export interface IEntries { [name: string]: IEntry }

export const globalvariables: IEntries = {
};
export const compiletimeconstants: IEntries = {
};
export const keywords: IEntries = {
	procedure: {
		description: 'Defines a custom function.',
		signature: '( string $name (), mixed $value ): mixed'
	},
	exit: {
		description: 'Terminates execution of the script and displays a message.',
		signature: '( string $message ): string'
	},
	while: {
	},
	for: {
	},
	until: {
	},
	repeat: {
	},
	LongSound: {
		description: 'A LongSound object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Sound: {
		description: 'A Sound object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Text: {
		description: 'A Text object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	TextGrid: {
		description: 'A TextGrid object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	TextGridTier: {
		description: 'A TextGridTier object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Formant: {
		description: 'A Formant object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	FormantGrid: {
		description: 'A FormantGrid object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Strings: {
		description: 'A Strings object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	all: {
		description: 'A all object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Intensity: {
		description: 'A Intensity object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	IntensityTier: {
		description: 'A IntensityTier object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Pitch: {
		description: 'A Pitch object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	PitchTier: {
		description: 'A PitchTier object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	PointProcess: {
		description: 'A PointProcess object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Table: {
		description: 'A Table object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	TableOfReal: {
		description: 'A TableOfReal object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Matrix: {
		description: 'A Matrix object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Polygon: {
		description: 'A Polygon object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Distributions: {
		description: 'A Distributions object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	PairDistribution: {
		description: 'A PairDistribution object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Permutation: {
		description: 'A Permutation object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	ParamCurve: {
		description: 'A ParamCurve object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Harmonicity: {
		description: 'A Harmonicity object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Electroglottogram: {
		description: 'A Electroglottogram object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Spectrum: {
		description: 'A Spectrum object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Ltas: {
		description: 'A Ltas object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	LPC: {
		description: 'A LPC object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Cepstrum: {
		description: 'A Cepstrum object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Excitation: {
		description: 'A Excitation object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Excitations: {
		description: 'A Excitations object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Cochleagram: {
		description: 'A Cochleagram object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Manipulation: {
		description: 'A Manipulation object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Duration: {
		description: 'A Duration object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	DurationTier: {
		description: 'A DurationTier object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Speaker: {
		description: 'A Speaker object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Articulation: {
		description: 'A Articulation object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	VocalTract: {
		description: 'A VocalTract object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	FFNet: {
		description: 'A FFNet object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	PatternList: {
		description: 'A PatternList object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Categories: {
		description: 'A Categories object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Eigen: {
		description: 'A Eigen object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Polynomial: {
		description: 'A Polynomial object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Roots: {
		description: 'A Roots object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	ChebyshevSeries: {
		description: 'A ChebyshevSeries object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	LegendreSeries: {
		description: 'A LegendreSeries object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Spline: {
		description: 'A Spline object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Covariance: {
		description: 'A Covariance object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Confusion: {
		description: 'A Confusion object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Discriminant: {
		description: 'A Discriminant object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	ExperimentMFC: {
		description: 'A ExperimentMFC object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	PCA: {
		description: 'A PCA object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Correlation: {
		description: 'A Correlation object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	ClassificationTable: {
		description: 'A ClassificationTable object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	SSCP: {
		description: 'A SSCP object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	DTW: {
		description: 'A DTW object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Configuration: {
		description: 'A Configuration object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Dissimilarity: {
		description: 'A Dissimilarity object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Similarity: {
		description: 'A Similarity object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	Distance: {
		description: 'A Distance object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	ScalarProduct: {
		description: 'A ScalarProduct object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	ContingencyTable: {
		description: 'A ContingencyTable object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	OTGrammar: {
		description: 'A OTGrammar object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	WordList: {
		description: 'A WordList object in Praat.',
		signature: ' ( string object_name ):  object'
	},
	SpellingChecker: {
		description: 'A SpellingChecker object in Praat.',
		signature: ' ( string object_name ):  object'
	}	
};