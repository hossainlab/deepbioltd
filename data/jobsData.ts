
import { Job } from '../types.ts';

export const allJobs: Job[] = [
    {
        id: 'bioinfo-scientist-01',
        title: 'Senior Bioinformatics Scientist',
        location: 'Shirley, NY',
        department: 'Research & Development',
        type: 'Full-time',
        summary: 'We are seeking a highly motivated Senior Bioinformatics Scientist to lead complex data analysis projects and contribute to our innovative research pipeline.',
        responsibilities: [
            'Lead the design and execution of bioinformatics analyses for genomics, transcriptomics, and multi-omics datasets.',
            'Develop and implement novel computational methods and pipelines for data analysis.',
            'Collaborate with wet-lab scientists to interpret experimental results and guide future research.',
            'Mentor junior scientists and contribute to the team\'s scientific growth.',
            'Prepare high-quality manuscripts, reports, and presentations for internal and external audiences.'
        ],
        qualifications: [
            'PhD in Bioinformatics, Computational Biology, or a related field.',
            '5+ years of experience in bioinformatics research (post-PhD).',
            'Strong proficiency in Python or R, and experience with shell scripting in a Linux environment.',
            'Demonstrated experience with NGS data analysis (WGS, WES, RNA-seq, scRNA-seq).',
            'A strong publication record in reputable peer-reviewed journals.'
        ],
        preferredQualifications: [
            'Experience with cloud computing environments (AWS, GCP).',
            'Familiarity with workflow management systems like Nextflow or Snakemake.',
            'Experience in machine learning applications for biological data.'
        ],
        whatWeOffer: [
            'Competitive salary and performance-based bonuses.',
            'Comprehensive health, dental, and vision insurance.',
            'Generous paid time off and flexible working hours.',
            'Opportunities for professional development and conference attendance.',
            'A collaborative and innovative work environment.'
        ]
    },
    {
        id: 'ml-engineer-01',
        title: 'AI/ML Engineer, Drug Discovery',
        location: 'Remote',
        department: 'AI & Machine Learning',
        type: 'Full-time',
        summary: 'Join our AI team to build and deploy machine learning models that accelerate the drug discovery process, from target identification to lead optimization.',
        responsibilities: [
            'Design, train, and validate machine learning models for applications in cheminformatics and structural biology.',
            'Work with large-scale biological datasets to extract features and build predictive models.',
            'Deploy models into production pipelines and maintain their performance.',
            'Stay up-to-date with the latest advancements in AI/ML for life sciences.',
            'Collaborate with bioinformaticians and chemists to integrate AI-driven insights.'
        ],
        qualifications: [
            'MS or PhD in Computer Science, AI, or a related quantitative field.',
            '3+ years of hands-on experience building and deploying machine learning models.',
            'Proficiency in Python and deep learning frameworks such as PyTorch or TensorFlow.',
            'Solid understanding of machine learning theory, including deep learning, reinforcement learning, and classical ML algorithms.',
            'Experience working with large datasets.'
        ],
        preferredQualifications: [
            'Experience in drug discovery, cheminformatics (e.g., RDKit), or computational biology.',
            'Familiarity with MLOps principles and tools (e.g., Docker, Kubeflow).',
            'Contributions to open-source projects.'
        ],
        whatWeOffer: [
            'A chance to work on cutting-edge AI problems with real-world impact.',
            'Flexible remote work policy.',
            'Competitive compensation package including equity.',
            'A dynamic and intellectually stimulating environment.'
        ]
    },
    {
        id: 'bioinformatics-intern-01',
        title: 'Bioinformatics Research Intern',
        location: 'Shirley, NY',
        department: 'Research & Development',
        type: 'Internship',
        summary: 'An exciting opportunity for a current student to gain hands-on experience in a fast-paced bioinformatics research environment.',
        responsibilities: [
            'Assist senior scientists with data analysis tasks for ongoing research projects.',
            'Run and maintain established bioinformatics pipelines.',
            'Perform literature reviews and summarize findings.',
            'Contribute to the preparation of reports and presentations.'
        ],
        qualifications: [
            'Currently enrolled in a Bachelor\'s, Master\'s, or PhD program in Bioinformatics, Biology, Computer Science, or a related field.',
            'Basic understanding of molecular biology and genomics.',
            'Some experience with a programming language, preferably Python or R.',
            'Eagerness to learn and a strong sense of curiosity.'
        ],
        preferredQualifications: [
            'Experience with command-line tools.',
            'Previous research experience is a plus.'
        ],
        whatWeOffer: [
            'Paid internship with flexible hours.',
            'Direct mentorship from experienced scientists.',
            'Hands-on experience with real-world research projects.',
            'Opportunity to build a professional network.'
        ]
    }
];