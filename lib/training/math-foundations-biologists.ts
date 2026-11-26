/**
 * Mathematical Foundations for Biologists.
 *
 * Twelve-week practical course in three blocks: probability (Weeks 2–4),
 * statistics (Weeks 1 and 5–8) and linear algebra (Weeks 9–11), closing with
 * a capstone that uses all three on a gene expression dataset. Every idea is
 * taught through a biological example and checked by simulation in R or Python.
 */

import type { Course, Reading } from './courses'

const r = (title: string, href: string): Reading => ({ title, href })

export const mathFoundationsBiologists: Course = {
  slug: 'mathematical-foundations-for-biologists',
  title: 'Mathematical Foundations for Biologists',
  level: 'Beginner',
  audience: 'Biologists, medical and life sciences students, and researchers moving into computational work.',
  format: 'Twelve weekly sessions of about 2 hours: a short lecture followed by a hands-on problem lab in R or Python.',
  weeks: 12,
  summary:
    'The statistics, probability and linear algebra behind modern biology, taught through biological data and checked by simulation rather than proof.',
  overview: [
    'Most of computational biology rests on three pieces of mathematics. Probability describes variation in biological systems, from mutations and read counts to diagnostic tests. Statistics turns noisy measurements into conclusions with honest uncertainty. Linear algebra is the language of data matrices, regression, PCA and the machine learning models built on them. Many biologists use these ideas every day through software without having been taught them, which makes results hard to check and easy to misread.',
    'This course rebuilds that foundation for biologists. Each week starts from a biological question, introduces only the mathematics needed to answer it, and then checks the idea by simulating it in R or Python before applying it to real data. The course moves from describing data, through probability and statistical inference, to vectors, matrices and dimensionality reduction, and ends with a capstone that brings all three together on a gene expression dataset.',
  ],
  prerequisites:
    'School-level algebra. Basic R or Python is helpful but not required: a setup and refresher notebook is provided before Week 1. No prior calculus, statistics or linear algebra is assumed.',
  tools: ['R', 'Python', 'Jupyter', 'tidyverse', 'NumPy', 'SciPy', 'statsmodels'],
  teachingMethod: {
    lead: 'Every topic in the course is taught in the same four steps.',
    steps: [
      { label: 'Concept', icon: 'concept', text: 'Make the idea make sense, with pictures and a biological example before any formula.' },
      { label: 'Code', icon: 'code', text: 'Watch the instructor apply it to real data in R or Python, then simulate it yourself.' },
      { label: 'Interpret', icon: 'interpret', text: 'Understand what the results actually mean, and what they do not.' },
      { label: 'Take it forward', icon: 'forward', text: 'Know when and how to use the method yourself, on your own data.' },
    ],
  },
  team: [{ role: 'Lead instructor', name: 'Md. Jubayer Hossain' }],
  objectives: [
    'Describe and visualise biological data with appropriate summaries, and recognise when a summary misleads.',
    'Reason with probability, conditional probability and Bayes’ theorem, for example to interpret a diagnostic test.',
    'Choose and use common distributions (binomial, Poisson, normal, negative binomial) to model biological variation.',
    'Use simulation to check mathematical results, including the central limit theorem and the behaviour of p-values.',
    'Estimate quantities with confidence intervals and the bootstrap, and test hypotheses with appropriate methods.',
    'Control false discoveries when testing thousands of genes at once.',
    'Fit and interpret linear models, and write them in matrix form.',
    'Work with vectors, matrices, eigenvalues and the SVD, and apply PCA to high-dimensional biological data.',
  ],
  syllabus: [
    {
      title: 'Data, Variation and Descriptive Statistics',
      theme: 'Statistics: describing what you measured before asking what it means',
      topics: [
        'Types of biological data: counts, measurements, categories and ranks',
        'Centre and spread: mean, median, variance, standard deviation, quantiles',
        'Visualising distributions: histograms, box plots, density and scatter plots',
        'Biological vs technical variation, and replicates',
        'Log transforms and why skewed biological data need them',
      ],
      lab: 'Set up R or Python, then explore the Palmer Penguins data: summarise and plot each measurement, compare species, and show a case where the mean misleads.',
      readings: [
        r('OpenIntro Statistics, Chapter 2: Summarizing data', 'https://www.openintro.org/book/os/'),
        r('palmerpenguins: Palmer Archipelago penguin data', 'https://allisonhorst.github.io/palmerpenguins/'),
        r('Points of significance: Importance of being uncertain (Nature Methods, 2013)', 'https://doi.org/10.1038/nmeth.2613'),
      ],
      questions: [
        'When would you report a median instead of a mean for a biological measurement?',
        'How would you tell biological from technical variation in your own experiments?',
      ],
    },
    {
      title: 'Probability and Bayes’ Theorem',
      theme: 'Probability: the rules for reasoning about chance',
      topics: [
        'Sample spaces, events and the rules of probability',
        'Independence and conditional probability',
        'Bayes’ theorem: sensitivity, specificity, prevalence and predictive value',
        'Mendelian inheritance and pedigrees as probability problems',
      ],
      lab: 'Simulate a diagnostic test in a population with low disease prevalence, compare the simulated positive predictive value with the Bayes’ theorem result, and work through a Mendelian cross by simulation.',
      readings: [
        r('Seeing Theory: Basic Probability and Compound Probability', 'https://seeing-theory.brown.edu/'),
        r('Points of significance: Bayes’ theorem (Nature Methods, 2015)', 'https://doi.org/10.1038/nmeth.3335'),
        r('Probability, Statistics and Random Processes, Chapter 1 (Pishro-Nik)', 'https://www.probabilitycourse.com/'),
      ],
      questions: [
        'A test is 99% sensitive and 99% specific. Why can most of its positive results still be wrong?',
        'Which events in a genetics experiment are independent, and which only look independent?',
      ],
    },
    {
      title: 'Random Variables and Distributions',
      theme: 'Probability: models for counts, measurements and waiting times',
      topics: [
        'Discrete and continuous random variables, expectation and variance',
        'Binomial: alleles, genotypes and Hardy–Weinberg proportions',
        'Poisson: mutations and sequencing read counts',
        'Normal and log-normal: measurements and expression levels',
        'Overdispersion and the negative binomial for RNA-seq counts',
      ],
      lab: 'Fit binomial, Poisson and negative binomial models to RNA-seq counts across replicates, compare mean and variance, and decide which model the data support.',
      readings: [
        r('Modern Statistics for Modern Biology, Chapter 1: Generative models for discrete data', 'https://www.huber.embl.de/msmb/'),
        r('Seeing Theory: Probability Distributions', 'https://seeing-theory.brown.edu/'),
      ],
      questions: [
        'Why does the variance of RNA-seq counts grow faster than the mean, and what does that mean for the model?',
        'Which distribution would you choose for colony counts on a plate, and why?',
      ],
    },
    {
      title: 'Sampling, Simulation and the Central Limit Theorem',
      theme: 'Probability to statistics: what a sample can tell you about a population',
      topics: [
        'Populations, samples and sampling distributions',
        'Law of large numbers and the central limit theorem, shown by simulation',
        'Standard error vs standard deviation',
        'Monte Carlo simulation as a way to check any calculation',
      ],
      lab: 'Draw repeated samples from skewed biological distributions, watch the sampling distribution of the mean become normal, and see how sample size changes the standard error.',
      readings: [
        r('Seeing Theory: Frequentist Inference (central limit theorem)', 'https://seeing-theory.brown.edu/'),
        r('OpenIntro Statistics, Chapter 5: Foundations for inference', 'https://www.openintro.org/book/os/'),
      ],
      questions: [
        'Should an error bar show the standard deviation or the standard error? When does it matter?',
        'How many replicates would you need for the sample mean to be useful in your system?',
      ],
    },
    {
      title: 'Estimation, Confidence Intervals and the Bootstrap',
      theme: 'Statistics: estimating a quantity and stating how sure you are',
      topics: [
        'Point estimates and maximum likelihood, by example',
        'Confidence intervals and what 95% does and does not mean',
        'The bootstrap: confidence intervals by resampling',
        'Bayesian estimation in brief: priors, posteriors and credible intervals',
      ],
      lab: 'Estimate a mutation rate and a mean expression level with confidence intervals, compare the formula-based and bootstrap intervals, and simulate interval coverage.',
      readings: [
        r('Modern Statistics for Modern Biology, Chapter 2: Statistical modeling', 'https://www.huber.embl.de/msmb/'),
        r('An Introduction to Statistical Learning, Section 5.2: The bootstrap', 'https://www.statlearning.com/'),
      ],
      questions: [
        'What is wrong with saying “there is a 95% chance the true value is in this interval”?',
        'When would the bootstrap give a misleading interval?',
      ],
    },
    {
      title: 'Hypothesis Testing',
      theme: 'Statistics: testing an effect, and what a p-value really says',
      topics: [
        'Null and alternative hypotheses, test statistics and p-values',
        't-tests (one-sample, two-sample, paired) and their assumptions',
        'Non-parametric and permutation tests',
        'Type I and II errors, effect size and statistical power',
        'Why p-values vary between replications',
      ],
      lab: 'Compare treated and control samples with a t-test, a Wilcoxon test and a permutation test, then simulate p-values under the null and alternative to estimate power for your planned sample size.',
      readings: [
        r('The ASA statement on p-values: context, process, and purpose (2016)', 'https://doi.org/10.1080/00031305.2016.1154108'),
        r('The fickle P value generates irreproducible results (Nature Methods, 2015)', 'https://doi.org/10.1038/nmeth.3288'),
        r('OpenIntro Statistics, Chapter 7: Inference for numerical data', 'https://www.openintro.org/book/os/'),
      ],
      questions: [
        'Your experiment gives p = 0.04. What can and can you not conclude?',
        'How would you decide the number of replicates before you run an experiment?',
      ],
    },
    {
      title: 'Categorical Data and Multiple Testing',
      theme: 'Statistics: testing thousands of genes without fooling yourself',
      topics: [
        'Contingency tables, chi-square and Fisher’s exact test',
        'Enrichment analysis as a 2×2 table',
        'The multiple testing problem, shown by simulation',
        'Family-wise error (Bonferroni) and false discovery rate (Benjamini–Hochberg)',
      ],
      lab: 'Run t-tests on simulated genes where only a few truly change, count false positives with and without correction, then test a gene set for enrichment with Fisher’s exact test.',
      readings: [
        r('Controlling the false discovery rate (Benjamini and Hochberg, 1995)', 'https://doi.org/10.1111/j.2517-6161.1995.tb02031.x'),
        r('Modern Statistics for Modern Biology, Chapter 6: Testing', 'https://www.huber.embl.de/msmb/'),
      ],
      questions: [
        'If you test 20,000 genes at p < 0.05 and none truly change, how many “hits” do you expect?',
        'When is FDR control the right choice, and when do you need Bonferroni?',
      ],
      assignment: 'Mid-course quiz on probability and inference (Weeks 1–7).',
    },
    {
      title: 'Correlation and Linear Models',
      theme: 'Statistics: modelling how one quantity depends on others',
      topics: [
        'Covariance, correlation and why correlation is not causation',
        'Simple linear regression: fitting, residuals and R²',
        'Multiple regression, categorical predictors and interactions',
        'ANOVA as a linear model, and checking model assumptions',
        'Generalised linear models in brief: logistic and Poisson regression',
      ],
      lab: 'Model penguin body mass from flipper length, species and sex; check residuals; then fit a logistic regression for a binary outcome and interpret the coefficients.',
      readings: [
        r('Points of significance: Simple linear regression (Nature Methods, 2015)', 'https://doi.org/10.1038/nmeth.3627'),
        r('An Introduction to Statistical Learning, Chapter 3: Linear regression', 'https://www.statlearning.com/'),
      ],
      questions: [
        'What does a regression coefficient mean when other predictors are in the model?',
        'What would a residual plot look like if your model was wrong?',
      ],
    },
    {
      title: 'Vectors and Matrices',
      theme: 'Linear algebra: biological data as vectors and matrices',
      topics: [
        'A gene expression table as a matrix: samples as vectors, genes as dimensions',
        'Vector operations, length, dot products and angles',
        'Distances and similarity: Euclidean, cosine and correlation',
        'Matrix operations: addition, transpose and multiplication',
        'Scaling and centring data as matrix operations',
      ],
      lab: 'Load an expression matrix in NumPy or R, centre and scale it with matrix operations, compute sample-to-sample distances, and cluster samples from the distance matrix.',
      readings: [
        r('Essence of linear algebra, Chapters 1–4 (3Blue1Brown)', 'https://www.3blue1brown.com/topics/linear-algebra'),
        r('Mathematics for Machine Learning, Chapter 2: Linear algebra', 'https://mml-book.github.io/'),
      ],
      questions: [
        'Why does the choice of distance change which samples cluster together?',
        'What does multiplying a data matrix by a vector of weights do, in biological terms?',
      ],
    },
    {
      title: 'Linear Systems and Least Squares',
      theme: 'Linear algebra: solving equations and fitting models with matrices',
      topics: [
        'Systems of linear equations as Ax = b',
        'Inverses, rank and when a system has no unique solution',
        'Least squares and the normal equations: regression in matrix form',
        'Design matrices for experiments, and confounded designs',
        'Linear algebra in metabolic flux balance (stoichiometric matrices)',
      ],
      lab: 'Refit Week 8’s regression by solving the normal equations by hand in code, build design matrices for a two-factor experiment, and detect a confounded design from its rank.',
      readings: [
        r('MIT 18.06 Linear Algebra (Gilbert Strang), Lectures 1–3 and 15–16', 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/'),
        r('Essence of linear algebra, Chapters 5–7 (3Blue1Brown)', 'https://www.3blue1brown.com/topics/linear-algebra'),
      ],
      questions: [
        'Why can’t you separate a batch effect from a treatment effect when every treated sample was run in the same batch?',
        'What does it mean when a design matrix is not full rank?',
      ],
    },
    {
      title: 'Eigenvalues, SVD and PCA',
      theme: 'Linear algebra: finding the main directions of variation in high-dimensional data',
      topics: [
        'Eigenvectors and eigenvalues as directions a matrix stretches',
        'Markov chains: transition matrices and steady states',
        'Covariance matrices and principal component analysis',
        'Singular value decomposition and its link to PCA',
        'Reading PCA plots: variance explained, loadings and batch effects',
      ],
      lab: 'Implement PCA from the covariance matrix and from the SVD, check they agree, apply it to a gene expression dataset, and identify which genes drive the first components.',
      readings: [
        r('What is principal component analysis? (Nature Biotechnology, 2008)', 'https://doi.org/10.1038/nbt0308-303'),
        r('Points of significance: Principal component analysis (Nature Methods, 2017)', 'https://doi.org/10.1038/nmeth.4346'),
        r('Singular value decomposition for genome-wide expression data processing and modeling (PNAS, 2000)', 'https://doi.org/10.1073/pnas.97.18.10101'),
      ],
      questions: [
        'The first principal component separates your samples by sequencing date. What do you do next?',
        'How many components would you keep, and how would you justify it?',
      ],
    },
    {
      title: 'Capstone: Putting It Together',
      theme: 'Probability, statistics and linear algebra in one analysis',
      topics: [
        'From raw counts to conclusions: normalisation, models and tests',
        'Exploring structure with PCA, then testing differences gene by gene',
        'Reporting uncertainty, multiple testing and limitations',
        'Where this mathematics leads next: machine learning and Bayesian modelling',
      ],
      lab: 'Capstone workshop: analyse a public gene expression dataset end to end with support, combining PCA, a linear model for differential expression and FDR control.',
      readings: [
        r('Moderated estimation of fold change and dispersion for RNA-seq data with DESeq2 (Genome Biology, 2014)', 'https://doi.org/10.1186/s13059-014-0550-8'),
        r('Modern Statistics for Modern Biology, Chapter 8: High-throughput count data', 'https://www.huber.embl.de/msmb/'),
      ],
      questions: [
        'Which of the distributions, tests and matrix methods from this course does DESeq2 use, and where?',
        'What would you tell a colleague who only reports genes with p < 0.05?',
      ],
      assignment: 'Capstone project: a reproducible analysis of a gene expression dataset with a short report, due one week after Week 12.',
    },
  ],
  competencies: [
    { code: 'A3', how: 'Building working depth in the probability, statistics and linear algebra that computational biology relies on.' },
    { code: 'D3', how: 'Choosing models, tests and dimensionality reduction suited to the size and structure of biological data.' },
    { code: 'B3', how: 'Transforming, centring and scaling data, and arranging it as matrices for analysis.' },
    { code: 'H3', how: 'Simulating and implementing each method in R or Python instead of treating software as a black box.' },
    { code: 'K3', how: 'Reporting estimates with honest uncertainty, and explaining p-values, FDR and PCA plots to biologists.' },
    { code: 'M3', how: 'Preparing learners for machine learning, Bayesian modelling and other advanced courses.' },
  ],
  assessment: [
    { item: 'Weekly problem sets', weight: 35, description: 'Short sets of pen-and-paper problems and simulation exercises from Weeks 1–11, submitted as notebooks.', due: 'Weekly' },
    { item: 'Mid-course quiz', weight: 15, description: 'Probability and inference, covering Weeks 1–7.', due: 'Week 7' },
    { item: 'Capstone project', weight: 35, description: 'A reproducible analysis of a gene expression dataset using PCA, a linear model and FDR control, with a short report.', due: 'One week after Week 12' },
    { item: 'Oral check', weight: 15, description: 'A 15-minute conversation in which you explain the reasoning behind your capstone analysis.', due: 'After the capstone' },
  ],
  assessmentNote:
    'Problem sets are marked for reasoning as well as answers: a wrong number with clear reasoning earns more than a right number with none.',
  aiPolicyExtra: [
    'In this course the goal is that you can do the mathematics yourself. Use AI to explain a concept or check your working after you have tried a problem, not to solve it for you. The mid-course quiz and the oral check are done without AI.',
  ],
  resources: [
    { label: 'OpenIntro Statistics (free textbook)', href: 'https://www.openintro.org/book/os/' },
    { label: 'Modern Statistics for Modern Biology (Holmes and Huber, free online)', href: 'https://www.huber.embl.de/msmb/' },
    { label: 'Seeing Theory: visual introduction to probability and statistics', href: 'https://seeing-theory.brown.edu/' },
    { label: 'Probability, Statistics and Random Processes (Pishro-Nik, free online)', href: 'https://www.probabilitycourse.com/' },
    { label: 'Essence of linear algebra (3Blue1Brown)', href: 'https://www.3blue1brown.com/topics/linear-algebra' },
    { label: 'MIT 18.06 Linear Algebra (Gilbert Strang)', href: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/' },
    { label: 'Mathematics for Machine Learning (free book)', href: 'https://mml-book.github.io/' },
    { label: 'An Introduction to Statistical Learning (free book)', href: 'https://www.statlearning.com/' },
  ],
}
